import styled from 'styled-components';

export const Btn = styled.input`
    padding: 10px 16px;
    border-radius: 4px;
    outline: none;
    border: ${(props)=> props.variant==='outline' ? '1px solid ' + props.theme.colors.brandPrimary900 : 'none'};
    font-size: ${(props)=>props.theme.size(2)-1}px;
    font-weight: 600;
    letter-spacing: 0.5px;
    background: ${(props) => props.variant==='primary' ? props.theme.colors.brandPrimary900 : props.variant==='secondary' ? props.theme.colors.orange : props.variant==='white' ? props.theme.colors.white : props.variant==='outline' ? props.theme.colors.white : props.theme.colors.brandPrimary900};
    color: ${(props) => props.variant==='primary' ? props.theme.colors.white : props.variant==='secondary' ? props.theme.colors.white : props.variant==='white' ? props.theme.colors.blue2 : props.variant==='outline' ? props.theme.colors.brandPrimary900 : props.theme.colors.white};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover{
        background: ${(props) => props.variant==='primary' ? props.theme.colors.white : props.variant==='secondary' ? props.theme.colors.white : props.variant==='white' ? props.theme.colors.brandPrimary900 : props.variant==='outline' ? props.theme.colors.brandPrimary900 : props.theme.colors.white};
        color: ${(props) => props.variant==='primary' ? props.theme.colors.brandPrimary900 : props.variant==='secondary' ? props.theme.colors.orange : props.variant==='white' ? props.theme.colors.white : props.variant==='outline' ? props.theme.colors.white : props.theme.colors.brandPrimary900};
    }
    // &:active{
    //     background: #f1f1f1;
    //     background-opacity: 0.3;
    // }
`