import React from 'react';
import ReactDOM from 'react-dom';

import { ResultList } from './list';
import { Search } from './search';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      lists: []
    };
  }

  getUser(uid) {
    console.log(`backend: ${uid}`);
    axios.get(`http://localhost:3001/users/${uid}`)
      .then(({ data }) => {
        this.setState({ user: data })
        this.getLists(this.state.user);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getLists(user) {
    // axios.get(`http://localhost:3000/lists?user=${user.id}`)
    //   .then(console.log);
    this.setState((prevState) => ({
      lists: [...prevState.lists, 'cat']
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m1 xl7 offset-xl1 center-on-small-only">
            <h1 className="header">Shoppinglist</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m1 xl7 offset-xl1 center-on-small-only">
            <Search handleSearch={this.getUser.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8 offset-m1 xl7 offset-xl1 center-on-small-only">
            <ResultList lists={this.state.lists} />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root')
)
