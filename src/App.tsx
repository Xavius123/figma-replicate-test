import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import QualiDesignSystem from './pages/QualiDesignSystem'
import StandalonePage from './pages/StandalonePage'

// Home page component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      TEST
         <div className="bg-primary text-primary-foreground border border-border p-4">
     This should have your primary color background, white text, and a border.
   </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="quali" element={<QualiDesignSystem />} />
          <Route path="standalone" element={<StandalonePage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
