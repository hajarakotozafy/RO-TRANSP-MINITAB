import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: ${({theme})=>theme.fonts.main};
        font-size: ${({theme})=>theme.size(2)}px;
        background: #ffffff;
    }

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: ${({theme})=>theme.fonts.title};
    }
    h1{
        font-size: ${({theme})=>theme.size(5)}px;
        font-weight: 800;
    }
    h2{
        font-size: ${({theme})=>theme.size(4)}px;
        font-weight: 700;
    }
    h3{
        font-size: ${({theme})=>theme.size(3)}px;
        font-weight: 600;
    }
    h4{
        font-size: ${({theme})=>theme.size(2)+2}px;
        font-weight: 500;
    }
    h5{
        font-size: ${({theme})=>theme.size(2)}px;
        font-weight: 500;
    }
    h6{
        font-size: ${({theme})=>theme.size(2)-2}px;
        font-weight: 500;
    }

    ::-webkit-scrollbar {
        width: 0px;
      }
      
      ::-webkit-scrollbar-track{
        // background: #f1f1f1;
        // background: rgb(191, 191, 191);
        background: ${({theme})=>theme.colors.blue2};
        /* border-radius: 5px; */
    }
    
    ::-webkit-scrollbar-thumb{
        background: ${({theme})=>theme.colors.blue2};
        // background: rgb(191, 191, 191);
        border-radius: 5px;
      }
`

export default GlobalStyles;