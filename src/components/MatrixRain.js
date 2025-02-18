import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { css } from '@linaria/core';
const styles = css `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: black;
`;
const MatrixRain = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return; //Early return if null
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return; // Ensure we have a 2D context
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const fontSize = 16;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = new Array(columns).fill(1);
        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0F0';
            ctx.font = `${fontSize}px monospace`;
            drops.forEach((y, x) => {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, x * fontSize, y * fontSize);
                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[x] = 0;
                }
                drops[x]++;
            });
            requestAnimationFrame(draw);
        };
        draw();
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return _jsx("canvas", { ref: canvasRef, className: styles });
};
export default MatrixRain;
