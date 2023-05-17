import InputQuiz from '../../components/InputQuiz'
import Radio from '../../components/Radio'
// import CheckBox from '../../components/CheckBox'

export const registerFields = [
    {
        component:InputQuiz,
        name:'name',
        id:"name",
        type: "text",
        'data-value': "",
        autoComplete:"name",
        label: 'Name',
        placeholder:"Name",
        validate:values => {
            if (!values) {
                return "Required...."
            }
                return ""
            }
    },
    {
        component:Radio,
        label: 'Gender',
        name: 'gender',
        'data-value': '',
        options: [
            {
                id:'male',
                text: 'Male',
            },
            {
                id:'female',
                text: 'Female',
            },
            {
                id:'others',
                text: 'Others',
            }
        ]

    },
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
    },
    {
        component:InputQuiz,
        name:'confirmPassword',
        id:"confirm-password",
        'data-value': "",
        type:"password",
        autoComplete:"new-password",
        label: 'Confirm Password',
        placeholder:"*****",
        validate:values => {
            if (!values) {
                return "Required...."
            }
                return ""
            }
    },
];

export const registerInitialValues = registerFields.reduce
    ((p,c) => ({...p, [c.name]: c['data-value']}),
    {},
);

