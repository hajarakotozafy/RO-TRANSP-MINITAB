import React, { useContext } from 'react';
import { FormWrapper, Form, FormTitle, Form2Inputs, FormError, BtnContainer } from './Form.Style';
import InputNumber from '../Input';
import Button from '../Button';
import { MinitabContext } from '../../Context/MinitabContext';

const Form2 = () => {

    const {minitabData, dispatch} = useContext(MinitabContext);

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