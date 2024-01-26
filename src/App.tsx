import Layout from "./components/Layout"
import { Routes, Route } from "react-router-dom";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>}/>
      </Routes>
    </>
  )
}

export default App
