export const URL_POST = "http://localhost:2020/user/login"

export const USER_GET = (token)=>{
    return {
        url: 'http://localhost:2020/user/getLogin',
        headers: {
                Authorization: `Bearer ${token}`
              }
    }
}

// axios.get('https://api.github.com/user', {
//   headers: {
//     'Authorization': `token `
//   }
// })
// .then((res) => {
//   console.log(res.data)
// })
// .catch((error) => {
//   console.error(error)
// })