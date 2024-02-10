import styled, { keyframes } from "styled-components";

const rotate = keyframes`
   0% { transform: rotate(0deg) }
  100% { transform: rotate(1turn) }
`;

const SpinnerElement = styled.span`
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  display: inline-block;

  border: 2px solid;
  border-color: #ccc;
  border-left-color: #999;
  border-radius: 50%;
  animation: 0.8s infinite ${rotate};
`;

const Spinner = () => {
  return <SpinnerElement />;
};

export default Spinner;
