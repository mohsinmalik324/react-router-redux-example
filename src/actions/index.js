export const addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    payload: { text }
  };
};
