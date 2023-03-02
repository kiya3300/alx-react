import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from "../action/courseActionTypes";


const initialState = {
    notifications: {},
    filter: 'default'
}
export function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            return action.data.notifications.map((value) => {
                value.isRead = false
            })
        }
        case MARK_AS_READ: {
            const initial = [...state]
            return (initial.notifications.map((value) => {
                if (notifications.id == action.index) {
                    notifications.isRead = true
                }
            }))
        }
        case SET_TYPE_FILTER: {
            const initial = [...state]
            return {
                ...state,
                filter: action.filter,
            };

        }
        default:
            break;
    }
    return state
}
export default notificationReducer