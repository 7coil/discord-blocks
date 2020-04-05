export const SAVE_DOCUMENT = 'SAVE_DOCUMENT';
export const SET_DOCUMENT_NAME = 'SET_DOCUMENT_NAME';
export const CHANGED_DOCUMENT = 'CHANGED_DOCUMENT';
export const MODIFY_MODULES = 'MODIFY_MODULES';

function saveDocument() {
  return {
    type: SAVE_DOCUMENT
  }
}

function changedDocument() {
  return {
    type: CHANGED_DOCUMENT
  }
}

function setDocumentName(name) {
  return {
    type: SET_DOCUMENT_NAME,
    name: name
  }
}

function modifyModules(module, enabled) {
  return {
    type: MODIFY_MODULES,
    module,
    enabled,
  }
}

export {
  saveDocument,
  changedDocument,
  setDocumentName,
  modifyModules
}
