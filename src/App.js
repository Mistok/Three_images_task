import nicky from './img/nicky.jpg';
import preloader from './img/preloader.svg';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState(false);

    useEffect(()=> {
            const isOdd = num => num % 2 ===0;
            const getTwoNumbers =  () => {
                const num1 = fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
                    .then(result => result.text())
                    .then( result => +result )
                    .catch(error => console.log(error.message));
                const num2 = fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
                    .then(result => result.text())
                    .then( result => +result )
                    .catch(error => setError(error));
                const nums = [num1, num2];
                Promise.all(nums).then((nums) => {
                    isOdd(nums[0]) && isOdd(nums[1]) ? setIsLoading(false) : getTwoNumbers() ;
                })
            };
            getTwoNumbers();
        },[]);

    return (
        <div className="App">
          <header className="header">
            Three pictures
          </header>
            <div className="images_container">
                {isLoading ? <div className="image_container"><img className="preloader" src={preloader} alt="preloader"/></div> : <div className="image_container"><img className="target_image" src={nicky} alt="Cage"/></div> }
                {isLoading ? <div className="image_container"><img className="preloader" src={preloader} alt="preloader"/></div> : <div className="image_container"><img className="target_image" src={nicky} alt="Cage"/></div> }
                {isLoading ? <div className="image_container"><img className="preloader" src={preloader} alt="preloader"/></div> : <div className="image_container"><img className="target_image" src={nicky} alt="Cage"/></div> }
            </div>
            <div>
                <p>{error ? error : ''}</p>
            </div>
        </div>
    );
}

export default App;
