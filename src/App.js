import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Container from './Container';
import Logo from './Logo';
import ContainerPokemons from './Components/ContainerPokemons';
import "./App.css"
const client = new GraphQLClient({
  url: "https://p5k91xxvoq.sse.codesandbox.io/",
});

export default function App() {
  return (
    <ClientContext.Provider value={client}>
      <>
        <Container>
          <Logo />  
          <ContainerPokemons />        
        </Container>
      </>
    </ClientContext.Provider>
  );
}