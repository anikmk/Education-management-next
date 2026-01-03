import Container from "@/components/Shared/Container/Container";
import AcademicResultForm from "./AcademicResultForm";
import { IoIosArrowForward } from "react-icons/io";

export default function AcademicResultPage() {
  return (
    <div className="mt-32">
      <h1 className="text-2xl font-semibold text-center">
        Academic Result
      </h1>
      <div className="flex items-center justify-center gap-3 text-sm mt-5">
        <div>Home</div>
        <div><IoIosArrowForward /></div>
        <div className="bg-secondary py-1 px-2 rounded-xl text-accent">Academic Result</div>
      </div>

    <Container>
      <AcademicResultForm />
    </Container>
    </div>
  );
}
