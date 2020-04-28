import { GET_USERS } from './types';
import axios from 'axios';


export const getUsers = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(users => dispatch({
            type: GET_USERS,
            payload: users.data
        }))
}