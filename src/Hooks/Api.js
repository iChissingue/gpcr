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

export const MEMBERSAVINGS_GET = (id) =>{
    return {
        url: `http://localhost:2020/savings/${id}`
    }
}

export const MEMBERS_POST = () =>{
    return {
        url: "http://localhost:2020/member"
    }
}

export const SAVINGS_POST = (savingsData) =>{
    return {
        url: "http://localhost:2020/savings",
        body: savingsData
    }
}

export const SAVINGS_GET = (savingsReportData) =>{
    return {
        url: `
        http://localhost:2020/savingsbetween/
        ${ savingsReportData.startDate}, 
        ${savingsReportData.endDate}}
        `,
        body: savingsReportData
    }
}

export const ALLSAVINGS_GET = () =>{
    return {
        url: `http://localhost:2020/savings`,
    }
}

export const ALLREFUNDS_GET = () =>{
    return {
        url: `http://localhost:2020/refunds`,
    }
}

export const LOAN_POST = (loanData) =>{
    return {
        url: "http://localhost:2020/loan",
        body: loanData
    }
}

export const REFUND_POST = (refundData) =>{
    return {
        url: "http://localhost:2020/refund",
        body: refundData
    }
}

export const MEMBER_DELETE = (id) =>{
    return {
        url: `http://localhost:2020/member/${id}`,
    }
}

