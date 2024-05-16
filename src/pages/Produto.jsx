import { Container } from "react-bootstrap";
import ColorSchemesExample from "../componentes/NavBar";
import { ListaProdutos } from "../componentes/ListaProdutos";
import DarkVariantExample from "../componentes/CarouselAnuncios";

function Produto() {
    return (
<>
        <ColorSchemesExample/>
        <DarkVariantExample/>


        <Container>
            
            <ListaProdutos/>



        </Container>
</>
    );
}

export { Produto };