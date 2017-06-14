import React from 'react'

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }

  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <h1>Click for focus</h1>
        <hr />
        <div>
        React supports a special attribute that you can attach to any component. The ref attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.

        When the ref attribute is used on an HTML element, the ref callback receives the underlying DOM element as its argument. For example, this code uses the ref callback to store a reference to a DOM node:
        </div>
        <br/>
        <input type="text" value="no focus" className="form-control"/>
        <br/>
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} className="form-control"/>
          <br/>
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focus}
          className="btn btn-sm btn-primary"
        />
      </div>
    );
  }
}

export default CustomTextInput