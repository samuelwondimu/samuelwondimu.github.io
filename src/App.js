import { Box, Container } from "@material-ui/core";
import NavBar from "./components/NavBar";
import IntroPage from "./components/IntroPage";
import IntroTabs from "./components/IntroTabs";

function App() {
  return (
    <>
      <Container>
        <NavBar />
        <IntroPage />
      </Container>
      <Box style={{ backgroundColor: "#333", color: "#fff", padding: 50 }}>
        <IntroTabs />
      </Box>
    </>
  );
}

export default App;
