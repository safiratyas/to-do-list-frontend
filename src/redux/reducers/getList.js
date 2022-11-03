const initialState = {
    listIDLoading: false,
    listIDResult: false,
    listIDError: false,
  };
  
  export const getlistIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_LIST_ID':
        console.log(action.payload);
        return {
          ...state,
          listIDLoading: action.payload.loading,
          listIDResult: action.payload.result,
          listIDError: action.payload.error,
        };
      default:
        return state;
    }
  };
  