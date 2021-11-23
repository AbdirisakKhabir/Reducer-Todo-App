
import { EDIT_WORK, TOGGLE_EDITTING } from "../Actions/WorkAction";

const initialState = {
  work: "Hello from Reducer",
  editing: false
}

export const workReducer = (state = initialState, action) => {
   switch(action.type) {
     case EDIT_WORK:
       return {
         ...state,
         work: action.payload,
         editing: false
       }
      case TOGGLE_EDITTING:
        return {
          ...state,
          editing: !state.editing
        }
      default:
        return state
   }
}