import { Container } from "react-bootstrap";
import CarouselAnuncios from "../componentes/CarouselAnuncios";
import { ListaProdutos } from "../componentes/ListaProdutos";
import NavBar from "../componentes/NavBar";

function Home() {
  return (

    <Container>

    <NavBar>
      <CarouselAnuncios />
      <ListaProdutos />
    </NavBar>
    
    </Container>
  );
}

export { Home };