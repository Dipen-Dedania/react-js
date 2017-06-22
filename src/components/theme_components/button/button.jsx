import React from 'react';
import {Button,Panel,DropdownButton,MenuItem,ButtonToolbar,Row,Col,FormControl} from 'react-bootstrap'

class ButtonComp extends React.Component{

    constructor(){
        super()
        this.state = {
            buttontype : 'default',
            buttontext : 'Hello',
            buttonsize : '20'
        }
    }


    ChangeOption(event){
        this.setState({
            buttontype : event.target.value
        })
    }

    ChangeText(event){
        this.setState({
            buttontext : event.target.value
        })
    }

    ChangeSize(event){
        console.log(event.target.value)
        this.setState({
            buttonsize : event.target.value
        })
    }

    render(){

        const colorClass = ["default", "primary", "success", "info", "warning", "danger"];

        const populateOption = colorClass.map((color) =>
         <option>{color}</option>);

        return (
            <div>
                <h2>Reusable Component</h2>
                <Panel>
                    <div>
                        <h4>Input</h4>
                        <Row>
                            <Col xs={12} md={2} lg={2} sm={12}>
                                <select onChange={this.ChangeOption.bind(this)}>
                                    {populateOption}
                                </select>
                            </Col>
                            <Col xs={12} md={6} lg={6} sm={12}>
                                <FormControl
                                    type="text"
                                    placeholder="Enter text for button"
                                    value = {this.state.buttontext}
                                    onChange={this.ChangeText.bind(this)}
                                />
                            </Col>
                            <Col xs={12} md={4} lg={4} sm={12}>
                                <FormControl
                                    type="number"
                                    placeholder="Enter size of button"
                                    value = {this.state.buttonsize}
                                    onChange={this.ChangeSize.bind(this)}
                                />
                            </Col>
                        </Row>
                    </div>
                </Panel>
                <Panel>
                    <div>
                        <h4>Output</h4>
                        <SimpleButton Data={this.state}/>
                    </div>
                </Panel>
            </div>)
    }
}

class SimpleButton extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick (props){
        this.props.handleClick();
    }

    render(){
        return(
            <div>
                <Button bsStyle={this.props.Data.buttontype}  style={{fontSize : this.props.Data.buttonsize + 'px'}} onClick={this.handleClick}>
                    {this.props.Data.buttontext}
                </Button>
            </div>
        )
    }
}

export {ButtonComp,SimpleButton};

