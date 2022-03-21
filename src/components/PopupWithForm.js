import { React } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function PopupWithForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => console.log(data);
  // when onSubmit occurs, change the company name to entry.112, and change the email to entry.113
  // const onSubmit = (data: formInputs) => {
  //   props.onSubmit(data);
  // };

  return (
    <section className={`form-popup ${props.isOpen ? "form-open" : ""}`}>
      <iframe
        title="hidden_iframe"
        name="hidden_iframe"
        id="hidden_iframe"
        className="hidden"
        method="POST"
      ></iframe>
      <form
        target="hidden_iframe"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe39Aky_ezYNI2bUtVcApgbw0qsJuSahyySi62W8WNo3ec6Xg/formResponse"
        className="w-[760px] h-[778px] bg-white px-[80px] rounded-[3px] shadow-sm"
        // onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
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
          <div
            className={`text-sm pb-[11px] ${
              errors.company ? "text-[#E30613]" : "text-primary"
            }`}
          >
            {errors.company
              ? "Personal or company name * (This field is required)"
              : "Personal or company name *"}
          </div>
          <label
            name="entry.1377521493"
            className={`h-[60px] ${
              errors.company ? "labels-invalid" : "labels"
            }`}
          >
            <input
              type="text"
              className="inputs"
              name="entry.1377521493"
              {...register("company", { required: true })}
            />
          </label>
          <div
            className={`text-sm pb-[11px] ${
              errors.email ? "text-[#E30613]" : "text-primary"
            }`}
          >
            {errors.email ? "Email * (This field is required)" : "Email *"}
          </div>
          <label
            name="entry.1586441139"
            className={`h-[60px] ${errors.email ? "labels-invalid" : "labels"}`}
          >
            <input
              type="email"
              className="inputs"
              name="entry.1586441139"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
          </label>
          <div className="text-sm pb-[11px] text-primary">
            Your request/interest
          </div>
          <label name="entry.401400152" className="labels h-[180px]">
            <textarea
              name="entry.401400152"
              type="text"
              className="inputs h-[140px] resize-none"
            />
          </label>
        </div>

        <button
          type="submit"
          className={`${!isValid ? "button-invalid" : "button-form"}`}
          disabled={!isValid}
          onSubmit={handleSubmit(onSubmit)}
        >
          Send
        </button>
      </form>
    </section>
  );
}

function PopupWithThanks(props) {
  return (
    <section className={`form-popup ${props.isOpen ? "form-open" : ""}`}>
      <form className="w-[760px] h-[778px] bg-white px-[80px] rounded-[3px] shadow-sm flex">
        <Link to="/">
          <button
            type="button"
            onClick={props.onClose}
            className="form-close"
          ></button>
        </Link>
        <h2 className="text-lg m-auto">
          Thanks! We will get in touch with you soon!
        </h2>
      </form>
    </section>
  );
}

export { PopupWithForm, PopupWithThanks };
