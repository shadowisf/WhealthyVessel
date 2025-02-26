import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Products() {
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
    <main style={{ marginTop: "200px" }}>
      <section className="embla">
        <div ref={emblaRef}>
          <div className="embla__container">
            <div className="embla__slide">Slide 1</div>
            <div className="embla__slide">Slide 2</div>
            <div className="embla__slide">Slide 3</div>
          </div>
        </div>

        <div className="embla__controls">
          <button
            className="embla__prev"
            onClick={scrollPrev}
            disabled={selectedIndex === 0}
          >
            ←
          </button>

          <div className="embla__dots">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                className={`embla__dot ${
                  index === selectedIndex ? "active" : ""
                }`}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
              />
            ))}
          </div>

          <button
            className="embla__next"
            onClick={scrollNext}
            disabled={selectedIndex === slideCount - 1}
          >
            →
          </button>
        </div>
      </section>
    </main>
  );
}
