/* eslint-disable import/prefer-default-export */
import { GET_LIST_ID } from './types';
import getList from '../services/getList';

export const getListId = (id) => {
  return async (dispatch) => {
    try {
      const getListById = await getList(id);
      await dispatch({
        type: GET_LIST_ID,
        payload: {
          loading: false,
          result: await getListById.data.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: GET_LIST_ID,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
