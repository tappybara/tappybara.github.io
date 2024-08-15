import { FC, useEffect, useState, useRef } from 'react';

type Props = {
    theme?: string;
    children?: React.ReactNode;
};

const FadeInOnScroll: FC<Props> = ({ children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        if (!ref?.current) {
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        });

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return (
        <div
            ref={ref!}
            className={`transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;
