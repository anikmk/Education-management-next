'use client';

import { useForm } from "react-hook-form";
import ErrorFormText from "./ErrorFormText";

export default function AcademicResultForm() {
  const { register, handleSubmit,formState:{errors} } = useForm();

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);
  };

  return (
    <div className="bg-[#f2f2f2] p-8 rounded-md mt-10 mb-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end"
      >
        {/* Exam & Session */}
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <label className="block text-sm font-medium mb-1 text-secondary">
            EXAM & SESSION *
          </label>
          <select
            {...register("exam",{required:"Please Select Exam"})}
            className="w-full border border-slate-300 px-3 py-2 rounded"
          >
            <option value="">Select A Class, Exam & Session</option>
            <option value="final-2024">Final Exam 2024</option>
          </select>
          {/* error message */}
          <ErrorFormText errorMessage={errors.exam?.message}/>
        </div>

        {/* Section */}
        <div>
          <label className="block text-sm font-medium mb-1 text-secondary">
            SECTION
          </label>
          <select
            {...register("section")}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select One</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          {/* error message */}
          <ErrorFormText />
        </div>

        {/* Group */}
        <div>
          <label className="block text-sm font-medium mb-1 text-secondary">
            GROUP
          </label>
          <select
            {...register("group")}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select One</option>
            <option value="science">Science</option>
            <option value="arts">Arts</option>
          </select>
          {/* error message */}
          <ErrorFormText />
        </div>

        {/* Roll No */}
        <div>
          <label className="block text-sm font-medium mb-1 text-secondary">
            ROLL NO *
          </label>
          <input
            type="number"
            {...register("roll",{valueAsNumber:true, required:"Please Enter Your Roll",validate: (value) => {
                if(value === 0) return "0 is not a valid roll number";
                if(value < 0) return "Roll number must be positive";
                return true;
            }})}
            
            placeholder="Enter Roll"
            className="w-full border px-3 py-2 rounded"
          />
          {/* error message */}
          <ErrorFormText errorMessage={errors.roll?.message}/>
        </div>

        {/* Search Button */}
        <div>
          <button
            type="submit"
            className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded w-full"
          >
            Search
          </button>
          {/* error message */}
          <p className="text-xs text-secondary h-4 mt-1"></p>
        </div>
      </form>
    </div>
  );
}
