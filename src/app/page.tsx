import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="flex flex-row flex-wrap justify-center gap-6 pb-8 px-4" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
        <Card venueName="The Grand Table" imgSrc="/img/grandtable.jpg" />
        <Card venueName="Spark Space" imgSrc="/img/sparkspace.jpg" />
        <Card venueName="The Bloom Pavilion" imgSrc="/img/bloom.jpg" />
      </div>
    </main>
  );
}