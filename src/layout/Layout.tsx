import  { useEffect } from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");
    const headerOffset = 120;
    let attempts = 0;
    const maxAttempts = 10;

    const scrollToTarget = () => {
      const target = document.getElementById(id);
      if (!target) {
        return false;
      }
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
      return true;
    };

    const tryScroll = () => {
      if (scrollToTarget()) {
        return;
      }
      attempts += 1;
      if (attempts < maxAttempts) {
        window.setTimeout(tryScroll, 120);
      }
    };

    tryScroll();
  }, [location.hash, location.pathname]);

  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Header />
      <Outlet />
      <div
        className="w-screen bg-white"
        style={{
          height: "50vh",
        }}
      ></div>
      <Footer />
    </div>
  );
};

export default Layout;
