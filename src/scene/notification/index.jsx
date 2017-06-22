import React from 'react';
import ReactDOM from 'react-dom';
import {SimpleButton} from '../../components/theme_components/button/button'
import Logo1 from '../../images/Material1.png'

const sampleData = {
          buttontype : 'info',
          buttontext : 'Click Me!!' ,
          buttonsize : '20'
      }

class Notifier extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (Notification.permission !== "granted")
      Notification.requestPermission();
  }

  handleClick (){
    if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.'); 
      return;
    }

    if (Notification.permission !== "granted")
      Notification.requestPermission();
    else {
      var notification = new Notification('Notification title', {
        icon: Logo1,
        body: "Hey there! You've been notified!",
      });

      notification.onclick = function () {
        window.open("https://github.com/Dipen-Dedania/react-js");      
      }; 
    }
  }

  render(){
    return (
      <div>
        <h1>Click below to get notify!!</h1>
        <SimpleButton handleClick={this.handleClick} Data = {sampleData}/>
      </div>
      );
  }
}

export default Notifier;