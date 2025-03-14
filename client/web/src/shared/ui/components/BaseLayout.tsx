import logoCyna from "@/shared/assets/images/logo-cyna.svg";
import MenuNavigation from "./MenuNavigation";
import { ReactNode } from "react";
import { Link } from "react-router";
import { AppRoutes } from "@/shared/types/Routes";

interface BaseLayoutProps {
  children?: ReactNode;
  isIntersecting: boolean;
}

const BaseLayout = ({ children, isIntersecting }: BaseLayoutProps) => {
  return (
    <>
      <header
        className={`sticky z-20 grid top-0 w-full bg-linear-90 from-primary-150 to-primary-100 text-primary-foreground transition-[background,box-shadow] duration-500${
          isIntersecting ? " shadow-2xl bg-none bg-primary-150/75" : ""
        }`}
      >
        <div className="area-1/1 -z-10 backdrop-blur-md"></div>
        <div className="area-1/1 container mx-auto flex-between-center gap-2 py-3 px-4">
          <Link to={AppRoutes.home}>
            <img src={logoCyna} alt="Logo Cyna" />
          </Link>
          <MenuNavigation />
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-primary-150 text-primary-150-foreground">
        <div className="container mx-auto py-3 px-4 flex-center-center">
          <p className="text-center">
            &copy;{" "}
            <a href="https://github.com/Tiffany-Dby" target="_blank">
              Tiffany Dby
            </a>
            ,{" "}
            <a href="https://github.com/kant1-18" target="_blank">
              Quentin Str
            </a>
            ,{" "}
            <a href="https://github.com/matheo-dlvt" target="_blank">
              Mathéo Dlt
            </a>{" "}
            {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default BaseLayout;
