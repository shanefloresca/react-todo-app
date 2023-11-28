import { useEffect } from "react";
import Header from "./components/Header";
import Container from "./components/Container";

function App() {

  useEffect(() => {
    document.title = "Todo App";
  })

  return (
    <>
      <Header />
      <Container />
    </>
  )
}

export default App;