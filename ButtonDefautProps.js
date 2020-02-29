import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {text: 'I am a button'}; 

ReactDOM.render(
  <Button text=""/>, 
  document.getElementById('app')
);



// If there is no text for the button to take it will auto render the button with "I am a button" text 