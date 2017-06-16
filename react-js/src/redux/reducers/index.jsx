import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS,FILTER_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminder = (action) => {
    console.log('Harsh ', action);
    let { text, dueDate } = action;
    return {
        id: Math.random(),
        text,
        dueDate
    }
}

const removeById = (state = [], id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    return reminders;
}

const filterName = (state = [],name) => {
    if(name === ""){
        return reminders;
    }
    const reminders = state.filter(reminder => reminder.text === name);
    return reminders;
}

const reminders = (state = [], action) => {
    let reminders = null;
    state = read_cookie('reminders');
    switch(action.type) {
        case ADD_REMINDER:
            console.log("Inside the ADD_REMINDER Switch() in App.js");
            reminders = [...state, reminder(action)];
            bake_cookie('reminders', reminders);
            return reminders;
        case DELETE_REMINDER:
            reminders = removeById(state, action.id);
            bake_cookie('reminders', reminders);
            return reminders;
        case CLEAR_REMINDERS:
            reminders = [];
            bake_cookie('reminders', reminders);
            return reminders;
        case FILTER_REMINDERS:
            reminders = filterName(state,action.text);
            bake_cookie('reminders', reminders);
            return reminders;
        default:
            return state;
    }
}

export default reminders;
