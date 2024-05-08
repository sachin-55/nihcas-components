import { Button } from "./components/Button";
import Flex from "./components/Flex";

function App() {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <p style={{}}>HELLO DUDE</p>

        <Button>This is a button</Button>
      </Flex>
    </>
  );
}

export default App;
