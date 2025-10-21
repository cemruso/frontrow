import { HeroTitle } from "@/components/blocks/hero-title";
import WorldMap from "@/components/ui/world-map";

const WorldMapSection = () => {
  // Sample data points showing global connections
  const connections = [
    {
      start: { lat: 40.7128, lng: -74.006 }, // New York
      end: { lat: 51.5074, lng: -0.1278 }, // London
    },
    {
      start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
      end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
    },
    {
      start: { lat: 51.5074, lng: -0.1278 }, // London
      end: { lat: 1.3521, lng: 103.8198 }, // Singapore
    },
    {
      start: { lat: -33.8688, lng: 151.2093 }, // Sydney
      end: { lat: 1.3521, lng: 103.8198 }, // Singapore
    },
    {
      start: { lat: 52.52, lng: 13.405 }, // Berlin
      end: { lat: 19.076, lng: 72.8777 }, // Mumbai
    },
  ];

  return (
    <section className="py-8 sm:py-32 px-4 sm:px-0">
      <div className="container">
        <HeroTitle
          badge="Global Team"
          title="Built with love from all over the world"
          subtitle="Our distributed team brings together talent from across the globe to deliver exceptional results for your business."
        />
        <div className="w-full max-w-6xl mx-auto">
          <WorldMap dots={connections} lineColor="hsl(var(--primary))" />
        </div>
      </div>
    </section>
  );
};

export { WorldMapSection };
