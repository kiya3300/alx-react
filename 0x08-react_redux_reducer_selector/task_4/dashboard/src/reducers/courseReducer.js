import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../action/courseActionTypes";
import { Map } from 'immutable';

export function courseReducer(state = Map(initialCourseState), action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedData = coursesNormalizer(action.data);
            Object.keys(normalizedData).map((key) => {
                normalizedData[key].isSelected = false;
            });
            return state.merge(normalizedData);

        case SELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], true);
        case UNSELECT_COURSE:
            return state.setIn([String(action.index), 'isSelected'], false);


    }
    return state;
}
export default courseReducer