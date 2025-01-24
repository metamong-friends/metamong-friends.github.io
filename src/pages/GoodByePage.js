import '../App.css';
import {Component} from "react";
import fullLogo from '../assets/fullLogoWhite.png'
import goodByeImage1 from '../assets/GoodBye1.png'
import goodByeImage2 from '../assets/GoodBye2.png'
import goodByeImage3 from '../assets/GoodBye3.png'
import goodByeImage4 from '../assets/GoodBye4.png'
import goodByeImage5 from '../assets/GoodBye5.png'

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
            <div style={{"height": "100%", "display": "flex", "flexDirection" : "column", "justifyContent": "space-between", "alignItems": "center"}}>
                <div className="VerticalCenter" style={{"height" : "400px", "text-align": "center", "font-size":"21px", fontWeight: "bold"}}>
                    Thank you for visiting us again.<br/><br/>
                    Our service is currently unavailable.<br/><br/><br/>
                    We hope to see you again someday.
                </div>
                <div  style={{"height" : "200px"}}>
                    <img src={goodByeImage1} style={{"width": "78px", "height": "128px"}} alt="logo"/>
                    <img src={goodByeImage2} style={{"width": "78px", "height": "128px"}} alt="logo"/>
                    <img src={goodByeImage3} style={{"width": "78px", "height": "128px"}} alt="logo"/>
                    <img src={goodByeImage4} style={{"width": "78px", "height": "128px"}} alt="logo"/>
                    <img src={goodByeImage5} style={{"width": "78px", "height": "128px"}} alt="logo"/>
                </div>


                {/*
                 =================================================================================================
                 */}
                {/*<div className="Button-Group">*/}
                {/*    <a href="https://metamong-app1.s3.ap-northeast-2.amazonaws.com/Windows/.DS_Store"*/}
                {/*       download="MetamongInstaller.exe"> Windows </a>*/}
                {/*    <a href="https://metamong-launcher1.s3.ap-northeast-2.amazonaws.com/Windows/MetamongInstaller.exe"*/}
                {/*       download="Metamong.zip"> Mac(Experimental) </a>*/}
                {/*</div>*/}

                {/*
                 =================================================================================================
                 */}


            </div>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <div className="HomePage-Header">
                <div className="HorizontalCenter VerticalCenter HomePage-FooterContent">
                    <h4 style = {{"color": "white"}}>
                        @Team Metamong @SamsungSDS
                    </h4>
                </div>
            </div>
        );
    }
}

const GoodByePage = () => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    );
}


export default GoodByePage;

