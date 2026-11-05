import styled from 'styled-components';

export const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f4f4f9;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
`;

export const InfoText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;

  span {
    color: #4f46e5;
  }
`;