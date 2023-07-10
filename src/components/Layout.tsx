import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="mt-8 text-txt pb-24">
        <div className="bg-bg container py-12 px-5 md:px-10 lg:px-14 rounded-t-2xl">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Layout;
