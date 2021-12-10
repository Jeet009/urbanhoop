import { CategoryProvider } from "../context/CategoryContext";
import { ProductProvider } from "../context/ProductContext";
import { SubcategoryProvider } from "../context/SubcategoryContext";
import "../styles/globals.css";
import MainTemplate from "../template/MainTemplate";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { ProfileProvider } from "../context/ProfileContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProfileProvider>
        <CartProvider>
          <MainTemplate>
            <CategoryProvider>
              <SubcategoryProvider>
                <ProductProvider>
                  <Component {...pageProps} />
                </ProductProvider>
              </SubcategoryProvider>
            </CategoryProvider>
          </MainTemplate>
        </CartProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default MyApp;
