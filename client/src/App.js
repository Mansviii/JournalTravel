import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "client\src\pages\Home.jsx"; 
import Login from "client\src\pages\Login.jsx"; 
import Register from "client\src\pages\Register.jsx"; 
import Create from "client\src\pages\Create.jsx"
import View from "client\src\pages\View.jsx"
import { useContext } from "react"; 
import { AuthContext } from "client\src\authContext.js"; 
  
function App() { 
  
  const { user } = useContext(AuthContext); 
  
  const ProtectedRoute = ({ children }) => { 
    if (!user) { 
      return <Login/>; 
    } else { 
      return children; 
    } 
  }; 
  
  return ( 
    <BrowserRouter> 
      <Routes> 
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/create" element={<ProtectedRoute><Create/></ProtectedRoute>} /> 
        <Route path="/view/:id" element={<ProtectedRoute><View/></ProtectedRoute>} /> 
      </Routes> 
    </BrowserRouter> 
  ); 
} 
  
export default App;