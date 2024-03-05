# React Hook Form

Performant, flexible and extensible forms with easy-to-use validation.

npm install react-hook-form

    /********************************** Using register *******************************************/

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

    /*********************************** Using controlled ******************************************/

    import * as React from "react"
    import { useForm, useController, UseControllerProps } from "react-hook-form"

    type FormValues = {
        FirstName: string
    }

    function Input(props: UseControllerProps<FormValues>) {
    const { field, fieldState } = useController(props)

    return (
        <div>
            <input {...field} placeholder={props.name} />
            <p>{fieldState.isTouched && "Touched"}</p>
            <p>{fieldState.isDirty && "Dirty"}</p>
            <p>{fieldState.invalid ? "invalid" : "valid"}</p>
        </div>
    )}

    export default function App() {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            FirstName: "",
        },
        mode: "onChange",
    })
    const onSubmit = (data: FormValues) => console.log(data)


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input control={control} name="FirstName" rules={{ required: true }} />
            <input type="submit" />
        </form>
    )}

    /*****************************************************************************/

Read value from "field.value"
Read error message from "fieldState.error?.message"
Destructure control from useForm() & add control={control}
Destructure watch - watch(["firstName", "lastName"]) or watch("firstName")
Destructure setValue to set value after reading from any API
Property formState will give us isSubmitted, isRefetching, errors, etc

Example in repo - [React hook form with zod](https://github.com/akshaychauhan-ac/react/tree/master/projects/react-hook-form-zod)