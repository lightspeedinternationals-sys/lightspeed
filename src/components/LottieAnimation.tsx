import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieAnimationProps {
    animationPath?: string;
    animationData?: any;
    containerId?: string;
    className?: string;
    loop?: boolean;
    autoplay?: boolean;
}

const LottieAnimation = ({
    animationPath,
    animationData,
    containerId,
    className = '',
    loop = true,
    autoplay = true
}: LottieAnimationProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const animationInstanceRef = useRef<any>(null);

    useEffect(() => {
        if (containerRef.current) {
            if (animationInstanceRef.current) {
                animationInstanceRef.current.destroy();
            }

            const params: any = {
                container: containerRef.current,
                renderer: 'svg',
                loop,
                autoplay,
            };

            if (animationData) {
                params.animationData = animationData;
            } else if (animationPath) {
                params.path = animationPath;
            }

            animationInstanceRef.current = lottie.loadAnimation(params);
        }

        return () => {
            if (animationInstanceRef.current) {
                animationInstanceRef.current.destroy();
            }
        };
    }, [animationPath, animationData, loop, autoplay]);

    return <div id={containerId} ref={containerRef} className={className} />;
};

export default LottieAnimation;
