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
    }
}

export default useForm