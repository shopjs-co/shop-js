import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useAlerts from '../hooks/useAlerts'
import useAuth from '../hooks/useAuth'
import { Button, Box, CircularProgress, TextField } from '@mui/material';
import { AccountCircle, } from  '@mui/icons-material'

const AuthRegister = ({ handleToggle, ...props }) => {

  const {
    showAlertError
  } = useAlerts()

  const {
    loading,
    error,
    signUp
  } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSignUp = async () => {
    if(email && password){
      await signUp(email, password)
    }else{
      showAlertError("Please enter your email and password to Sign Up.")
    }
  }

  useEffect(() => {
    if(error){
      showAlertError("There was a problem signing up, the email may have already been taken")
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
          endIcon={ loading ?
            <CircularProgress size={20} sx={ sx.progress  } /> :
            <AccountCircle />
          }
          variant='contained'
          onClick={ handleSignUp }
        >
          Register
        </Button>
      </Box>
      <Box my={1}>
        <Button
          fullWidth
          size='large'
          color='primary'
          onClick={ handleToggle }
        >
          Already Registered? Sign In
        </Button>
      </Box>
    </Box>
  )
}

AuthRegister.propTypes = {
  handleToggle: PropTypes.func.isRequired
}

export default AuthRegister

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
