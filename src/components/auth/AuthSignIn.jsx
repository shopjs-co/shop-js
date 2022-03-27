import { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import useAlerts from '../hooks/useAlerts'
import useAuth from '../hooks/useAuth'
import { Button, Box, CircularProgress, TextField } from '@mui/material';
import { AccountCircle   } from  '@mui/icons-material'

const AuthSignIn = ({ handleToggle, ...props }) => {

  const {
    showAlertError
  } = useAlerts()

  const {
    error,
    loading,
    signIn
  } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSignIn = async () => {
    if(email && password){
      await signIn(email, password)
    }else{
      showAlertError("Please enter your email and password to Sign in.")
    }
  }

  useEffect(() => {
    if(error){
      showAlertError("Your email or password is incorrect")
    }
  }, [error])


  return(
    <Box my={2} display='flex' flexDirection='column' width='100%'>
      <Box my={1} width='100%'>
        <TextField
          sx={ sx.input  }
          variant='outlined'
          name='email'
          value={ email }
          type='email'
          onChange={(ev) => setEmail(ev.target.value)}
          placeholder='Your Email'
        />
      </Box>
      <Box my={1} width='100%'>
        <TextField
          sx={ sx.input  }
          variant='outlined'
          name='email'
          value={ password }
          type='password'
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder='Your Password'
        />
      </Box>
      <Box my={1}>
        <Button
          sx={ sx.button  }
          fullWidth
          size='large'
          color='primary'
          endIcon={
            loading ?
              <CircularProgress size={20} sx={ sx.progress  } /> :
              <AccountCircle />
          }
          variant='contained'
          onClick={ handleSignIn }
        >
          Sign In
        </Button>
      </Box>
      <Box my={1}>
        <Button
          fullWidth
          size='large'
          color='primary'
          onClick={ handleToggle }
        >
          No account? Sign Up!
        </Button>
      </Box>
    </Box>
  )
}

AuthSignIn.propTypes = {
  handleToggle: PropTypes.func.isRequired
}

export default AuthSignIn

const sx = {
  root: {},
  input: {
    width: '100%'
  },
  button: {
    py: 2,
    px: 3
  },
  progress: {
    color: '#fff'
  }
}
