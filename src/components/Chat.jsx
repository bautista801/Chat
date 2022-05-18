import React from 'react'
import Agregar from './Agregar'
import { ChatContext } from '../context/ChatProvider'

const Chat = () => {

    const {mensajes, usuario} = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)

    React.useEffect(() => {
        console.log(refZonaChat)
        refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight
    }, [mensajes])

  return (
    <div className='container mt-5 p-2 border border-dark'
        style={{height: '75vh', overflowY: 'scroll'}}
        ref={refZonaChat}
    >
        {
            mensajes.map((item, index) => (
                usuario.uid === item.uid ? (
                    <div className='d-flex justify-content-end' key={index}>
                        <span className='badge bg-success text-dark bg-opacity-25 fs-6 m-1'>
                            {
                                item.texto
                            }
                        </span>
                    </div>
                ) : (
                    <div className='d-flex justify-content-start' key={index}>
                        <span className='badge bg-secondary bg-opacity-25 fs-6 m-1 text-break'>
                            {
                                item.texto
                            }
                        </span>
                    </div>
                )
            ))
        }
        <Agregar />
    </div>
  )
}

export default Chat