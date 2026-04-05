import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { DynamicPage } from "./pages/DynamicPage";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<DynamicPage />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
