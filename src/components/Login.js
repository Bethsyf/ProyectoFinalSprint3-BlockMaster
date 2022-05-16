import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { loginAsync, loginFacebook, loginGoogle } from '../actions/actionLogin';
import { useForm } from '../hooks/useForm';

const Section = styled.section`
  background-color: black; 
  height: 100vh;
`
const Div = styled.div`
  border-radius: 1rem;
`
const Logo = styled.img`
  width: 150px;  
`
const Login = () => {
    const dispatch = useDispatch()

    const [formValue, handleInputChange, rest] = useForm({
        user: '',
        pass: ''
    })

    const { user, pass } = formValue

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValue)
        dispatch(loginAsync(user, pass))
        rest()
    }

    return (
        <Section class="vh-100" >
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <Div class="card shadow-2-strong ">
                            <div class="card-body p-5 text-center">
                                <Logo class="mx-auto p-3 d-block"
                                    src={'https://res.cloudinary.com/dmaviub4l/image/upload/v1652359622/block-master/gnf1yvvxhz1wfh2vjrkc.png'}
                                    title='Logo Block Master'
                                    alt='Logo Block Master'
                                />
                                <form class="form-outline " onSubmit={handleSubmit}>

                                    <input
                                        type="email"
                                        name="user"
                                        className="form-control form-control-lg my-3"
                                        placeholder="Email"
                                        autoComplete="off"
                                        value={user}
                                        onChange={handleInputChange}
                                    />

                                    <input
                                        type="password"
                                        name="pass"
                                        className="form-control form-control-lg my-3"
                                        autoComplete="off"
                                        placeholder="Password"
                                        value={pass}
                                        onChange={handleInputChange}
                                    />

                                    <button type="submit" class="btn btn-warning btn-lg btn-block">
                                        Login
                                    </button>
                                    <hr class="my-4"></hr>
                                    <div class="">
                                        <button className="btn btn-lg btn-block btn-danger m-3" onClick={() => dispatch(loginGoogle())}
                                            type="submit"> Loguearse con Google</button>
                                        <button className="btn btn-lg btn-block btn-primary " onClick={() => dispatch(loginFacebook())}
                                            type="submit">Loguearse con Facebook</button>
                                        <div></div>
                                        <Link to="/register">Registrarse</Link>
                                    </div>    </form>
                            </div>
                        </Div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Login;