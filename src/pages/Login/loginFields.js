import InputQuiz from '../../components/InputQuiz'

export const loginFields = [
    {
        component:InputQuiz,
        name:'email',
        id:"email-adress",
        type:"email",
        'data-value': "",
        autoComplete:"email",
        label: 'Email',
        placeholder:"Email",
        validate:values => {
            if (!values) {
                return "Required...."
            }
                return ""
            }
    },
    {
        component:InputQuiz,
        name:'password',
        id:"password",
        'data-value': "",
        type:"password",
        autoComplete:"password",
        label: 'Password',
        placeholder:"*****",
        validate:values => {
            if (!values) {
                return "Required...."
            }
                return ""
            }
    }
];

export const loginInitialValues = loginFields.reduce
    ((p,c) => ({...p, [c.name]: c['data-value']}),
    {},
);

