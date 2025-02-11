import QuoteCard from "../components/QuoteCard";
import { primaryColor, secondaryColor } from "../utils/readColors";

export default function History() {
  return (
    <>
      <main style={{ marginTop: "200px", marginBottom: "200px" }}>
        <section className="history-container">
          <h1 style={{ color: primaryColor }}>
            SEVEN DECADES OF{" "}
            <span style={{ color: secondaryColor }}>MAKING LIFE BETTER</span>
          </h1>

          <iframe
            width="100%"
            height="534"
            src="https://www.youtube.com/embed/1ucCoCygirw"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />

          <p>
            Saladmaster has changed lives one nutritious meal at a time,{" "}
            <span style={{ fontWeight: "590" }}>
              rising from humble origins in 1946
            </span>{" "}
            to become the pioneer in cookware innovation. Our founder, Harry
            Lemmons,{" "}
            <span style={{ fontWeight: "590" }}>
              began the company with a simple salad cutting machine
            </span>
            . The original Saladmaster Machine's brilliant design and
            outstanding functionality were so favorably appreciated that it
            became a midcentury American kitchen classic. The core notion has
            still to be enhanced.{" "}
            <span style={{ fontWeight: "590" }}>
              Saladmaster started with three salespeople
            </span>{" "}
            and grew to over 100 Independent Distributors in the first year.
            Currently, we have over 28,000 Independent Authorized Dealers and
            Cooking Coaches globally. Saladmaster is a proud member of the
            Direct Selling Association (DSA) and{" "}
            <span style={{ fontWeight: "590" }}>
              one of the longest-running direct sales organizations
            </span>
            .
          </p>
        </section>

        <section className="quote-container">
          <QuoteCard
            header={
              <>
                <h1 style={{ color: primaryColor }}>
                  <span>HARRY</span>{" "}
                  <span style={{ color: secondaryColor }}>LEMMONS</span>
                </h1>
              </>
            }
            image="/images/harry-lemmons.jpg"
            reverse={false}
          >
            If you eat right, and you prepare your food right, you have a much
            better chance of having good health.
          </QuoteCard>

          <QuoteCard
            header={
              <>
                <h1 style={{ color: primaryColor }}>
                  <span>JAMES</span>{" "}
                  <span style={{ color: secondaryColor }}>REIGLE</span>
                </h1>
              </>
            }
            image="/images/james-reigle.jpg"
            reverse={true}
          >
            The strength of our past is the story of who we are today and the
            stepping stone to a fabulous future.
          </QuoteCard>
        </section>

        <section className="timeline-container">
          <h1 style={{ color: primaryColor }}>
            SALADMASTER <span style={{ color: secondaryColor }}>TIMELINE</span>
          </h1>

          <img src="/images/timeline.jpg" />
        </section>
      </main>
    </>
  );
}
