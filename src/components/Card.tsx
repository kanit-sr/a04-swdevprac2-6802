import Image from "next/image";
import styles from "./card.module.css";

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  name: string;
  description: string;
}

export default function Card({ imgSrc, imgAlt, name, description }: CardProps) {
  return (
    <div className={styles.card}>
      {/* รูปภาพด้านบน */}
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* ข้อความด้านล่าง */}
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
