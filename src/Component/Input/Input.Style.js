import styled from 'styled-components';

export const Input = styled.input`
    // font-family: "Orbitron";
    font-weight: 500;
    width: ${({theme})=>theme.size(4)+4}px;
    height: ${({theme})=>theme.size(4)+4}px;
    border-radius: ${({theme})=>theme.size(0.5)}px;
    outline: none;
    border: 1px solid ${({theme})=>theme.colors.brandPrimary900};
    background: ${({theme})=>theme.colors.white};
    color:  ${({theme})=>theme.colors.brandPrimary900};
    font-size: ${({theme})=>theme.size(2)-2}px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        display: none;
    }
    &:disabled{
        background: ${({theme})=>theme.colors.grey};//grey
        // color: ${({theme})=>theme.colors.white};//none
        border: 1px solid ${({theme})=>theme.colors.grey};//grey
    }
`