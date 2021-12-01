//logout

export const actionLogout = () => {
    return{
        type : 'logout'
    }
}

//mainReducer
export const actionSetPageName = (args) => {
    return{
        type: 'setPageName',
        payload : args
    }
}

//userReducer

export const actionSetUserData = (uid,displayName,email,photoURL) => {
    return{
        type:'setUserData',
        uid : uid,
        displayName : displayName,
        email:email,
        photoURL : photoURL
    }
}