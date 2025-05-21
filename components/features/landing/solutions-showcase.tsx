import type { SolutionsShowcaseProps } from '#/types/landing';
import { FadeIn } from '#/components/motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '#/components/ui/carousel';
import Image from 'next/image';
import SectionContainer from './section-container';

export default function SolutionsShowcase({ solutions }: SolutionsShowcaseProps) {
  return (
    <SectionContainer
      id="solutions"
      className="min-h-screen"
      titleChip="OUR SOLUTIONS"
      mainTitle="Healthcare Solutions"
      titleDescription="From short-term needs to long-term projects, Girit Consulting offers advice and support for every process and need for your practice."
    >
      <FadeIn>
        <div className="space-y-16 w-full py-10">
          <Carousel
            opts={{
              align: 'start',
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {solutions.map((solution, index) => (
                <CarouselItem
                  key={solution.key}
                  className="md:basis-1/2 lg:basis-1/3 flex h-full mb-3"
                >
                  <FadeIn delay={index * 0.1}>
                    <div className="cursor-pointer h-[480px] group border relative flex flex-col shadow-sm rounded-lg hover:shadow-lg transition-shadow duration-300">
                      <div className="relative p-4 pb-0 overflow-hidden rounded-t-md">
                        <div className="w-full h-[220px] relative">
                          <Image
                            className="transition-transform rounded duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110 object-cover"
                            src={solution.img}
                            alt={solution.imgAlt}
                            fill
                          />
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <h6 className="mb-2 text-xl font-semibold">
                          {solution.title}
                        </h6>
                        <p className="leading-normal font-light flex-1 mb-4">
                          {solution.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {solution.tags?.map((tag: string) => (
                            <span
                              key={tag}
                              className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
            <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
          </Carousel>
        </div>
      </FadeIn>
    </SectionContainer>
  );
}
