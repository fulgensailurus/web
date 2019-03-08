import React from 'react';

class ResultList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elements = this.props.lists.map((item, index) => <li key={index}>{item}</li>);

    return <ul>{elements}</ul>;
  }
}

export {
    ResultList
};
