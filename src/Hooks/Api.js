// const basicURL = 'https://pcr-api-prod.onrender.com'

export const URL_POST = 'https://pcr-api-prod.onrender.com/user/login'

export const USER_GET = (token)=>{
    return {
        url: 'https://pcr-api-prod.onrender.com/user/getLoginCredentials',
        headers: {
                Authorization: `Bearer ${token}`
              }
    }
}

export const USER_TOKEN_VALIDATE = (token)=>{
    return {
        url: 'https://pcr-api-prod.onrender.com/user/loginTokenValidate',
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
        url: 'https://pcr-api-prod.onrender.com/user',
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
        url: "https://pcr-api-prod.onrender.com/members"
    }
}

export const MEMBER_GET = (id) =>{
    return {
        url: `https://pcr-api-prod.onrender.com/member/${id}`
    }
}

export const MEMBERSAVINGS_GET = (id) =>{
    return {
        url: `https://pcr-api-prod.onrender.com/savings/${id}`
    }
}

export const MEMBERS_POST = () =>{
    return {
        url: "https://pcr-api-prod.onrender.com/member"
    }
}

export const SAVINGS_POST = (savingsData) =>{
    return {
        url: "https://pcr-api-prod.onrender.com/savings",
        body: savingsData
    }
}

export const SAVINGS_GET = (savingsReportData) =>{
    return {
        url: `
        https://pcr-api-prod.onrender.com/savingsbetween/
        ${ savingsReportData.startDate}, 
        ${savingsReportData.endDate}}
        `,
        body: savingsReportData
    }
}

export const ALLSAVINGS_GET = () =>{
    return {
        url: `https://pcr-api-prod.onrender.com/savings`,
    }
}

export const ALLREFUNDS_GET = () =>{
    return {
        url: `https://pcr-api-prod.onrender.com/refunds`,
    }
}

export const LOAN_POST = (loanData) =>{
    return {
        url: "https://pcr-api-prod.onrender.com/loan",
        body: loanData
    }
}

export const REFUND_POST = (refundData) =>{
    return {
        url: "https://pcr-api-prod.onrender.com/refund",
        body: refundData
    }
}

export const MEMBER_DELETE = (id) =>{
    return {
        url: `https://pcr-api-prod.onrender.com/member/${id}`,
    }
}

