import './App.css';
import {ClickDownload} from "./services/AwsApi";

function App() {
    return (
        <div className="App">
            <h1> Welcome Metamong ! </h1>
            <h2> Click Download </h2>
            <button onClick={ClickDownload}> for windows</button>
        </div>
    );
}

export default App;
