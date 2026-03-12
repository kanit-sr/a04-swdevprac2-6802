import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
      <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
      <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
    </main>
  );
}