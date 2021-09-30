import "./App.css";

import { ClientContext, GraphQLClient } from "graphql-hooks";

import Container from "./Container";
import Logo from "./Logo";
import MainPage from "./Pages/MainPage/MainPage";

const client = new GraphQLClient({
  url: "https://p5k91xxvoq.sse.codesandbox.io/",
});

export default function App() {
  return (
    <ClientContext.Provider value={client}>
      <>
        <Container>
          <Logo />
          <MainPage></MainPage>
        </Container>
      </>
    </ClientContext.Provider>
  );
}
