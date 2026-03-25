import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Projects from "./pages/Projects"
import MyProjects from "./pages/MyProjects"
import View from "./pages/View"
import Preview from "./pages/Preview"
import Community from "./pages/Community"
import NavBar from "./components/NavBar"


const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectId" element={<Projects />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/view/:projectId" element={<View />} />
        <Route path="/preview/:projectId" element={<Preview />} />
        <Route path="/preview/:projectId/:versionId" element={<Preview />} />
        
      </Routes>
    </div>
  )
}

export default App
