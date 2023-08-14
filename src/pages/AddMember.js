import { useContext } from "react"
import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import useForm from "../Hooks/useForm"
import { UserContext } from "../UserContext"

const AddMember = () =>{
    const {createMember, error, loading} = useContext(UserContext)
    const name = useForm()
    const age = useForm()
    const inheritant = useForm()
    const sex = useForm()
    const admissionDate = useForm()
    const adress_id = useForm()
    const contact = useForm()

    const handdleSubmit = async (e) =>{
        e.preventDefault()
   
        if(
            name.validate() && 
            age.validate() && 
            inheritant.validate() &&
            sex.validate() &&
            admissionDate.validate() &&
            adress_id.validate() &&
            contact.validate()
            ){
                  
            createMember(
                name.value, 
                age.value,
                inheritant.value,
                sex.value,
                admissionDate.value,
                adress_id.value,
                contact.value)
                alert(error)
        }    
      }

    return (
        <div className="container">
            <p style={{textAlign: 'right', color: 'blue'}}>{error}</p>
            <h2>Cadastro de Membro</h2>
            <Input label="Nome Completo" type="text" name="name" {...name}/>
            <Input label="Idade" type="text" name="age" {...age}/>
            <Input label="Herdeiro" type="text" name="inheritant" {...inheritant}/>
            <Input label="Sexo" type="text" name="sex" {...sex}/>
            <Input label="Data de Admissao" type="date" name="admissionDate" {...admissionDate}/>
            <Input label="Endereco" type="text" name="adress_id" {...adress_id}/>
            <Input label="Contacto" type="text" name="contact" {...contact}/>
            <Button onClick={handdleSubmit}>Cadastrar</Button>
        </div>
    )
}

export default AddMember