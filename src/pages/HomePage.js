import '../App.css';
import {Component} from "react";
import logo from './logo.png'
import background from './MetamongBackground.png';

class Header extends Component {
    render() {
        return (
            <>
                <div className="HorizontalCenter HomePage-Header">
                    <div className=" HomePage-HeaderTitle">
                        <div className="VerticalCenter">
                            <img src={logo} className="HomePage-Logo" alt="logo"/>
                        </div>
                        <div className="VerticalCenter HomePage-LogoText"> Welcome Metamong !</div>
                    </div>
                    <div className=" HomePage-HeaderSubTitle">An online collaborative space where you want to stay
                        together.
                    </div>
                </div>

            </>
        );
    }
}

class Body extends Component {
    render() {
        return (
            <div className="HorizontalCenter HomePage-Body">
                <img src={background} className="HomePage-BodyImage" alt="metamong image"/>
                <div className="HomePage-BodyContent">
                    <h1> Click Download </h1>
                    <a href="https://metamong-launcher.s3.ap-northeast-2.amazonaws.com/Windows/Metamong.zip"
                       download="Metamong.zip"> windows </a>
                    <p> mac</p>
                </div>
            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <div className="HorizontalCenter HomePage-Footer">
                <div>made by</div>
                <div>@Team Metamong @SamsungSDS</div>
            </div>
        );
    }
}

const HomePage = () => {
    return (
        <>
            <div className="HomePage-HeaderBackground"/>
            <div className="HomePage-BodyBackground"/>

            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}


export default HomePage;

