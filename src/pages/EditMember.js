import { useContext, useEffect, useState } from "react"
import Button from "../Components/Forms/Button"
import Input from "../Components/Forms/Input"
import useForm from "../Hooks/useForm"
import { UserContext } from "../UserContext"

const EditMember = () =>{
    const { memberData, createMember, error, loading} = useContext(UserContext)
    const name = useForm()
    const age = useForm()
    const inheritant = useForm()
    const sex = useForm()
    const admissionDate = useForm()
    const adress_id = useForm()
    const contact = useForm()
    
    const [ values, setValues ] = useState({name, age, inheritant, sex, admissionDate, adress_id, contact})

    useEffect(() =>{
        setValues({
            ...values,
            name: memberData.name,
            age: memberData.age,
            inheritant: memberData.inheritant,
            sex: memberData.sex,
            admissionDate: memberData.admissionDate,
            adress_id: memberData.adress_id,
            contact: memberData.contact
        })
    }, [])

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
            <h2>Atualizar Membro</h2>
            <Input label="Nome Completo" type="text" name="name"  value={values.name} onChange={e => setValues({...values.name, name: e.target.value })} />
            <Input label="Idade" type="text" name="age" value={values.age} onChange={e => setValues({...values.age, age: e.target.value })}/>
            <Input label="Herdeiro" type="text" name="inheritant" value={values.inheritant} onChange={e => setValues({...values.inheritant, inheritant: e.target.value })}/>
            <label style={{display: 'flex', marginBottom: 15}}>
                <input label="Sexo" type="radio" name="sex" value="Masculino" {...sex}/>
                Masculino
                <input label="Sexo" type="radio" name="sex" value="Feminino" {...sex}/>
                Feminino
            </label>
            <Input label="Data de Admissao" type="date" name="admissionDate" value={new Date(new Date(values.admissionDate).toDateString)} onChange={e => setValues({...values.admissionDate, admissionDate: e.target.value })}/>
            <Input label="Endereco" type="text" name="adress_id" value={values.adress_id} onChange={e => setValues({...values.adress_id, adress_id: e.target.value })}/>
            <Input label="Contacto" type="text" name="contact" value={values.contact} onChange={e => setValues({...values.contact, contact: e.target.value })}/>
            <Button onClick={handdleSubmit}>Atualizar</Button>
        </div>
    )
}

export default EditMember