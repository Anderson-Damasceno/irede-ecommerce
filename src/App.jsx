
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Pedidos from "./pages/Pedidos"
import Cadastro from "./pages/Cadastro"

function App() {
 

  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/pedidos' element={<Pedidos/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
