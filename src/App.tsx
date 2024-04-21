import './App.css'
import { Footer } from './components/Footer'
import {Header} from "./components/Header";
import {Home} from "./pages/home";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Home/>
      <Footer/>
    </div>

  )
}
export default App