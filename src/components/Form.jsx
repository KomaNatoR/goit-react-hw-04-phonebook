import { Formik, Field, Form } from 'formik';
import { nanoid } from 'nanoid';

const initialValues = {
    name: '',
    number: '',
};

const FormikForm = ({hendleSubmit}) => {
    const onSubmit = ({ name, number }, actions) => {
        let id = nanoid();

        let person = { id: id, name: name, number:number };
        hendleSubmit(person);
        actions.resetForm();
    };

    return (
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
            <Form>
                <div>
                    <label>Name</label>
                    <Field type="text" name="name" required></Field>
                </div>

                <div>
                    <label>Number</label>
                    <Field type="tel" name="number" required></Field>
                </div>

                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
};

export default FormikForm;