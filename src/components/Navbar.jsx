import React from 'react'
import { ChatContext } from '../context/ChatProvider'

const Navbar = () => {

    const {usuario, ingresoUsuario, cerrarSesion} = React.useContext(ChatContext)

  return (
    <div className='navbar navbar-dark bg-dark p-2'>
        <span className='navbar-brand'>
            Chat
        </span>
        <div>
            {
                usuario.estado ? (
                <button 
                onClick={cerrarSesion}
                    className="btn btn-outline-danger my-2 float-end"
                >
                    Salir
                </button>
                    
                ) : (

                <button 
                    onClick={ingresoUsuario}
                    className="btn btn-outline-success my-2 float-end"
                >
                    Acceder
                </button>
                )
            }
        </div>
    </div>
  )
}

export default Navbar