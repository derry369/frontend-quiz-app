import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import flex from "./ui/Flex";
import Paragraph from "./ui/Paragraph";
import QuizIconName from "./ui/QuizIconName";
import { useQuiz } from "../context/QuizContext";

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

const StyledFinalScore = styled.div`
  width: 100%;
  ${flex}
  flex-direction: column;
  padding: 3.2rem 0;
  gap: 2rem;
  border-radius: 12px;
  background: var(--cl-bg-choice);
  box-shadow: 0px 16px 40px 0px var(--cl-shadow);
`;

function FinalScore() {
  const { correctAnswersCount } = useQuiz();
  const { type } = useParams();
  return (
    <StyledFinalScore>
      <QuizIconName
        name={type}
        iconName={imageMapping[type as keyof ImageMappingProps]}
        cl={`--cl-${type}`}
      />
      <Paragraph $size="large">{correctAnswersCount}</Paragraph>
      <Paragraph $size="medium">out of 10</Paragraph>
    </StyledFinalScore>
  );
}

export default FinalScore;
