import Banner from "@/components/Banner";
import CardRow from "@/components/CardRow";

const ballrooms = [
  {
    imgSrc: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    imgAlt: "The Grand Hall",
    name: "The Grand Hall",
    description: "Elegant ballroom for weddings & galas, seating up to 500 guests.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80",
    imgAlt: "Crystal Ballroom",
    name: "Crystal Ballroom",
    description: "Dazzling crystal chandeliers and marble floors for unforgettable evenings.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1578874691223-64558a3ca096?w=800&q=80",
    imgAlt: "The Imperial Suite",
    name: "The Imperial Suite",
    description: "Classic European-style ballroom with gilded ceilings, capacity 300.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1561912774-79769a0a0a7a?w=800&q=80",
    imgAlt: "Pearl Hall",
    name: "Pearl Hall",
    description: "Intimate ballroom draped in pearl-white decor, perfect for private galas.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    imgAlt: "Sapphire Banquet",
    name: "Sapphire Banquet",
    description: "Grand banquet hall with sapphire-accented lighting for 600 guests.",
  },
];

const outdoorVenues = [
  {
    imgSrc: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    imgAlt: "The Garden Pavilion",
    name: "The Garden Pavilion",
    description: "Lush outdoor setting surrounded by greenery, perfect for ceremonies.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    imgAlt: "Lakeside Lawn",
    name: "Lakeside Lawn",
    description: "Serene lakeside venue with open skies and waterfront views.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    imgAlt: "The Rose Garden",
    name: "The Rose Garden",
    description: "Romantic rose-lined garden ideal for outdoor weddings and receptions.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    imgAlt: "Amphitheatre Grounds",
    name: "Amphitheatre Grounds",
    description: "Open-air amphitheatre for concerts, festivals, and large gatherings.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    imgAlt: "Sunset Terrace",
    name: "Sunset Terrace",
    description: "Hilltop terrace with breathtaking sunset views, seats up to 150.",
  },
];

const conferenceVenues = [
  {
    imgSrc: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    imgAlt: "Crystal Conference Center",
    name: "Crystal Conference Center",
    description: "Modern conference halls equipped with the latest AV technology.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    imgAlt: "Innovation Hub",
    name: "Innovation Hub",
    description: "Cutting-edge co-working and presentation space for tech summits.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&q=80",
    imgAlt: "The Boardroom",
    name: "The Boardroom",
    description: "Executive boardroom with 8K display walls and soundproofing.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
    imgAlt: "Summit Hall",
    name: "Summit Hall",
    description: "Large-scale conference hall for symposiums and keynote events.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    imgAlt: "Scholars' Forum",
    name: "Scholars' Forum",
    description: "Academic-style lecture venue with tiered seating for 250.",
  },
];

export default function Home() {
  return (
    <main>
      <Banner />
      <CardRow title="Ballrooms & Banquet Halls" venues={ballrooms} />
      <CardRow title="Outdoor & Garden Venues" venues={outdoorVenues} />
      <CardRow title="Conference & Corporate" venues={conferenceVenues} />
    </main>
  );
}