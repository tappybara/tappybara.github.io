import { FC, useEffect, useState, useRef } from 'react';

type Props = {
    className?: string;
    children?: React.ReactNode;
};

const FadeInOnScroll: FC<Props> = ({ className, children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null!);

    useEffect(() => {
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
            ref={ref}
            className={`transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
        >
            {children}
        </div>
    );
};

export default FadeInOnScroll;
