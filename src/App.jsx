import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'
import FloatingChat from './components/ui/FloatingIcon'

function App() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <Layout>
      <AppRoutes />
      <FloatingChat />
    </Layout>
  )
}

export default App