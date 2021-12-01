const initialState = {
    pageName : "loginPage",
}

const mainReducer = (state=initialState,action) => {
    switch(action.type){
        case 'logout' :
            return{
                ...state,
                pageName : 'loginPage'
            }
        case 'setPageName' :
            return{
                ...state,
                pageName : action.payload
            }
        default :
            return state
    }
}

export default mainReducer;