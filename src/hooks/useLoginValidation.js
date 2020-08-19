import React,{useState, useEffect} from 'react'

export default function useLoginValidaton(initialState, validate, fn) {

    const [valuesL, setvaluesL] = useState(initialState);
    const [errorsL, seterrorsL] = useState({});
    const [submitFormL, setsubmitFormL] = useState(false);

    useEffect(() => {
       if(submitFormL){
           const noerrorsL = Object.keys(errorsL).length === 0;
           if(noerrorsL){
               fn();
           }
           setsubmitFormL(false);
       }
    }, [errorsL]);

    const handleChangeL = e =>{
        setvaluesL({
            ...valuesL,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmitL = e =>{
        e.preventDefault();
        const validationerrorsL = validate(valuesL);
        seterrorsL(validationerrorsL);
        setsubmitFormL(true);
    }

    const handleBlurL =()=>{
        const validationerrorsL = validate(valuesL);
        seterrorsL(validationerrorsL);
    }

    return {
        valuesL,
        errorsL,
        submitFormL,
        handleChangeL,
        handleSubmitL, 
        handleBlurL,       
    }
}
