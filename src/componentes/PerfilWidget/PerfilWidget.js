import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faUserLargeSlash } from '@fortawesome/free-solid-svg-icons'
import {useAuth} from '../../Context/AuthContext'
import React from 'react'

const PerfilWidget = () => {
    const {login,user} =  useAuth()
  return (
    <>
        {user?<FontAwesomeIcon icon={faUser}/>:<FontAwesomeIcon icon={faUserLargeSlash} />}
    </>
  )
}

export default PerfilWidget