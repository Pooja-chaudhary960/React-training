import { Field, Form, Formik } from "formik";
import React from "react";

const AfterSEE = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-3">
      <Formik
        initialValues={{
          name: "",
          email: "",
          gender: "",
          hobbies: [],
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          return errors;
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, errors }) => (
          <Form className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-5">
            <h2 className="text-3xl font-bold text-center text-indigo-600">
              Registration Form
            </h2>

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name
              </label>

              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender
              </label>

              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <Field
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={values.gender === "Male"}
                  />
                  Male
                </label>

                <label className="flex items-center gap-2">
                  <Field
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={values.gender === "Female"}
                  />
                  Female
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Hobbies
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="reading"
                    checked={values.hobbies.includes("reading")}
                  />
                  Reading
                </label>

                <label className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="dancing"
                    checked={values.hobbies.includes("dancing")}
                  />
                  Dancing
                </label>

                <label className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="cooking"
                    checked={values.hobbies.includes("cooking")}
                  />
                  Cooking
                </label>

                <label className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="hobbies"
                    value="singing"
                    checked={values.hobbies.includes("singing")}
                  />
                  Singing
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="border border-black px-4 py-2 rounded w-50"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AfterSEE;
