import { Navigate } from "react-router"

export const PublicRouters = ({ isAutentica, children }) => {
    return !isAutentica
        ? children
        : <Navigate to="/*" />
}