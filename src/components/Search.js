import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import * as Yup from 'yup'
import { searchMovieAsync } from '../actions/actionMovies'

const SearchI = styled.input`
  display: flex;
  width: 100%;
    border: none;
    font-size: 1.25rem;
    padding: 0.625rem 1.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;  
`
const BtnSearch = styled.button`
  border: none;
    padding: 0.625rem 1.5rem;
    font-size: 0.8rem;
    background: #fed941;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
`

const Search = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues:{
            search:''},
        validationSchema: Yup.object({
            search: Yup.string().required('campo requerido')
        }),
        onSubmit: ({search})=>{
            console.log(search)
            dispatch(searchMovieAsync(search))
        }
    })

    return (
        <div>
            <center>
            <form className="d-flex" onSubmit={formik.handleSubmit}>
                <SearchI name="search" placeholder="Busca tu película favorita" onChange={formik.handleChange}/>
                <BtnSearch type="submit"><img src='https://res.cloudinary.com/dmaviub4l/image/upload/v1652360839/block-master/ubxxlrlnvigucaxkbj21.png' alt='lupa' />
          </BtnSearch>
            </form>
            
            </center>
        </div>
    );
}

export default Search