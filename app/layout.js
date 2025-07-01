import "./globals.css";
import Container from "./components/ui/Container";
import { ShoppingCartProvider } from "./Context/ShoppingCart";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/ui/Footer";
import MobileBottomNav, { StoriesBar } from "./components/navbar/MobileBottomNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoriesBar />
        <Container>
          <ShoppingCartProvider>
            <Navbar />
            {children}
          </ShoppingCartProvider>
        </Container>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
