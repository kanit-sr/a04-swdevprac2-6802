"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./card.module.css";

interface CardProps {
  imgSrc?: string;
  imgAlt?: string;
  name?: string;
  description?: string;
}

export default function Card({
  imgSrc = "/img/default.jpg",
  imgAlt = "Card image",
  name = "",
  description = "",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const offset = useRef({ x: 0, y: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    const card = cardRef.current;
    if (!card) return;

    // จับตำแหน่ง offset ระหว่างเมาส์กับตำแหน่ง card
    const rect = card.getBoundingClientRect();
    offset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    // lock pointer ไว้กับ card เพื่อให้ลากออกนอกขอบได้
    card.setPointerCapture(e.pointerId);
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging || !cardRef.current) return;
    const x = e.clientX - offset.current.x;
    const y = e.clientY - offset.current.y;
    cardRef.current.style.left = `${x}px`;
    cardRef.current.style.top = `${y}px`;
  };

  const onPointerUp = () => {
    setDragging(false);
  };

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${dragging ? styles.dragging : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      {/* รูปภาพด้านบน */}
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          style={{ objectFit: "cover" }}
          draggable={false}
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
