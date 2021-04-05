import { csrfFetch } from './csrf';

const SET_GROUPS = 'groups/set';
const ADD_GROUP = 'groups/add';

export const setGroups = (groups) => {
    return {
        type: SET_GROUPS,
        payload: groups
    }
}

export const addGroup = (group) => {
    return {
        type: ADD_GROUP,
        payload: group
    }
}

export const getGroups = (city, state) => async (dispatch) => {
    const response = await csrfFetch(`/api/groups/${city}/${state}`);
    if (!response.ok) {
        throw response;
    }
    const groups = await response.json();
    dispatch(setGroups(groups));
}

export const getOneGroup = id => async (dispatch) => {
    const response = await csrfFetch(`/api/groups/${id}`);
    if (!response.ok) {
        throw response;
    }
    const group = await response.json();
    // console.log(group, "=====================")
    dispatch(addGroup(group));
}

const initialState = {};

const groupReducer = (groups = initialState, action) => {

    switch(action.type){
        case SET_GROUPS:
            const groupsPayload = action.payload
            return groupsPayload.reduce((newGroups, group) => {
                return {
                    ...newGroups,
                    [group.id]: group
                }
            }, {});
        case ADD_GROUP:
            // newState = action.payload
            return {
                // newState
                ...groups,
                [action.payload.id]: action.payload,
            }
        default:
            return groups;
    }
}

export default groupReducer;
