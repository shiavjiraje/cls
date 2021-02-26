import React from "react";
import { useForm } from "react-hook-form";

function FormWizard() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Error</label>
      <input
        type="text"
        name="singleErrorInput"
        ref={register({ required: true })}
      />
      {errors.singleErrorInput && <p>Your input is required</p>}

     
      <input type="number" name="numberInput" ref={register({ min: 50 })} />
      {errors.numberInput && <p>Your input required to be more than 50</p>}

      <input type="submit" />
    </form>
  );
}


export default FormWizard;