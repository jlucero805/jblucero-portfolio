import en from "./en.json";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const locales = {
    en,
} as {
    en: any;
};

export const useTranslation = () => {
    const router = useRouter();

    const t = useCallback(
        (str: string) => {
            if (locales.en && locales.en[str]) {
                return locales.en[str]
            }
        },
        [],
    );

    return { t };
};
