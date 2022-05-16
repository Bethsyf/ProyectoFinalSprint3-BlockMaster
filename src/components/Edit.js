import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editMovieAsync } from '../actions/actionMovies';
import { useForm } from '../hooks/useForm';

const Edit = ({datos, setModal}) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(true);       
    const handleClose = () => setShow(false);
       
    const [formValue, handleInputChange]= useForm({
        titulo: datos.titulo,
        descripcion: datos.descripcion,
        anio: datos.anio,
        genero: datos.genero,
        duracion: datos.duracion,
        valoracion: datos.valoracion,
      
    })
    
    const {titulo, descripcion, anio, genero, duracion, valoracion}=formValue
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formValue)
        dispatch(editMovieAsync(titulo, formValue))
        handleClose()
    }
        return (            
                <>
                    <Modal  show={show} onHide={handleClose}>
                        <Modal.Header className='bg-dark' closeButton>
                            <Modal.Title className='text-warning'>Editar Pelicula</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form onSubmit={handleSubmit} margin={50}>
                       <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Titulo de la Pelicula</Form.Label>
                        <Form.Control type="text" name="titulo" placeholder="Agregar titulo" value={titulo} onChange={handleInputChange} />
    
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control type="text" name="descripcion" placeholder="Agregar descripcion" value={descripcion} onChange={handleInputChange} />
    
                        <Form.Label>Año</Form.Label>
                        <Form.Control type="text" name="anio" placeholder="Agregar año" value={anio} onChange={handleInputChange} />

                        <Form.Label>Genero</Form.Label>
                        <Form.Control type="text" name="genero" placeholder="Agregar genero" value={genero} onChange={handleInputChange} />
    
                        <Form.Label>Duración</Form.Label>
                        <Form.Control type="text" name="duracion" placeholder="Agregar duración" value={duracion} onChange={handleInputChange} />
    
                        <Form.Label>Valoracion</Form.Label>
                        <Form.Control type="text" name="valoracion" placeholder="Agregar valoracion" value={valoracion} onChange={handleInputChange} />
                        
                    
                    </Form.Group>
    
                    <Button type="submit">
                     Editar
                    </Button>                 
                </Form>    
                        </Modal.Body>                                             
                    </Modal>
                </>   
        );
}

export default Edit