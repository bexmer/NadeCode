export const reducer = (state, action) => {
  switch (action.type) {
    case 'title':
      return {
        ...state,
        title: action.payload,
      };
    case 'description':
      return {
        ...state,
        description: action.payload,
      };
    // case 'image':
    //   return {
    //     ...state,
    //     image: action.payload,
    //   };
    // case 'category':
    //   return {
    //     ...state,
    //     category: action.payload,
    //   };
    // case 'priceMode':
    //   return {
    //     ...state,
    //     priceMode: action.payload,
    //   };
    // case 'state':
    //   return {
    //     ...state,
    //     state: action.payload,
    //   };

    default:
      return state;
  }
};
