import React from "react";
import { useForm } from "react-hook-form";

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSub = (bodyData) => {
    // מכיל את כל המאפיינים שלה השמות של האינפוטים עם הערך שלהם <- data
    console.log(bodyData);
  };
  return (
    <div className="container">
      <h1>Order form</h1>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6 shadow p-2">
        <label>name:</label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          type="text"
          className="form-control"
        ></input>
        {errors.name && (
          <div className="text-danger d-block">
            enter valid name (nim 2 chars)
          </div>
        )}
        <label>phon:</label>
        <input
          {...register("phon", { required: true, minLength: 9 })}
          type="tel"
          className="form-control"
        ></input>
        {errors.phon && (
          <div className="text-danger d-block">
            enter valid phon (nim 9 numders)
          </div>
        )}
        <label>Email:</label>
        {/* ריגולר מקבל ריגולר אקספריישן במקרה הנל בודק <- pattern*  
 שמייל תקין */}
        <input {...register("email",{required:true, })} type="text" className="form-control" />
        {errors.email && <span className="text-danger">Enter valid email</span>}
        <button className="btn btn-info mt-3">Order</button>
      </form>
    </div>
  );
}
