import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
  children: React.ReactNode[] | React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    setSlideCount(emblaApi.slideNodes().length);

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", onSelect);
    emblaApi.on("init", onSelect);
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="embla">
      <div ref={emblaRef}>
        <div className="embla__container">
          {children instanceof Array
            ? children.map((child, index) => (
                <div className="embla__slide" key={index}>
                  {child}
                </div>
              ))
            : children}
        </div>
      </div>

      <div className="embla__controls">
        <button
          className="embla__prev animation"
          onClick={scrollPrev}
          disabled={selectedIndex === 0}
        >
          ←
        </button>

        <div className="embla__dots">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              className={`embla__dot animation ${
                index === selectedIndex ? "active" : ""
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>

        <button
          className="embla__next animation"
          onClick={scrollNext}
          disabled={selectedIndex === slideCount - 1}
        >
          →
        </button>
      </div>
    </section>
  );
}
