import {userService} from '../../Services/index'
import {FETCH_CREDENTIALS} from './type'
import {createAction} from './index'

export const login = (user, back) => {
    return dispatch =>{
        userService
        .signIn(user)
        .then(res=>{
            dispatch(createAction(FETCH_CREDENTIALS, res.data))
            localStorage.setItem('credentials', JSON.stringify(res.data))
            back.push("/");
        }).catch(err=>{
            console.log(err)
            alert("Tài khoản không chính xác")
        })
    };
}

// bình thường tk này là action thôi ý là chỉ có payload và type thôi