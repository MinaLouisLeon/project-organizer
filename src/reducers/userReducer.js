const initialState = {
    uid : '',
    displayName : '',
    email : '',
    photoURL : '',
}

const userReducer = (state=initialState,action) => {
    switch(action.type){
        case 'logout' :
            return{
                ...state,
                uid : '',
                displayName : '',
                email : '',
                photoURL : '',
            }
        case 'setUserData' :
            return{
                ...state,
                uid : action.uid,
                displayName : action.displayName,
                email : action.email,
                photoURL : action.photoURL,
            }
        default :
            return state;
    }
}

export default userReducer;