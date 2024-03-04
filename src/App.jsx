
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Pedidos from "./pages/Pedidos"
import Cadastro from "./pages/Cadastro"
import Produtos from './pages/Produtos'
import Categorias from './pages/Categorias'

function App() {
 

  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/pedidos' element={<Pedidos/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/produtos' element={<Produtos/>}/>
      <Route path='/categorias' element={<Categorias/>}/>
    </Routes>
  
    </BrowserRouter>
    </>
  )
}

export default App
