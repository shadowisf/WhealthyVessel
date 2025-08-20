import { useRef } from "react";
import CustomButton from "../components/CustomButton";
import ProductCard from "../components/ProductCard";
import { primaryColor } from "../utils/readColors";

export default function Products() {
  const executiveChefRef = useRef<HTMLDivElement | null>(null);
  const masterRef = useRef<HTMLDivElement | null>(null);
  const professionalRef = useRef<HTMLDivElement | null>(null);
  const classicRef = useRef<HTMLDivElement | null>(null);
  const personalARef = useRef<HTMLDivElement | null>(null);
  const personalBRef = useRef<HTMLDivElement | null>(null);
  const signatureRef = useRef<HTMLDivElement | null>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 250,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section style={{ marginTop: "120px" }} className="banner-container">
        <img src="/images/products/sets/executive-chef.jpg" />
        <div>
          <h1>THE PRODUCT GALLERY</h1>
        </div>
      </section>

      <main>
        <section className="filter-container">
          <CustomButton
            onClick={() => scrollToRef(executiveChefRef)}
            backgroundColor={primaryColor}
            color="white"
          >
            EXECUTIVE CHEF SET
          </CustomButton>

          <CustomButton
            onClick={() => scrollToRef(masterRef)}
            backgroundColor={primaryColor}
            color="white"
          >
            MASTER SET
          </CustomButton>

          <CustomButton
            onClick={() => scrollToRef(professionalRef)}
            backgroundColor={primaryColor}
            color="white"
          >
            PROFESSIONAL SET
          </CustomButton>

          <CustomButton
            onClick={() => scrollToRef(classicRef)}
            backgroundColor={primaryColor}
            color="white"
          >
            CLASSIC SET
          </CustomButton>

          <CustomButton
            onClick={() => scrollToRef(signatureRef)}
            backgroundColor={primaryColor}
            color="white"
          >
            SIGNATURE SET
          </CustomButton>

          <CustomButton
            onClick={() => scrollToRef(personalARef)}
            backgroundColor={primaryColor}
            color="white"
          >
            PERSONAL SET A
          </CustomButton>

          <CustomButton
            onClick={() => scrollToRef(personalBRef)}
            backgroundColor={primaryColor}
            color="white"
          >
            PERSONAL SET B
          </CustomButton>

          
        </section>

        <section>
         <section>
  <h1 style={{ textAlign: "center", marginTop: "-80px" }}>SALADMASTER</h1>
  <p style={{ textAlign: "justify", fontSize: "18px", lineHeight: "2" }}>
    <strong>Saladmaster</strong> cookware items are crafted to deliver both{" "}
    <strong>performance and wellness</strong> in every meal. Built with premium{" "}
    <strong>stainless steel</strong> and backed by a{" "}
    <strong>lifetime warranty</strong>, these pieces are made to last for
    generations. Their advanced design allows you to cook with little to no oil,
    helping <strong>preserve essential nutrients</strong> and natural flavors
    while promoting a healthier lifestyle. With even heat distribution, durable
    construction, and elegant style, Saladmaster cookware transforms everyday
    cooking into an <strong>easy, enjoyable, and nourishing experience.</strong>
  </p>
</section>
<div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
  {/* Left Column: Bullets */}
  <ul style={{ 
    marginLeft: "60px", 
    marginTop: "130px", 
    marginRight: "0", 
    columns: "1", 
    flex: 1, 
    fontSize: "18px"
  }}>
    <li style={{ marginBottom: "30px" }}>
      <strong>Lifetime Warranty</strong> – Cookware built to last for generations.
    </li>
    <li style={{ marginBottom: "30px" }}>
      <strong>Oil-Free Cooking</strong> – Prepare meals with little to no added oil.
    </li>
    <li style={{ marginBottom: "30px" }}>
      <strong>Nutrient Preservation</strong> – Keeps natural vitamins, minerals, and flavors intact.
    </li>
    <li style={{ marginBottom: "30px" }}>
      <strong>Durable Stainless Steel</strong> – Premium material for strength and style.
    </li>
    <li style={{ marginBottom: "30px" }}>
      <strong>Even Heat Distribution</strong> – Consistent cooking results every time.
    </li>
    <li style={{ marginBottom: "30px" }}>
      <strong>Healthy Lifestyle Choice</strong> – Supports better cooking and better living.
    </li>
  </ul>

  {/* Right Column: Image */}
  <div style={{ flex: 1, textAlign: "center" }}>
    <img  
      src="images/scienceofsaladmaster.png"
      alt="scienceofsaladmaster" 
      width={700}
      style={{ 
        display: "block",
        margin: "0px auto",
      }}
    />
  </div>
</div>

        </section>

        {/* executive */}
        <section className="product-container">
          <h1 className="center">
            EXECUTIVE <span>CHEF SET</span>
          </h1>

          <div ref={executiveChefRef} className="product-gallery-container">
            <ProductCard
              product_image={"/images/products/1.5-qt-sauce-pan-with-cover.png"}
            >
              1.5 Qt. Sauce Pan w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/2-qt-sauce-pan-with-cover.png"}
            >
              2 Qt. Sauce Pan w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/4-qt-roaster-with-cover.png"}
            >
              4 Qt. Roaster w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/5-qt-roaster-with-cover.png"}
            >
              5 Qt. Roaster w/ Cover
            </ProductCard>

            <ProductCard product_image={"/images/products/mp5.png"}>
              5 Qt. Multi-Purpose Oil Core Roaster w/ Cover
            </ProductCard>

            <ProductCard product_image={"/images/products/mp5-inset.png"}>
              Multi-Purpose Oil Core Roaster
            </ProductCard>

            <ProductCard
              product_image={"/images/products/oval-baking-dish.png"}
            >
              16.5" x 12" Oval Baking Dish
            </ProductCard>

            <ProductCard product_image={"/images/products/utility-rack.png"}>
              11" Utility Rack w/ 6 Egg Cups
            </ProductCard>

            <ProductCard
              product_image={"/images/products/16-inch-bake-and-roast-pan.png"}
            >
              9" x 13" Bake and Roast Pan
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/3.5-qt-double-walled-salad-bowl.png"
              }
            >
              3.5 Qt. Double-Walled Salad Bowl
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/6.5-qt-double-walled-salad-bowl.png"
              }
            >
              6.5 Qt. Double-Walled Salad Bowl
            </ProductCard>

            <ProductCard product_image={"/images/products/kitchen-shears.png"}>
              Kitchen Shears
            </ProductCard>

            <ProductCard product_image={"/images/products/santoku-knife.jpg"}>
              Santoku Knife
            </ProductCard>

            <ProductCard product_image={"/images/products/tool-set.png"}>
              7-Piece Kitchen Tool Set
            </ProductCard>
             <ProductCard
              product_image={
                "/images/products/long-handle-with-stainless-steel-inlay.png"
              }
            >
              3x Long Handles
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/side-handle-with-stainless steel-inlay.png"
              }
            >
              6x Side Handles
            </ProductCard>
          </div>
        </section>

                {/* master */}
        <section className="product-container">
          <h1 className="center">
            MASTER <span>SET</span>
          </h1>

          <div ref={masterRef} className="product-gallery-container">
            <ProductCard
              product_image={"/images/products/1-qt-sauce-pan-with-cover.png"}
            >
              1 Qt. Sauce Pan w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/3-qt-sauce-pan-with-cover.png"}
            >
              3 Qt. Sauce Pan w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/3-qt-perforated-basket.png"}
            >
              3 Qt. Perforated Basket
            </ProductCard>

            <ProductCard
              product_image={"/images/products/7-qt-roaster-with-cover.png"}
            >
              7 Qt. Roaster w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/10-qt-roaster-with-cover.png"}
            >
              10 Qt. Roaster w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/9-inch-skillet-with-cover.png"}
            >
              9" Skillet w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/11-inch-skillet-with-cover.png"}
            >
              11" Skillet w/ Cover
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/12-inch-electric-oil-core-skillet-with-cover.png"
              }
            >
              12" Electric Oil Core Skillet w/ Cover
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/stainless-steel-powdered-cleaner.png"
              }
            >
              Stainless Steel Powdered Cleaner
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/long-handle-with-stainless-steel-inlay.png"
              }
            >
              3x Long Handles
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/side-handle-with-stainless steel-inlay.png"
              }
            >
              6x Side Handles
            </ProductCard>
          </div>
        </section>

         {/* professional */}
        <section className="product-container">
          <h1 className="center">
            PROFESSIONAL <span>SET</span>
          </h1>

          <div ref={professionalRef} className="product-gallery-container">
            <ProductCard
              product_image={"/images/products/1-qt-sauce-pan-with-cover.png"}
            >
              1 Qt. Sauce Pan w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/3-qt-sauce-pan-with-cover.png"}
            >
              3 Qt. Sauce Pan w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/3-qt-perforated-basket.png"}
            >
              3 Qt. Perforated Basket
            </ProductCard>

            <ProductCard
              product_image={"/images/products/7-qt-roaster-with-cover.png"}
            >
              7 Qt. Roaster w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/9-inch-skillet-with-cover.png"}
            >
              9" Skillet w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/11-inch-skillet-with-cover.png"}
            >
              11" Skillet w/ Cover
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/stainless-steel-powdered-cleaner.png"
              }
            >
              Stainless Steel Powdered Cleaner
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/long-handle-with-stainless-steel-inlay.png"
              }
            >
              3x Long Handles
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/side-handle-with-stainless steel-inlay.png"
              }
            >
              4x Side Handles
            </ProductCard>
          </div>
        </section>


        {/* classic */}
        <section className="product-container">
          <h1 className="center">
            CLASSIC <span>SET</span>
          </h1>

          <div ref={classicRef} className="product-gallery-container">
            <ProductCard
              product_image={"/images/products/5-qt-roaster-with-cover.png"}
            >
              5 Qt. Roaster w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/4-qt-roaster-with-cover.png"}
            >
              4 Qt. Roaster w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/4-qt-roaster-with-cover.png"}
            >
              2 Qt. Roaster w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/11-inch-skillet-with-cover.png"}
            >
              11" Skillet w/ Cover
            </ProductCard>
          </div>
        </section>

        {/* signature */}
        <section className="product-container">
          <h1 className="center">
            SIGNATURE <span>SET</span>
          </h1>

          <div ref={signatureRef} className="product-gallery-container">
            <ProductCard
              product_image={
                "/images/products/4-qt-mezzo-roaster-with-cover.png"
              }
            >
              4 Qt. Mezzo Roaster w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/5-qt-roaster-with-cover.png"}
            >
              5 Qt. Roaster w/ Cover
            </ProductCard>

            <ProductCard product_image={"/images/products/electric-kettle.png"}>
              Electric Kettle
            </ProductCard>

            <ProductCard
              product_image={"/images/products/11-inch-skillet-with-cover.png"}
            >
              11" Skillet w/ Cover
            </ProductCard>
          </div>
        </section>

        {/* personal a */}
        <section className="product-container">
          <h1 className="center">
            PERSONAL <span>SET A</span>
          </h1>

          <div ref={personalARef} className="product-gallery-container">
            <ProductCard
              product_image={"/images/products/1-qt-sauce-pan-with-cover.png"}
            >
              1 Qt. Sauce Pan w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/3-qt-sauce-pan-with-cover.png"}
            >
              3 Qt. Sauce Pan w/ Cover
            </ProductCard>

            <ProductCard
              product_image={"/images/products/3-qt-perforated-basket.png"}
            >
              3 Qt. Perforated Basket
            </ProductCard>

            <ProductCard
              product_image={"/images/products/9-inch-skillet-with-cover.png"}
            >
              9" Skillet with Cover
            </ProductCard>
          </div>
        </section>

        {/* personal b */}
        <section className="product-container">
          <h1 className="center">
            PERSONAL <span>SET B</span>
          </h1>

          <div ref={personalBRef} className="product-gallery-container">
            <ProductCard
              product_image={"/images/products/5-qt-wok-with-cover.png"}
            >
              5 Qt. Wok w/ Cover
            </ProductCard>

            <ProductCard
              product_image={
                "/images/products/12-inch-electric-oil-core-skillet-with-cover.png"
              }
            >
              12" Electric Oil Core Skillet w/ Cover
            </ProductCard>

            <ProductCard product_image={"/images/products/mp5.png"}>
              5 Qt. Multi-Purpose Oil Core Roaster w/ Cover
            </ProductCard>
          </div>
        </section>
      </main>
    </>
  );
}
