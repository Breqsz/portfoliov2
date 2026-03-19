"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { t } = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with Resend, Formspree, or API
    console.log("Form submitted:", formState);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen px-6 pt-24 pb-24">
      <div className="mx-auto max-w-xl">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 rounded text-sm text-neutral-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] focus-visible:text-white"
          aria-label={t("contactPage.backToHome")}
        >
          <ArrowLeft className="size-4" />
          {t("contactPage.backToHome")}
        </Link>
        <motion.h1
          id="contact-page-heading"
          className="text-3xl font-bold text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("contactPage.heading")}
        </motion.h1>
        <motion.p
          className="mt-4 text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {t("contactPage.subhead")}
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              {t("contactPage.nameLabel")}
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={t("contactPage.namePlaceholder")}
              value={formState.name}
              onChange={handleChange}
              required
              className="h-11 border-white/20 bg-white/5"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              {t("contactPage.emailLabel")}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t("contactPage.emailPlaceholder")}
              value={formState.email}
              onChange={handleChange}
              required
              className="h-11 border-white/20 bg-white/5"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-neutral-300"
            >
              {t("contactPage.messageLabel")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder={t("contactPage.messagePlaceholder")}
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
          <Button
            type="submit"
            className="w-full border-blue-500/50 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
          >
            {t("contactPage.submitLabel")}
          </Button>
        </motion.form>
      </div>
    </div>
  );
}
