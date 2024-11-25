"use client";

import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
  locale: string;
}

const i18n = createInstance();

export function Providers({ children }: ProvidersProps) {
  return (
    <I18nextProvider i18n={i18n} defaultNS="common">
      {children}
    </I18nextProvider>
  );
}
