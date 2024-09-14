import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
       createValidators(); 
    }, [ formState ]);

    useEffect( () => {
        setFormState( initialForm );
    }, [ initialForm ]);

    const isFormValid = useMemo( ()=>{
        for( const formValue of Object.keys( formValidation)){
            if( formValidation[formValue] !== null) return false;
        }

        return true;
    },[formValidation]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators =() =>{
        const formCheckedValues = {};

        for (const formfield of Object.keys( formValidations)) {
            // console.log( formfield );
            const [fn, errorMessage= 'Este campo es obligatorio'] = formValidations[formfield];

            formCheckedValues[`${ formfield }Valid`] = fn(formState[formfield]) ? null : errorMessage;
            // console.log(`${ formfield }Valid`);

        }
        setFormValidation( formCheckedValues);
        // console.log(formCheckedValues);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation,
        isFormValid,
    }
}