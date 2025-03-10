import logoCyna from "@/shared/assets/images/logo-cyna.svg";
import MenuNavigation from "./MenuNavigation";
import { ReactNode } from "react";

interface BaseLayoutProps {
  children?: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <header className="sticky grid top-0 w-full bg-linear-90 from-primary-150 to-primary-100 text-primary-foreground shadow-2xl transition-[background,box-shadow] duration-500">
        <div className="area-1/1 -z-10 backdrop-blur-md"></div>
        <div className="area-1/1 container mx-auto flex-between-center gap-2 py-3 px-4">
          <div>
            <img src={logoCyna} alt="Logo Cyna" />
          </div>
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
            , Mathéo Dlt {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default BaseLayout;
