import { timeout } from "q";

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const CREATE_TOAST = 'CREATE_TOAST';
export const DELETE_TOAST = 'DELETE_TOAST';

const pushToast = ({
  id, content, colour
}) => ({
  type: CREATE_TOAST,
  toast: {
    id,
    content,
    colour
  }
})

const incrementToastCounter = () => {
  return {
    type: INCREMENT_COUNTER
  }
}

const createToast = ({
  content = 'This is an empty toast',
  colour = 'red',
  timeout = 5000
}) => {
  return (dispatch, getState) => {
    dispatch(incrementToastCounter());
    dispatch(pushToast({
      id: getState().toasts.counter,
      content,
      colour
    }))

    setTimeout(() => {
      dispatch(deleteToast(getState().toasts.counter));
    }, timeout);

    return getState().toasts.counter;
  }
}

const deleteToast = (id) => {
  return {
    type: DELETE_TOAST,
    id
  }
}

export {
  createToast,
  incrementToastCounter,
  deleteToast
};
