import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
    };
  }

  onChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  ButtonClick = (e) => {
    this.setState({ isSaveButtonDisabled: true });
    e.preventdefault();
  };

  render() {
    const { cardName } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form value={ cardName } onInputChange={ this.onChange } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
