import React, { useContext } from 'react';
import { FormWrapper, Form, FormTitle,Form3Inputs, BtnContainer } from './Form.Style';
import InputNumber from '../Input';
import Button from '../Button';
import { MinitabContext } from '../../Context/MinitabContext';
import { createMatrice, generateBaseSolution, calculateZ } from '../../Helper/Algo/module';


const Form3 = () => {
    const { minitabData, dispatch } = useContext(MinitabContext);
    
    const generateSolution = (cout, a, b, nbLigne, nbColonne) => {
        let matrice = {};
        let baseSolution = {};
        let index = [];
        matrice = createMatrice(cout, a, b, nbLigne, nbColonne);
        let valeurs = Object.values(matrice);
        index = Object.keys(matrice);
        let max = Math.max(...valeurs) + 1;
        max = Infinity;
        baseSolution = generateBaseSolution(index, matrice, a, b, max);
        return baseSolution;
    }
    
    const afficherMatrice = (a, b) => {
        const composantsAffiches = [];
        for(let i = 1; i <= a; i++){
            const composantsEnfants = [];
            for(let j = 1; j <= b; j++){
            const cle = 'a'+i+'b'+j;
            composantsEnfants.push(<InputNumber key={cle} disabled={minitabData.isCoutValid} name={cle}/>);
            }
            composantsAffiches.push(
            <div key = {i} className="ligne">
                {composantsEnfants}
            </div>
            )
        }
        return composantsAffiches;
    }
    
    const onSubmitForm3 = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const cout = Object.fromEntries(data.entries());
        const s = generateSolution(Object.values(cout), minitabData.a, minitabData.b, minitabData.nbLigne, minitabData.nbColonne);
        const original = createMatrice(Object.values(cout), minitabData.a, minitabData.b, minitabData.nbLigne, minitabData.nbColonne);
        const zValue = calculateZ(s, original);
        dispatch({type:'addCout', cout: Object.values(cout), bs: s, z: zValue});
    }

    return (
        <FormWrapper>
        <Form onSubmit={(e) => onSubmitForm3(e)}>
            <FormTitle>Les coûts unitaires de transport</FormTitle>
            <Form3Inputs>
                {afficherMatrice(minitabData.nbLigne, minitabData.nbColonne)}
            </Form3Inputs>
            {!minitabData.isCoutValid && (
                    <BtnContainer>
                        <Button 
                            variant='secondary'
                            type='submit' 
                            text='Résoudre'
                        />
                    </BtnContainer>
                )} 
        </Form>
            {minitabData.isCoutValid && (
                <BtnContainer>
                    <Button 
                        variant='secondary'
                        type='button' 
                        text='Modifier'
                        onClick={()=>dispatch({type: 'editCout'})}
                    />
                </BtnContainer>
            )}
        </FormWrapper>
    )
}

export default Form3;