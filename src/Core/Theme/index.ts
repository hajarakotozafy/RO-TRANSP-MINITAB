import { DefaultTheme } from "styled-components";
import "@fontsource/plus-jakarta-sans";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/orbitron";
import "@fontsource/orbitron/400.css";
import "@fontsource/orbitron/500.css";
import "@fontsource/orbitron/600.css";
import "@fontsource/orbitron/700.css";
import "@fontsource/orbitron/800.css";

const Theme: DefaultTheme = {
    size: (value: number, sizeMultiplicator = 8) => {
        return value * sizeMultiplicator
    },
    fonts: {
        main: "Plus Jakarta Sans",
        title: "Orbitron"
    },
    breakpoints: {
        mobile: "only screen and (max-width: 360px)",//360px-767px
        tablet: "only screen and (max-width: 768px)",//767px-1439px
        desktop: "screen",//1440px-up
    },
    shadows: {
        shadow1: "0px 3px 12px -3px rgba(0, 0, 0, 0.1)",
        shadow2: "0px 9px 12px -3px rgba(0, 0, 0, 0.1)",
        shadow3: "0px 12px 12px -3px rgba(0, 0, 0, 0.1)",
    },
    colors: {
        brandPrimary900: '#005162',
        white: '#FFFFFF',
        grey: '#E5EEF5',
        orange: '#FF6346',
        vert: '#03CEA4',
        blue1: '#00A9BE',
        blue2: '#00BCA9',
        // gradient1: 'linear-gradient(to right, #006E77 , #006E77)',
        gradient1: 'linear-gradient(to right, #00A9BE , #00BCA9)',
        //#48B372
    }
}

export default Theme
