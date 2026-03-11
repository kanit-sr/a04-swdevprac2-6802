"use client";
// "use client" จำเป็นเพราะใช้ useRef และ onClick ซึ่งเป็น browser API

import { useRef } from "react";
import Card from "./Card";
import styles from "./cardrow.module.css";

interface Venue {
  imgSrc: string;
  imgAlt: string;
  name: string;
  description: string;
}

interface CardRowProps {
  title: string;   // หัวข้อของแต่ละ row
  venues: Venue[];
}

export default function CardRow({ title, venues }: CardRowProps) {
  // useRef ใช้อ้างอิง DOM element โดยตรง เพื่อควบคุม scrollLeft
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;
    // เลื่อนทีละ 300px (ประมาณ 1 card + gap)
    rowRef.current.scrollBy({ left: direction === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.wrapper}>
        {/* ปุ่มซ้าย */}
        <button className={styles.arrow} onClick={() => scroll("left")} aria-label="Scroll left">
          &#8592;
        </button>

        {/* แถว Card ที่เลื่อนได้ */}
        <div className={styles.row} ref={rowRef}>
          {venues.map((venue) => (
            <Card key={venue.name} {...venue} />
          ))}
        </div>

        {/* ปุ่มขวา */}
        <button className={styles.arrow} onClick={() => scroll("right")} aria-label="Scroll right">
          &#8594;
        </button>
      </div>
    </section>
  );
}
