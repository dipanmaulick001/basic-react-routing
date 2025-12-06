
import {BrowserRouter , Routes , Route , Link, Links} from "react-router-dom"
import './App.css'

function App() {
  return <div>
    <BrowserRouter>
        <Link to="/"> Allon </Link>
        |
        <Link to="/jee/class-11-program">Class 11</Link>
        |
        <Link to="/jee/class-12-program"> Class 12</Link>
        <br/>
        <br/>
      
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/jee/class-11-program" element={<Class11Program/>}/>
            <Route path="/jee/class-12-program" element={<Class12Program/>}/>

        </Routes>
    </BrowserRouter>
  </div> 
}


function Class12Program(){
  return <div>
    JEE Coaching Programs for Class 12th Students !
  </div>
}

function Class11Program(){
  return <div>
    JEE Coaching Programs for Class 11th students ! 
  </div>
}

function Landing(){
   return <>
    Welcome to Allon Coaching Classes.
   </>
   
}

export default App
