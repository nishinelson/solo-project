import { csrfFetch } from './csrf';

const ADD_MEMBER = 'members/add';

export const addMember = (member) => {
    return {
        type: ADD_MEMBER,
        payload: member
    }
}

export const joinGroup = (userId, groupId) => async (dispatch) => {
    const response = await csrfFetch('/api/members', {
        method: "POST",
        body: JSON.stringify({
            userId,
            groupId
        })
    })

    if(response.ok){
        const member = await response.json();
        dispatch(addMember(member));
        return member;
    }
}

const initialState = {};

const memberReducer = (members = initialState, action) => {

    switch(action.type){
        // case SET_MEMBERS:
        //     const membersPayload = action.payload
        //     return membersPayload.reduce((newMembers, member) => {
        //         return {
        //             ...newMembers,
        //             [member.id]: member
        //         }
        //     }, {});
        case ADD_MEMBER:

            return {
                ...members,
                [action.payload.id]: action.payload,
            }
        default:
            return members;
    }
}

export default memberReducer;
