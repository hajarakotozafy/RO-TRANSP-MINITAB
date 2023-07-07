import styled from 'styled-components';

export const FormLayoutContainer = styled.div`
    // border: 1px solid red;
    z-index: 2;
    position: relative;
    width: 380px;
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.size(2)}px;
    height: 100vh;
    overflow-y: scroll;
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
    // 0px 12px 12px -3px rgba(0, 0, 0, 0.1)
    `
    
export const FormLayoutTitle = styled.div`
    // background: red;
    position: sticky;
    top: 0;
    z-index: 4;
    width: 100%;
    padding: ${({theme}) => theme.size(2)+0.5}px ${({theme}) => theme.size(2)}px ;
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