import React from "react";
import styled, { css } from "styled-components";
import { ButtonPropsType } from "../../../_types/buttonTypes";
import { COLOR_PALLETE, SHADOW, TRANSFORM } from "../../../_designTokens";

export default function DefaultButton(props: ButtonPropsType): JSX.Element {
  const { text, textColor, size, callback } = props;
  return (
    <Button color={textColor} size={size} onClick={() => callback}>
      {text}
    </Button>
  );
}

const Button = styled.button`
  color: ${(props) => props.color};
  box-shadow: ${SHADOW.boxShadow1};
  background: ${COLOR_PALLETE.redBackground};
  border: none;
  cursor: pointer;

  &:hover {
    transform: ${TRANSFORM.translateY};
    box-shadow: ${SHADOW.boxShadow2};
  }

  ${(props: { size: string | undefined }) =>
    props.size === "large" &&
    css`
      width: 200px;
      height: 50px;
      font-size: 1.1rem;
      border-radius: 8px;
    `}
  ${(props: { size: string | undefined }) =>
    props.size === "medium" &&
    css`
      width: 150px;
      height: 45px;
      font-size: 1rem;
      border-radius: 7px;
    `}
    ${(props: { size: string | undefined }) =>
    props.size === "small" &&
    css`
      width: 100px;
      height: 40px;
      font-size: 0.9rem;
      border-radius: 6px;
    `};
`;

DefaultButton.defaultProps = {
  text: "Button",
  textColor: COLOR_PALLETE.whiteText,
  size: "medium",
};
