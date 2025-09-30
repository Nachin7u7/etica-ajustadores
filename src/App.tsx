import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PDFViewer from "./components/PDFViewer"
import Home from "./pages/Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PDFViewer />} />
        <Route path="/secretwebpage" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
