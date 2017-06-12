import React from 'react';


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
        const num1 = this.state.num1;
        const num2 = this.state.num2;
        const dob = this.state.dob;
        return (
            <div>
                <div>
                    <p>num1</p>
                    <input type="text" value={num1}  onChange={this.updateMe}/>
                </div>

                <div>
                    <p>num2</p>
                    <input type="text"  readOnly value={num2} />
                </div>

                <div>
                    <p>DOB</p>
                    <input type="text"  value={dob}  onChange={this.updateDob}/>
                </div>

                <div className="single-line">
                    <button onClick={this.doubleIt.bind(this,num1, num2)} > Double it! </button>
                </div>

                <div className="single-line">
                    <button placeholder="dd-mm-yyyy"  onClick={this.CalculateDOB.bind(this,dob)} > Calculate Age! </button>
                </div>

                <div className="single-line">
                    <button placeholder="dd-mm-yyyy"  onClick={this.toggle} > Toggle! </button>
                </div>

                {this.state.showAge && < Result year ={this.state.year} month = {this.state.month} day = {this.state.day} />}

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