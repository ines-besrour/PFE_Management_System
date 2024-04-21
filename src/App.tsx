import './App.css'
import { Footer } from './components/Footer'
import {Header} from "./components/Header";
import {Home} from "./pages/home";
import { Session } from './pages/session';

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Session/>
      <Footer/>
    </div>

  )
}
export default App