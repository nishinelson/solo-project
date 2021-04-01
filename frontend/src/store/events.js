import { csrfFetch } from './csrf';

const SET_EVENTS = 'events/set';
const ADD_EVENT = 'events/add';

export const setEvents = (events) => {
    return {
        type: SET_EVENTS,
        payload: events
    }
};

export const addEvent = (event) => {
    return {
        type: ADD_EVENT,
        payload: event
    }
};

export const getEvents = () => async (dispatch) => {
    const response = await csrfFetch('/api/events');
    if(!response.ok){
        throw response;
    }
    const events = await response.json();
    dispatch(setEvents(events));
};

const initialState = {};

const eventReducer = (events = initialState, action) =>{
    switch(action.type){
        case SET_EVENTS:
            const eventsPayload = action.payload;
            return eventsPayload.reduce((newEvents, event) =>{
                return {
                    ...newEvents,
                    [event.id]: event
                }
            }, {});
        case ADD_EVENT:
            return
        default:
            return events;
    }
};

export default eventReducer;
