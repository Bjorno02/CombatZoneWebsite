import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useSEO, SEO_CONFIG } from "@/hooks/useSEO";

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name is too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name is too long"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  useSEO(SEO_CONFIG.contact);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log("Form submitted:", data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout className="pt-20">
      {/* Content */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Form */}
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold font-heading uppercase mb-8">Send us a Message</h2>
              
              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-green-800">Message Sent!</p>
                    <p className="text-sm text-green-700">Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded flex items-start gap-3">
                  <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-bold text-red-800">Something went wrong</p>
                    <p className="text-sm text-red-700">Please try again or email us directly at info@combatzonemma.com</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold uppercase text-slate-500">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={errors.firstName ? "firstName-error" : undefined}
                      className={errors.firstName ? "border-red-500 focus-visible:ring-red-500" : ""}
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p id="firstName-error" className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  
                  {/* Last Name */}
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold uppercase text-slate-500">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={errors.lastName ? "lastName-error" : undefined}
                      className={errors.lastName ? "border-red-500 focus-visible:ring-red-500" : ""}
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p id="lastName-error" className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle size={14} />
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase text-slate-500">
                    Email <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold uppercase text-slate-500">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`w-full h-10 px-3 rounded-md border bg-background text-sm ${
                      errors.subject ? "border-red-500" : "border-input"
                    }`}
                    {...register("subject")}
                  >
                    <option value="">Select a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="fighter">Fighter Inquiry</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="media">Media/Press</option>
                  </select>
                  {errors.subject && (
                    <p id="subject-error" className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase text-slate-500">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help?"
                    className={`min-h-[150px] ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle size={14} />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white font-bold uppercase w-full py-6 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  <span className="text-primary">*</span> Required fields
                </p>
              </form>
            </div>

            {/* Info */}
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold font-heading uppercase mb-8">Contact Info</h2>
              <div className="space-y-10 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-primary rounded-none" aria-hidden="true">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading uppercase text-lg">Mailing Address</h3>
                    <p className="text-slate-600">555 Elm Street<br />Manchester, NH 03101</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-primary rounded-none" aria-hidden="true">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading uppercase text-lg">Email</h3>
                    <p className="text-slate-600">
                      <a href="mailto:info@combatzonemma.com" className="hover:text-primary transition-colors">
                        info@combatzonemma.com
                      </a>
                      <br />
                      <a href="mailto:media@combatzonemma.com" className="hover:text-primary transition-colors">
                        media@combatzonemma.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center text-primary rounded-none" aria-hidden="true">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading uppercase text-lg">Phone</h3>
                    <p className="text-slate-600">
                      <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                        (555) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-[300px] bg-slate-200 flex items-center justify-center font-bold text-slate-400 uppercase">
                Google Maps Embed (SNHU Arena)
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
