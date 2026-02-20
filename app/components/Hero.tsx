'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { aboutContent } from "../lib/data";

const ROLES = [
    "React Developer",
    "Full-Stack Developer",
    "IT Engineering Student",
];

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [loaded, setLoaded] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const t = setTimeout(() => setLoaded(true), 150);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(true);
            setTimeout(() => {
                setRoleIndex((i) => (i + 1) % ROLES.length);
                setAnimating(false);
            }, 400);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { width, height } = containerRef.current.getBoundingClientRect();
            setMousePos({
                x: (e.clientX / width - 0.5),
                y: (e.clientY / height - 0.5),
            });
        };
        window.addEventListener("mousemove", handler);
        return () => window.removeEventListener("mousemove", handler);
    }, []);

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };

    return (
        <div
            ref={containerRef}
            style={{
                background: "#080808",
                height: "100vh",
                minHeight: "600px",
                color: "#fff",
                overflow: "hidden",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                paddingTop: "90px",
            }}
        >
            <div className="hero-grain" />

            {/* Ambient glow */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                background: `radial-gradient(ellipse 70% 60% at ${50 + mousePos.x * 15}% ${45 + mousePos.y * 10}%, rgba(255,255,255,0.03) 0%, transparent 65%)`,
                transition: "background 0.5s ease",
            }} />

            {/* Subtle grid */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.02,
                backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "80px 80px",
            }} />

            {/* ─── PROFESSIONAL PORTRAIT (Option 1) ─── */}
            <div style={{
                position: "absolute",
                right: 0,
                bottom: 0,
                width: "50vw", /* Increased width for better visibility */
                height: "90vh", /* Taller */
                zIndex: 1,
                opacity: loaded ? 0.85 : 0, /* Significantly increased opacity for clarity */
                transition: "opacity 1.5s ease-out",
                pointerEvents: "none",
                /* Refined mask: Clearer left fade, no bottom cutoff */
                maskImage: "linear-gradient(to right, transparent 0%, black 50%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 50%)",
            }}>
                <Image
                    src={aboutContent.portraitImage}
                    alt="Vedant Cheulkar"
                    fill
                    className="object-cover object-center grayscale contrast-110" // Centered and boosted contrast
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* ── TOP ROW (Status) ── */}
            <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "0 clamp(1.5rem, 5vw, 3rem)",
                position: "relative", zIndex: 10,
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(-10px)",
                transition: "all 0.7s 0.2s ease",
                marginBottom: "auto",
            }}>
                <span className="hero-tag">Navi Mumbai, India</span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div className="availability-dot" />
                    <span className="hero-tag" style={{ color: "rgba(255,255,255,0.6)" }}>Available</span>
                </div>
            </div>

            {/* ── CENTRE (Main Content) ── */}
            <div style={{
                position: "relative", zIndex: 10,
                padding: "0 clamp(1.5rem, 5vw, 3rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: "auto",
                marginTop: "auto",
                maxWidth: "65%", /* Slight overlap allowed but controlled */
            }}>

                {/* Intro line */}
                <div style={{
                    marginBottom: "1.5rem",
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "none" : "translateY(12px)",
                    transition: "all 0.7s 0.4s ease",
                    display: "flex", alignItems: "center", gap: "0.75rem",
                }}>
                    <div style={{ width: 30, height: 1, background: "#fff", opacity: 0.4 }} />
                    <span style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.6)",
                        letterSpacing: "0.05em",
                    }}>
                        👋 Hi, I&apos;m Vedant
                    </span>
                </div>

                {/* ── CYCLING ROLE ── */}
                <div style={{
                    marginBottom: "1rem",
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "none" : "translateY(12px)",
                    transition: "all 0.7s 0.55s ease",
                }}>
                    <div style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: "clamp(1.4rem, 3.5vw, 2.8rem)",
                        fontWeight: 300,
                        fontStyle: "italic",
                        color: "rgba(255,255,255,0.9)",
                        lineHeight: 1.1,
                        overflow: "hidden",
                        height: "clamp(1.6rem, 4vw, 3.2rem)",
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <div
                            className={`role-text ${animating ? "exit" : "enter"}`}
                            key={roleIndex}
                            style={{
                                transform: animating ? "translateY(-110%)" : "translateY(0%)",
                                opacity: animating ? 0 : 1,
                                transition: "transform 0.4s cubic-bezier(0.76,0,0.24,1), opacity 0.35s ease",
                            }}
                        >
                            {ROLES[roleIndex]}
                        </div>
                    </div>
                </div>

                {/* BIG NAME (Fixed Spacing) */}
                <div style={{ position: "relative" }}>
                    <span
                        className="name-common name-solid"
                        style={{
                            opacity: loaded ? 1 : 0,
                            lineHeight: 1.0, // Better spacing
                            marginBottom: "0.25rem", // Slight separation
                            transform: loaded
                                ? `translate(${mousePos.x * -6}px, ${mousePos.y * -4}px)`
                                : "translateY(40px)",
                            transition: loaded
                                ? "transform 0.7s cubic-bezier(0.16,1,0.3,1)"
                                : "opacity 0.8s 0.6s, transform 0.8s 0.6s",
                        }}
                    >
                        Vedant
                    </span>

                    <span
                        className="name-common name-outline"
                        style={{
                            paddingLeft: "clamp(2rem, 5vw, 4rem)", /* More indentation for visual balance */
                            lineHeight: 1.0,
                            display: "block",
                            opacity: loaded ? 1 : 0,
                            transform: loaded
                                ? `translate(${mousePos.x * 4}px, ${mousePos.y * 3}px)`
                                : "translateY(40px)",
                            transition: loaded
                                ? "transform 0.7s cubic-bezier(0.16,1,0.3,1), color 0.4s ease, -webkit-text-stroke 0.4s ease, filter 0.4s ease"
                                : "opacity 0.8s 0.75s, transform 0.8s 0.75s",
                            // Inline style to ensure stroke is visible
                            WebkitTextStroke: "1px rgba(255,255,255,0.5)",
                        }}
                    >
                        Cheulkar
                    </span>
                </div>

                {/* CTAs */}
                <div style={{
                    display: "flex", alignItems: "center", gap: "1.5rem",
                    marginTop: "3rem",
                    opacity: loaded ? 1 : 0,
                    transform: loaded ? "none" : "translateY(16px)",
                    transition: "all 0.8s 1s ease",
                }}>
                    <Link href="#work" className="cta-btn cta-btn-primary">
                        View Work <span className="arrow-icon">→</span>
                    </Link>
                    <Link href="#contact" className="cta-btn cta-btn-ghost">
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* ── BOTTOM BAR ── */}
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                paddingBottom: "2rem",
                position: "relative", zIndex: 10,
                opacity: loaded ? 1 : 0,
                transform: loaded ? "none" : "translateY(14px)",
                transition: "all 0.8s 1.5s ease",
            }}>
                <div
                    onClick={handleScroll}
                    style={{
                        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                        cursor: "pointer",
                        pointerEvents: "auto"
                    }}
                >
                    <span style={{
                        fontFamily: "'Instrument Sans', sans-serif",
                        fontSize: 9,
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.2)",
                    }}>Scroll</span>
                    <div style={{
                        width: 1, height: 32,
                        background: "linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)",
                        animation: "scrollAnim 1.8s ease-in-out infinite",
                    }} />
                </div>
            </div>
        </div>
    );
}
