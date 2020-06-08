import {userService} from '../../Services/index'
import {FETCH_CREDENTIALS} from './type'
import {createAction} from './index'

export const login = user => {
    return dispatch =>{
        userService
        .signIn(user)
        .then(res=>{
            dispatch(createAction(FETCH_CREDENTIALS, res.data))
            localStorage.setItem('credentials', JSON.stringify(res.data))
            
        }).catch(err=>{
            console.log(err)
        })
    };
}