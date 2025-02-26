import TextImageCard from "../components/TextImageCard";
import { primaryColor, secondaryColor } from "../utils/readColors";
import ReviewCard from "../components/ReviewCard";
import CustomButton from "../components/CustomButton";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import Carousel from "../components/Carousel";
import { E164Number } from "libphonenumber-js";

import "react-phone-number-input/style.css";

export default function Home() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState<E164Number | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const review1 = {
    content:
      "I recently tried to cook some healthy food dishes using Saladmaster Titanium Cookwares from Whealthy Vessel, and I am thoroughly impressed! The cookware not only ensures that the food is cooked evenly and perfectly, but it also retains the nutrients, keeping the meals healthy and delicious. I tried a variety of dishes, from sautéed vegetables to lean meats, and each one turned out flavorful without any unnecessary oils. It's clear that these cookware pieces are designed with health in mind. Plus, the quality of the titanium is top-notch – non-stick, durable, and eco-friendly. I highly recommend Whealthy Vessel for anyone looking to make healthier meals with quality cookware!",
    profile_image: "/images/jo-e.jpeg",
    stars: 5,
    name: "Josiah",
  };

  const review2 = {
    content:
      "Whealthy Vessel is an amazing place for premium Saladmaster (titanium) cookwares! The quality of their products is outstanding—durable, stylish, and perfect for healthy cooking. The display is beautifully arranged, making it easy to browse their selection of pots, pans, and kitchen essentials. The staff is knowledgeable and helpful, answering all my questions about the benefits of Saladmaster cookwares. I love how their products promote even heating and long-lasting performance. Definitely a must-visit for anyone looking to upgrade their kitchen with top-notch cookware! Highly recommend!",
    profile_image: "/images/ja-e.jpeg",
    stars: 5,
    name: "Jainey",
  };

  return (
    <>
      <section
        style={{ marginTop: "125px", marginBottom: "100px" }}
        className="home-banner-container"
      >
        <div className="text-container">
          <p style={{ fontWeight: "bolder" }}>Saladmaster, Jeddah</p>

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

        <video
          style={{ pointerEvents: "none" }}
          src="/videos/intro.mp4"
          autoPlay
          loop
          muted
          controls={false}
        />
      </section>

      <main style={{ marginBottom: "100px" }}>
        {/* about us */}
        <section className="about-us-container">
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

        <section className="text-image-card-container">
          {/* cookware history */}
          <TextImageCard
            header={
              <>
                <span style={{ color: primaryColor }}>COOKWARE</span>{" "}
                <span style={{ color: secondaryColor }}>HISTORY</span>
              </>
            }
            image={"/images/cookware-history.jpg"}
            href="/history"
            button_text="LEARN MORE"
            reverse={false}
          >
            Because the right cookware,{" "}
            <span style={{ fontWeight: "590" }}>makes all the difference.</span>
          </TextImageCard>

          {/* recipe inspirations */}
          <TextImageCard
            header={
              <>
                <span style={{ color: primaryColor }}>RECIPE</span>{" "}
                <span style={{ color: secondaryColor }}>INSPIRATIONS</span>
              </>
            }
            image={"/images/recipe-inspirations.jpg"}
            href="/recipes"
            button_text="START COOKING"
            reverse={true}
          >
            Retain up to{" "}
            <span style={{ fontWeight: "590" }}>93% of nutrients</span> with
            effortless cooking.
          </TextImageCard>

          {/* our products */}
          <TextImageCard
            header={
              <>
                <span style={{ color: primaryColor }}>EXPLORE</span>{" "}
                <span style={{ color: secondaryColor }}>PRODUCTS</span>
              </>
            }
            image={"/images/explore-products.jpg"}
            href="/products"
            button_text="VIEW PRODUCTS"
            reverse={false}
          >
            Our{" "}
            <span style={{ fontWeight: "590" }}>
              316Ti Stainless Steel cookware
            </span>
            , made in the USA with premium materials, is{" "}
            <span style={{ fontWeight: "590" }}>
              designed for a lifetime of cooking
            </span>
            .
          </TextImageCard>
        </section>

        {/* reviews */}
        <section className="review-gallery-container">
          <h1 style={{ color: primaryColor }}>
            OUR <span style={{ color: secondaryColor }}>TESTIMONIALS</span>
          </h1>

          <br />

          <Carousel>
            <ReviewCard
              content={review1.content}
              profile_image={review1.profile_image}
              stars={review1.stars}
              name={review1.name}
            />
            <ReviewCard
              content={review2.content}
              profile_image={review2.profile_image}
              stars={review2.stars}
              name={review2.name}
            />
          </Carousel>
        </section>

        {/* reach out */}
        <section className="reach-out-container">
          <h1 style={{ color: primaryColor }}>
            REACH OUT -{" "}
            <span style={{ color: secondaryColor }}>WE'RE JUST AN</span>{" "}
            <span style={{ color: secondaryColor }}>EMAIL AWAY!</span>
          </h1>

          <form className="form-container">
            <br />

            <div className="name-phone-container">
              <input
                placeholder="Name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <PhoneInput
                international
                placeholder="Phone Number"
                value={number}
                onChange={setNumber}
                defaultCountry="SA"
                style={{ width: "100%" }}
              />
            </div>

            <input
              placeholder="E-Mail Address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              placeholder="Message"
              name="message"
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <CustomButton onClick={() => {}} color={primaryColor}>
              GET IN TOUCH
            </CustomButton>
          </form>
        </section>
      </main>
    </>
  );
}
