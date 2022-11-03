import { CREATE_LIST } from '../actions/types';

const initialStateList = {
  listLoading: false,
  listResult: false,
  listError: false,
};

export const getCreateListReducer = (state = initialStateList, action) => {
  switch (action.type) {
    case 'CREATE_LIST':
      return {
        ...state,
        listLoading: action.payload.loading,
        listResult: action.payload.result,
        listError: action.payload.error,
      };
    default:
      return state;
  }
};
