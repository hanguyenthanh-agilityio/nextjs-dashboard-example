"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { writeFile } from "fs/promises";
import path from "path";

const BASE_URL = "https://67f887c42466325443eceaa9.mockapi.io/planning";

export async function createPlanning(formData: FormData): Promise<void> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const iconBg = formData.get("iconBg") as string;
  const iconColor = formData.get("iconColor") as string;
  const file = formData.get("icon") as File;

  let iconPath = "";

  if (file && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    await writeFile(filePath, buffer);
    iconPath = `/uploads/${fileName}`;
  }

  const newPlanning = {
    title,
    description,
    icon: iconPath,
    iconBg,
    iconColor,
  };
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPlanning),
  });

  if (!res.ok) {
    throw new Error("Failed to create planning");
  }

  revalidatePath("/dashboard/planning");
  redirect("/dashboard/planning");
}
