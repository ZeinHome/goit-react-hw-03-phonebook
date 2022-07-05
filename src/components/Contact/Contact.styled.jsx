import styled from 'styled-components';

export const ContactList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 25px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 5px;
  font-size: 21px;
  font-weight: 600;
  :not(:first-child) {
    margin-top: 8px;
  }
`;

export const Delete = styled.button`
  background-color: white;
  margin-left: 20px;
  outline: none;
  border: 1px solid black;
  border-radius: 4px;
  padding: 2px 8px;
  :hover {
    background-color: #0000ffa6;
  }
`;
