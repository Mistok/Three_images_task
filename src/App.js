
import './App.css';
import React from "react";
import {Image} from "./Image";

function App() {

    return (
        <div className="App">
          <header className="header">
            Three pictures
          </header>
            <div className="images_container">
                <Image/>
                <Image/>
                <Image/>
            </div>
        </div>
    );
}

export default App;
