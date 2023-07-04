import  './index.css'
import {useEffect, useState} from "react";

function App() {

    const [photo, setPhoto] = useState([]);
    useEffect( () => {

        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('ERROR')
                }
                return response.json()
            })
            .then((json) => {
                setPhoto(json)
            }).catch((e) => {
            console.log(e)
        })
    }, [])

    return (
            <>
                {photo.map((item) => {
                    return (
                            <div className="App">
                                {item.url}
                            </div>
                        )
                })}
            </>
    );

}
export default App;
