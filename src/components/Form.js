import React, {Component} from 'react';

class Form extends Component {
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
        hasTrunfo: false,
        isSaveButtonDisabled: false,
        };
      };

      onInputChange = ({ target }) => {
        const { name } = target;
        const value = (target.type === 'checkbox') ? target.checked : target.value;
        this.setState({
          [name]: value,
        });
      }

      onSaveButtonClick = ({ target }) => {
        if (target === target.disabled()) {
          return target.disabled();
        }
        const { name } = target;
        const value = (target.type === true) ? target.true : target.value;
        this.setState({
          [name]: value,
        });
    };

    render() {

        const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, isSaveButtonDisabled } = this.state;

        return (
        <form>
            <label>
                <input name='cardName'type="text" data-testid="name-input" value={cardName} onChange={this.onInputChange}></input>
            </label>
            <label>
                <textarea name='cardDescription' data-testid="description-input" value={cardDescription} onChange={this.onInputChange}></textarea>
            </label>
            <label>
                <input name="cardAttr1" type='number' value={cardAttr1} onChange={this.onInputChange} data-testid="attr1-input"></input>
            </label>
            <label>
                <input name="cardAttr2" type='number' value={cardAttr2} onChange={this.onInputChange} data-testid="attr2-input"></input>
            </label>
            <label>
                <input name="cardAttr3" value={cardAttr3} onChange={this.onInputChange} type='number' data-testid="attr3-input"></input>
            </label>
            <label>
                <input name="cardImage" type='text' value={cardImage} onChange={this.onInputChange} data-testid="image-input"></input>
            </label>
            <label>
                <select data-testid="rare-input" value={cardRare} name="cardRare" onChange={this.onInputChange}>
                    <option>raro</option>
                    <option>normal</option>
                    <option>muito raro</option>
                </select>
            </label>
            <label data-testid="trunfo-input">
                <input name="cardTrunfo" checked={cardTrunfo} onChange={this.onInputChange}  type='checkbox'></input>
            </label>
            <label>
                <button  onClick={this.onSaveButtonClick} disabled={isSaveButtonDisabled} data-testid="save-button" name='isSaveButtonDisabled'>Salvar</button>
            </label>
        </form>)
    }
}

export default Form