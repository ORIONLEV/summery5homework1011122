import { Component } from "react";
import { FilterWrapper, FilterInput } from "./Filter.styled";

class Filter extends Component {
  render() {
    const { onFilter } = this.props;
    return (
      <FilterWrapper>
        <FilterInput 
          type="text" 
          placeholder="Пошук завдань..." 
          onChange={(evt) => onFilter(evt.target.value)}
        />
      </FilterWrapper>
    );
  }
}

export default Filter;