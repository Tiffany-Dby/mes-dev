import { Button } from "@/lib/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/lib/components/ui/collapsible";
import { Routes } from "@/shared/types/Routes";
import { Fragment, useState } from "react";
import { NavLink } from "react-router";

interface MenuItem {
  label: string;
  href?: Routes;
  icon?: React.ComponentType<{ className?: string }>;
  submenu?: MenuItem[];
}

interface MenuItemProps {
  item: MenuItem;
  depth?: number;
}

const MenuItem = ({ item }: MenuItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const IconComponent = item.icon;

  return (
    <>
      {item.submenu ? (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex flex-col gap-2 items-start"
        >
          <CollapsibleTrigger className="h-fit" asChild>
            <Button variant="ghost" className="has-[>svg]:px-0 py-0 text-base">
              {IconComponent && <IconComponent className="size-4.5" />}
              {item.label}
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col gap-2">
            {item.submenu.map((subitem) => (
              <Fragment key={subitem.label}>
                {subitem.href && (
                  <NavLink
                    to={subitem.href}
                    className="ml-8 text-sm hover:text-accent-75 transition-colors duration-500"
                  >
                    {subitem.label}
                  </NavLink>
                )}
              </Fragment>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <>
          {item.href && (
            <NavLink
              to={item.href}
              className={`flex items-center gap-2 font-medium hover:text-accent-75 transition-colors duration-500`}
            >
              {IconComponent && <IconComponent className="size-4.5" />}
              {item.label}
            </NavLink>
          )}
        </>
      )}
    </>
  );
};

export default MenuItem;
