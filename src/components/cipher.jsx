import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class CipherComponent extends Component {
  constructor() {
    super();
    this.state = {
      cipher: '',
      encrypted: '',
      errorText: '',
      shift: 0,
    }

    this.getCipherText = this.getCipherText.bind(this);
    this.cipherTextChanged = this.cipherTextChanged.bind(this);
    this.cipherShiftChanged = this.cipherShiftChanged.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  getCipherText() {  
    const { cipher, shift } = this.state;
    let encrypted_text = '';  
    try {
        for(let i=0; i<cipher.length; i++) {
            // capital letters
            if (cipher[i] === cipher[i].toUpperCase()) {
                encrypted_text += String.fromCharCode((cipher.charCodeAt(i) + shift - 65) % 26 + 65);
            }  
            // small letters
            else {
                encrypted_text += String.fromCharCode((cipher.charCodeAt(i) + shift - 97) % 26 + 97);
            }
        }
    } catch(err) {
        this.setState({
            errorText: 'Some error occurred' 
        })  
    }
    this.setState({
        encrypted: encrypted_text
    })
  }

  cipherTextChanged(event) {
    this.setState({
        cipher: event.target.value
    })  
  }

  cipherShiftChanged(event) {
    this.setState({
        shift: parseInt(event.target.value)
    })  
  }

  clearInput() {
    this.setState({
        encrypted: '',
        errorText: '',
    })
  }

  render() {
    const { encrypted, errorText } = this.state;
    return (
      <Fragment>
        <h2 className="text-center my-3">
            Cipher Generator
        </h2>
        
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="cipher-text">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Enter Plain Text Here"
            aria-label="Enter Plain Text Here"
            aria-describedby="cipher-text"
            onChange={this.cipherTextChanged.bind(this)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="cipher-shift">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Cipher Shift Count"
            aria-label="Cipher Shift Count"
            aria-describedby="cipher-shift"
            onChange={this.cipherShiftChanged.bind(this)}
          />
        </InputGroup>
        {encrypted.length ? 
        <p className='bg-success text-white p-3 text-center my-3'>
            Encrypted Text is {encrypted}
        </p>
        : null}
        {errorText.length ? 
        {errorText} : null}
        <div className="d-flex justify-content-center my-3">
            <Button onClick={this.getCipherText}>Generate Cipher Text</Button>
            <Button onClick={this.clearInput} className='bg-danger mx-3'>Clear</Button>
        </div>
      </Fragment>
    );
  }
}


export default CipherComponent;