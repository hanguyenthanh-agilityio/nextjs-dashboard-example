import Form from "@/components/form";
import { updatePlanning } from "@/lib/actions";
import { Planning } from "@/lib/definitions";

interface EditPlanningFormProps {
  planning: Planning;
}

const EditPlanningForm = ({ planning }: EditPlanningFormProps) => {
  const updatePlanningWithId = updatePlanning.bind(null, planning.id!);

  return (
    <form action={updatePlanningWithId} className="pt-5">
      <Form buttonAction="Update plan" planning={planning} />
    </form>
  );
};

export default EditPlanningForm;
