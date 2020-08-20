import React, { useState } from 'react'
import { Form, Button, Modal } from 'react-bootstrap';

import useValidation from '../hooks/useValidation';
import useLoginValidation from '../hooks/useLoginValidation';
import validationSignUp from '../validation/validationSignUp';
import validationSignin from '../validation/validationSignin';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from "react-router-dom";


import firebase from '../firebase';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
}

const SIGNIN_INITIAL_STATE = {
    emailL: '',
    passwordL: ''
};

export default function SigninModal(props) {
    const history = useHistory();


    const [error, setError] = useState(false);

    const { values, errors, handleSubmit, handleChange, handleBlur } = useValidation(INITIAL_STATE, validationSignUp, createAccount);
    const { valuesL, errorsL, handleSubmitL, handleChangeL, handleBlurL } = useLoginValidation(SIGNIN_INITIAL_STATE, validationSignin, loginAccount);

    const { name, email, password } = values;
    const { emailL, passwordL } = valuesL;

    async function createAccount() {
        try {
            await firebase.signup(name, email, password);
            history.push('/Popular');

        } catch (error) {
            toast.error(`El email ya se encuentra registrado`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setError(true);
        }
    }
    async function loginAccount() {
        try {
            const user = await firebase.login(emailL, passwordL);
            history.push('/Popular');
        } catch (error) {
            toast.error(`Email y/o Contraseña Incorrecta.`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setError(true);
        }
    }


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            {error ? (
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            ) : ''}

            <Modal.Body>
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <Form className='col-12' onSubmit={handleSubmitL}>
                            <hr data-content="INICIAR" className="hr-text mt-3" />
                            <div className="social-icon">
                                <button type="button"><i className="fa fa-google"></i></button>
                                <button type="button"><i className="fa fa-facebook"></i></button>
                            </div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleBlurL} onChange={handleChangeL} value={emailL} name='emailL' type="email" placeholder="Enter email" />
                                {errorsL.emailL && (<Form.Text className="text-danger ml-1">
                                    {errorsL.emailL}
                                </Form.Text>)}
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handleBlurL} onChange={handleChangeL} value={passwordL} name='passwordL' type="password" placeholder="Password" />
                                {errorsL.passwordL && (<Form.Text className="text-danger ml-1">
                                    {errorsL.passwordL}
                                </Form.Text>)}
                            </Form.Group>
                            <div className='text-center'>
                                <Button className='btn-block' variant="outline-secondary" type="submit">
                                    Iniciar Sesion
                        </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <hr data-content="REGISTRARME" className="hr-text mt-5" />
                <div className="container h-100">
                    <div className="row h-100 justify-content-center align-items-center">
                        <Form className='col-12' onSubmit={handleSubmit} >
                            <div className="social-icon">
                                <button type="button"><i className="fa fa-google"></i></button>
                                <button type="button"><i className="fa fa-facebook"></i></button>
                            </div>
                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onBlur={handleBlur} onChange={handleChange} value={name} name='name' type="text" placeholder="Enter name" />
                                {errors.name && (<Form.Text className="text-danger ml-1">
                                    {errors.name}
                                </Form.Text>)}

                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onBlur={handleBlur} onChange={handleChange} value={email} name='email' type="email" placeholder="Enter email" />
                                {errors.email && (<Form.Text className="text-danger ml-1">
                                    {errors.email}
                                </Form.Text>)}
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handleBlur} onChange={handleChange} value={password} name='password' type="password" placeholder="Password" />
                                {errors.password && (<Form.Text className="text-danger ml-1">
                                    {errors.password}
                                </Form.Text>)}
                            </Form.Group>

                            <div className='text-center'>
                                <Button className='btn-block' variant="outline-secondary" type="submit">
                                    Registrame
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    )
}
