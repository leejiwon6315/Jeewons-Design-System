import React from "react";
import styled from "styled-components";
import { ButtonTypes } from "../../../types/buttonTypes";

export default function ButtonNo1(props: ButtonTypes): JSX.Element {
  return <Button>{props.text}</Button>;
}

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: gray;
`;
