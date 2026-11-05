import { Component } from "react";
import { Form, Input, Button } from "./TodoEditor.styled";

class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { textValue } = this.state;
    if (!textValue.trim()) return;
    
    this.props.onForm(textValue);
    this.setState({ textValue: "" });
  };

  render() {
    const { textValue } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input 
          type="text" 
          value={textValue} 
          placeholder="Введіть нове завдання..."
          onChange={(evt) => this.setState({ textValue: evt.target.value })}
        />
        <Button type="submit">Додати</Button>
      </Form>
    );
  }
}

export default TodoEditor;