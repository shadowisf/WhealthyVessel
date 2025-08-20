import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
  children: React.ReactNode[] | React.ReactNode;
};

export default function Carousel({ children }: CarouselProps) {
  const [slidesToShow, setSlidesToShow] = useState(2);
  const [slidesToScroll, setSlidesToScroll] = useState(2);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: slidesToScroll,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 991) {
      setSlidesToShow(1);
      setSlidesToScroll(1);
    } else {
      setSlidesToShow(2);
      setSlidesToScroll(2);
    }
  };

  handleResize(); // runs immediately when component mounts
  window.addEventListener("resize", handleResize); // updates on window resize

  return () => window.removeEventListener("resize", handleResize); // cleanup
}, []);

  // Update Embla settings when slidesToScroll changes
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({ slidesToScroll });
  }, [emblaApi, slidesToScroll]);

  // Update pagination
  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setPageCount(emblaApi.scrollSnapList().length);
    };

    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    emblaApi.on("resize", update);

    update();

    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
      emblaApi.off("resize", update);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  return (
    <div className="slider-container">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {Array.isArray(children) ? (
            children.map((child, i) => (
              <div
                key={i}
                className="embla__slide"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }} // show 2 slides on desktop
              >
                {child}
              </div>
            ))
          ) : (
            <div
              className="embla__slide"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              {children}
            </div>
          )}
        </div>
      </div>

      <div className="embla__controls">
        <button onClick={scrollPrev} disabled={selectedIndex === 0}>
          ←
        </button>
        <div className="embla__dots">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              className={i === selectedIndex ? "active" : ""}
              onClick={() => scrollTo(i)}
            />
          ))}
        </div>
        <button onClick={scrollNext} disabled={selectedIndex === pageCount - 1}>
          →
        </button>
      </div>
    </div>
  );
}
