import * as React from 'react';
import { usePokemonStore, TooltipLine } from '../stores/pokemonStore';

export function PokemonTooltip(): React.ReactElement | null {
    const { tooltipContent } = usePokemonStore();
    const hideTimerRef = React.useRef<number | null>(null);

    React.useEffect(() => {
        const el = document.getElementById('pokemonTooltip');
        if (!el) { return; }

        if (tooltipContent !== null) {
            if (hideTimerRef.current !== null) {
                clearTimeout(hideTimerRef.current);
                hideTimerRef.current = null;
            }
            el.classList.add('visible');
        } else {
            hideTimerRef.current = window.setTimeout(() => {
                el.classList.remove('visible');
                hideTimerRef.current = null;
            }, 100);
        }
    }, [tooltipContent]);

    if (tooltipContent === null) { return null; }

    if (typeof tooltipContent === 'string') {
        return <>{tooltipContent}</>;
    }

    return (
        <>
            {tooltipContent.map((line: TooltipLine, i: number) => (
                <div key={i} className={line.className}>{line.text}</div>
            ))}
        </>
    );
}
