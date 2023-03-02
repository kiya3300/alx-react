import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../action/courseActionTypes";
import { Map } from 'immutable';

const initialState = {
    notifications: {},
    filter: 'default'
}
export function notificationReducer(state = Map(initialState), action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);

            Object.keys(normalizedData.notifications).map((key) => {
                normalizedData.notifications[key].isRead = false;
            });
            return state.merge(normalizedData);
        case MARK_AS_READ:
            return state.setIn(
                ['notifications', String(action.index), 'isRead'],
                true
            );
        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);

    }
    return state
}
export default notificationReducer