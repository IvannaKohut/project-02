import React, {useState} from "react";
import c from "./Contact.module.scss";
import Leader from "../Work/Leader/Leader";
import {project} from "../../../config/contact";
import {useForm} from "react-hook-form";
import InputControl from "../../UI/InputControl/IntutControl";


const Contact = (props) => {
    const [currentServices, setCurrentServices] = useState({});
    const [currentBudget, setCurrentBudget] = useState({});
    const [focused, setFocused] = useState({});

    const {
        register,
        control,
        formState: {errors, isValid, isSubmitSuccessful},
        handleSubmit,
        reset,
        setFocus,
        getFieldState
    } = useForm({mode: 'onTouched'});


    const onSubmit = (data) => {
        console.log({data});
        setCurrentBudget({});
        setCurrentServices({});
        reset();
    };
    // React.useEffect(() => {
    //     setFocus("firstName")
    // }, [setFocus])


    return (
        <div>
            <div className={c.title}>
                <Leader comeback="Назад до роботи" text="Творімо разом" to="/work"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={c.container}>
                    <div className={c.item}>
                        <div className={c.services}>
                            <div className={c.title_s}>Послуги</div>
                            <div className={c.radio_button}>
                                <div className={c.radio_container}>
                                    {project.services.map((s) => {
                                        return (
                                            <label htmlFor={s.id}
                                                   className={s.id === currentServices.id ? c.active : c.button}
                                                   onClick={() => {
                                                       setCurrentServices(s)
                                                   }
                                                   }>
                                                <input type="radio" value={s.name} id={s.id}
                                                       {...register("nameServices", {
                                                           required: true,

                                                       })} />
                                                {s.name}</label>

                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={c.budget}>
                            <div className={c.title_s}>Бюджет у доларах США</div>
                            <div className={c.radio_button}>
                                <div className={c.radio_container}>
                                    {project.budget.map((b) => {
                                        return (
                                            <label htmlFor={b.id}
                                                   className={b.id === currentBudget.id ? c.active : c.button}
                                                   onClick={() => {
                                                       setCurrentBudget(b)
                                                   }
                                                   }>
                                                <input type="radio" value={b.name} id={b.id}
                                                       {...register("nameBudget", {
                                                           required: true,
                                                       })} />
                                                {b.name}</label>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={c.container_form}>
                                <InputControl control={control}  name="firstName" label="Ваше імʼя та прізвище:"
                                              placeholder="Введіть Ваше прізвище та ім'я"/>
                                <InputControl control={control}  name="email" label="Введіть електронну пошту:"
                                              placeholder="Введіть Ваше прізвище та ім'я"/>
                                <InputControl control={control}  name="aboutMe" label="Розкажіть мені про ваш проект:"
                                              placeholder="Розкажіть мені про ваш проект"/>
                            </div>
                            <div className={c.container_button}>
                                {/*<input className={c.button_input} type="submit" placeholder="відправиxzxти"/>*/}
                                <button className={c.button_input} type="submit">відправити</button>
                            </div>


                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Contact;