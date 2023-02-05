import { CloseIcon, MenuHamburguerIcon } from '@/components/common/Icons'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu/Menu'
import MenuItem from '@mui/material/MenuItem/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import logoTribos from '../../../public/UXTRIBOSLOGO1.png'
import styles from './ButtonAppBar.module.scss'

const pages = ['Dashboard', 'Grupos', 'Seu Perfil', 'FAQ']

export default function ButtonAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.container}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'transparent',
          boxShadow: '0px 0px',
        }}
      >
        <Toolbar>
          <Link className={styles.link} href="/">
            <Image
              src={logoTribos}
              width={139}
              height={22}
              alt="Logo do UXTribos"
            />
          </Link>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{
              marginLeft: 'auto',
              alignItems: 'center',
              display: { xs: 'flex', md: 'none' },
              backgroundColor: '#FFFFFF',
            }}
          >
            {anchorElNav ? <CloseIcon /> : <MenuHamburguerIcon />}
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              '& .MuiPaper-root': {
                borderRadius: '16px',
                borderWidth: '1px',
                border: '1px solid #D87036',
                boxShadow: 'none',
                '& .MuiMenu-list': {
                  padding: '0',
                },
              },
              minWidth: '335px',
              top: '0.5rem',
              boxShadow: 'none',
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem
                sx={{
                  minWidth: '335px',
                  backgroundColor: '#D87036',
                  boxShadow: 'none',
                }}
                key={page}
                onClick={handleCloseNavMenu}
              >
                <Typography
                  sx={{
                    marginX: 'auto',
                    width: '100%',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#FBFBFC',
                    padding: '0.5rem 0',
                  }}
                  textAlign="center"
                >
                  <Link
                    className={styles.link}
                    href={`/dashboard/${page
                      .toLocaleLowerCase()
                      .replace(' ', '')}`}
                  >
                    {page}
                  </Link>
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
