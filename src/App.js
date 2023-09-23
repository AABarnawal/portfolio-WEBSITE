// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "./Navigation/NavBar";
import About from './About/About.jsx'
import Service from "./Sevices/Service";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer.jsx"
import Projects from "./Projects/Projects";
import HomeScreen from './HomeScreen/HomeScreen.jsx';

function App() {
  return (
    <div className="App">
      <NavBar/>                         
        <HomeScreen />
        <div id="about" >
        <div style={{backgroundColor:"black",height:"20px"}}></div>
        <About /></div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
           <div id="service"><br /><br /><Service /></div>
           <div id="projects"><Projects /></div>
           <div id="experience"><br /><br /><Experience /></div>
           <div id="contact"><Contact /></div>                                                                                                                                                                                                                                                                                                                                                                          
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        
        
        
        <Footer />
        
    </div>
  );
}

export default App;
