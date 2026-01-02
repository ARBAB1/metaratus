"use client";
import styles from "./Team.module.css";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      image: "/assets/team/Group 7.png",
      name: "Humanocentric AI™",
      role: "AI designed to amplify human intelligence—not replace it—ensuring technology works in partnership with people, not in place of them.",
      verticalText: "Neural",
    },
    {
      id: 2,
      image: "/assets/team/Group 8.png",
      name: "Improving the Human Condition™",
      role: "Every Metaratus® innovation begins with one goal: use technology to enhance human capability, well-being, and opportunity.",
      verticalText: "Solutions",
    },
    {
      id: 3,
      image: "/assets/team/Group 11.png",
      name: "AI That Thinks With Us™, Not for Us",
      role: "Our systems reinforce human judgment, creativity, and strategic thinking—aligning machine logic with human context and intent.",
      verticalText: "Future",
    },
    {
      id: 4,
      image: "/assets/team/Group 9.png",
      name: "The Prisma™ Approach to Clarity",
      role: "Prisma™ refracts complex challenges into structured insights, enabling clear strategic decision-making.",
      verticalText: "Digital",
    },
    {
      id: 5,
      image: "/assets/team/Group 10.png",
      name: "Ethical Intelligence & Responsible Design",
      role: "Our commitment to transparent, secure, and responsible AI ensures ethical innovation at every level.",
      verticalText: "Learning",
    },
  ];

  return (
    <section className={styles.team} id="team">
      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.leftColumn}>
          <div className={styles.textContent}>
            <div className={styles.tag}>[ team ]</div>

            <h2 className={styles.title}>
              Humanocentric AI™:
              <br />
              using technology to
              <br />
              elevate your human
              <br />
              experience™
            </h2>

            <p className={styles.subtitle}>Awesome team members</p>

            <button className={styles.exploreButton}>
              Explore more <span className={styles.arrow}>↗</span>
            </button>
          </div>
          <div className={`${styles.singleCard}`}>
            <TeamCard member={teamMembers[2]} />
          </div>
        </div>

        {/* RIGHT (2 columns, staggered) */}
        <div className={styles.rightSide}>
          <div className={styles.col}>
            <TeamCard member={teamMembers[0]} />
            <TeamCard member={teamMembers[3]} />
          </div>

          <div className={`${styles.col} ${styles.staggered}`}>
            <TeamCard member={teamMembers[1]} />
            <TeamCard member={teamMembers[4]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={member.image}
          alt={member.name}
          width={520}
          height={520}
          className={styles.image}
          priority={member.id <= 2}
        />

        {/* <div className={styles.verticalText}>{member.verticalText}</div> */}

        <div className={styles.cutout}>
          <div className={styles.cutoutInner} />
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}> {member.role} </p>
      </div>
    </div>
  );
}
