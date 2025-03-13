import { Link } from "react-router";
import { AppRoutes } from "@/shared/types/Routes";
import { forwardRef } from "react";

const Home = forwardRef<HTMLElement>((_, ref) => {
  return (
    <>
      <section
        ref={ref}
        className="flex flex-col justify-center min-h-dvh bg-linear-90 from-primary-150 to-primary-100 text-white"
      >
        <div className="container mx-auto py-3 px-4 flex-center-center h-full">
          <div className="flex-col-center-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold uppercase leading-11">
                Votre{" "}
                <span className="bg-white px-1">
                  <span className="bg-linear-90 from-primary-150 to-primary-100 bg-clip-text text-transparent font-black">
                    sécurité
                  </span>
                </span>{" "}
                est notre <span className="underline">métier</span>
              </h1>
              <p className="text-lg">
                Une{" "}
                <strong className="text-secondary-75">protection 360°</strong>{" "}
                pour vos projets et votre sérénité.
              </p>
              <div className="flex justify-end">
                <div>
                  <Link
                    to={AppRoutes.home}
                    className="block bg-info py-2 px-4 rounded-sm hover:bg-accent-100 transition-colors duration-500"
                  >
                    Je découvre les produits
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section ref={ref}>
        <div className="container mx-auto py-3 px-4">
          <h2>Temporaire</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut quis
            harum numquam commodi laboriosam sunt magnam minima repudiandae
            tempore. Aperiam at, praesentium aspernatur illo veniam sunt,
            exercitationem ducimus ad nulla sequi ipsa sint quaerat
            reprehenderit quam quod maiores esse eos laudantium! Dolorem aliquid
            quaerat corrupti saepe recusandae modi placeat ratione doloribus, ab
            iusto ex hic et vitae asperiores distinctio nam laudantium
            aspernatur non vel. Numquam qui minus laborum doloribus architecto
            accusantium, nesciunt eaque reiciendis magni perspiciatis, odit
            mollitia exercitationem laboriosam dolorum eius impedit culpa,
            excepturi deserunt iusto laudantium fugiat placeat quae nulla omnis.
            Doloribus tenetur repellendus hic perferendis incidunt. Inventore,
            voluptas eius doloribus quos quisquam cupiditate vel quas doloremque
            possimus modi ullam, eveniet quae distinctio. Nobis hic dignissimos,
            veniam iure facilis voluptatum natus! Sint nam eligendi libero,
            maiores rem, ducimus ea excepturi beatae aut nihil possimus itaque
            accusamus, quia necessitatibus voluptatem earum officiis provident
            officia incidunt.
          </p>
        </div>
      </section>
    </>
  );
});

export default Home;
