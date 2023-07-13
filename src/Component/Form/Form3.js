import React, { useContext } from 'react';
import { FormWrapper, Form, FormTitle,Form3Inputs, BtnContainer } from './Form.Style';
import InputNumber from '../Input';
import Button from '../Button';
import { MinitabContext } from '../../Context/MinitabContext';
import { createMatrice, generateBaseSolution, calculateZ, generatePotentiels, deltaXY, generateOptimalSolution } from '../../Helper/Algo/module';
import { Graph } from '../../Helper/Algo/Graph';

const Form3 = () => {
    const { minitabData, dispatch } = useContext(MinitabContext);
    
    const generateSolution = (cout, a, b, nbLigne, nbColonne) => {
        let matrice = {};
        // let baseSolution = {};
        let index = [];
        matrice = createMatrice(cout, a, b, nbLigne, nbColonne);
        let valeurs = Object.values(matrice);
        index = Object.keys(matrice);
        let max = Math.max(...valeurs) + 1;
        max = Infinity;
        let baseSolution = generateBaseSolution(index, matrice, a, b, max);
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
        try{

            const s = generateSolution(Object.values(cout), minitabData.a, minitabData.b, minitabData.nbLigne, minitabData.nbColonne);
            const original = createMatrice(Object.values(cout), minitabData.a, minitabData.b, minitabData.nbLigne, minitabData.nbColonne);
            const {baseSolution, casD} = s; 
            let preOptimalSolution = baseSolution;
            let optimal = false;
        while(!optimal){
            console.log(preOptimalSolution)
            const potentiels = generatePotentiels(preOptimalSolution,original, minitabData.nbLigne, minitabData.nbColonne);
        
            // Calculer Delta(x,y) = Vx + C(x,y) - Vy pour les cases vides c-a-d les couts marginaux
        
            const deltas = deltaXY(preOptimalSolution, potentiels, original);
        
            // Tant qu'il existe Delta(x,y) < 0 => substitution de vecteur et refaire les étapes
            let isNegativeExit = false;
            deltas.forEach(delta=>{
                if(Object.values(delta)[0]<0){
                    isNegativeExit = true;
                }
            })
            if(isNegativeExit){
                preOptimalSolution = generateOptimalSolution(preOptimalSolution,deltas,original,minitabData.nbLigne,minitabData.nbColonne);
                console.log("neg")
                const graph = new Graph();
                Object.keys(preOptimalSolution).forEach(key => {
                    graph.addEdge(key.slice(0,2), key.slice(2,4));
                })
                console.log('cas dégénéré?: ', graph.isConnected() ? 'non' : 'oui');
                if(graph.isConnected()){
                    console.log("hehe")
                    continue
                }else{
                    console.log("optimal dégénéré")
                    optimal = true;
                }
            }else{
                    optimal=true;
            }
        }

        const optimalSolution = preOptimalSolution;
        
        const zValue = calculateZ(baseSolution, original);
        const zValueOptimal = calculateZ(optimalSolution, original);
        console.log("z optimal", zValueOptimal)
        // dispatch({type:'addCout', cout: Object.values(cout), bs: s, z: zValue});
        dispatch({type:'addCout', cout: Object.values(cout), bs: baseSolution, casD: casD, z: zValue, os: optimalSolution, zOptimal: zValueOptimal});
        }catch(e){
            console.error(e.message)
        }
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