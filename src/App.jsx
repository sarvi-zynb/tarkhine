import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Layout from "./Layout";
import { ShoppingCartProvider } from "./contexts/ShoppingCart";
import { AuthProvider } from "./contexts/Authentication";

function App() {
  return (
    <AuthProvider>
    <ShoppingCartProvider>
      <div className='flex flex-col min-h-[100vh]'>
        <Header />
        <Layout />
        <Footer />
      </div>
    </ShoppingCartProvider>
    </AuthProvider>
  );
}

export default App;
