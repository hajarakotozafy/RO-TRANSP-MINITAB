import React, { useContext } from 'react';
import { FormWrapper, Form, FormTitle, Form2Inputs, FormError, BtnContainer } from './Form.Style';
import InputNumber from '../Input';
import Button from '../Button';
import { MinitabContext } from '../../Context/MinitabContext';
import { createMatrice, generateBaseSolution, calculateZ, generatePotentiels, deltaXY, generateOptimalSolution } from '../../Helper/Algo/module';
import { Graph } from '../../Helper/Algo/Graph';

const Form2 = () => {

    const {minitabData, dispatch} = useContext(MinitabContext);

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

    function verifyQuantite(a,b){
        let dispo;
        let demande;
        try{
          dispo = a.reduce((acc, el) => {
            return acc + parseInt(el);
          }, 0);
          demande = b.reduce((acc, el) => {
            return acc + parseInt(el);
          }, 0);
          if(dispo === demande){
            return true;
          }
          else{
            return false;
          }
        }
        catch(err)
        {
            console.log(err)
        }
    }

    const onSubmitForm2 = (e) =>{
        e.preventDefault();
        const data= new FormData(e.target);
        const qte =  Object.fromEntries(data.entries());
        let a = [];
        let b = [];
        for(let val in qte){
            if(val.slice(0,1)=='a'){
                a.push(Number(qte[val]));
            }else if(val.slice(0,1)=='b'){
                b.push(Number(qte[val]));
            }
        }
        if(verifyQuantite(a,b)){
            dispatch({type: 'addQte', a: a, b: b, errorQte:false});


            if(minitabData.cout){
                try{

                    const s = generateSolution(minitabData.cout, minitabData.a, minitabData.b, minitabData.nbLigne, minitabData.nbColonne);
                    const original = createMatrice(minitabData.cout, minitabData.a, minitabData.b, minitabData.nbLigne, minitabData.nbColonne);
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
                dispatch({type:'addCout', cout: minitabData.cout, bs: baseSolution, casD: casD, z: zValue, os: optimalSolution, zOptimal: zValueOptimal});
                }catch(e){
                    console.error(e.message)
                }
            }






        }else{
            dispatch({type: 'errorQte', errorQte:true})
        }
    }

    const afficherQuantite = (nombre, spec) => {
        let composantsAffiches = [];
    
        for(let i = 1; i <= nombre; i++){
          composantsAffiches.push(<InputNumber disabled={minitabData.isQteValid} key={spec+i} name={spec+i}/>);
        }
        return composantsAffiches;
      }

    return (
        <FormWrapper>
        <Form onSubmit={(e)=>onSubmitForm2(e)}>
            <FormTitle>Les quantintés</FormTitle>
            <Form2Inputs>
                <div>
                    <label>Les quantités disponibles dans les dépôts</label>
                    <div className="qteInputs">
                        {afficherQuantite(minitabData.nbLigne, 'a')}
                    </div>
                </div>
                <div>
                    <label>Les quantités demandées par les déstinataire</label>
                    <div className="qteInputs">
                        {afficherQuantite(minitabData.nbColonne, 'b')}
                    </div>
                </div>
            </Form2Inputs>
            {minitabData.errorQte && (
                <FormError>Le total des quantités disponibles doivent être egal à celui des quantintés demandeés!</FormError>
            )}
            {!minitabData.isQteValid && (
                    <BtnContainer>
                        <Button 
                            variant='secondary'
                            type='submit' 
                            text='Valider'
                        />
                    </BtnContainer>
                )} 
        </Form>
            {minitabData.isQteValid && (
                <BtnContainer>
                    <Button 
                        variant='secondary'
                        type='button' 
                        text='Modifier'
                        onClick={()=>dispatch({type: 'editQte'})}
                    />
                </BtnContainer>
            )}
        </FormWrapper>
    )
}

export default Form2;