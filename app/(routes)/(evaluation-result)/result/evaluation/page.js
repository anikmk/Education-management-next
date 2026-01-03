import Container from "@/components/Shared/Container/Container";
import { IoIosArrowForward } from "react-icons/io";
import EvaluationResultForm from "./EvaluationResultForm";


export default function EvaluationResult() {
  return (
    <div className="mt-32">
      <h1 className="text-2xl font-semibold text-center">
        Evaluation Result
      </h1>
      <div className="flex items-center justify-center gap-3 text-sm mt-5">
        <div>Home</div>
        <div><IoIosArrowForward /></div>
        <div className="bg-secondary py-1 px-2 rounded-xl text-accent">Evaluation Result</div>
      </div>

    <Container>
      <EvaluationResultForm />
    </Container>
    </div>
  )
}
