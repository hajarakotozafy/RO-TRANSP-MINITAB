import React, { useState, useEffect, useContext } from 'react';
import {LoaderContainer} from './Loader.Style';
import {MinitabContext} from '../../Context/MinitabContext';

const Loader = () => {
    const {minitabData} = useContext(MinitabContext);
    const [fade, setFade] = useState(false);
    const [fade2, setFade2] = useState(false);
    const [fade3, setFade3] = useState(false);
    const [fade4, setFade4] = useState(false);
    const [fade5, setFade5] = useState(false);
    const [fade6, setFade6] = useState(false);
    const [fade7, setFade7] = useState(false);
    const [fade8, setFade8] = useState(false);
    const [fade9, setFade9] = useState(false);
    const [fade10, setFade10] = useState(false);
    const [hideLoader, setHideLoader] = useState(false);

    const fadeOut = () => {
        setTimeout(()=>{
        setFade(current => !current)
        }, 1000);
        setTimeout(()=>{
        setFade2(current => !current)
        }, 1150);
        setTimeout(()=>{
        setFade3(current => !current)
        }, 1300);
        setTimeout(()=>{
        setFade4(current => !current)
        }, 1450);
        setTimeout(()=>{
        setFade5(current => !current)
        }, 1600);
        setTimeout(()=>{
        setFade6(current => !current)
        }, 1750);
        setTimeout(()=>{
        setFade7(current => !current)
        }, 1900);
        setTimeout(()=>{
        setFade8(current => !current)
        }, 2050);
        setTimeout(()=>{
        setFade9(current => !current)
        }, 2200);
        setTimeout(()=>{
        setFade10(current => !current)
        }, 2350);
        setTimeout(()=>{
            setHideLoader(true)
        }, 2850)
    }
    useEffect(()=>{

        if(!minitabData.isLoading)
        {
            fadeOut();
        }
    },[minitabData.isLoading])

    return (
        <LoaderContainer hidden={hideLoader}>
        {/* <LoaderContainer> */}
            <div className="loader-container">
                <div className={`loadBar ${fade?'fade':''}`}/>
                <div className={`loadBar ${fade2?'fade':''}`}/>
                <div className={`loadBar ${fade3?'fade':''}`}/>
                <div className={`loadBar ${fade4?'fade':''}`}/>
                <div className={`loadBar ${fade5?'fade':''}`}/>
                <div className={`loadBar ${fade6?'fade':''}`}/>
                <div className={`loadBar ${fade7?'fade':''}`}/>
                <div className={`loadBar ${fade8?'fade':''}`}/>
                <div className={`loadBar ${fade9?'fade':''}`}/>
                <div className={`loadBar ${fade10?'fade':''}`}/>
            </div>
            <div 
                className={`spinner ${!minitabData.isLoading? 'hidden':''}`} 
                // hidden={!props.isLoading} 
                // onClick={fadeOut}
                >
            </div>
        </LoaderContainer>
    )
}

export default Loader;