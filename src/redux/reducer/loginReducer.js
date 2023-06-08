import { createSlice } from "@reduxjs/toolkit"

/**
 * Reducer pour la gestion de la connexion.
 */
export const loginReducer = createSlice({
    name: "signIn",
    initialState: {
        connected : false,
        token : ""
    },
    reducers : {
        /**
         * Action pour connecter l'utilisateur.
         * @param {Object} state - État actuel du reducer.
         * @param {Object} action - Action contenant les données de connexion.
         */
        getLoggedIn : (state, action) => {
            state.connected = true 
            state.token = action.payload
            localStorage.setItem("token", action.payload)
            localStorage.setItem("date", new Date())
        },
        /**
         * Action pour déconnecter l'utilisateur.
         * @param {Object} state - État actuel du reducer.
         */
        getLoggedOut : (state) => {
            state.connected = false
            state.token = ""
            state.date = ""
            localStorage.removeItem("token")
            localStorage.removeItem("date")
            localStorage.removeItem("firstName")
        },
        /**
         * Action pour maintenir la connexion de l'utilisateur.
         * @param {Object} state - État actuel du reducer.
         */
        stayLogged : (state) => {
            state.connected = true
            state.token = localStorage.getItem("token")
            state.date = localStorage.setItem("date", new Date())
        }
    }
})

export const {getLoggedIn, getLoggedOut, stayLogged } = loginReducer.actions
export default loginReducer.reducer;
