import "./App.css";
import { Navbar, Brand, CTA } from "./components";
import {
  Footer,
  Grid,
  Possibility,
  Features,
  WhatSMS,
  Header,
} from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatSMS />
      <Features />
      <CTA />
      <Possibility />

      <Grid />

      <Footer />
    </div>
  );
}

export default App;
