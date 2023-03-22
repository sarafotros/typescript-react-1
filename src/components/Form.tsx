import React, { FormEvent, useRef } from "react";

const Form = () => {

   const nameRef = useRef<HTMLInputElement>(null);
   const ageRef = useRef<HTMLInputElement>(null);
    const  person = {name: '', age:0};

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        if(nameRef.current !== null){
            person.name = nameRef.current.value;
        }
        if(ageRef.current !== null){
        person.age = parseInt(ageRef.current.value) ;
        }
        console.log(person)
    }

  return (
    <form onSubmit={submitHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-conrol" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-conrol" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
