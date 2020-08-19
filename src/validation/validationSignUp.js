export default function validationSignUp(values){
    let errors = {};

    if(!values.name){
        errors.name = "El Nombre Es Obligatorio"
    }
    if(!values.email){
        errors.email = "El Email Es Obligatorio";
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){

        errors.email = "Email Invalido";

    }

    if(!values.password){
        errors.password = "El Password Es Obligatorio";
    }else if(values.password.length < 6){
        errors.password = "El Password Debe Ser Mayor a 6 Caracteres";
    }

    return errors;
}