const initialState = {
    daily: false,
    monthly: false,
    yearly: false,
    user: {},
    members:[]
}

// Contants 
const UPDATE_USER_DATA = 'UPDATE_USER_DATA'
const UPDATE_MEMBERS_DATA = 'UPDATE_MEMBERS_DATA'

// Action Creators
export function updateUserData(user){
    return {
        type: UPDATE_USER_DATA,
        payload: user
    }
}

export function updateMembersData(Members){
    return {
        type: UPDATE_MEMBERS_DATA,
        payload: Members
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