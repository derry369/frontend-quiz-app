import { styled } from "styled-components";
import ColorTheme from "./ColorTheme";
import flex from "../ui/Flex";
import { useQuiz } from "../context/QuizContext";
import QuizIconName from "../ui/QuizIconName";

type ImageMappingProps = {
    HTML: string;
    CSS: string;
    JavaScript: string;
    Accessibility: string;
  };
  
  const imageMapping: ImageMappingProps = {
    HTML: "html",
    CSS: "css",
    JavaScript: "js",
    Accessibility: "accessibility",
   };

const StyledHeader = styled.header`
  width: 100%;
  height: 7.2rem;
  ${flex}
  justify-content: space-between;
  padding: 2.5rem 0 0;

  @media (min-width: 1024px) {
    height: 8.5rem;
    align-self: center;
    padding: 0;
  }
`;

function Header() {
  const {location} = useQuiz();
  const {selectedQuizSubject} = useQuiz(); 
  const isHomepage =location === '/';
  return (
    <StyledHeader>
      {isHomepage && <QuizIconName
        name=''
        iconName=''
        cl=''
      />}
      {!isHomepage && <QuizIconName
        name={selectedQuizSubject}
        iconName={imageMapping[selectedQuizSubject as keyof ImageMappingProps]}
        cl={`--cl-${selectedQuizSubject}`}
      />}
      <ColorTheme />
    </StyledHeader>
  );
}

export default Header;