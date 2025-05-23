import Profile from "./components/Profile";

export default function App() {
    return (
        <>
            <Profile nome={"helder"} idade={55} profissao={"atualmente no caps"} foto={"178433777.png"}/>

            <Profile nome={"gilerme"} idade={66} profissao={"presidiario"} foto={"162372169.png"}/>

            <Profile nome={"caio"} idade={21} profissao={"Servente de Pedreiro"} foto={"178342623.png"}/>
        </>
    )
}