import { Dates } from "constants/Dates";
import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { LanguageType } from "utils/interfaces";

export const useLanguage = (): {
  language: LanguageType;
  setLanguage: (locale: LanguageType) => Promise<void>;
} => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = useCallback(
    async (locale: LanguageType) => {
      Dates.setLocale(locale);
      localStorage.setItem("lng", locale);
      await i18n.changeLanguage(locale);
    },
    [i18n]
  );

  useEffect(() => {
    const localLanguage = (localStorage.getItem("lng") as LanguageType) || "en";
    handleChangeLanguage(localLanguage);
  }, [handleChangeLanguage]);

  return useMemo(
    () => ({
      language: i18n.language as LanguageType,
      setLanguage: handleChangeLanguage,
    }),
    [handleChangeLanguage, i18n.language]
  );
};
