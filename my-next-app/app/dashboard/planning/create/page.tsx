import Breadcrumbs from "@/components/breadcrumb";
import Form from "@/components/form";
import { createPlanning } from "@/lib/actions";

export default async function Page() {
  return (
    <main className="pt-16">
      <Breadcrumbs
        breadcrumbs={[
          { label: "Planning", href: "/dashboard/planning" },
          {
            label: "Create Plan",
            href: "/dashboard/Planning/create",
            active: true,
          },
        ]}
      />
      <form action={createPlanning}>
        <Form buttonAction="Create Plan" />
      </form>
    </main>
  );
}
