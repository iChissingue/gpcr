import { useState, } from "react"



const useForm = () =>{
    const [  value, setValue ] = useState('')
    const [  error, setError ] = useState(null)

    
    const validate =(value) =>{
        
        if(value.length === 0){
            setError("Preencha um valor!")
            return false
        }else{
            setError(null)
            return true
        }
    }
    
    // const password = (value) =>{
       
    //     let regex = /^(?=.*[a-z])(?=.*[A-Z]){8,}$/
    //     let result = regex.test(value)
    //     if(result){
    //         console.log(result)
    //         setError(null)
    //         return true
            
    //     }else{
    //         setError("A Senha é fraca!")
    //     }
    // }

    const onChange = ({target}) =>{
        if(error)validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value),
        // password
    }
}

export default useForm