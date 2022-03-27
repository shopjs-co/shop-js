import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { 
  Box, 
  Button, 
  Drawer, 
  Typography 
} from '@mui/material';
import AuthSignIn from './AuthSignIn'
import AuthSignIn from './AuthSignOut'
import AuthSignIn from './AuthRegister'
import ShopContext from '../../context/ShopContext'
import { ArrowBack } from '@mui/icons-material'

const Auth = ({
    styles,
    ...props
  }) => {

  const [showSignIn, setShowSignIn] = useState(true)

  const {
    authOpen,
    toggleOpenAuth,
    accessToken,
    setAccessToken,
    setExpiresAt
  } = useContext(ShopContext)

  const handleSignInToggle = () => {
    setShowSignIn(!showSignIn)
  }

  // Entry point in the app to establish auth
  useEffect(() => {
    let token = localStorage.getItem('access_token')
    let expiresAt = localStorage.getItem('expires_at')
    if(token){
      setAccessToken(token)
      setExpiresAt(expiresAt)
    }
  }, [])

  return(
    <Drawer
      anchor='right'
      open={ authOpen }
      onClose={ toggleOpenAuth }
    >
      <Box
        px={2}
        display='flex'
        flexDirection='column'
        justifyContent='flex-start'
        width='100%'
        sx={{ ...sx.root, ...styles }}
      >
        <Box>
          <Button
            sx={ sx.backButton  }
            onClick={toggleOpenAuth}
            startIcon={ <ArrowBack /> }
          >
            Continue Shopping
          </Button>
        </Box> 
        { !accessToken?.length > 0 ? (
          showSignIn ?
            <Box sx={ sx.signInContainer  }>
              <Typography variant='h5'>
                Sign In
              </Typography>
              <AuthSignIn
                handleToggle={ handleSignInToggle }
              />
            </Box> 
            :
            <Box sx={ sx.signInContainer  }>
              <Typography variant='h5'>
                Register
              </Typography>
              <AuthRegister
                handleToggle={ handleSignInToggle }
              />
            </Box> 
        ) : (
          <>
            <Typography variant='h6'>Welcome back!</Typography>
            <AuthSignOut />
          </>
        )
        }
      </Box>
    </Drawer>
  )
}

export default Auth

Auth.propTypes = {
  styles: PropTypes.object
}

const sx = {
  root: {
    width: {
      sm: 400,
      xs: '100vw'
    }
  },
  backButton: {
    my: 2
  },
  title: {
    m: 0
  }
}
