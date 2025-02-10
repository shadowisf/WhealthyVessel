import { useNavigate } from "react-router-dom";
import TextImageCard from "./components/TextImageCard";
import { primaryColor, secondaryColor } from "./utils/readColors";
import ReviewCard from "./components/ReviewCard";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ marginTop: "125px", marginBottom: "100px" }}
        className="video-container"
      >
        <div className="video-text-container">
          <p className="location">Saladmaster, Jeddah</p>

          <h1 style={{ fontFamily: "Plus Jakarta Sans" }}>
            Change Your Cookware.
            <br />
            Change Your Life
          </h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quos
            amet ipsa illum! autem!
          </p>
        </div>

        <video src="public/intro.mp4" autoPlay loop />
      </div>

      <main style={{ marginBottom: "100px" }}>
        <section className="text-container">
          <h1 style={{ color: primaryColor }}>
            <span>WHO</span> <span style={{ color: secondaryColor }}>ARE</span>{" "}
            <span>WE?</span>
          </h1>

          <p>
            We are a premium brand dedicated to promoting a healthier lifestyle
            through high-quality titanium cookware. We believe that nutritious
            meals start with the right tools, and our innovative, non-toxic, and
            durable cookware empowers individuals and families to cook with
            confidence and ease. By combining health-conscious design with
            cutting-edge technology, Whealthy Vessel ensures that every meal is
            prepared in the safest and most efficient way possible.
          </p>
        </section>

        {/* card 1 */}
        <section className="card-container">
          <TextImageCard
            header={
              <>
                <span style={{ color: primaryColor }}>COOKWARE</span>{" "}
                <span style={{ color: secondaryColor }}>HISTORY</span>
              </>
            }
            content={
              <>
                Because the right cookware,
                <br />
                <span style={{ fontWeight: "590" }}>
                  makes all the difference.
                </span>
              </>
            }
            image={"public/card1.jpg"}
            onClick={() => navigate("/history")}
            button_text="LEARN MORE"
            reverse={false}
          />

          {/* card 2 */}
          <TextImageCard
            header={
              <>
                <span style={{ color: primaryColor }}>RECIPE</span>{" "}
                <span style={{ color: secondaryColor }}>INSPIRATIONS</span>
              </>
            }
            content={
              <>
                Retain up to{" "}
                <span style={{ fontWeight: "590" }}>93% of nutrients</span>
                <br />
                with effortless cooking.
              </>
            }
            image={"public/card2.jpg"}
            onClick={() => navigate("/history")}
            button_text="START COOKING"
            reverse={true}
          />

          {/* card 1 */}
          <TextImageCard
            header={
              <>
                <span style={{ color: primaryColor }}>EXPLORE</span>{" "}
                <span style={{ color: secondaryColor }}>PRODUCTS</span>
              </>
            }
            content={
              <>
                Our{" "}
                <span style={{ fontWeight: "590" }}>
                  316Ti Stainless Steel cookware
                </span>
                ,
                <br />
                made in the USA with premium materials,
                <br /> is{" "}
                <span style={{ fontWeight: "590" }}>
                  designed for a lifetime of cooking
                </span>
                .
              </>
            }
            image={"public/card3.jpg"}
            onClick={() => navigate("/history")}
            button_text="VIEW PRODUCTS"
            reverse={false}
          />
        </section>

        <section className="text-container">
          <h1 style={{ color: primaryColor }}>
            OUR <span style={{ color: secondaryColor }}>TESTIMONIALS</span>
          </h1>

          <ReviewCard />
        </section>
      </main>
    </>
  );
}
