import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let randerCount = 0;

function YoutubeForm() {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: {
      username: "",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: ["", ""],
    },
  });

  // const {name, ref, onChange, onBlur } = register()
  
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted : ", data);
  };
 
  return (
    <div>
      <h1>YouTube Form: {randerCount / 2}</h1>

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
              // required: "Email is required",
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

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YoutubeForm;
