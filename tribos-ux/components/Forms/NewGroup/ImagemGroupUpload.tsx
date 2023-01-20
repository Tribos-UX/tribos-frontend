import Button from '@mui/material/Button'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React, { useEffect, useState } from 'react'

export default function ImagemGroupUpload({ groupname, url, onUpload }) {
  const supabase = useSupabaseClient()
  const [avatarUrl, setAvatarUrl] = useState(null)
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('imagegroups')
        .download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error)
    }
  }

  const uploadAvatar = async (event) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${groupname}.${fileExt}`
      const filePath = `${fileName}`

      let { error: uploadError } = await supabase.storage
        .from('imagegroups')
        .upload(filePath, file, { upsert: true })

      if (uploadError) {
        throw uploadError
      }

      onUpload(filePath)
    } catch (error) {
      alert(`Error uploading group image! ${error.message}`)
      console.log(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <>
      <label htmlFor="single">Insira uma foto de capa</label>
      <Button
        sx={{
          width: '297px',
          textTransform: 'none',
          borderColor: '#344054',
          fontWeight: '700',
          fontFamily: 'Montserrat',
          borderRadius: '1rem',
          color: '#344054',
          fontSize: '1.125rem',
          backgroundColor: '#fbfbfc',
          marginTop: '0',

          '&:hover': {
            color: '#fbfbfc',
            backgroundColor: '#d87036',
          },
        }}
        variant="outlined"
        component="label"
      >
        Inserir
        <input
          hidden
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </Button>
    </>
  )
}
