import DecryptedText from './functions/DecryptedText';
import { SiTypescript, SiReact, SiJavascript, SiPython, SiTailwindcss, SiCplusplus, SiPostgresql } from 'react-icons/si';

export const About = () => {
    return (
        <section
            id="about"
            style={{
                padding: "6rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "3rem",
            }}
        >
            <div style={{maxWidth: "750px", width: "100%", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--mono)", fontSize: "1.05rem", lineHeight: 1.9, margin: 0, color: "white"}}>
                    <DecryptedText
                        text="A Math & CS student at Fordham University. I enjoy picking up new languages and technologies, binge-watching shows at an unhealthy pace, and building projects that automate my laziness."
                        animateOn="inViewHover"
                        sequential
                        revealDirection="start"
                        speed={15}
                        useOriginalCharsOnly={false}
                    />
                </p>
            </div>

            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
                {[
                    { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
                    { Icon: SiReact, label: "React", color: "#61DAFB" },
                    { Icon: SiJavascript, label: "JavaScript", color: "#F7DF1E" },
                    { Icon: SiPython, label: "Python", color: "#3776AB" },
                    { Icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
                    { Icon: SiCplusplus, label: "C++", color: "#00599C" },
                    { Icon: SiPostgresql, label: "SQL", color: "#4169E1" },
                ].map(({ Icon, label, color }) => (
                    <div
                        key={label}
                        title={label}
                        style={{
                            width: "48px",
                            height: "48px",
                            borderRadius: "10px",
                            background: "color-mix(in srgb, var(--text) 10%, transparent)",
                            border: "1px solid color-mix(in srgb, var(--text) 20%, transparent)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Icon size={26} color={color} />
                    </div>
                ))}
            </div>
        </section>
    );
};
