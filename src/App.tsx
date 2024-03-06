import Layout from "./components/Layout"
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import 'non.geist';
import 'non.geist/mono';
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  const location = useLocation();

  return (
    <>
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/terms" element={<Terms/>}/>
      </Routes>
    </AnimatePresence>
    </>
  )
}

export default App