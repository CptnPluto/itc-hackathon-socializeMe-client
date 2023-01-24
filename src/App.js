import axios from "axios";
import { useState } from "react";

function App() {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");

    const clickMe = async () => {
        const res = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}/hello`
        );
        setShow(!show);
        setMessage(res.data);
        console.log(res);
    };

    return (
        <div>
            <h1>Hackathon!</h1>
            <button onClick={clickMe}>Click Me!</button>
            {show && <h1>{message}</h1>}
        </div>
    );
}

export default App;
