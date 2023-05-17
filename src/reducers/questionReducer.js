export const questionInitialValue = [];

export default (state = questionInitialValue, { type, payload }) => {
     switch (type) {
         case 'LOAD_QUESTIONS_SUCCESS':
              return [...payload]
         default:
              return state
    }
};