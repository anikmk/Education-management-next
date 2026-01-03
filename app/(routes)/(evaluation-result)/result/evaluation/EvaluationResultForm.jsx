"use client"

import ErrorFormText from '@/(routes)/(academic-result)/search_result/ErrorFormText';
import { useForm } from 'react-hook-form';
import { MdOutlineRestartAlt } from 'react-icons/md';


export default function EvaluationResultForm() {
    const { register, handleSubmit,reset, formState:{errors} } = useForm();

    const onSubmit = (data) => {
        console.log("Evaluations form data:", data)
    }

  return (
    <div className="bg-[#f2f2f2] p-8 rounded-md mt-10 mb-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end"
          >
            {/* Session */}
            <div className="">
              <label className="block text-sm font-medium mb-1 text-secondary">
                SESSION *
              </label>
              <select
                {...register("session",{required:"Please Select Session"})}
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              >
                <option value="">Select A Session</option>
                <option value="final-2024">2026</option>
              </select>
              {/* error message */}
              <ErrorFormText errorMessage={errors.session?.message}/>
            </div>

            {/* class */}
            <div className="">
              <label className="block text-sm font-medium mb-1 text-secondary uppercase">
                Class *
              </label>
              <select
                {...register("class",{required:"Please Select Class"})}
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              >
                <option value="">Select A Class</option>
                <option value="final-2024">Ten</option>
              </select>
              {/* error message */}
              <ErrorFormText errorMessage={errors.class?.message}/>
            </div>

            {/* Exam */}
            <div className="">
              <label className="block text-sm font-medium mb-1 text-secondary">
                EXAM *
              </label>
              <select
                {...register("exam",{required:"Please Select Exam"})}
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              >
                <option value="">Select A Exam </option>
                <option value="final-2024">Final Exam</option>
              </select>
              {/* error message */}
              <ErrorFormText errorMessage={errors.exam?.message}/>
            </div>
    
            {/* Subject */}
            <div>
              <label className="block text-sm font-medium mb-1 text-secondary uppercase">
                Subject
              </label>
              <select
                {...register("subject")}
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              >
                <option value="">Select One</option>
                <option value="bangla 1st">Bangla 1st</option>
                <option value="english 2nd">English 2nd</option>
              </select>
              {/* error message */}
              <ErrorFormText />
            </div>
            {/* Indicator */}
            <div>
              <label className="block text-sm font-medium mb-1 text-secondary uppercase">
                Indicator
              </label>
              <select
                {...register("indicator")}
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              >
                <option value="">Select One</option>
                <option value="pi">PI</option>
                <option value="bi">BI</option>
              </select>
              {/* error message */}
              <ErrorFormText />
            </div>
            {/* Section */}
            <div>
              <label className="block text-sm font-medium mb-1 text-secondary">
                SECTION
              </label>
              <select
                {...register("section")}
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
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
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              >
                <option value="">Select Group</option>
                <option value="science">Science</option>
                <option value="arts">Arts</option>
              </select>
              {/* error message */}
              <ErrorFormText />
            </div>
            {/* Student ID */}
            <div>
              <label className="block text-sm font-medium mb-1 text-secondary uppercase">
                Student ID
              </label>
              <input
              inputMode="numeric"
                type="text"
                {...register("student_id",{
                    validate: (value) => {
                        const strValue = String(value);
                        if(!strValue) return true;
                        if(isNaN(strValue)){return "Only numbers are allowed"};
                        // length check
                        if(strValue.length < 6){return "Please enter 6 digit ID"};
                        return true;
                    },
                    
                })}
                
                placeholder="Enter Student ID"
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              />
              {/* error message */}
              <ErrorFormText errorMessage={errors.student_id?.message}/>
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
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              />
              {/* error message */}
              <ErrorFormText errorMessage={errors.roll?.message}/>
            </div>
    
            {/* Reset Button */}
            <div className=''>
              <button
                type='button'
                onClick={() => reset() }
                className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded w-full cursor-pointer"
              >
                <div className="flex items-center justify-center gap-1"><MdOutlineRestartAlt /> Reset</div>
              </button>
              {/* error message */}
              <p className="text-xs text-secondary h-4 mt-1"></p>
            </div>

            {/* Search Button */}
            <div className='md:col-span-2'>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded w-full cursor-pointer"
              >
                Search
              </button>
              {/* error message */}
              <p className="text-xs text-secondary h-4 mt-1"></p>
            </div>
          </form>
        </div>
  )
}
