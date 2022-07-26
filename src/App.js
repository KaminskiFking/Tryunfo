import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      saveList: [],
      hasTrunfo: false,
    };
  }

  onChange = ({ target }) => {
    const { name } = target;
    const { hasTrunfo } = this.state;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    if (hasTrunfo === false) {
      this.setState({ hasTrunfo: true });
    }
    this.setState({
      [name]: value });
  }

  ButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const objUpdate = {
      nome: cardName,
      descriçao: cardDescription,
      imagem: cardImage,
      attr1: cardAttr1,
      attr2: cardAttr2,
      attr3: cardAttr3,
      raro: cardRare,
      trunfo: cardTrunfo,
    };
    this.setState((prevState) => ({ saveList: [...prevState.saveList, objUpdate],
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));
  };

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
    const { saveList } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onChange }
          isSaveButtonDisabled={ this.stateDisabled() }
          onSaveButtonClick={ this.ButtonClick }
        />
        <Card { ...this.state } />
        {saveList.map((element) => (
          <div key={ element.nome }>
            <Card
              cardName={ element.nome }
              cardImage={ element.imagem }
              cardRare={ element.raro }
              cardAttr1={ element.attr1 }
              cardAttr2={ element.attr2 }
              cardAttr3={ element.attr3 }
              cardTrunfo={ element.trunfo }
              cardDescription={ element.descriçao }
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
