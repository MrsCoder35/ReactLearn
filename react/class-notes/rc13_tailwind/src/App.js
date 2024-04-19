import Typografy from "./components/Typografy";

import SandS from "./components/SandS";
import HoverAndFocus from "./components/HoverAndFocus";
import FlexAndResponsive from "./components/FlexAndResponsive";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";





function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="text-center text-2xl text-purple-700">Hello Tailwind</h1>
      {/* <Typografy/> */}
      {/* <SandS/> */}
      {/* <HoverAndFocus/> */}
      {/* <FlexAndResponsive/> */}
      <ProfileCard/>
      
     
      
      
    </div>
  );
}

export default App;
