import { createRoot } from 'react-dom/client'
import './index.css'

import { ThemeProvider } from './context/ThemeProvider' 
import AppRoutes from './routes/AppRoutes'

createRoot(document.getElementById('root')!).render(
    <ThemeProvider>
        <AppRoutes />
    </ThemeProvider>
)
