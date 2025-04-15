import { z } from "zod";

export const PlanningSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string().optional(),
  icon: z.string().optional(),
  iconBg: z.string(),
  iconColor: z.string(),
});
