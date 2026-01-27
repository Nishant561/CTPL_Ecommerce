import { StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import './styles/tailwind.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.jsx'

const queryClient = new QueryClient({
  defaultOptions:{
    refetchOnWindowFOcus:false,
    retry:1,
    saleTime:5*60*1000,
  }
})


createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <QueryClientProvider client={queryClient}>
        
           <App />
        

  </QueryClientProvider>
  </BrowserRouter>
  
    
  
)
