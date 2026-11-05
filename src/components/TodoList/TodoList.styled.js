import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
`;

export const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${props => (props.$completed ? '#050505' : '#1f2937')};
  text-decoration: ${props => (props.$completed ? 'line-through' : 'none')};
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  font-size: 14px;
  color: #ef4444;
  background-color: transparent;
  border: 1px solid #ef4444;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #fff;
    background-color: #ef4444;
  }
`;