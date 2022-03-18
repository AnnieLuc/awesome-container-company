import React from "react";
import { useForm } from "react-hook-form";

function PopupWithForm(props) {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (data) => {
    props.onSubmit(data);
  };


  return (
    <section className={`form-popup ${props.isOpen ? "form-open" : ""}`}>
      <form className="w-[760px] h-[778px] bg-white px-[80px] rounded-[3px] shadow-sm" onSubmit={handleSubmit(onSubmit)}>
        <button
          type="button"
          onClick={props.onClose}
          className="form-close"
        ></button>
        <h2 className="text-lg text-primary pt-[40.5px] leading-8 pb-[50px]">
          Leave your contact and request, and out manager will reach out to you
          to establish our further partnership!
        </h2>
        <div className="flex flex-col">
          <div className={`text-sm pb-[11px] ${errors.company ? 'text-[#E30613]' : 'text-primary'}`}>
            {errors.company ? "Personal or company name * (This field is required)" : "Personal or company name *"}
          </div>
          <label className={`h-[60px] ${errors.company ? 'labels-invalid' : 'labels'}`}>
            <input type="text" className='inputs' {...register("company", { required: true })}/>
          </label>
          <div className={`text-sm pb-[11px] ${errors.email ? 'text-[#E30613]' : 'text-primary'}`}>
          {errors.email ? "Email * (This field is required)" : "Email *"}
          </div>
          <label className={`h-[60px] ${errors.email ? 'labels-invalid' : 'labels'}`}>
            <input type="text" className="inputs" {...register("email", { required: true })}/>
          </label>
          <div className="text-sm pb-[11px] text-primary">
            Your request/interest
          </div>
          <label className="labels h-[180px]">
            <textarea type="text" className="inputs h-[140px] resize-none" />
          </label>
        </div>
        <button type="submit" className="button-form">
          Send
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
