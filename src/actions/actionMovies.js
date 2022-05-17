import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { DB } from "../firebase/firebaseConfig"
import { typesMovie } from "../types/typesMovie"

export const addMovieAsync = (movie) => {
    return (dispath) => {
           
        addDoc(collection(DB, "MoviesDB"), movie)
            .then(resp => {
                dispath(addMovieSync(movie))
                dispath(listMoviesSync())

            })
            .catch(error => {
                console.warn(error)
            })

    }
}

export const addMovieSync = (movie) => {
    return {
        type: typesMovie.add,
        payload: movie
    }
}



export const listMovieAsync = () => {
    return async (dispath) => {
        const collectionListar = await getDocs(collection(DB, "MoviesDB"))
        console.log(collectionListar)
        const movies = []
        collectionListar.forEach(lista => {
            movies.push({
                ...lista.data()
            })
        })
        dispath(listMoviesSync(movies))

    }

}

export const listMoviesSync = (movie) => {
    return {
        type: typesMovie.list,
        payload: movie
    }
}



export const deletMovieAsync = (titulo) => {
    return async (dispatch) => {
        const collectionListar = collection(DB, "MoviesDB")
        const q = query(collectionListar, where('titulo', '==', titulo))
        const datosQ = await getDocs(q)
        console.log(datosQ)
        datosQ.forEach(docu => {
            deleteDoc(doc(DB, 'MoviesDB', docu.id))
        })
        dispatch(deletMovieSync(titulo))           
    }

}

export const deletMovieSync = (titulo) => {
    return {
        type: typesMovie.delete,
        payload: titulo
    }

}


export const editMovieAsync = (titulo, movie) => {
    return async (dispatch)=> {
        const collectionListar = collection(DB, "MoviesDB")
        const q = query(collectionListar, where('titulo', '==', titulo))
        const datosQ = await getDocs(q)
        let id

        datosQ.forEach(async(docu)=>{
            id= docu.id
        })
        console.log(id)

        const docRef = doc(DB, "MoviesDB", id)

        await updateDoc(docRef, movie)

        .then(resp =>{ 
            dispatch(editMovieSync(movie))
            console.log(resp)
        })
        .catch(error => console.warn(error))

        dispatch(listMovieAsync())

    }
}

export const editMovieSync = (movie) => {
    return{
        type: typesMovie.edit,
        payload: movie

    }
}


export const searchMovieAsync = (tituloBuscar)=>{
    return async (dispatch)=>{
        const collectionListar = collection(DB, "MoviesDB")

        const q = query(collectionListar, where('titulo', '>=', tituloBuscar), where('titulo', '<=', tituloBuscar + '~'))
        const datosQ = await getDocs(q)
        console.log(datosQ)
        const movie =[]
        datosQ.forEach((docu =>{
            movie.push(docu.data())
        }))
        dispatch(searchMovieSync(movie))
    }
}

export const searchMovieSync = (movie)=>{
    return{
        type: typesMovie.search,
        payload: movie
    }

}