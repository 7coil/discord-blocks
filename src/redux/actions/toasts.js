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
    const id = getState().toasts.counter;
    dispatch(pushToast({
      id,
      content,
      colour
    }))

    if (timeout !== 0) {
      setTimeout(() => {
        dispatch(deleteToast(id));
      }, timeout);
    }

    return id;
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
