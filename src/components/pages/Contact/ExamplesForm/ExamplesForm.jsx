import React, {useState} from "react";
import Leader from "../../Work/Leader/Leader";
import {project} from "../../../../config/contact";
import c from "./ExamplesForm.module.scss"


const ExamplesForm = () => {

    const [errors, setErrors] = useState({});
    const [focus, setFocus] = useState({
        firstName: false,
        email: false,
        aboutMe: false
    });

    const [inputFields, setInputFields] = useState({
        radioServices: "",
        radioBudget: "",
        firstName: "",
        email: "",
        aboutMe: ""
    });

    const validateValues = (inputValues) => {
        let errors = {};
        if (!inputValues.firstName) {
            errors.firstName = "Field is required";
        }
        if (!inputValues.email) {
            errors.email = "Field is required";
        }
        if (!inputValues.aboutMe) {
            errors.aboutMe = "Field is required";
        }
        return errors;
    };


    const handleFocus = (e) => {
        setFocus({
            ...focus, [e.target.name]: true
        });
    };

    const handleBlur = (e) => {
        setFocus({
            ...focus, [e.target.name]: false
        });
        setErrors({...errors, [e.target.name] : !inputFields[e.target.name] ? "Field is required" : ""});

    };

    // const [isFirstNameFocused, setIsFirstNameFocused] = useState(false)
    // const  onFocus =()=>{
    //     setIsFirstNameFocused(true);
    // }
    // const  onBlur =()=>{
    //     setIsFirstNameFocused(false);
    // }
    //
    // const [isEmailFocused, setIsEmailFocused] = useState(false)
    // const  onFocusEmail =()=>{
    //     setIsEmailFocused(true);
    // }
    // const  onBlurEmail =()=>{
    //     setIsEmailFocused(false);
    // }


    const handleChange = (e) => {
        setInputFields({...inputFields, [e.target.name]: e.target.value});

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateValues(inputFields));
        console.log(inputFields);
        setInputFields({
            radioServices: "",
            radioBudget: "",
            firstName: "",
            email: "",
            aboutMe: ""
        })

    };


    return (
        <div>
            <div className={c.title}>
                <Leader comeback="Назад до роботи" text="Творімо разом" to="/work"/>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={c.container}>
                    <div className={c.item}>
                        <div className={c.services}>
                            <div className={c.title_s}>Послуги</div>
                            <div className={c.radio_button}>
                                <div className={c.radio_container}>
                                    {project.services.map((s) => {
                                        return (
                                            <label htmlFor={s.id}
                                                   className={s.id == inputFields.radioServices ? c.active : c.button}
                                            >
                                                <input type="radio" name="radioServices" onChange={handleChange}
                                                       value={s.id} id={s.id}/>
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
                                                   className={b.id == inputFields.radioBudget ? c.active : c.button}>
                                                <input type="radio" name="radioBudget" value={b.id} id={b.id}
                                                       onChange={handleChange}
                                                />
                                                {b.name}</label>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={c.container_form}>
                                <div className={`${c.firstname} ${focus.firstName ? c.focus_class : null} `}>
                                    <label className={c.label_item} htmlFor="firstName">Ваше імʼя та прізвище:</label>
                                    <input className={c.item_label}
                                           type="firstName"
                                           name="firstName"
                                           value={inputFields.firstName}
                                           onChange={handleChange}
                                           placeholder="Введіть Ваше прізвище та ім'я"
                                           onFocus={handleFocus}
                                           onBlur={handleBlur}
                                    />
                                </div>
                                {errors.firstName && (
                                    <p style={{color: "red"}}>{errors.firstName}</p>
                                )}

                                <div className={`${c.firstname} ${ focus.email ? c.focus_class : null} `}>
                                    <label className={c.label_item} htmlFor="email">Введіть електронну пошту:</label>
                                    <input className={c.item_label}
                                           type="email"
                                           name="email"
                                           value={inputFields.email}
                                           onChange={handleChange}
                                           placeholder="Введіть Ваше прізвище та ім'я"
                                    onFocus={handleFocus}
                                    onBlur={handleBlur}
                                    />
                                </div>
                                {errors.email && (
                                    <p style={{color: "red"}}>{errors.email}</p>
                                )}

                                <div className={`${c.firstname} ${focus.aboutMe ? c.focus_class : null} `}>
                                    <label className={c.label_item} htmlFor="aboutMe">Розкажіть мені про ваш
                                        проект:</label>
                                    <input className={c.item_label}
                                           type="aboutMe"
                                           name="aboutMe"
                                           value={inputFields.aboutMe}
                                           onChange={handleChange}
                                           placeholder="Розкажіть мені про ваш проект"
                                           onFocus={handleFocus}
                                           onBlur={handleBlur}/>

                                </div>
                                {errors.aboutMe && (
                                    <p style={{color: "red"}}>{errors.aboutMe}</p>
                                )}

                            </div>
                            <div className={c.container_button}>
                                <button className={c.button_input} type="submit">відправити</button>
                            </div>


                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ExamplesForm;