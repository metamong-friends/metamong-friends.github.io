import '../App.css';
import {Component} from "react";
import fullLogo from '../assets/fullLogoWhite.png'
import background from '../assets/MetamongBackground.png';

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

class Body extends Component {
    render() {
        return (
            <div className="HomePage-Body">
                <div className="HorizontalCenter HomePage-BodyContent">
                    <div className="HomePage-BodyTitle">
                        An online collaborative space where you want to stay together.
                    </div>
                    <img src={background} className="HomePage-BodyImage" alt="metamong image"/>
                  <div className="HomePage-Body-Download">
                    <hr />
                    <h1> Click to Download! </h1>
                    <div className="Button-Group">
                      <a href="https://metamong-launcher.s3.ap-northeast-2.amazonaws.com/Windows/Metamong.zip"
                         download="Metamong.zip"> Windows </a>
                      <a href="https://metamong-launcher.s3.ap-northeast-2.amazonaws.com/Mac/Metamong.zip"
                         download="Metamong.zip"> Mac </a>
                    </div>
                    <br />
                    <hr />
                  </div>
                </div>
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <div className="HomePage-Footer">
                <div className="HorizontalCenter HomePage-FooterContent">
                    <div>made by</div>
                    <div>@Team Metamong @SamsungSDS</div>
                </div>
            </div>
        );
    }
}

const HomePage = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}


export default HomePage;

