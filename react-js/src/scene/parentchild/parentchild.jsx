/**
 * Created by Harsh on 08-06-2017.
 */
import React from 'react';
//Importing CSS
import './parentchild.css'

class Parentchild extends React.Component {

    //Data which is received from child will be accessed to parent here
    myCallback = (dataFromChild) => {
        console.log(dataFromChild)
        alert(dataFromChild)
    }


    handleClick(Data){
        alert(Data)
    }

    render(){
        const parentValue = "This is value passed from Parent component to Child!"
        const Data = "Alternate way to pass value from Parent component to Child!"
        //Here ValuePassed is a Prop of parent which is sent to the child which can access the parent prop
        return (
            <div className="main-box">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 center-align">
                        <div className="box">
                            <p>Parent</p>
                            <Child1 valuePassed= {parentValue} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 center-align">
                        <div className="box">
                            <p>Parent</p>
                            <Child2 callbackFromParent={this.myCallback} />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 center-align">
                        <div className="box">
                            <p>Parent</p>
                            <Child3 onSomeEvent={() => this.handleClick(Data)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//Child1 Component access the value passed from Parent component
class Child1 extends React.Component{

    log(ClassName){
        alert(ClassName);
    }

    render(){
        return(
            <div className="small-box" onClick={this.log.bind(this,this.props.valuePassed) }>Child1</div>
        )
    }
}

//Parent Component access the value passed from Child2 component
class Child2 extends React.Component{

    log(ClassName){
        //This is the value which is passed from child component which parent component will be able to access in callback method
        this.props.callbackFromParent("This is value passed from Child component to Parent!");
    }

    render(){
        return(
            <div className="small-box" onClick={this.log.bind(this,this.props.valuePassed) }>Child2</div>
        )
    }
}

//Alternate way for sending value from child to parent
class Child3 extends React.Component{

    render(){
        return(
            <div className="small-box" onClick= {this.props.onSomeEvent} >Child3</div>
        )
    }
}

export default Parentchild


//-------------------------------------------Parent to Child — Use Prop-------------------------------------------
//This is the easiest direction in React to transfer data. If I have access to data in my parent component that I need my child component to have access to, I can pass it as a prop to the child when I instantiate it within the parent.

//-------------------------------------------Child to Parent — Use a callback and states-------------------------------------------
//This one is a bit trickier. If I have data in my child that my parent needs access to, I can do the following:
//1. Define a callback in my parent which takes the data I need in as a parameter.
//2. Pass that callback as a prop to the child (see above).
//3. Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), and pass in the data as the argument.

//Ref - https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17