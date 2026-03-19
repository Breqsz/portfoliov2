"use client";

import { useLocale } from "@/lib/i18n/context";

export function SkipToMainContentText() {
  const { t } = useLocale();
  return <>{t("common.skipToMainContent")}</>;
}

