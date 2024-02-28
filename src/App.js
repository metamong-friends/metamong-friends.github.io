import './App.css';

function App() {
    return (
        <div className="App">
            <h1> Welcome Metamong ! </h1>
            <h2> Click Download </h2>
            {/*<button onClick={ClickDownload}> for windows</button>*/}
            <a href="https://metamong-launcher.s3.ap-northeast-2.amazonaws.com/Windows/Metamong.zip"
               download="Metamong.zip"> windows </a>
        </div>
    );
}

export default App;
