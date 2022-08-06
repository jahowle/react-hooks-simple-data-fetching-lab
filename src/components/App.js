// create your App component here
import React, { useEffect, useState } from "react";

function App() {

    const [dogs, setDogs] = useState()
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then((data) => {
            setDogs(data.message)
            setIsLoaded(true)
        })
    }, []);

    if (!isLoaded) return <h3>Loading...</h3>;

    return (
        <img src={dogs} alt="A Random Dog" />
    )
}

export default App