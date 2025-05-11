import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import SectionContainer from './section-container';

const images = {
  first: '/placeholder.svg?height=400&width=400',
  second: '/placeholder.svg?height=400&width=600',
  third: '/placeholder.svg?height=400&width=600',
  fourth: '/placeholder.svg?height=800&width=400',
};

export default function HeroSection() {
  return (
    <SectionContainer id="home" className="pt-0 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0">
        <Image
          src="/nnnoise.svg"
          alt="Noise texture"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1 space-y-6">
            <div className="flex flex-col gap-4 lg:gap-6">
              <h1 className="max-w-[90%] text-4xl leading-tight font-semibold text-foreground lg:text-5xl xl:text-6xl">
                Medical Billing + Healthcare Management
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground xl:text-xl">
                Helping Medical Practices to achieve their financial goals since 2005
              </p>
              <p className="text-muted-foreground">
                Headquartered in Los Angeles, California, Girit Consulting Inc. offers advice and support for every
                process and need for your practice - from short-term needs to long-term projects. We specialize in
                Medical Billing and Healthcare Consulting.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#contact">Book Free Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="w-full flex-1">
            <div className="w-full max-w-[50rem]">
              <AspectRatio ratio={1 / 1} className="h-full w-full">
                <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-[3.5%]">
                  <div className="overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <Image
                      src={images.first || '/placeholder.svg'}
                      alt="Medical billing dashboard"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <div className="absolute top-1/2 left-[5%] w-[110%] max-w-[25rem] -translate-y-1/2 overflow-hidden rounded-md">
                      <AspectRatio ratio={1.739130435 / 1}>
                        <Image
                          src={images.second || '/placeholder.svg'}
                          alt="Healthcare analytics"
                          fill
                          className="object-cover object-center"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <div className="absolute top-[9%] left-[9%] w-[200%] max-w-[37.5rem] overflow-hidden rounded-md">
                      <AspectRatio ratio={1.6 / 1}>
                        <Image
                          src={images.third || '/placeholder.svg'}
                          alt="Patient management"
                          fill
                          className="object-cover object-center"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <div className="relative top-[12%] left-[50%] w-[70%] max-w-[17.5rem] -translate-x-[50%]">
                      <AspectRatio ratio={0.52 / 1}>
                        <Image
                          src={images.fourth || '/placeholder.svg'}
                          alt="Mobile healthcare app"
                          fill
                          className="absolute z-10 rounded-[16%]"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
