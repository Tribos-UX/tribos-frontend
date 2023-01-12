import { CloseIcon, MenuHamburguerIcon } from '@/components/common/Icons'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

// Logo
import logoTribos from '../../../public/UXTRIBOSLOGO1.png'

const pages = ['Sobre', 'Parceiros', 'Contato']
const settings = ['Entrar', 'Cadastre-se']

export default function ResponsiveAppBar() {
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
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#f2f2f2',
        border: '1px solid #E0E2E5',
        borderRadius: '0px 0px 1.5rem 1.5rem',
        boxShadow: 'none',
      }}
    >
      <Container sx={{ maxHeight: '100px' }} maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Image
              src={logoTribos}
              width={139}
              height={22}
              alt="Logo do UXTribos"
            />
          </Link>

          <Box
            sx={{
              marginLeft: 'auto',
              alignItems: 'center',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                minWidth: '335px',
                top: '0.5rem',
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  sx={{ minWidth: '335px', backgroundColor: '#D87036' }}
                  key={page}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    sx={{ marginX: 'auto', width: '100%' }}
                    textAlign="center"
                  >
                    <Link
                      href={`/${page.toLocaleLowerCase().replace('-', '')}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
              {settings.map((page, index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link
                    key={index}
                    href={`/${page.toLocaleLowerCase().replace('-', '')}`}
                  >
                    <Button
                      variant="outlined"
                      onClick={handleCloseNavMenu}
                      sx={{
                        width: '300px',
                        height: '3.125rem',
                        lineHeight: '0px',
                        borderRadius: '1rem',
                        paddingTop: '1rem',
                        paddingX: '2rem',
                        paddingBottom: '0.75rem',
                        border: '1px solid #344054',
                        textTransform: 'none',
                        my: '2rem',
                        fontWeight: '700',
                        color: '#344054',
                        display: 'block',
                        fontSize: '1.125rem',
                        '&: hover': {
                          borderColor: '#344054',
                          color: '#FBFBFC',
                          backgroundColor: '#D87036',
                        },
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
              maxHeight: '100px',
              gap: '5rem',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
                gap: '80px',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page, index) => (
                <Link key={index} href={`/${page.toLowerCase()}`}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      textTransform: 'none',
                      my: '2rem',
                      fontWeight: '700',
                      color: '#344054',
                      display: 'block',
                      fontSize: '1.125rem',
                      '&: hover': {
                        color: '#D87036',
                      },
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                gap: '3rem',
                justifyContent: 'flex-end',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {settings.map((setting, index) => (
                <Link
                  key={index}
                  style={{ height: 'fit-content' }}
                  href={`/${setting.toLowerCase().replace('-', '')}`}
                >
                  <Button
                    variant="outlined"
                    onClick={handleCloseNavMenu}
                    sx={{
                      height: '3.125rem',
                      lineHeight: '0px',
                      borderRadius: '1rem',
                      paddingTop: '1rem',
                      paddingX: '2rem',
                      paddingBottom: '0.75rem',
                      border: '1px solid #344054',
                      textTransform: 'none',
                      my: '2rem',
                      fontWeight: '700',
                      color: '#344054',
                      display: 'block',
                      fontSize: '1.125rem',
                      '&: hover': {
                        borderColor: '#344054',
                        color: '#FBFBFC',
                        backgroundColor: '#D87036',
                      },
                    }}
                  >
                    {setting}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
