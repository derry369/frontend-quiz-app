import { styled } from "styled-components";
import SelectBtn from "../ui/SelectBtn";
import flex from "../ui/Flex";
import smallCon from "../ui/SmallCon";
import { useQuiz } from "../context/QuizContext";
import data from "../assets/data/data.json";
import { NavLink } from "react-router-dom";

type StyledIconConProps = {
  $cl: string;
  $img: keyof ImageMappingProps;
};

type ImageMappingProps = {
  HTML: string;
  CSS: string;
  JavaScript: string;
  Accessibility: string;
};

const imageMapping = {
  HTML: "icon-html.svg",
  CSS: "icon-css.svg",
  JavaScript: "icon-js.svg",
  Accessibility: "icon-accessibility.svg",
};

const StyledQuizSelectQuiz = styled.div`
  ${flex}
  gap: 1.2rem;
  flex-direction: column;

  &:focus {
    outline: none;
    border: none;
  }

  @media (min-width: 768px) {
    gap: 2.4rem;
  }
  @media (min-width: 1024px) {
    width: 45%;
  }
`;

const StyledIconCon = styled.div<StyledIconConProps>`
  ${smallCon}
  background-color: ${(props) => props.$cl && `var(${props.$cl})`};
  background-image: ${(props) =>
    props.$img && `url("/images/${imageMapping[props.$img]}")`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 2.8rem;
`;

const StyledNavLink = styled(NavLink)`
  width: 100%;
  
  &:focus-visible {
    outline: 3px solid black;
    border-radius: 12px;
  }
`;

function QuizSelectQuiz() {
  const { handleStartQuiz, updateSelectedQuizSubject,} = useQuiz();
  const { quizzes } = data;

  return (
    <StyledQuizSelectQuiz >
      {quizzes.map((quiz) => (
        <StyledNavLink 
        to={`/quiz/${quiz.title}/question/1`}
        key={quiz.title}
        onKeyDown={() => {
          handleStartQuiz();
          updateSelectedQuizSubject(quiz.title)
        }}
        tabIndex={0}
        >
        
          <SelectBtn
            handleClick={() => {
              handleStartQuiz();
              updateSelectedQuizSubject(quiz.title);
            }}
            role={`option ${quiz.title}`}
            handleKeyDown={() => {
              handleStartQuiz();
              updateSelectedQuizSubject(quiz.title);

            }}
          >
            <StyledIconCon
              key={quiz.title}
              $cl={`--cl-${quiz.title}`}
              $img={quiz.title as keyof ImageMappingProps}
            />

            {quiz.title}
          </SelectBtn>
        </StyledNavLink>
      ))}
    </StyledQuizSelectQuiz>
  );
}

export default QuizSelectQuiz;
