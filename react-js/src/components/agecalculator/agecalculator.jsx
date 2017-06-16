import React from 'react';
//Importing CSS
import './agecalculator.css'
import '../../style.css'
import {SimpleButton} from '../button/button'
import {Panel} from 'react-bootstrap'

class Agecalculator extends React.Component {

    constructor(props){
        super(props);
        this.doubleIt = this.doubleIt.bind(this);
        this.updateMe = this.updateMe.bind(this);
        this.updateDob = this.updateDob.bind(this);
        this.toggle = this.toggle.bind(this);
        this.CalculateDOB = this.CalculateDOB.bind(this);
        this.state = {
            num1: 5,
            num2: 1,
            dob : '11-10-1993',
            year : '0',
            month : '0',
            day : '0',
            showAge : false
        };
    }

    doubleIt(num1, num2) {
        this.setState({
            num2: (num1 * 2 )
        });
    }

    CalculateDOB(dob){
        var dobs = dob.toString();
        var yearThen = parseInt(dobs.substring(6,10));
        var monthThen = parseInt(dobs.substring(3,5));
        var dayThen = parseInt(dobs.substring(0,2));

        var today = new Date();
        var birthday = new Date(yearThen, monthThen-1, dayThen);
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy B'day!!!");
        }
        var month_age = Math.floor(day_age/30);
        day_age = day_age % 30;

        this.setState({
            year : year_age,
            month : month_age,
            day : day_age,
            showAge : true
        })
    }

    updateMe(e) {
        console.log("updateMe");
        console.log(e.target.value);
        this.setState({
            num1: e.target.value
        });
    }

    updateDob(e) {
        console.log(e.target.value);
        this.setState({
            dob: e.target.value
        });
    }

    toggle() {
        const flag = this.state.showAge;
        this.setState({
            showAge: !flag
        });
    }


    render(){

        const sampleData = {
            buttontype : 'warning',
            buttontext : 'Test' ,
            buttonsize : '25'
        }

        const num1 = this.state.num1;
        const num2 = this.state.num2;
        const dob = this.state.dob;
        return (
            <div>
                <div>
                    <p className="p-style-1">Input Number</p>
                    <input className="form-control" type="text" value={num1}  onChange={this.updateMe}/>
                    <button className="btn btn-primary btn-style-1" onClick={this.doubleIt.bind(this,num1, num2)} > Double it! </button>
                </div>

                <div>
                    <p className="p-style-2">Output Num</p>
                    <input className="form-control" type="text"  readOnly value={num2} />
                </div>
                <hr/>
                <div>
                    <p className="p-style-1">Enter Your DOB</p>
                    <input className="form-control" type="text"  value={dob}  onChange={this.updateDob}/>
                    <button className="btn btn-primary btn-style-1" placeholder="dd-mm-yyyy"  onClick={this.CalculateDOB.bind(this,dob)} > Calculate Age! </button>
                    <button className="btn btn-primary btn-style-2" placeholder="dd-mm-yyyy"  onClick={this.toggle} > Toggle! </button>
                </div>

                {this.state.showAge && < Result year ={this.state.year} month = {this.state.month} day = {this.state.day} />}

                <Panel>
                    <h4>Accessing the Reusable button component from <em><b>Reusable Component Tab</b></em></h4>
                    <SimpleButton Data = {sampleData}/>
                </Panel>
            </div>)
    }
}
//This is a new component is child component which is rendered inside the parent component
class Result extends React.Component{
    // ----- This is how value is passed from parent to child with the help of PROPS  ------
    render(){
        return(
            <div>
                <div >You're {this.props.year} Years - {this.props.month}  Month - {this.props.day} Days Old</div>
            </div>
        )
    }
}

export default Agecalculator;
