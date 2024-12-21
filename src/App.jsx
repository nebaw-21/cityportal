import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import NewsPage from './pages/newsPage';

function App() {
 

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
