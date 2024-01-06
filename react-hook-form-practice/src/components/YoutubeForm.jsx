import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let randerCount = 0;

function YoutubeForm() {
  const { register, control, handleSubmit, formState, watch } = useForm({
    defaultValues: {
      username: "Ankur",
      email: "Jon@gmail.com",
      channel: "chai-aur-code",
      social: {
        twitter: "tw",
        facebook: "fb",
      },
      phoneNumbers: ["1234", "0982740985"],
      phNumbers: [{ number: "97987" }],
      age: 23,
      dob: new Date(),
    },
  });

  // const {name, ref, onChange, onBlur } = register()

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });
  // useFieldArray hook return a function called append
  // useFieldArray hook return a fucntion called remove

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted : ", data);
  };

  const watchUsername = watch(["username", "email"])
  
  return (
    <div>
      <h1>YouTube Form: {randerCount / 2}</h1>
      <h2>Watched value : {watchUsername}</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: "", // regexExp
                message: "Invalid email format",
              },
              // custom validation
              validate: (fieldValue) => {
                return (
                  fieldValue !== "admin@gmail.com" ||
                  "Enter a different email address"
                );
              },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: "Channel name is required",
            })}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>
        <div>
          <label htmlFor="twitter">Twitter</label>
          <input type="text" id="twitter" {...register("social.twitter")} />
        </div>
        <div>
          <label htmlFor="facebook">Facebook</label>
          <input type="text" id="facebook" {...register("social.facebook")} />
        </div>
        <div>
          <label htmlFor="primary-phone">Primary Phone Number</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
          />
        </div>
        <div>
          <label htmlFor="secondary-phone">Secondary Phone Number</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
        </div>

        {/* How to add dynamic field in our form ************ */}
        <div>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, index) => {
              return (
                <div className="form-control" key={field.id}>
                  <input
                    type="text"
                    {...register(`phNumbers.${index}.number`)}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => {
                append({ number: "" });
              }}
            >
              Add Phone number
            </button>
          </div>
        </div>

        {/* Numberic and date values ***************** */}
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: "Age is required",
            })}
          />
          <p className="error">{errors.age?.message}</p>
        </div>

        <div>
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              valueAsDate: true,
              required: "dob is required",
            })}
          />
          <p className="error">{errors.dob?.message}</p>
        </div>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
