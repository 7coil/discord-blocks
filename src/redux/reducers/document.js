import {
  SAVE_DOCUMENT,
  SET_DOCUMENT_NAME,
  CHANGED_DOCUMENT,
  MODIFY_MODULES
} from '../actions/document';

function document(state = {
  saved: true,
  name: 'Untitled Document',
  modules: ['discordjs'],
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
    case MODIFY_MODULES:
      if (action.enabled) {
        // Add the module to the list of modules
        if (state.modules.includes(action.module)) {
          // If it already is in the list, do nothing
          return state;
        } else {
          // If it is not, add it to the end.
          return Object.assign({}, state, {
            modules: [...state.modules, action.module]
          })
        }
      } else {
        // Remove the offending module from the list of modules
        return Object.assign({}, state, {
          modules: state.modules.filter(module => module !== action.module)
        })
      }
    default:
      return state;
  }
}

export default document;
