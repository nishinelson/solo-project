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

export const getGroupEvents = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/groups/${id}`);
}

export const getEvents = (city, state) => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${city}/${state}`)

    if(!response.ok){
        throw response;
    }
    const events = await response.json();
    dispatch(setEvents(events));
};

export const getOneEvent = id => async (dispatch) => {
    const response = await csrfFetch(`/api/events/${id}`);
    if (!response.ok) {
        throw response;
    }
    const event = await response.json();

    dispatch(addEvent(event));
}

export const createEvent = event => async (dispatch) => {
    const { name, details, imageUrl, city, state, address, userId, groupId } = event;
    const response = await csrfFetch('/api/events', {
        method: "POST",
        body: JSON.stringify({name, details, imageUrl, city, state, address, userId, groupId})
    })
    if(response.ok) {
        const event = await response.json();
        dispatch(addEvent(event))
        return event;
    }
}

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
            return {
                ...events,
                [action.payload.id]: action.payload,
            }
        default:
            return events;
    }
};

export default eventReducer;
