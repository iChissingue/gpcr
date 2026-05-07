const basicURL = 'https://pcr-api-prod.onrender.com'

export const URL_POST = `${basicURL}/user/login`

export const USER_GET = (token)=>{
    return {
        url: `${basicURL}/user/getLoginCredentials`,
        headers: {
                Authorization: `Bearer ${token}`
              }
    }
}

export const USER_TOKEN_VALIDATE = (token)=>{
    return {
        url: `${basicURL}/user/loginTokenValidate`,
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
        url: `${basicURL}/user`,
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
        url: `${basicURL}/members`
    }
}

export const MEMBER_GET = (id) =>{
    return {
        url: `${basicURL}/member/${id}`
    }
}

export const MEMBERSAVINGS_GET = (id) =>{
    return {
        url: `${basicURL}/savings/${id}`
    }
}

export const MEMBERS_POST = () =>{
    return {
        url: `${basicURL}/member`
    }
}

export const SAVINGS_POST = (savingsData) =>{
    return {
        url: `${basicURL}/savings`,
        body: savingsData
    }
}

export const SAVINGS_GET = (savingsReportData) =>{
    return {
        url: `
        ${basicURL}/savingsbetween/
        ${ savingsReportData.startDate}, 
        ${savingsReportData.endDate}}
        `,
        body: savingsReportData
    }
}

export const ALLSAVINGS_GET = () =>{
    return {
        url: `${basicURL}/savings`,
    }
}

export const ALLREFUNDS_GET = () =>{
    return {
        url: `${basicURL}/refunds`,
    }
}

export const LOAN_POST = (loanData) =>{
    return {
        url: `${basicURL}/loan`,
        body: loanData
    }
}

export const REFUND_POST = (refundData) =>{
    return {
        url: `${basicURL}/refund`,
        body: refundData
    }
}

export const MEMBER_DELETE = (id) =>{
    return {
        url: `${basicURL}/member/${id}`,
    }
}

