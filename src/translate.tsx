import { useT as useTr, Autocomplete, TParams, tr } from "talkr";
import en from "./locales/en_translation.json";

type Key = Autocomplete<typeof en>;

export const useAutocompleteT = () => {
  const { locale, setLocale, languages, defaultLanguage } = useTr();
  return {
    setLocale,
    locale,
    T: (key: Key, params?: TParams) => tr({ locale, languages, defaultLanguage }, key, params)
  };
};
