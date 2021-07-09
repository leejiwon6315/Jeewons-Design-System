import React from "react";
import styled, { css } from "styled-components";
import { ButtonPropsType } from "../../../_types/buttonTypes";
import { colorPalette } from "../../../_designTokens";

export default function ButtonNo1(props: ButtonPropsType): JSX.Element {
  const { text, textColor, size } = props;

  return (
    <StyledButton color={textColor} size={size}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  color: ${(props) => props.color || colorPalette.blackText};
  background: ${colorPalette.redBackground};
  border: none;

  ${(props: { size: string }) =>
    props.size === "large" &&
    css`
      width: 200px;
      height: 50px;
      font-size: 1.1rem;
      border-radius: 8px;
    `}
  ${(props: { size: string }) =>
    props.size === "medium" &&
    css`
      width: 150px;
      height: 45px;
      font-size: 1rem;
      border-radius: 7px;
    `}
    ${(props: { size: string }) =>
    props.size === "small" &&
    css`
      width: 100px;
      height: 40px;
      font-size: 0.9rem;
      border-radius: 6px;
    `};
`;
