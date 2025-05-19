import { Star } from 'lucide-react';
import { FadeIn, Stagger, StaggerItem } from '#/components/motion';

type StarRatingProps = {
  readonly rating: number;
};

export function StarRating({ rating }: StarRatingProps) {
  return (
    <FadeIn>
      <Stagger>
        <div className="flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <StaggerItem key={i}>
              <Star className="size-4 text-amber-100" />
            </StaggerItem>
          ))}
        </div>
      </Stagger>
    </FadeIn>
  );
}
