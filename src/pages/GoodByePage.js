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
            <div className="HomePage-Body">
                <div className="HorizontalCenter HomePage-BodyContent">
                    <div className="HomePage-Body HorizontalCenter VerticalCenter" style={{"text-align": "center"}}>
                        Thank you for visiting us again.<br/><br/>
                        Our service is now unavailable.<br/><br/><br/>
                        We hope see you again some day.
                    </div>
                    <div>
                        <img src={goodByeImage1} style={{"width": "78px", "height":"128px"}} alt="logo"/>
                        <img src={goodByeImage2} style={{"width": "78px", "height":"128px"}} alt="logo"/>
                        <img src={goodByeImage3} style={{"width": "78px", "height":"128px"}} alt="logo"/>
                        <img src={goodByeImage4} style={{"width": "78px", "height":"128px"}} alt="logo"/>
                        <img src={goodByeImage5} style={{"width": "78px", "height":"128px"}} alt="logo"/>
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
                    <h4>@Team Metamong @SamsungSDS</h4>
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

