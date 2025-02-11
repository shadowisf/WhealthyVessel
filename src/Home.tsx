import { useNavigate } from "react-router-dom";
import TextImageCard from "./components/TextImageCard";
import { primaryColor, secondaryColor } from "./utils/readColors";
import ReviewCard from "./components/ReviewCard";
import CustomButton from "./components/CustomButton";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import "react-phone-number-input/style.css";

export default function Home() {
  const navigate = useNavigate();

  const [value, setValue] = useState("");

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

        <video src="public/videos/intro.mp4" autoPlay loop />
      </div>

      <main style={{ marginBottom: "100px" }}>
        <section className="text-container">
          <h1 style={{ color: primaryColor }}>
            <span>ABOUT</span> <span style={{ color: secondaryColor }}>US</span>
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
        <section className="text-image-card-container">
          <TextImageCard
            header={
              <>
                <span style={{ color: primaryColor }}>COOKWARE</span>{" "}
                <span style={{ color: secondaryColor }}>HISTORY</span>
              </>
            }
            image={"public/images/cookware-history.jpg"}
            onClick={() => navigate("/history")}
            button_text="LEARN MORE"
            reverse={false}
          >
            Because the right cookware,
            <br />
            <span style={{ fontWeight: "590" }}>makes all the difference.</span>
          </TextImageCard>

          {/* card 2 */}
          <TextImageCard
            header={
              <>
                <span style={{ color: primaryColor }}>RECIPE</span>{" "}
                <span style={{ color: secondaryColor }}>INSPIRATIONS</span>
              </>
            }
            image={"public/images/recipe-inspirations.jpg"}
            onClick={() => navigate("/history")}
            button_text="START COOKING"
            reverse={true}
          >
            Retain up to{" "}
            <span style={{ fontWeight: "590" }}>93% of nutrients</span>
            <br />
            with effortless cooking.
          </TextImageCard>

          {/* card 1 */}
          <TextImageCard
            header={
              <>
                <span style={{ color: primaryColor }}>EXPLORE</span>{" "}
                <span style={{ color: secondaryColor }}>PRODUCTS</span>
              </>
            }
            image={"public/images/explore-products.jpg"}
            onClick={() => navigate("/history")}
            button_text="VIEW PRODUCTS"
            reverse={false}
          >
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
          </TextImageCard>
        </section>

        <section className="review-gallery-container">
          <h1 style={{ color: primaryColor }}>
            OUR <span style={{ color: secondaryColor }}>TESTIMONIALS</span>
          </h1>

          <div className="review-card-container">
            {/* review 1 */}
            <ReviewCard
              content="I recently
        tried to cook some healthy food dishes using Saladmaster Titanium
        Cookwares from Whealthy Vessel, and I am thoroughly impressed! The
        cookware not only ensures that the food is cooked evenly and perfectly,
        but it also retains the nutrients, keeping the meals healthy and
        delicious. I tried a variety of dishes, from sautéed vegetables to lean
        meats, and each one turned out flavorful without any unnecessary oils.
        It's clear that these cookware pieces are designed with health in mind.
        Plus, the quality of the titanium is top-notch – non-stick, durable, and
        eco-friendly. I highly recommend Whealthy Vessel for anyone looking to
        make healthier meals with quality cookware!"
              profile_image="public/images/josiah-erum.jpeg"
              stars={5}
              name="Josiah Erum"
            />

            {/* review 2 */}
            <ReviewCard
              content="Whealthy Vessel is an amazing place for premium Saladmaster (titanium) cookwares! The quality of their products is outstanding—durable, stylish, and perfect for healthy cooking. The display is beautifully arranged, making it easy to browse their selection of pots, pans, and kitchen essentials.

The staff is knowledgeable and helpful, answering all my questions about the benefits of Saladmaster cookwares. I love how their products promote even heating and long-lasting performance. Definitely a must-visit for anyone looking to upgrade their kitchen with top-notch cookware!

Highly recommend!"
              profile_image="public/images/jainey-erum.jpeg"
              stars={5}
              name="Jainey Erum"
            />
          </div>
        </section>

        <section className="reach-out-container">
          <h1 style={{ color: primaryColor }}>
            REACH OUT -<br />
            <span style={{ color: secondaryColor }}>WE'RE JUST AN</span>
            <br />
            <span style={{ color: secondaryColor }}>EMAIL AWAY!</span>
          </h1>

          <form className="form-container">
            <div className="name-phone-container">
              <input placeholder="Name" type="text" required />

              <PhoneInput
                international
                placeholder="Phone Number"
                value={value}
                /* @ts-ignore */
                onChange={setValue}
                defaultCountry="SA"
                style={{ width: "100%" }}
              />
            </div>

            <input placeholder="E-Mail Address" type="email" required />

            <textarea placeholder="Message" name="message" rows={4} required />

            <CustomButton onClick={() => {}} color={primaryColor}>
              GET IN TOUCH
            </CustomButton>
          </form>
        </section>
      </main>
    </>
  );
}
