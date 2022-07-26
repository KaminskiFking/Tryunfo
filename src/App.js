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
    this.setState({ isSaveButtonDisabled: false });
    e.preventdefault();

    if (!this.state) {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  stateDisabled = () => {
    const maxCardAttr = 210;
    const max = 90;
    const min = 0;

    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    if (cardName.length !== 0 && cardDescription && cardImage
    && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxCardAttr
    && Number(cardAttr1) <= max && Number(cardAttr2) <= max
    && Number(cardAttr3) <= max && Number(cardAttr1) >= min
    && Number(cardAttr2) >= min && Number(cardAttr3) >= min) {
      return false;
    }
    return true;
  }

  render() {
    const { cardName } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          value={ cardName }
          onInputChange={ this.onChange }
          isSaveButtonDisabled={ this.stateDisabled() }
        />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
