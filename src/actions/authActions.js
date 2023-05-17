import APIRequest from '../utils/APIRequest';

export const loginAction = values => async dispatch => {
    const type = "LOGIN";
    await APIRequest({
      dispatch,
      apiData: {
        method: 'post',
        url: 'login',
        data: values,
      },
      type,
      meta: { loadingId: -1 },
    });
  };

export const registerAction = (values) => async dispatch => {
    const type = "REGISTER";
    const bookmark = 1;
    const {confimPassword, ...rest} = {bookmark,...values};
    await APIRequest({
      dispatch,
      apiData: {
        method: 'post',
        url: 'register',
        data: rest,
      },
      type,
      meta: { loadingId: -1 },
    });
  };

export const logoutAction = () => {
    localStorage.clear()
}