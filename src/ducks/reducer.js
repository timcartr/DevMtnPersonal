const initialState = {
    daily: false,
    monthly: false,
    yearly: false,
    user: {}
}

// Contants 
const UPDATE_USER_DATA = 'UPDATE_USER_DATA'

// Action Creators
export function updateUserData(user){
    return {
        type: UPDATE_USER_DATA,
        payload: user
    }
}

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_DATA:
        return Object.assign({}, state, {user:action.payload})

        default: 
            return state
    }
}