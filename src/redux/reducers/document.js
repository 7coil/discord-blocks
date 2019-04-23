import {
  SAVE_DOCUMENT,
  SET_DOCUMENT_NAME,
  CHANGED_DOCUMENT
} from '../actions/document';

function document(state = {
  saved: true,
  name: 'Untitled Document'
}, action) {
  switch (action.type) {
    case SAVE_DOCUMENT:
      return Object.assign({}, state, {
        saved: true
      });
    case CHANGED_DOCUMENT:
      return Object.assign({}, state, {
        saved: false
      });
    case SET_DOCUMENT_NAME:
      return Object.assign({}, state, {
        name: action.name
      });
    default:
      return state;
  }
}

export default document;
