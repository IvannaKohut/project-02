import React, {useState} from "react";
import c from "./InputControl.module.scss";
import {Controller} from "react-hook-form";




const InputControl = (props) => {


    const [isFocus, setFocus] = useState(false);

    return (
        <Controller
            {...props}
            rules={{
                required: "Поле обов'язкове до заповнення",
            }}
            render={({
                         field,
                         fieldState: { invalid, isTouched, isDirty, error },
                         formState
                     }) => {
                // console.log("field", field)
                // console.log(error);

                const isError = isTouched && error?.message;
                // Я не знаю що сидить в обєкті error, якщо повідомлення про помилку то все окей

                return (
                    <div>
                    <div className={`${c.input_wrapper} ${isError ? c.error_class : null} ${isFocus ? c.focus_class : null} `}>
                        <label className={c.label_item}>{props.label}</label>
                        <input className={c.item_label}
                            {...field}
                            placeholder={props.placeholder}
                            onChange={(e) =>
                                field.onChange(e.target.value)
                            }
                            onFocus={()=>{
                                setFocus(true)
                            }}
                            onBlur={() => {
                                // викликаємо спочатку функції самої бібліотеки щоб валідація працювала коректно
                               field.onBlur()
                                // після міняємо свій стан фокусу
                                setFocus(false)
                            }}
                        />


                    </div>
                        {isError && <div className={c.error}>{error.message}</div>}
                    </div>
                )
            }}
        />
    );
}
export  default InputControl;
// const InputControl = (props) => {
//
//     const isError = false;
//
//     return (
//         <div>
//
//             <div className={`${c.firstname} ${errors.firstName ? c.error_class : ""}`}>
//                 <div className={c.label_item}>
//                     {props.label}
//                 </div>
//
//                 <input className={c.item_label}
//                        {...register(props.name, {
//                            required: "Поле обов'язкове до заповнення"
//                        })}
//                        onFocus={() => {
//
//                        }}
//                     //     onBlur={()=> {
//                     //         setFocused({isFocus: false, field:'firstName'})
//                     // }
//                     // }
//                        placeholder={props.placeholder}/>
//
//             </div>
//             <div className={c.error} style={{height: 20}}> {errors?.firstName &&
//                 <p>{errors?.firstName?.message || "Error!"}</p>}
//             </div>
//         </div>
//     )
// }