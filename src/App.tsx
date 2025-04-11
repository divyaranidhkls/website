import Header from "./Home/Header/Header";
import About from "./Home/About/About";
import Work from "./Home/Work/Work";
import Projects from "./Home/Projects/Project";
import Education from "./Home/Education/Education";
import Footer from "./Home/Footer/Footer";
import "./App.css"
import Connect from "./Home/Connect/connect";

const App =() =>

    {
        
        return(<div className="main-page">
             <Header/><About/><Work/><Projects/><Education/><Connect/><Footer/>
            

            
           </div>)
            
            



}
export default App;