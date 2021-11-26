import { CategoryProvider } from "../context/CategoryContext";
import { ProductProvider } from "../context/ProductContext";
import { SubcategoryProvider } from "../context/SubcategoryContext";
import "../styles/globals.css";
import MainTemplate from "../template/MainTemplate";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MainTemplate>
        <CategoryProvider>
          <SubcategoryProvider>
            <ProductProvider>
              <CartProvider>
                <Component {...pageProps} />
              </CartProvider>
            </ProductProvider>
          </SubcategoryProvider>
        </CategoryProvider>
      </MainTemplate>
    </AuthProvider>
  );
}

export default MyApp;
