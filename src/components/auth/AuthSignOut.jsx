import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import useAlerts from '../../hooks/useAlerts'
import useAuth from '../../hooks/useAuth'
import ShopContext from '../../context/ShopContext'
import { Button, Box } from '@mui/material';

const AuthSignIn = ({ handleToggle, ...props }) => {


  const {
    showAlertSuccess,
    showAlertError
  } = useAlerts()

  const {
    accessToken,
    setAccessToken,
    setExpiresAt
  } = useContext(ShopContext)

  const {
    signOut
  } = useAuth()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSignOut = async () => {
    if(accessToken?.length > 1){
      await signOut(accessToken)
      setAccessToken()
      setExpiresAt()
      showAlertSuccess("You have been signed out!")
    }else{
      showAlertError("You are already logged out")
    }
  }

  return(
    <Box my={2} display='flex' flexDirection='column' width='100%'>
      <Button
        sx={ sx.button  }
        fullWidth
        size='large'
        color='primary'
        variant='contained'
        onClick={ handleSignOut }
      >
        Sign Out
      </Button>
    </Box>
  )
}

AuthSignIn.propTypes = {
  handleToggle: PropTypes.func.isRequired
}

export default AuthSignIn

const sx = {
  root: {},
  button: {
    py: 2,
    px: 3
  }
}
