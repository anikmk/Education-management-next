'use client'
import ErrorFormText from "@/(routes)/(academic-result)/search_result/ErrorFormText";
import { useForm } from "react-hook-form";
import { MdOutlineRestartAlt } from "react-icons/md";

export default function BoardExamResultForm() {
    const {register, handleSubmit, reset, formState:{errors}} = useForm();

    const onSubmit = (data) => {
        console.log("board exam result data:", data)
    }
  return (
    <div className="bg-[#f2f2f2] p-8 rounded-md mt-10 mb-20">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end"
          >
            {/* Board Exam */}
            <div className="col-span-1 md:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium mb-1 text-secondary uppercase">
                Board Exam *
              </label>
              <select
                {...register("board_exam",{required:"Please Select Exam Type"})}
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              >
                <option value="">Select A Class, Exam & Session</option>
                <option value="ssc">SSC</option>
                <option value="jsc">JSC</option>
              </select>
              {/* error message */}
              <ErrorFormText errorMessage={errors.board_exam?.message}/>
            </div>

            {/* Year */}
            <div className="col-span-1 md:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium mb-1 text-secondary uppercase">
                Year *
              </label>
              <select
                {...register("board_year",{required:"Please Select Exam Year"})}
                className="w-full border border-slate-300 px-3 py-2 rounded text-sm"
              >
                <option value="">Select A Class, Exam & Session</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
              {/* error message */}
              <ErrorFormText errorMessage={errors.board_year?.message}/>
            </div>
    
            {/* Search Button */}
            <div>
              <button
                onClick={() => reset()}
                type="button"
                className="bg-secondary hover:bg-primary text-white px-6 py-2 rounded w-full cursor-pointer"
              >
               <div className="flex items-center justify-center gap-1"><MdOutlineRestartAlt /> Reset</div>
              </button>
              {/* error message */}
              <p className="text-xs text-secondary h-4 mt-1"></p>
            </div>
            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded w-full cursor-pointer"
              >
                Search
              </button>
              {/* error message */}
              <p className="text-xs text-primary h-4 mt-1"></p>
            </div>
          </form>
        </div>
  )
}
