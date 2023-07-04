import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        size: (value: number) => number
        fonts: {
            main: string,
            title: string,
        }
        breakpoints: {
            mobile: string,
            tablet: string,
            desktop: string,
        }
        shadows: {
            shadow1: string,
            shadow2: string,
            shadow3: string,
        }
        maxWidth: number,
        colors: {
            brandPrimary900: string,
            white: string,
            grey: string,
            orange: string,
            blue1: string,
            blue2: string,
            gradient1: string,
        }
    }
}