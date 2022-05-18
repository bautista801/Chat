import React from 'react'
import Chat from './components/Chat';
import Navbar from "./components/Navbar";
import { ChatContext } from "./context/ChatProvider";

function App() {

  const {usuario} = React.useContext(ChatContext)

  return usuario !== null ? (
    <div>
      <Navbar />
      {
        usuario.estado ? (
          <Chat />
        ) : (
          <div className='bg-dark text-center text-white fs-5 p-2 mt-2'>
            Tenes que iniciar sesion para ingresar al chat
          </div>
        )
      }
    </div>
  ) : (
    <div>Cargando...</div>
  )
}

export default App;
