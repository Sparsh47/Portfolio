"use client";

import { useState, useEffect, ComponentType } from "react";

export default function DynamicIcon({ iconName }: { iconName: string }) {
    const [Icon, setIcon] = useState<ComponentType | null>(null);

    useEffect(() => {
        let alive = true;

        (async () => {
            try {
                const icons = await import(`react-icons/si`);
                const Comp = icons["SiNextdotjs"];
            } catch (e) {
            }
        })();

        return () => { alive = false; };
    }, [iconName]);

    return Icon ? <Icon /> : null;
}
