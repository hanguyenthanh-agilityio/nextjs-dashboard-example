import Breadcrumbs from "@/components/breadcrumb";
import Form from "./form";

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
      <Form />
    </main>
  );
}
