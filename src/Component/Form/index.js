import React, { useContext } from 'react';
import { FormContainer } from './Form.Style';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';

import { MinitabContext } from '../../Context/MinitabContext';

const Form = () => {
    const {minitabData} = useContext(MinitabContext);
    return (
        <FormContainer>
            <Form1/>
            {minitabData.nbLigne!==0 && minitabData.nbColonne!==0 && (<>
                <Form2/>
                {minitabData.a && minitabData.b && (
                    <Form3/>
                )}
            </>)}
        </FormContainer>
    )
}

export default Form; 