import { GET_USERS } from '../action/types';

const UserReducer = (state = [], action) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload

        default:
            return state
    }
}

export default UserReducer;