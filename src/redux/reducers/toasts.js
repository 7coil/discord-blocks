import {
  INCREMENT_COUNTER,
  CREATE_TOAST,
  DELETE_TOAST
} from '../actions/toasts';

function document(state = {
  counter: 0,
  toasts: []
}, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter + 1
      })
    case CREATE_TOAST:
      return Object.assign({}, state, {
        toasts: [...state.toasts, action.toast]
      })
    case DELETE_TOAST:
      return Object.assign({}, state, {
        toasts: state.toasts.filter(toast => toast.id !== action.id)
      })
    default:
      return state;
  }
}

export default document;
