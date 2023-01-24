import axios from "axios";

function App() {
    const clickMe = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/`);
        console.log(res);
    };

    return (
        <div>
            <h1>Hackathon!</h1>
            <button onClick={clickMe}>Click Me!</button>
        </div>
    );
}

export default App;
