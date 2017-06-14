import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder , deleteReminder, clearReminders} from '../actions/actions';
import {bindActionCreators} from 'redux';
import moment from 'moment';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: ''
        }
    }

    //After call the control reaches here it will go to reducers to from where data will be going to the store to save it.
    addReminder() {
        console.log("Inside the addReminder() in App.js");
        this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReminders(id) {
        this.props.deleteReminder(id);
    }

    renderReminders() {
        const { reminders } = this.props;
        console.log("Inside renderReminders", reminders)
        return (
            <ul className="list-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item white-color-shadow cursor-pointer">
                                <div className="list-item">
                                    <div className="reminder-text">{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                                </div>
                                <div
                                    className="list-item delete-button"
                                    onClick={() => this.deleteReminders(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline reminder-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.setState({text: event.target.value})}
                        />
                        <input
                            className="form-control"
                            type="datetime-local"
                            onChange={event => this.setState({dueDate: event.target.value})}
                        />
                    </div>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.addReminder()}
                    >
                        Add Reminder
                    </button>
                </div>
                { this.renderReminders() }
                <div
                    className="btn btn-danger"
                    onClick={() => this.props.clearReminders()}
                >
                    Clear Reminders
                </div>
            </div>
        )
    }
}

//store is accessed here
function mapStateToProps(state) {
    return {
        reminders: state
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
        addReminder:addReminder,
        deleteReminder:deleteReminder,
        clearReminders:clearReminders
    },dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
