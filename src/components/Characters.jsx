

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { characters } from '../lib/utils.ts';

// Recursive fractal branches with animated SVG lines and color shifting
const generateBranches = (x1, y1, angle, depth) => {
    if (depth === 0) return [];

    const length = 80 * (depth / 6);
    const x2 = x1 + length * Math.cos(angle);
    const y2 = y1 + length * Math.sin(angle);

    const line = (
        <motion.line
            key={`${x1}-${y1}-${depth}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={`hsl(${depth * 40}, 100%, 50%)`}
            strokeWidth={depth}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror"
            }}
        />
    );

    return [
        line,
        ...generateBranches(x2, y2, angle - Math.PI / 4, depth - 1),
        ...generateBranches(x2, y2, angle + Math.PI / 4, depth - 1),
    ];
};

// SuperFractal background with continuous hue shift and mouse-driven parallax
const SuperFractal = ({ parallaxX, parallaxY }) => {
    const branches = generateBranches(250, 500, -Math.PI / 2, 6);

    return (
        <motion.div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                zIndex: 0,
                x: parallaxX,
                y: parallaxY,
            }}
            animate={{ filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
            <svg
                width="500"
                height="500"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-250px, -250px)",
                }}
            >
                {branches}
            </svg>
            <motion.div
                style={{
                    position: "absolute",
                    top: "calc(50% - 150px)",
                    left: "calc(50% - 150px)",
                    width: 300,
                    height: 300,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, #FF008C, #D309E1, #9C1AFF)",
                    mixBlendMode: "screen",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
            />
        </motion.div>
    );
};

// Particle explosion effect radiating from the card's center
const ParticleExplosion = () => {
    const particles = Array.from({ length: 30 }).map((_, i) => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 50 + Math.random() * 50;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        return (
            <motion.div
                key={i}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.9)",
                }}
                initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                animate={{ opacity: 0, x, y, scale: 0.5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            />
        );
    });

    return <>{particles}</>;
};

// Variants for card entrance and hover interactions
const cardVariants = {
    offscreen: {
        opacity: 0,
        y: 50,
        rotate: -10,
    },
    onscreen: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
    hover: {
        scale: 1.05,
        rotateX: [0, 10, -10, 0],
        rotateY: [0, -10, 10, 0],
        boxShadow: "0px 10px 30px rgba(255, 255, 255, 0.7)",
        transition: {
            duration: 1.0,
            ease: "easeInOut",
        },
    },
};

// AnimatedCard with glitch text effect and particle burst on hover
const AnimatedCard = ({ char }) => {
    const [showParticles, setShowParticles] = useState(false);
    const [glitch, setGlitch] = useState(false);

    // Toggle glitch effect momentarily on hover start
    const handleHoverStart = () => {
        setGlitch(true);
        setShowParticles(true);
        setTimeout(() => setGlitch(false), 300);
    };

    return (
        <motion.div
            className="relative p-4 rounded-lg border border-blue-300  overflow-hidden"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            whileHover="hover"
            onHoverStart={handleHoverStart}
            onHoverEnd={() => setShowParticles(false)}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true, amount: 0.5 }}
        >
            {/* Particle explosion overlay */}
            {showParticles && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
                    <ParticleExplosion />
                </div>
            )}
            <img
                src={char.image}
                alt={char.name}
                className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <div className="relative">
                <h3 className="text-xl font-semibold text-gray-400">{char.name}</h3>
                {/* Glitch overlay effect */}
                {glitch && (
                    <>
                        <motion.h3
                            className="absolute top-0 left-0 text-xl font-semibold"
                            style={{ color: "red", mixBlendMode: "screen" }}
                            initial={{ x: -2 }}
                            animate={{ x: 2 }}
                            transition={{ duration: 0.2, repeat: 3, repeatType: "mirror" }}
                        >
                            {char.name}
                        </motion.h3>
                        <motion.h3
                            className="absolute top-0 left-0 text-xl font-semibold"
                            style={{ color: "blue", mixBlendMode: "screen" }}
                            initial={{ x: 2 }}
                            animate={{ x: -2 }}
                            transition={{ duration: 0.2, repeat: 3, repeatType: "mirror" }}
                        >
                            {char.name}
                        </motion.h3>
                    </>
                )}
            </div>
            <p className="text-gray-400">{char.ability}</p>
        </motion.div>
    );
};

const Character = () => {
    // Create motion values for a subtle parallax effect based on mouse movement
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const parallaxX = useTransform(x, [-200, 200], [-20, 20]);
    const parallaxY = useTransform(y, [-200, 200], [-20, 20]);

    return (
        <motion.div
            style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
            onMouseMove={(e) => {
                const posX = e.clientX - window.innerWidth / 2;
                const posY = e.clientY - window.innerHeight / 2;
                x.set(posX);
                y.set(posY);
            }}
        >
            {/* Fractal animated background with dynamic hue and parallax */}
            <SuperFractal parallaxX={parallaxX} parallaxY={parallaxY} />

            {/* Foreground content with ultra-interactive animated cards */}
            <div
                className="p-6 rounded-lg shadow-md mb-6 relative z-10"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
            >
                <h2 className="text-2xl font-bold mb-4 text-center text-white">
                    Characters & Abilities
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {characters.map((char, index) => (
                        <AnimatedCard key={index} char={char} />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Character;
