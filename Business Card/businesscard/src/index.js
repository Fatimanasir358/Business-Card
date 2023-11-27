import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg">
      <div className="inner-bg">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
