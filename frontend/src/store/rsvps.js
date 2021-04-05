import { csrfFetch } from './csrf';

const ADD_RSVP = 'rsvp/add';

export const addRSVP = (rsvp) => {
    return {
        type: ADD_RSVP,
        payload: rsvp
    }
}

export const joinEvent = (userId, eventId) => async (dispatch) => {
    const response = await csrfFetch('/api/rsvps', {
        method: "POST",
        body: JSON.stringify({
            userId,
            eventId
        })
    })

    if(response.ok){
        const rsvp = await response.json();
        dispatch(addRSVP(rsvp));
        return rsvp;
    }
}

const initialState = {};

const rsvpReducer = (rsvps = initialState, action) => {

    switch(action.type){
        // case SET_MEMBERS:
        //     const membersPayload = action.payload
        //     return membersPayload.reduce((newMembers, member) => {
        //         return {
        //             ...newMembers,
        //             [member.id]: member
        //         }
        //     }, {});
        case ADD_RSVP:

            return {
                ...rsvps,
                [action.payload.id]: action.payload,
            }
        default:
            return rsvps;
    }
}

export default rsvpReducer;
