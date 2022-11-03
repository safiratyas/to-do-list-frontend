import { CREATE_LIST } from './types';
import getUser from '../services/getUser';
import createList from '../services/createList';

export const createUserList = (body) => {
  return async (
    dispatch,
  ) => {
    try {
      const getUserById = await getUser();
      console.log(getUserById.data.id);
      const bodyInput = {
        name: body.name,
      };
      console.log(bodyInput);
      const list = await createList(bodyInput);
      await dispatch({
        type: await CREATE_LIST,
        payload: {
          loading: false,
          result: await list.data,
          error: false,
        },
      });
    } catch (err) {
      dispatch({
        type: CREATE_LIST,
        payload: {
          loading: false,
          result: false,
          error: err.message,
        },
      });
    }
  };
};
