import { Routes, Route, BrowserRouter } from "react-router";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="services" element={<Services />} />
          </Route>
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
