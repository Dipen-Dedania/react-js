import React from 'react'

//class ListOfWords extends React.Component {
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar'],
      count: 1
    };
    //this.state = {count: 1};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    const prevCount = this.state.count;
    words.push('marklar1');
    this.setState(
      {
        words: words,
        count: prevCount + 1
      });
  }

  render() {
    return (
      <div>
        <h1>Pure Component</h1>
        <hr />
        <div> Count: {this.state.count} </div>
        <div>
          <ListOfWords words={this.state.words} />
          <br />
          <button onClick={this.handleClick} className="btn btn-primary">Click Me!</button>
        </div>  
      </div>
    );
  }
}

export default WordAdder