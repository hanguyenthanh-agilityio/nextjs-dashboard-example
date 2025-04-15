import { getPlanningById } from "@/api/planning";
import Breadcrumbs from "@/components/breadcrumb";
import EditPlanningForm from "./edit-form";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const planning = await getPlanningById(params.id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Planning", href: "/dashboard/planning" },
          {
            label: "Edit Planning",
            href: `/dashboard/planning/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditPlanningForm planning={planning} />
    </main>
  );
}
