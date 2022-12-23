import React from "react";
import {
  Cart,
  MixComponent,
  Footer,
  Landing,
  ProductSales,
  Stories,
  Navbar,
} from "./components";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/Data";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Landing heroapi={heroapi} />
        <ProductSales endpoint={popularsales} ifExists />
        <MixComponent endpoint={highlight} ifExists />
        <ProductSales endpoint={toprateslaes} />
        <MixComponent endpoint={sneaker} />
        <Stories story={story} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
