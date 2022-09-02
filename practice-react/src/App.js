import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Index from './routes/Index'

function App() {
  return (
    <Router>
      <Route>
        <Index />
      </Route>
    </Router>
  )
}

export default App
