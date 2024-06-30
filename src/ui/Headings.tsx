import { styled, css } from "styled-components";

type StyledComponentProps = {
  as: "h1" | "h3" | "h2" | false;
};


const Headings = styled.h1<StyledComponentProps>`
  color: var(--cl-txt-main);
  font-weight: 500;

  ${(props) =>
    (props.as === "h1" || props.as === "h3") &&
    css`
      font-size: 4rem;
      line-height: 40px;
      @media (min-width: 768px) {
        font-size: 6.4rem;
        line-height: 64px;
      }
    `};

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 8.8rem;
      line-height: 88px;
      @media (min-width: 768px) {
        font-size: 14.4rem;
        line-height: 144px;
      }
    `};
`;

export default Headings;
