import {
  Sheet,
  SheetClose,
  SheetContent,
  // SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/lib/components/ui/sheet";
import MenuBurger from "./MenuBurger";
import { useState } from "react";
import logoCyna from "@/shared/assets/images/logo-cyna.svg";
import MenuItem from "./MenuItem";
import { Routes } from "@/shared/types/Routes";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  CircleUserRoundIcon,
  HomeIcon,
  ShapesIcon,
  ShoppingCartIcon,
} from "lucide-react";

const MenuNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenChange = () => setIsOpen(!isOpen);

  const menuItems = [
    {
      label: "Accueil",
      href: Routes.home,
      icon: HomeIcon,
    },
    {
      label: "Catégories",
      href: Routes.categories,
      icon: ShapesIcon,
    },
    {
      label: "Mon compte",
      icon: CircleUserRoundIcon,
      submenu: [
        {
          label: "Mon compte1",
          href: Routes.account,
        },
      ],
    },
    {
      label: "Panier",
      href: Routes.checkout,
      icon: ShoppingCartIcon,
    },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild>
        <MenuBurger isOpen={isOpen} onOpenChange={handleOpenChange} />
      </SheetTrigger>
      <SheetContent className="bg-primary-150">
        <SheetHeader>
          <div>
            <img src={logoCyna} alt="Logo Cyna" />
          </div>
          <VisuallyHidden>
            <SheetTitle>Menu</SheetTitle>
          </VisuallyHidden>
        </SheetHeader>
        <nav className="py-2 px-7 text-primary-150-foreground">
          <div className="flex flex-col gap-5">
            {menuItems.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
          </div>
        </nav>
        <SheetFooter>
          <SheetClose asChild></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MenuNavigation;
