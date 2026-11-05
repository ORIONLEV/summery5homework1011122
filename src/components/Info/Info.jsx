import { Component } from "react";
import { InfoContainer, InfoText } from "./Info.styled";

class Info extends Component {
  render() {
    const { count, done } = this.props;
    return (
      <InfoContainer>
        <InfoText>Кількість: <span>{count}</span></InfoText>
        <InfoText>Виконано: <span>{done}</span></InfoText>
      </InfoContainer>
    );
  }
}

export default Info;