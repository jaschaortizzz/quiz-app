import APIRequest from '../utils/APIRequest';

export const loadQuestions = () => async dispatch => {
  const type = 'LOAD_QUESTIONS';
  await APIRequest({
    apiData: {
      method: 'get',
      url: `660/questions`,
    },
    type,
    dispatch,
    meta: { loadingId: -1 },
  });
};

export const nextQuestionAction = data => async dispatch => {
  // const token = localStorage.getItem('token')
  const type = 'NEXT_QUESTION';
  await APIRequest({
    apiData: {
      method: 'patch',
      url: `660/users/${data.id}`,
      data,
    },
    type,
    dispatch,
    meta: { loadingId: data.id },
  });
};

export const prevQuestionAction = data => async dispatch => {
  // const token = localStorage.getItem('token')
  const type = 'PREV_QUESTION';
  await APIRequest({
    apiData: {
      method: 'patch',
      url: `660/users/${data.id}`,
      data,
    },
    type,
    dispatch,
    meta: { loadingId: data.id },
  });
};

export const loadUserAction = data => async dispatch => {
  const type = 'LOAD_USER';
  await APIRequest({
    apiData: {
      method: 'get',
      url: `660/users/${data.id}`,
      data,
    },
    type,
    dispatch,
    meta: { loadingId: data.id },
  });
};


export const a = 1;