import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: false,
      onInputChange: this.onChange,
      onSaveButtonClick: this.ButtonClick,
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
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form value={ this.state } />
      </div>
    );
  }
}

export default App;
