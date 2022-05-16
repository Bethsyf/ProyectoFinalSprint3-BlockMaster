import { createUserWithEmailAndPassword, getAuth, signInWithPopup, updateProfile,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { facebook, google } from "../firebase/firebaseConfig";
import { typeslogin } from "../types/types";

export const logoutAsync = ()=>{
    return(dispatch)=>{
        const auth= getAuth()
        signOut(auth)
        .then((user)=>{
            console.log('Adios')
            dispatch(logout())
            
      })
          .catch(error=>{
              console.warn(error)
          })
      }
  }
export const logout =()=>{
    return{
        type: typeslogin.logout
    }
}

export const loginAsync = (email, password)=>{
    return(dispatch)=>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
    .then(({user})=>{
            dispatch(loginSync(user.email, user.password))
            console.log('Usuario autorizado')
    })
    .catch(error=>{
        console.warn(error, 'No autorizado')
    })

    }
}

export const loginSync =(user, pass)=>{
    return{
            type: typeslogin.login,
            payload: { user, pass}
    }
}

export const loginGoogle = ()=>{
  return (dispatch)=>{
      const auth = getAuth()
      signInWithPopup(auth, google)
     .then(({user})=>{
          console.log(user, 'Usuario autorizado')
  })
      .catch(error=>{
          console.warn(error, 'No autorizado')
      })
  }
}

export const loginFacebook = ( ) => {
    return ( dispatch ) => {
        const auth = getAuth();
        signInWithPopup( auth, facebook)
        .then( (usr ) => console.log(usr))
    }
}


export const loginSincrono = (id, displayname) => {
  return {
      type: typeslogin.login,
      payload: {
          id,
          displayname
      }
  }
}


export const registerAsyncFormik =(nombre, apellido, email, password)=>{
    return(dispatch)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async({user})=>{
            console.log(user)
            await updateProfile(auth.currentUser, {displayName: nombre})
            dispatch(registerSyncFormik(nombre, apellido, email, password))
            console.log('Usuario Registrado de manera exitosa')
        })
        .catch(error=>{
            console.warn(error, 'No autorizado')
        })
    }
           
    }
   


export const registerSyncFormik =(email, pass, name)=>{
    return{
        type: typeslogin.registerformik,
        payload: {
            email, pass, name
        }
    }
}