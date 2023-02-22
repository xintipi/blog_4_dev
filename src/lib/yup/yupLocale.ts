import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: ({ label }) => ({
      key: 'validations.required',
      values: { label },
    }),
  },
  string: {
    email: ({ label }) => ({
      key: 'validations.email',
      values: { label },
    }),
    min: ({ label, min }) => ({
      key: 'validations.stringMin',
      values: { label, min },
    }),
    max: ({ label, max }) => ({
      key: 'validations.stringMax',
      values: { label, max },
    }),
  },
})

export default yup
