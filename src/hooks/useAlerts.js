import React, {useContext} from 'react'
import {ShopContext} from 'context'

const useAlerts = (props) => {

  const { setAlert } = useContext(ShopContext)

  const showAlertError    = (message) => setAlert({ message, variant: 'error' })
  const showAlertWarning  = (message) => setAlert({ message, variant: 'warning' })
  const showAlertSuccess  = (message) => setAlert({ message, variant: 'success' })

  return {
    showAlertError,
    showAlertWarning,
    showAlertSuccess
  }
}

export default useAlerts
