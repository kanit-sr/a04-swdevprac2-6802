import Banner from "@/components/Banner";
import Card from "@/components/Card";
import styles from "./page.module.css";

const venues = [
  {
    imgSrc: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    imgAlt: "The Grand Hall",
    name: "The Grand Hall",
    description: "Elegant ballroom for weddings & galas, seating up to 500 guests.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    imgAlt: "Skyline Terrace",
    name: "Skyline Terrace",
    description: "Rooftop venue with panoramic city views, ideal for cocktail parties.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    imgAlt: "The Garden Pavilion",
    name: "The Garden Pavilion",
    description: "Lush outdoor setting surrounded by greenery, perfect for ceremonies.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    imgAlt: "Crystal Conference Center",
    name: "Crystal Conference Center",
    description: "Modern conference halls equipped with the latest AV technology.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    imgAlt: "The Rustic Barn",
    name: "The Rustic Barn",
    description: "Charming countryside barn venue with warm lighting and rustic decor.",
  },
];

export default function Home() {
  return (
    <main>
      <Banner />
      {/* แถวเลื่อนซ้าย-ขวา */}
      <div className={styles.cardRow}>
        {venues.map((venue) => (
          <Card key={venue.name} {...venue} />
        ))}
      </div>
    </main>
  );
}