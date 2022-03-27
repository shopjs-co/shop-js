import React, {useContext} from 'react'
import { 
  IconButton, 
  Typography, 
  Slide, 
  Snackbar, 
  SnackbarContent 
} from '@mui/material';
import ShopContext from '../context/ShopContext'
import {Close} from '@mui/icons-material'

const TransitionDown = (props) =>
  <Slide {...props} direction="down" />

const Alert = ({ ...props }) => {

  const {
    alert,
    setAlert
  } = useContext(ShopContext)

  const handleClose = () => setAlert()

  return (
    <Snackbar
      open={Boolean(alert)}
      onClose={handleClose}
      TransitionComponent={TransitionDown}
      autoHideDuration={2500}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <SnackbarContent
        sx={ sx.alert }
        message={
          <Typography variant='subtitle2'>{ alert?.message }</Typography>
        }
        action={
          <IconButton
            size='small'
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        }
      />
    </Snackbar>
  )
}

export default Alert

const sx = {
  alert: {
    backgroundColor: 'secondary.main',
    color: 'common.white'
  }
}
