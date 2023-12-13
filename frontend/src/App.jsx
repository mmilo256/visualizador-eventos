import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EventsPage from './pages/EventsPage'
import Header from './components/Header'
import { EventsProvider } from './context/eventsContext';

function App() {

  return (
    <EventsProvider>
      <Header />
      <EventsPage />
    </EventsProvider>
  )
}

export default App
