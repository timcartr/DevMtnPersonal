const initialState = {
    user: {},
    members:[]
}

// Contants 
const UPDATE_USER_DATA = 'UPDATE_USER_DATA'
const UPDATE_MEMBERS_DATA = 'UPDATE_MEMBERS_DATA'
const CREATE_MEMBERS_DATA = 'CREATE_MEMBERS_DATA'
const UPDATE_USER_PROFILE_PIC = 'UPDATE_USER_PROFILE_PIC'

// Action Creators
export function updateUserData(user){
    return {
        type: UPDATE_USER_DATA,
        payload: user
    }
}

export function createMembersData(Members){
    return {
        type: CREATE_MEMBERS_DATA,
        payload: Members
    }
}

export function updateMembersData(Member){
    return {
        type: UPDATE_MEMBERS_DATA,
        payload: Member
    }
}

export function updateUserProfilePic(Pic){
    return {
        type: UPDATE_USER_PROFILE_PIC,
        payload: Pic
    }
}

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_DATA:
        return Object.assign({}, state, {user:action.payload})
        
        case CREATE_MEMBERS_DATA:
        return Object.assign({}, state, {members:action.payload})
        
        case UPDATE_MEMBERS_DATA:
            let mappedMembers = state.members.map(obj => {
                if(obj.email === action.payload.email){
                    obj = action.payload
                }
                return obj
            })
        return Object.assign({}, state, {members:mappedMembers})
        
        case UPDATE_USER_PROFILE_PIC:
            let newUser = {
                ...state.user 
            }
            newUser.profile_pic = action.payload
        return Object.assign({}, state, {user:newUser})

        default: 
            return state
    }
}