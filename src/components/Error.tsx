import { styled } from "styled-components";
import flex from "./ui/Flex";
import Paragraph from "./ui/Paragraph";

const StyledError = styled.div`
  ${flex}
  gap: .8rem;
  grid-row: 3/4;
  grid-column: 2/3;
`;

const StyledImg = styled.div`
  background: url("/icon-error.svg") no-repeat center;
  width: 3.2rem;
  height: 3.2rem;
  background-size: 90%;
  margin-bottom: 0.5rem;
`;
function Error() {
  return (
    <StyledError>
      <StyledImg />
      <Paragraph $cl="error" $size="medium">
        Please select an answer
      </Paragraph>
    </StyledError>
  );
}

export default Error;
