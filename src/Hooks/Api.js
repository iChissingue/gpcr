export const URL_POST = "http://localhost:2020/user/login"

export const USER_GET = (token)=>{
    return {
        url: 'http://localhost:2020/user/getLoginCredentials',
        headers: {
                Authorization: `Bearer ${token}`
              }
    }
}

export const USER_TOKEN_VALIDATE = (token)=>{
    return {
        url: 'http://localhost:2020/user/loginTokenValidate',
        body: {token}
    }
}

export const USER_CREATE = (
    name, 
    username, 
    password, 
    confirmPassword, 
    userCategory, 
    userState) =>{
    return {
        url: 'http://localhost:2020/user',
        body: {name, 
            username, 
            password, 
            confirmPassword, 
            userCetegory_id: userCategory, 
            userState_id: userState
        }
    }
}


export const MEMBERS_GET = () =>{
    return {
        url: "http://localhost:2020/members"
    }
}

export const MEMBER_GET = (id) =>{
    return {
        url: `http://localhost:2020/member/${id}`
    }
}


export const MEMBERS_POST = () =>{
    return {
        url: "http://localhost:2020/member"
    }
}

