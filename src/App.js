import { GraphQLClient, ClientContext } from 'graphql-hooks';
import Container from './Container';
import Logo from './Logo';
import Container_Pokemons from './Components/Container_Pokemons';
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
          <Container_Pokemons />        
        </Container>
      </>
    </ClientContext.Provider>
  );
}