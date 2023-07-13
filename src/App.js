import React, { useReducer, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Core/Theme/Global';
import Theme from './Core/Theme/index.ts';
import { Container } from './Styles/styles';
import FormLayout from './Layouts/FormLayout';
import SolutionLayout from './Layouts/SolutionLayout';
import { MinitabContext } from './Context/MinitabContext';

const initialState = {
    isLoading : true,
    isGettingStarted: false,
    isGifDisplayed: true,
    nbLigne: 0,
    nbColonne: 0,
    a: null,
    b: null,
    isQteValid: false,
    errorQte: false,
    cout: null,
    isCoutValid: false,
    baseSolution: null,
    casD: false,
    zBase: 0,
    finalSolution: null,
    zOptimal: 0,
};

const reducer = (state, action) => {
    switch(action.type){
      case 'start':
        return {...state, isGettingStarted: true};
      case 'addMagasins':
        return {...state, nbLigne: action.nbA, nbColonne: action.nbB, a: null, b: null, cout: null, baseSolution: null, finalSolution: null};
      case 'addQte':
        return {...state, a: action.a, b: action.b, isQteValid: true, errorQte: action.errorQte};
      case 'addCout':
        return {...state, cout: action.cout, isCoutValid: true, baseSolution: action.bs, zBase: action.z, casD: action.casD, finalSolution: action.os, zOptimal: action.zOptimal, isGifDisplayed: false, isLoading: false};
      case 'editLigneColonne':
        return {...state, nbLigne: 0, nbColonne: 0, a: null, b: null, isQteValid: false, isCoutValid: false, cout: null, baseSolution: null, finalSolution: null, zBase: 0, zOptimal: 0, casD: false}
      case 'editQte':
        return {...state, isQteValid: false};
      case 'editCout':
        return {...state, isCoutValid: false};
      case 'errorQte':
        return {...state, errorQte: true}
      case 'reinitialiser':
        {
          console.clear();
          return initialState;
        }
      default:
        return state;
    }
}



const App = () => {
  const [minitabData, dispatch] = useReducer(reducer, initialState);
  
  useEffect( () =>{
      console.log('Minitab Data:', minitabData);
  },[minitabData]);

  return (
    <ThemeProvider theme={ Theme } >
      <MinitabContext.Provider value={{minitabData, dispatch}}>
        <GlobalStyles/>
        <>
          <Container>
            <FormLayout/>
            <SolutionLayout/>
          </Container>
        </>
      </MinitabContext.Provider>
    </ThemeProvider>
  )
}

export default App; 