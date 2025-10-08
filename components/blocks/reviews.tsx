import { Text } from "@/components/ui/text";
import { Star } from "lucide-react";

interface Review {
  platform: string;
  rating: number;
  maxRating?: number;
}

interface ReviewsProps {
  reviews?: Review[];
}

const DEFAULT_REVIEWS: Review[] = [
  {
    platform: "G2",
    rating: 5,
    maxRating: 5,
  },
  {
    platform: "Capterra",
    rating: 5,
    maxRating: 5,
  },
  {
    platform: "TrustRadius",
    rating: 5,
    maxRating: 5,
  },
];

const Reviews = ({ reviews = DEFAULT_REVIEWS }: ReviewsProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
      {reviews.map((review, index) => (
        <div key={index} className="flex items-center gap-3">
          {/* Platform Name */}
          <Text variant="body" className="font-medium">
            {review.platform}
          </Text>

          {/* Stars */}
          <div className="flex items-center gap-1">
            {Array.from({ length: review.maxRating || 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating
                    ? "fill-foreground text-foreground"
                    : "fill-muted text-muted"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Reviews };
export type { ReviewsProps, Review };
