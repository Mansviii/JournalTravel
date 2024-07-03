import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from 'client\src\App.js'; 
import "client\src\style.css"
import { AuthContextProvider } from 'client\src\authContext.js'; 
  
  
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( 
    <AuthContextProvider> 
        <React.StrictMode> 
            <App /> 
        </React.StrictMode> 
    </AuthContextProvider> 
); 