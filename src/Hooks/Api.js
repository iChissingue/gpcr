export const URL_POST = "http://localhost:2020/user/login"

export const USER_GET = (token)=>{
    return {
        url: 'http://localhost:2020/user/getLoginCredentials',
        headers: {
                Authorization: `Bearer ${token}`
              }
    }
}
