import profileImg from "../assets/profile.png";
import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <section id="hero" style={{ height: "100vh", padding: "8rem 2rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6rem" }}>
        <h1 style={{ fontSize: "5rem", fontWeight: "bold", lineHeight: 1.1, margin: 0 }}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi, I'm Kwasi").start();
            }}
            options={{ cursor: "|", delay: 50}}
          />
        </h1>
        <img src={profileImg} alt="Profile" style={{ width: "18rem", height: "17rem", borderRadius: "1rem", objectFit: "cover" }} />
      </div>
    </section>
  );
}
