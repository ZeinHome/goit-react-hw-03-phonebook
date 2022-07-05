import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 700;
`;
export const Input = styled(Field)`
  width: 200px;
  margin-top: 20px;
  padding: 5px;
  outline: none;
`;
export const Btn = styled.button`
  margin-top: 20px;
  padding: 2px 10px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;
