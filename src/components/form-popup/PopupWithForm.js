import React              from 'react';
import PropTypes          from 'prop-types';
import { useForm }        from 'react-hook-form';
import axios              from 'axios';
import "./PopupWithForm.css";

function PopupWithForm(props) {
  const {
    onClose,
    isOpen,
    isFormSubmitted,
    setFormSubmitted
  } = props;

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({ mode: "onChange", });

  React.useEffect(() => {
    reset();
  }, [isOpen]);

  const onSubmit = (data) => {
    console.log(data);
    axios.post('/email', data);
    setFormSubmitted(true);
  };

  React.useEffect(() => {
    if (isFormSubmitted) {
      setTimeout(() => {
        setFormSubmitted(true);
        onClose();
      }, 8000);
    }
  }, [isFormSubmitted]);

  return (
    <section className={`form-popup ${isOpen ? "form-open" : ""}`}>
      {!isFormSubmitted && (
        <form
          className="w-[760px] h-[778px] bg-white px-[80px] rounded-[3px] shadow-sm base:w-[680px] base:px-[40px] base:h-[750px] md:w-[550px] md:px-[30px] md:h-[670px]"
          noValidate
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
        >
          <button
            type="button"
            onClick={onClose}
            className="form-close"
          ></button>
          <h2 className="text-lg text-primary pt-[40.5px] leading-8 pb-[50px] base:pt-[20px] md:text-base md:pt-[0] md:pb-[30px]">
            Leave your contact and request, and out manager will reach out to
            you to establish our further partnership!
          </h2>
          <div className="flex flex-col w-[600px]">
            <div
              className={`text-sm pb-[11px] ${
                errors.name ? "text-[#E30613]" : "text-primary"
              }`}
            >
              {errors.name
                ? "Personal or company name * (This field is required)"
                : "Personal or company name *"}
            </div>
            <label
              name="entry.1377521493"
              className={`h-[60px] ${
                errors.name ? "labels-invalid" : "labels"
              }`}
            >
              <input
                type="text"
                className="inputs"
                name="entry.1377521493"
                {...register("name", { required: true })}
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
              className={`h-[60px] ${
                errors.email ? "labels-invalid" : "labels"
              }`}
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
            <label name="message" className="labels h-[180px]">
              <textarea
                name="message"
                type="text"
                className="inputs h-[140px] resize-none"
                {...register("message", {
                  required: false,
                })}
              />
            </label>
          </div>

          <button
            type="submit"
            className={`${!isValid ? "button-invalid" : "button-form"}`}
            disabled={!isValid}
          >
            Send
          </button>
        </form>
      )}
      {isFormSubmitted && (
        <form className="w-[760px] h-[778px] bg-white px-[80px] rounded-[3px] shadow-sm flex">
          <button
            type="button"
            onClick={onClose}
            className="form-close"
          ></button>
          <h2 className="text-lg m-auto">
            Thanks! We will get in touch with you soon!
          </h2>
        </form>
      )}
    </section>
  );
}

PopupWithForm.propTypes = {
	isOpen:		PropTypes.bool.isRequired,
  onClose:  PropTypes.func.isRequired,
};

export default PopupWithForm;
