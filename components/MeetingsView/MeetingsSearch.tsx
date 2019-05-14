import React from "react";
import "./MeetingsSearch.scss";

type MeetingsSearchProps = {
  handleSearch: (
    value: string
  ) => (event: React.FormEvent<HTMLFormElement>) => void;
};

type MeetingsSearchState = {
  value?: string;
};

class MeetingsSearch extends React.Component<
  MeetingsSearchProps,
  MeetingsSearchState
> {
  state = {
    value: ""
  };

  handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      value: event.currentTarget.value
    });
  };

  render() {
    return (
      <form
        className="Search"
        onSubmit={this.props.handleSearch(this.state.value)}
      >
        <input
          className="Search__input"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="클럽명 검색"
          type="search"
        />
        <input className="Search__submit" type="submit" value="검색" />
      </form>
    );
  }
}

export default MeetingsSearch;
