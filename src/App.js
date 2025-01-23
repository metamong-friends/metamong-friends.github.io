import './App.css';
import {HashRouter, Route, Routes} from "react-router-dom";
import {Component} from "react";
import fullLogo from "./assets/fullLogoWhite.png";
import HomePage from "./pages/HomePage";
import PlayPage from "./pages/PlayPage";
import GoodByePage from "./pages/GoodByePage";

function App() {
    return (
        <GoodByePage/>
        /*복구하고 싶을 때 살리기*/
        // <HashRouter>
        //     <>
        //         <Header/>
        //         <Routes>
        //             <Route path="/" element={<HomePage/>}/>
        //             <Route path="/play" element={<PlayPage/>}/>
        //             <Route path="*" element={<ErrorPage/>}/>
        //         </Routes>
        //     </>
        // </HashRouter>
    );
}

class Header extends Component {
    render() {
        return (
            <>
                <div className="HomePage-Header">
                    <div className="HorizontalCenter HomePage-HeaderTitle">
                        <img src={fullLogo} className="HomePage-Logo" alt="logo"/>
                    </div>
                </div>

            </>
        );
    }
}

class ErrorPage extends Component {
    render() {
        return (
            <>
                <div className="HomePage-Header">
                    ERROR ^^;
                </div>
            </>
        );
    }
}

export default App;
