import React from 'react'
import * as Yup from 'yup'
import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { registerAsyncFormik } from '../actions/actionLogin';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Div = styled.div`
  background-color: black; 
  height: 100vh;  
`
const H1 = styled.h1`
  color: white;
  margin-left: 30%;  
`

const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(2, 'Nombre demasiado corto, corrija por favor')
        .max(50, 'Nombre demasiado largo, corrija por favor')
        .required('Este campo es obligatorio'),
    apellido: Yup.string()
        .min(2, 'Apellido demasiado corto, corrija por favor')
        .max(50, 'Apellido demasiado largo, corrija por favor')
        .required('Este campo es obligatorio'),
    email: Yup.string().email('El email debe ser de tipo lola@gmail.com, corrija por favor').required('Este campo es obligatorio'),
    password: Yup.string()
        .min(6, 'Clave demasiado corta, corrija por favor')
        .max(10, 'Clave demasiado larga, corrija por favor')
        .required('Este campo es obligatorio').oneOf([Yup.ref('repeatpassword')], 'Las contraseñas no coinciden'),
    repeatpassword: Yup.string()
        .min(6, 'Clave demasiado corta, corrija por favor')
        .max(10, 'Clave demasiado larga, corrija por favor')
        .required('Este campo es requerido').oneOf([Yup.ref('password')], 'Las contraseñas no coinciden'),


});

const Register = () => {
    const dispatch = useDispatch()
    return (
        <Div >
            <H1>Formulario de Registro</H1>
            <Formik
                initialValues={
                    {
                        nombre: '',
                        apellido: '',
                        email: '',
                        password: '',
                        repeatpassword: ''
                    }
                }
                validationSchema={SignupSchema}
                onSubmit={values => {
                    console.log(values.nombre, values.apellido, values.email, values.password)
                    dispatch(registerAsyncFormik(values.nombre, values.apellido, values.email, values.password))
                }}
            >
                {({ errors, touched, handleReset }) => (
                    
                    <Form style={{ marginLeft: "40%"  }}>
                        <Field name="nombre" type="text" placeholder="Ingrese Nombre" style={{ margin: "2%"  }} />
                        {errors.nombre && touched.nombre ?
                            (<div>{errors.nombre}</div>) : null}<br />

                        <Field name="apellido" type="text" placeholder="Ingrese Apellido" style={{ margin: "2%" }} />
                        {errors.apellido && touched.apellido ?
                            (<div>{errors.apellido}</div>) : null}<br />

                        <Field name="email" type="email" placeholder="Ingrese Email" style={{ margin: "2%" }} />
                        {errors.email && touched.email ?
                            (<div>{errors.email}</div>) : null}<br />

                        <Field name="password" type="password" placeholder="Ingrese Contraseña" style={{ margin: "2%" }} />
                        {errors.password && touched.password ?
                            (<div>{errors.password}</div>) : null}<br />

                        <Field name="repeatpassword" type="password" placeholder="Repita su Contraseña" style={{ margin: "2%" }} />
                        {errors.repeatpassword && touched.repeatpassword ?
                            (<div>{errors.repeatpassword}</div>) : null}<br />

                        <button type="submit" className="btn btn-warning" style={{ margin: "2%" }}>Enviar</button>
                        <button className="btn btn-danger" onClick={handleReset}>Reset</button>
                        <NavLink className="mx-2" to='/login' > Volver</NavLink>
                    </Form>                    
                )}
            </Formik>
        </Div>
    )
}

export default Register