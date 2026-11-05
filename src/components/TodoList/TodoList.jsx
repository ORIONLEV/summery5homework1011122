import { Component } from "react";
import { List, ListItem, TodoContent, Checkbox, Text, DeleteButton } from "./TodoList.styled";

class TodoList extends Component {
  render() {
    const { todos, onDelete, handleCompleted } = this.props;
    return (
      <List>
        {todos.map(({ id, text, completed }) => (
          <ListItem key={id}>
            <TodoContent>
              <Checkbox 
                type="checkbox" 
                checked={completed} 
                onChange={() => handleCompleted(id)} 
              />
              <Text $completed={completed}>{text}</Text>
            </TodoContent>
            <DeleteButton type="button" onClick={() => onDelete(id)}>
              Delete
            </DeleteButton>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default TodoList;