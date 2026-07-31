import Layout from './components/layout/Layout'
import AppRoutes from './routes/AppRoutes'
import FloatingChat from './components/ui/FloatingIcon'

function App() {
  return (
    <Layout>
      <AppRoutes />
      <FloatingChat />
    </Layout>
  )
}

export default App