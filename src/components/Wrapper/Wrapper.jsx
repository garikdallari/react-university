import { Container } from "./Wrapper.styles"
import Sidebar from "../Sidebar/Sidebar"
import Main from "../Main/Main"


export default function Wrapper() {
    return (
        <Container>
            <Sidebar />
            <Main></Main>
        </Container>
    )
}
