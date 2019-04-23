export const SAVE_DOCUMENT = 'SAVE_DOCUMENT';
export const SET_DOCUMENT_NAME = 'SET_DOCUMENT_NAME';
export const CHANGED_DOCUMENT = 'CHANGED_DOCUMENT';

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

export {
  saveDocument,
  changedDocument,
  setDocumentName
}
