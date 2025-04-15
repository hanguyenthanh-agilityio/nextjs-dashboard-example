"use server";

// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
// import { writeFile } from "fs/promises";
// import path from "path";
// import { PlanningSchema } from "./schema";

// const BASE_URL = "https://67f887c42466325443eceaa9.mockapi.io/planning";

// Create Planning
// export async function createPlanning(formData: FormData): Promise<void> {
//   const title = formData.get("title") as string;
//   const description = formData.get("description") as string;
//   const iconBg = formData.get("iconBg") as string;
//   const iconColor = formData.get("iconColor") as string;
//   const file = formData.get("icon") as File;

//   let iconPath = "";

//   if (file && file.size > 0) {
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const fileName = `${Date.now()}-${file.name}`;
//     const filePath = path.join(process.cwd(), "public", "uploads", fileName);

//     await writeFile(filePath, buffer);
//     iconPath = `/uploads/${fileName}`;
//   }

//   const newPlanning = {
//     title,
//     description,
//     icon: iconPath,
//     iconBg,
//     iconColor,
//   };
//   const res = await fetch(BASE_URL, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newPlanning),
//   });

//   if (!res.ok) {
//     throw new Error("Failed to create planning");
//   }

//   // revalidatePath("/dashboard/planning");
//   redirect("/dashboard/planning");
// }

// Update planning
// export async function updatePlanning(
//   id: string,
//   formData: FormData
// ): Promise<void> {
//   const validated = PlanningSchema.omit({ id: true }).parse({
//     title: formData.get("title"),
//     description: formData.get("description"),
//     iconBg: formData.get("iconBg"),
//     iconColor: formData.get("iconColor"),
//   });

//   const file = formData.get("icon") as File;
//   let iconPath = (formData.get("existingIcon") as string) || "";

//   if (file && file.size > 0) {
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const fileName = `${Date.now()}-${file.name}`;
//     const filePath = path.join(process.cwd(), "public", "uploads", fileName);
//     await writeFile(filePath, buffer);
//     iconPath = `/uploads/${fileName}`;
//   }

//   const updatedPlanning = {
//     ...validated,
//     icon: iconPath,
//   };

//   const res = await fetch(`${BASE_URL}/${id}`, {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(updatedPlanning),
//   });

//   if (!res.ok) {
//     throw new Error("Failed to update planning");
//   }

//   // revalidatePath("/dashboard/planning");
//   redirect("/dashboard/planning");
// }

// Delete Planning
// export async function deletePlanning(id: string): Promise<void> {
//   const res = await fetch(`${BASE_URL}/${id}`, {
//     method: "DELETE",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to delete planning");
//   }

//   // revalidatePath("/dashboard/planning");
//   redirect("/dashboard/planning");
// }
