"use client";
import React from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import ErrorDisplay from "./errormsg";
import ButtonComponent from "./button";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(4, "Too short")
    .max(25, "Too long")
    .required("Name is Required!"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Fullfil the requirements."
    )
    .required("Email is Required!"),

  country: yup.string().required("Country is Reqired!"),

  number: yup
    .number()
    .required("Phone number is required")
    .positive("Phone number must be a positive number")
    .integer("Phone number must be an integer")
    .min(1000000000, "Phone number must be at least 10 digits")
    .max(9999999999, "Phone number must be at most 10 digits"),

  feedback: yup.string().required("Please fill the requirement"),
});

const Login = () => {
  return (
    <div className="">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          country: "",
          number: "",
          feedback: "",
        }}
        onSubmit={(values, actions) => {
          validationSchema
            .validate(values)
            .then(() => {
              console.log("Form submitted successfully!");

              notify();

              actions.resetForm();
            })
            .catch((error) => {
              console.error("Validation error:", error);
            });
        }}
        validationSchema={validationSchema}
      >
        <Form className=" rounded-lg space-y-3 mt-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <Field
                className="w-full border-2 border-black opacity-40 outline-none indent-2 py-2 lg:py-4 rounded-md placeholder:text-black lg:placeholder:text-base placeholder:text-xs"
                name="name"
                type="text"
                placeholder="Full Name"
              />
              <ErrorDisplay name="name" />
            </div>
            <div className="">
              <Field
                className="border-2 w-full border-black opacity-40 outline-none indent-2 py-2 lg:py-4 rounded-md placeholder:text-black lg:placeholder:text-base placeholder:text-xs"
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <ErrorDisplay name="email" />
            </div>

            <div className="">
              <Field
                className="border-2 w-full border-black opacity-40 outline-none indent-2 py-2 lg:py-4 rounded-md placeholder:text-black lg:placeholder:text-base placeholder:text-xs"
                name="number"
                type="text"
                placeholder="Phone Number"
              />
              <ErrorDisplay name="number" />
            </div>
            <div className="">
              <Field
                className="border-2 w-full border-black opacity-40 outline-none indent-2 py-2 lg:py-4 rounded-md placeholder:text-black lg:placeholder:text-base placeholder:text-xs"
                name="country"
                type="text"
                placeholder="Country"
              />
              <ErrorDisplay name="country" />
            </div>
            <div className=" col-span-2">
              <Field
                name="feedback"
                as="textarea"
                placeholder="Project Brief"
                className=" w-full border-2 border-black opacity-40 outline-none rounded-md placeholder:text-black indent-2 pt-2 lg:placeholder:text-base placeholder:text-xs"
                rows="6"
              />
              <ErrorDisplay name="feedback" />
            </div>
            <div className=" w-full whitespace-nowrap">
              <ButtonComponent />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
