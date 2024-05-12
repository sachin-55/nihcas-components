import Alert from "./components/Alert/Alert";
import { Button } from "./components/Button";
import Flex from "./components/Flex";

function App() {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
        direction="column"
        width="100%"
      >
        <Button variant="no-style">This is a button</Button>
        <Alert
          text="HEllo THIS is a  button"
          onClose={() => alert("THIS IS A CLOSE")}
        />
      </Flex>
    </>
  );
}

export default App;
