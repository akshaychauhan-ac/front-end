# React Hook Form

    Performant, flexible and extensible forms with easy-to-use validation.

    npm install react-hook-form

    import { useForm } from 'react-hook-form';

    function App() {
        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm();

        return (
            <form onSubmit={handleSubmit((data) => console.log(data))}>
            <input {...register('firstName')} />
            <input {...register('lastName', { required: true })} />
            {errors.lastName && <p>Last name is required.</p>}
            <input {...register('age', { pattern: /\d+/ })} />
            {errors.age && <p>Please enter number for age.</p>}
            <input type="submit" />
            </form>
        );
    }

Example in repo - [React hook form with zod](https://github.com/akshaychauhan-ac/react/tree/master/projects/react-hook-form-zod)