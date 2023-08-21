import MemberSavingsHook from "../Hooks/MemberSavingsHook"
import styles from "./MemberProfile.module.css"

const MemberStateResume = (data) =>{
    const { total } = MemberSavingsHook

    return (
        <div className={styles.resume}>
            {data.name}
           <p>Comulativo da poupanca: {total? `${total}` : 0},00MT</p>
           <p>Comulativo de Fundo Social: 200,00MT</p>
           {/* <p>Comulativo de Fundo Social: 200,00MT</p> */}
           <p>Credito em divida: 200,00MT</p>
           <p>Credito Reembolsado: 200,00MT</p>
           <hr/>
           <p>Montante provavel de receber: 5600,00MT</p>
        </div>
    )
}

export default MemberStateResume