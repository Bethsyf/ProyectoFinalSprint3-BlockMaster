import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletMovieAsync, listMovieAsync } from '../actions/actionMovies';
import Edit from './Edit';

const List = () => {
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false);
    const [datos, setDatos] = useState([]);
    const { movies } = useSelector(store => store.moviesStore)
    console.log(movies)

    useEffect(() => {
        dispatch(listMovieAsync());
    }, [dispatch])

    const editar = (movie) => {
        setModal(true)
        setDatos(movie)
    }

    return (

        <div className="bg-transparent">
            <div className="row m-3" >
                {
                    movies.map((p, index) => (
                        <div className="card col-sm-auto m-2 bg-transparent border-warning" key={index}>
                            <div className="row row-cols-auto">
                                <div className="col ">
                                    <img className="img-fluid rounded-start" alt='imagen peli' src={p.foto} width='150' />
                                </div>
                                <div className="col-sm ">
                                    <div className="d-flex flex-column w-100 mb-3">
                                        <button type="button" className="btn btn-danger b-block m-1" onClick={() => dispatch(deletMovieAsync(p.titulo))}
                                        >Borrar</button>

                                        <button type="button" className="btn btn-primary b-block  m-1"
                                            onClick={() => editar(p)}
                                        >Editar</button>

                                        <button type="button" className="btn btn-success b-block m-1"
                                        >Detalle</button>

                                        <div className="m-2">
                                            <div className="d-flex justify-content-center ">
                                                <img className="" alt='start' src='https://res.cloudinary.com/dmaviub4l/image/upload/v1652657783/block-master/eybnr1eyju0g80yiyvwp.png' width='20' />
                                            </div>
                                            <span className="fs-2 d-flex justify-content-center">{p.valoracion}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                modal === true ? <Edit datos={datos} setModal={setModal} /> : ''
            }
        </div>
    );
}

export default List