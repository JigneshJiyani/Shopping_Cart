import React from "react";
import { RecoilRoot } from "recoil";
import Details from "./RecoilApp/components/Details/details";
import Sidebar from "./RecoilApp/components/Sidebar/sidebar";
// import './RecoilApp/css/index.css'

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div>
          <Sidebar />
        </div>
        <div>
          <Details />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;