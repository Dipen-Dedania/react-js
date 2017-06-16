import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS,FILTER_REMINDERS } from '../constants';

//From here the control goes to switch case inside the reducers

export const addReminder = (text, dueDate) => {
    console.log("Inside the  Actions addReminder() in App.js");
    const action = {
        type: ADD_REMINDER,
        text,
        dueDate
    }
    console.log('action in addReminder', action);
    return action;
}

export const deleteReminder = (id) => {
    const action = {
        type: DELETE_REMINDER,
        id
    }
    console.log('deleting in actions', action);
    return action;
}

export const clearReminders = () => {
    return {
        type: CLEAR_REMINDERS
    }
}


export const filterReminders = (text) => {
    return {
        type: FILTER_REMINDERS,
        text
    }
}