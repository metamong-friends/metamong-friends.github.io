import {Unity, useUnityContext} from "react-unity-webgl";

const PlayPage = () => {

    const {unityProvider} = useUnityContext({
        loaderUrl: "build/Metamong.loader.js",
        dataUrl: "build/Metamong.data",
        frameworkUrl: "build/Metamong.framework.js",
        codeUrl: "build/Metamong.wasm",
    });

    return (
        <div className="PlayPage-Content">
            <Unity unityProvider={unityProvider}/>
        </div>
    );
}

export default PlayPage;