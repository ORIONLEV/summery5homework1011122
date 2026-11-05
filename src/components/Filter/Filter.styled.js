import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-bottom: 20px;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border-color: #4f46e5;
  }
`;