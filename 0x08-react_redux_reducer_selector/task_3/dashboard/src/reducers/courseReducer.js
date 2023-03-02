import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../action/courseActionTypes";

export function courseReducer (state = [], action) {
    switch(action.type){
        case FETCH_COURSE_SUCCESS: {
             return action.data.map((value) => {
                value.isSelected = false
            })
        }
        case SELECT_COURSE: {
            const initial = [...state]
            return (initial.map((course) => {
                if (course.id == action.index){
                    course.isSelected =true
                }
            }))
        }
        case UNSELECT_COURSE: {
            const initial = [...state]
            return (initial.map((course) => {
                if (course.id == action.index){
                    course.isSelected = false
                }
            }))
        }

    }
}