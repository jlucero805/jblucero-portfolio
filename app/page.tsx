'use client'
import Navigation from "@/components/layout/Navigation";
import { useTranslation } from "@/localization";
import Landing from "@/pages/Landing";

export default function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <Navigation links={[
                { label: t("HomeNavigationLink"), href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
            ]} />
            <Landing />
        </div>
    );
}
