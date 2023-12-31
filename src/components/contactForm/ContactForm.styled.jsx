import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 24px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  gap: 5px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  align-items: center;
  font-size: large;
  text-align: left;
  padding: 0.5rem 15rem 0.5rem 1rem;
`;

export const Button = styled.button`
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: rgba(23, 26, 32, 0.8);
  border: none;
  border-radius: 6px;
  color: #fff;
  flex-grow: 1;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  height: 36px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  min-width: 185px;
  padding: 0 16px 0 16px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(23, 26, 32, 1);
    cursor: pointer;
  }
  &:focus {
    background-color: rgba(23, 26, 32, 1);
    cursor: pointer;
  }
`;
