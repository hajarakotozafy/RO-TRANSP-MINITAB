import styled from 'styled-components';

export const FormContainer = styled.div`
    // border: 3px solid yellow;
    display: flex;
    flex-direction: column;
    gap: ${({theme})=>theme.size(1)}px;
    color: ${({theme})=>theme.colors.brandPrimary900};
`
export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding: ${({theme}) => theme.size(2)}px ${({theme}) => theme.size(2)}px 0 ${({theme}) => theme.size(2)}px;
    margin: 0;
    gap: 0;
    &:before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: ${({theme}) => theme.colors.grey};
        opacity: 0.4;
        z-index: -1;
    }
    gap: ${({theme})=>theme.size(2)}px;
`

export const FormError = styled.span`
    color: red;
    font-size: ${({theme})=>theme.size(2)-4}px;
`

export const Form = styled.form`
    // border: 1px solid green;
    position: relative;
    // padding: ${({theme}) => theme.size(2)}px ${({theme}) => theme.size(1)}px 0 ${({theme}) => theme.size(1)}px;
    // &:before{
    //     content: '';
    //     position: absolute;
    //     top: 0;
    //     right: 0;
    //     width: 100%;
    //     height: 100%;
    //     background: ${({theme}) => theme.colors.grey};
    //     opacity: 0.4;
    //     z-index: -1;
    // }
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.size(2)}px;
`

export const FormTitle = styled.p`
    // border: 2px solid grey;
    font-size: ${({theme}) => theme.size(2)+2}px;
    font-weight: 600;
`
export const Form1Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap:${({theme})=>theme.size(1)}px;
    div {
        // border: 1px solid brown;
        display: flex;
        justify-content: space-between;
        align-items: center;
        label{
            // border: 1px solid pink;
            width: 70%;
        }
    }
`

export const Form2Inputs = styled.div`
    // border: 1px solid red;    
    display: flex;
    flex-direction: column;
    gap: ${({theme})=>theme.size(1)}px;
    div{
        display: flex;
        flex-direction: column;
        gap: ${({theme})=>theme.size(1)}px;
        .qteInputs{
            // border: 1px solid green;
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            gap: ${({theme})=>theme.size(1)}px;
        }
    }
`

export const Form3Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme})=>theme.size(1)}px;
    .ligne{
        display: flex; 
        flex-direction: row;
        gap: ${({theme})=>theme.size(1)}px;
    }
`

export const BtnContainer = styled.div`
    // border: 0.5px solid blue;
    padding: ${({theme}) => theme.size(1)}px 0;
    border-top: 1px solid #74A0AD;
    display: flex;
    justify-content: flex-end;
`