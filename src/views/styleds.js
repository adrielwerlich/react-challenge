
import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  background: #0d171f;
`;

export const NameInput = styled.input`
  width: 200px;
  border-radius: 5px;
  height: 30px;
  border: none;
`;

export const HighlightContainer = styled.div`
  min-height: 220px;
  text-align: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const SubmitButton = styled.button`
  border-radius: 5px;
  background-color: rgba(100, 185, 43, 0.53);
  width: 100%;
`;

