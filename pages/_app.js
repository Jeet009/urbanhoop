import { CategoryProvider } from "../context/CategoryContext";
import { ProductProvider } from "../context/ProductContext";
import { SubcategoryProvider } from "../context/SubcategoryContext";
import "../styles/globals.css";
import MainTemplate from "../template/MainTemplate";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { CheckoutProvider } from "../context/CheckoutContext";
import { CarouselProvider } from "../context/CarouselContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <CartProvider>
        <CheckoutProvider>
          <MainTemplate>
            <CarouselProvider>
              <CategoryProvider>
                <SubcategoryProvider>
                  <ProductProvider>
                    <Component {...pageProps} />
                  </ProductProvider>
                </SubcategoryProvider>
              </CategoryProvider>
            </CarouselProvider>
          </MainTemplate>
        </CheckoutProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default MyApp;
