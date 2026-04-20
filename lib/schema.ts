import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  whatsapp: z.string().optional(),
  businessType: z.enum(["restaurant", "real-estate", "hotel", "other"], {
    required_error: "Please select a business type",
  }),
  city: z.enum(["girne", "lefkosa", "gazimagusa", "iskele", "lapta", "guzelyurt", "other"], {
    required_error: "Please select a city",
  }),
  service: z.enum(["local-seo", "google-ads", "meta-ads", "web-design", "seo-audit", "full-package"], {
    required_error: "Please select a service",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
