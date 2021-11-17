import { CategoryProvider } from "../context/CategoryContext";
import { ProductProvider } from "../context/ProductContext";
import { SubcategoryProvider } from "../context/SubcategoryContext";
import "../styles/globals.css";
import MainTemplate from "../template/MainTemplate";

function MyApp({ Component, pageProps }) {
  return (
    <MainTemplate>
      <CategoryProvider>
        <SubcategoryProvider>
          <ProductProvider>
            <Component {...pageProps} />
          </ProductProvider>
        </SubcategoryProvider>
      </CategoryProvider>
    </MainTemplate>
  );
}

export default MyApp;
