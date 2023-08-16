import { useContext } from "react"
import { UserContext } from "../UserContext"

const MemberHistory = () =>{
    const { memberSavings, memberData} = useContext(UserContext)

    return (
        <section className="container" style={{marginTop: 20}}>
            <h2>Lista de Poupancas</h2>
            {
                memberSavings? memberSavings.map(savings => (
                  <p style={{marginTop: 20}}>{`${savings.savingsAmmount},00MT - ${savings.sFund},00MT - ${savings.savingsDate}`}</p>  
                ))
                : <p style={{marginTop: 20}}>`O(A) Sr(a) ${memberData.name} ainda nao efetuou nenhuma poupanca!`</p>
            }
        </section>
    )

}

export default MemberHistory