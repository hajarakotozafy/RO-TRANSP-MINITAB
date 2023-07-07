import styled from 'styled-components';

export const LoaderContainer = styled.div`    
    .loader-container{
        position: absolute;
        z-index: -10;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        /* background: rgb(216, 209, 255); */
        display: flex;
        flex-direction: column;
    }
    
    .loadBar{
        // background: rgb(216, 209, 255);
        background: red;
        width: 100%;
        height: calc(100vh/10);
        flex: 1;
        z-index: 2;
        transition: width 0.5s ease-in-out;
    }
    .loadBar.fade{
        width: 0;
    }
    .spinner{
        position: absolute;
        z-index: 3;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100px;
        height: 100px;
        border-radius: 8px;
        background: url('./assets/images/transp.gif') center no-repeat;
        background-size: cover;
        transition: 1s ease-in-out;
    }
    
    .spinner.hidden{
        top: 100%;
        opacity: 0;
    }
`