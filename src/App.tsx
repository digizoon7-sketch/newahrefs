import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./vite-pages/Home";
import { Privacy } from "./vite-pages/Privacy";
import { DynamicPage } from "./vite-pages/DynamicPage";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/:slug" element={<DynamicPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
