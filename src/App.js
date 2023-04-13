import "./App.css"
import Header from "./components/Sections/Header"
import Section1 from "./components/Sections/Section1"
import Section2 from "./components/Sections/Section2"
// import Section3 from "./components/Sections/Section3"
import Sectiontest from "./components/Sections/Section3_test"
import Section4 from "./components/Sections/Section4"
import Section5 from "./components/Sections/Section5"
import Footer from "./components/Sections/Footer"

function App() {
  return (
    <>
    <Header />
    <Section1 /> 
    <Section2 /> 
    {/* <Section3 />  */}
    <Sectiontest /> 
    <Section4 /> 
    <Section5 /> 
    <Footer /> 
    </>
  );
}

export default App;
