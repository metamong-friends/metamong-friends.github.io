import '../App.css';
import {Component} from "react";
import background from '../assets/MetamongBackground.png';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <Body/>
            <Footer/>
        </>
    );
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
                      <a href="https://metamong-launcher.s3.ap-northeast-2.amazonaws.com/Windows/MetamongInstaller.exe"
                         download="MetamongInstaller.exe"> Windows </a>
                      <a href="https://metamong-launcher.s3.ap-northeast-2.amazonaws.com/Mac/Metamong.zip"
                         download="Metamong.zip"> Mac(Experimental) </a>
                    </div>
                      <div className="Message-Usage">
                          <span><b>Mac</b> Version is Experimental. Automatic update is <span style={{color: "red"}}>not supported.</span><br/><br/>
                              <u>Before running the application on Mac devices,</u><br/>
                             <b className="Font-Small">* (For Apple silicon Mac)</b>Before you download, You should execute <i>'sudo spctl --master-disable'</i> in Terminal.<br/>
                             <b className="Font-Small">* (For Intel chipset Mac)</b>After you download and unzip, Open Terminal and navigate to the directory where the metamong.app is located, run the following command: <i>xattr -rc *.app</i> </span><br/>
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
                    <h4>@Team Metamong @SamsungSDS</h4>
                    <Link to="/play">play</Link>
                </div>
            </div>
        );
    }
}

export default HomePage;

