import axios from "axios";

function App() {
    const clickMe = async () => {
        const res = await axios.get("http://localhost:8080/hello");
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
