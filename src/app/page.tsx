import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <Card
        imgSrc="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
        venueName="The Grand Hall"
      />
    </main>
  );
}