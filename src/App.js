import * as React from "react";
import "./styles.css";
import Navigation from "./componentes/Navigation/Navigation";
import Header from "./componentes/Header/Header";
import Offer from "./componentes/Offer/Offer";
import Recommendation from "./componentes/Recommendation/Recommendation";
import ProductList from "./componentes/ProductList/ProductList";
import Footer from "./componentes/Footer/Footer";

export default function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Offer />
      <Recommendation />
      <ProductList />
      <Footer />
    </div>
  );
}
