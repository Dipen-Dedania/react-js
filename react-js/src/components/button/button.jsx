import React from 'react';
import {Button,Panel,DropdownButton,MenuItem,ButtonToolbar} from 'react-bootstrap'


class ButtonComp extends React.Component{
    render(){

        return (
            <div>
                <h2>Reusable Component</h2>
                <Panel>
                    <div>
                        <h2>Here</h2>
                        <DropdownButton bsStyle="default" title="Select Color" />
                    </div>
                </Panel>
            </div>)
    }
}



export default ButtonComp;

