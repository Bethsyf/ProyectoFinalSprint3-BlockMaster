import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMovieAsync } from '../actions/actionMovies';
import { FileUpload } from '../helpers/FileUpload';
import { useForm } from '../hooks/useForm';

const Add = () => {
  const dispatch = useDispatch();

    const [formValue, handleInputChange, rest]= useForm({
        titulo: '',
        foto: '',
        descripcion: '',
        anio:'',
        genero: '',
        duracion: '',
        valoracion: ''

    })

    const {titulo, descripcion, anio, genero, duracion, valoracion}=formValue
     const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(formValue)
        dispatch(addMovieAsync(formValue))
        rest()
    }

    const handleFileChange =(e)=>{
        const file= e.target.files[0]       
        FileUpload(file)
        .then(resp =>{
            formValue.foto =resp
            console.log(resp)
        })
        .catch(error =>{
            console.warn(error)
        })
    
    }
    return (
        <div >
             <Form className='m-5 px-3 bg-dark' onSubmit={handleSubmit} margin={50}>
                 <h1 className='p-3 text-warning'>Editar Película</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className='text-light mx-1' >Titulo de la Pelicula</Form.Label>
                    <Form.Control className='bg-dark text-light mb-2 mx-1 border-warning' type="text" name="titulo" placeholder="Agrega el titulo" value={titulo} onChange={handleInputChange} />

                    <Form.Label className='text-light mx-1'>Descripcion</Form.Label>
                    <Form.Control className='bg-dark text-light mb-2 mx-1 border-warning' type="text" name="descripcion" placeholder="Agrega la descripcion" value={descripcion} onChange={handleInputChange} />

                    <Form.Label className='text-light m-1'>Año</Form.Label>
                    <Form.Control className='bg-dark text-light mb-2 mx-1 border-warning' type="text" name="anio" placeholder="Agrega el año de estreno" value={anio} onChange={handleInputChange} />

                    <Form.Label className='text-light m-1'>Genero</Form.Label>
                    <Form.Control className='bg-dark text-light mb-2 mx-1 border-warning' type="text" name="genero" placeholder="Agrega el genero" value={genero} onChange={handleInputChange} />

                    <Form.Label className='text-light m-1'>Duración</Form.Label>
                    <Form.Control className='bg-dark text-light mb-2 mx-1 border-warning' type="text" name="duracion" placeholder="Agregar el tiempo de duracion" value={duracion} onChange={handleInputChange} />

                    <Form.Label className='text-light m-1'>Valoración</Form.Label>
                    <Form.Control className='bg-dark text-light mb-2 mx-1 border-warning' type="text" name="valoracion" placeholder="Agregar la valoracion" value={valoracion} onChange={handleInputChange} />

                     <Form.Label className='text-light m-1'>Imagen</Form.Label>
                    <Form.Control className='bg-dark text-light mb-2 mx-1 border-warning' type="file" name="foto" placeholder="Ingrese Imagen.jpg" onChange={handleFileChange} />
                
                </Form.Group>

                <Button className='m-3 btn btn-warning' type="submit">
                  Agregar
                </Button>
             
            </Form>
        </div>
    );
};

export default Add;