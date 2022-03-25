import { Routes, Route } from 'react-router-dom';
import { Header, Home, ProductListingPage, ProductPage } from './components';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/category/:slug" element={<ProductListingPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
