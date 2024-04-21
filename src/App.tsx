import './App.css'
import { Footer } from './components/Footer'
import {Menu} from "./components/Menu";
import {InternshipDetails} from "./pages/InternshipDetails";
import {Header} from "./components/Header";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
        <Header/>
        {/*<Home/>*/}
        <div className="flex flex-row flex-grow">
            <Menu/>
            <InternshipDetails/>
            {/*<StudentInformations/>*/}
            {/*<Documents/>*/}
        </div>
        <Footer/>
    </div>

  )
}
export default App