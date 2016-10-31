const defaultState = {
  countsSortFilter: 'Biggest'
};

const filtersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_COUNTS_SORT_FILTER':
      return {
        ...state,
        countsSortFilter: action.filter
      };
    default:
      return state;
  }
};

export default filtersReducer;
