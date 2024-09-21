import { createContext, useState } from "react";
import Header from "./component/Header";
import CalculateBill from "./component/CalculateBill";
import Footer from "./component/Footer";
import Bilingdetails from "./component/Bilingdetails";
import Itemdetails from "./component/Itemdetails";
import Calculatecontext from "./component/calculatecontext";
import Total from "./component/total";
import "./App.css";
import Diplsypreview from "./component/Diplsypreview";

function App() {
  return (
    <Calculatecontext>
      <div className="flex gap-20 mx-16 my-12 h-auto">
        <div className="leftbox bg-slate-300 h-auto">
          <div className="mx-12 my-6 h-auto">
            <Header />
            <br />
            <Bilingdetails />
            <Itemdetails />
            <Total />
            <Footer />
          </div>
        </div>
        <div className="rightbox bg-slate-300">
          <div className="mx-8 my-6">
            <CalculateBill />
          </div>
        </div>
      </div>
      <Diplsypreview/>
    </Calculatecontext>
  );
}

export default App;
