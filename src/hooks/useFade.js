import { useEffect, useState } from "react";

export default function useFade(duration) {
    const [fade, setFade] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setFade(true);
        const t = setTimeout(() => setFade(false), duration);
        return () => clearTimeout(t);
    }, [activeIndex, duration]);

    return { fade, setFade, activeIndex, setActiveIndex };
}