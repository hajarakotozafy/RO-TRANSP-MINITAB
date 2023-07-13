import Gif from '../../Assets/images/transp2.gif';
import styled from 'styled-components';

export const TagDeg = styled.span`
    padding: 4px 8px;
    color: white;
    font-weight: 600;
    // border: 2px solid red;
    font-size: 12px;
    border-radius: 16px;
    margin-left: 8px;
    background: red;
`

export const Graph = styled.div`
  flex: 1;
  height: 100vh;
  position: relative;
  display: flex;
  overflow-y: scroll;
  .solution-container{
      flex: 1;
      display: flex;
      flex-direction: column;
    //   gap: ${({theme})=>theme.size(2)}px;
        // border: 3px solid red;
  }
`

export const GifContainer = styled.div`
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0; 
    flex: 1;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F2F2F2;
    // border: 20px solid green;
    // background: url(${Gif});
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: center;
    div {
        z-index: 11;
        background: url(${Gif});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        height: 300px;
        width: 400px;
    }
`

export const SolutionLayoutTitle = styled.div`
    position: sticky;
    top: 0;
    background: red;
    width: 100%;
    z-index: 3;
    // height: ${({theme})=>theme.size(8)}px;
    padding: ${({theme}) => theme.size(2)+4}px ${({theme})=>theme.size(3)}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({theme})=>theme.colors.white};
    color: ${({theme})=>theme.colors.brandPrimary900};
    box-shadow: ${({theme})=>theme.shadows.shadow1};
`

export const SolutionLayoutContainer = styled.div`
  display: flex;
  background: #ffffff;
  flex: 1;
  padding: ${({theme})=>theme.size(2)}px 0;
  .solutions{
      flex: 2;
    //   border: 1px solid green;
      padding:  ${({theme})=>theme.size(0)}px ${({theme})=>theme.size(3)}px;
      color: ${({theme})=>theme.colors.brandPrimary900};
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      gap: ${({theme})=>theme.size(1)}px;
      .solutions-title{
        width: 100%;
        font-size: ${({theme}) => theme.size(2)+2}px;
        font-weight: 600;
        // border: 1px solid yellow;
    }
    .solutions-p{
        width: 100%;
        // flex: 1;
        // border: 1px solid red;
        span{
            font-weight: 600;
            // font-family: 'Orbitron';
            // margin-top: 8px;
            height: 24px;
            border-radius: 4px;
            background: ${({theme}) => theme.colors.vert};
            padding: 4px 8px;
            color: ${({theme}) => theme.colors.white};
        }
      }
  }
`

