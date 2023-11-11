import { z } from "zod";
export const SignupSchema = z.object({
    fullname: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;

export const LoginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;

export const SettingSchema = z.object({
    fullname: z.string().min(3, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    phone: z.number().min(10, { message: "Phone number must be at least 10 characters" }),
});

export type SettingSchemaType = z.infer<typeof SettingSchema>;