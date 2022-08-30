import * as Yup from 'yup';

let validationSchema = Yup.object({
  category_id: Yup.string('Please Select the Category').required('Please Select the Category'),

  title: Yup.string('Please Select the Title').required('Please Select the Title')
});

export default validationSchema;
