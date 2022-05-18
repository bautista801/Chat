import React from 'react'
import {IoSend} from 'react-icons/io5'
import { ChatContext } from '../context/ChatProvider'

const Agregar = () => {

    const {agregarMensajes, usuario} = React.useContext(ChatContext)
    const [mensaje, setMensaje] = React.useState('')

    const agregar = (e) => {
        e.preventDefault()
        if(!mensaje.trim()){
            return
        }
        agregarMensajes(usuario.uid, mensaje)
        setMensaje('')
    }

  return (
    <form 
        onSubmit={agregar}
        className='container fixed-bottom input-group bg-dark p-3'
    >
        <input 
            type="text"
            className='form-control'
            value={mensaje}
            onChange={e => setMensaje(e.target.value)}
        />
        <div className="input-group-append">
            <button 
                type='submit'
                className="btn btn-success"
            >
                <IoSend />
            </button>
        </div>
    </form>
  )
}

export default Agregar