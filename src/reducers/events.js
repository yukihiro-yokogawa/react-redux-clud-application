import _ from 'lodash';
import { READ_EVENTS, READ_EVENT, CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
        case CREATE_EVENT:
        case UPDATE_EVENT:
            return _.mapKeys(action.response.data, 'id');
        case DELETE_EVENT:
            delete events[action.id];
            return { ...events };
        case READ_EVENT:
            const data = action.response.data;
            return { ...events, [data.id]: data };
        default:
            return events;
    };
};