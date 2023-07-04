import styled from 'styled-components';

export const FormLayoutContainer = styled.div`
    // border: 1px solid red;
    position: relative;
    width: 320px;
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.size(2)}px;
    height: 100vh;
    overflow-y: scroll;
    `
    
export const FormLayoutTitle = styled.div`
    // background: red;
    position: sticky;
    top: 0;
    z-index: 4;
    width: 100%;
    padding: ${({theme}) => theme.size(2)+0.5}px ${({theme}) => theme.size(1)}px ;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({theme})=>theme.colors.gradient1};
    color: ${({theme})=>theme.colors.white};
    box-shadow: ${({theme})=>theme.shadows.shadow1};
`

export const Space = styled.div`
padding: 16px 0;
width: 100%;
`