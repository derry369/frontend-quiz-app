import ConMain from "./components/ConMain";
import { QuizProvider } from "./context/QuizContext";
import GlobalStyles from "./components/styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyles />
      <QuizProvider>
        <ConMain />
      </QuizProvider>
    </>
  );
}

export default App;
