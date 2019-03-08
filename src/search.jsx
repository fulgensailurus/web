import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  updateSearchValue(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  handleSearch(_event) {
    this.props.handleSearch(this.state.searchValue);
  }

  render() {
    return (
      <div>
        <div className="input-field col s6">
          <input id="name" type="text" onChange={this.updateSearchValue.bind(this)} value={this.state.searchValue} className="validate" />
          <label htmlFor="name">Name</label>
        </div>
        <div className="input-field col s6">
          <button onClick={this.handleSearch.bind(this)} className="btn waves-effect waves-light" type="submit" name="action" >
            Go!{" "}
          </button>
        </div>
      </div>
    );
  }
}

export { Search };
