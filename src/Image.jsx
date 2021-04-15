import React, { useEffect, useState } from "react";
import './Image.css';
import preloader from "./img/preloader.svg";
import defaultImage from './img/nicky.jpg';

export function Image() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(()=> {
        const isOdd = num => num % 2 ===0;
        const getTwoNumbers =  () => {
            const fetch1 = fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
                .then(result => result.text())
                .then(result => +result)
                .catch(error => setError(error));

            const fetch2 = fetch('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new')
                .then(result => result.text())
                .then(result => +result)
                .catch(error => setError(error));

            Promise.all([ fetch1, fetch2 ])
                .then(([ num1, num2 ]) => {
                    const isBothOdd = isOdd(num1) && isOdd(num2);
                    isBothOdd ? setIsLoading(false) : getTwoNumbers()
                })
                .catch(error => setError(error));
        };
        getTwoNumbers();
    },[]);

    return (
        <div className={'image_container'}>
            {
                isLoading
                    ? <img className={'loader'} src={preloader} alt="preloader" />
                    : null
            }
            {
                !isLoading
                    ? <img className={'default_image'} src={defaultImage} alt="default image of Cage" />
                    : null
            }
            <div>{error ? error : ''}</div>
        </div>
    );
}
