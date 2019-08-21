const itemsReducer = (state = ['Call dentist'], { type, payload }) => {
  switch(type) {
    case 'ADD_ITEM':
      return state.concat(payload.text);
    default:
      return state;
  }
}

export default itemsReducer;
