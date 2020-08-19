export default function validationSignin(values){
    let errors = {};

    if(!values.emailL){
        errors.emailL = "El Email Es Obligatorio";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailL)){

        errors.emailL = "Email Invalido";

    }

    if(!values.passwordL){
        errors.passwordL = "El Password Es Obligatorio";
    }else if(values.passwordL.length < 6){
        errors.passwordL = "El Password Debe Ser Mayor a 6 Caracteres";
    }

    return errors;
}