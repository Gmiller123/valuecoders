import React from "react";
import { ErrorMessage } from "formik";

const ErrorDisplay = ({ name }) => {
  return (
    <div className="text-red-500 font-semibold text-xs tracking-wide mt-2">
      <ErrorMessage name={name} />
    </div>
  );
};

export default ErrorDisplay;
