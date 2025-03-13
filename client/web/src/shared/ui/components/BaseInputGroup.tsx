import { Input } from "@/lib/components/ui/input";
import { Label } from "@radix-ui/react-label";
import * as React from "react";

interface BaseInputGroupProps extends React.ComponentProps<"input"> {
  isSrOnly?: boolean;
  label: string;
  labelClassName?: string;
  inputClassName?: string;
  icon?: React.ComponentType<{ className?: string; onClick?: () => void }>;
}

const BaseInputGroup: React.FC<BaseInputGroupProps> = ({
  isSrOnly = false,
  label,
  icon: Icon,
  labelClassName = "",
  inputClassName = "",
  ...props
}) => {
  const [typePw, setTypePw] = React.useState("password");

  return (
    <div>
      <Label
        htmlFor={props.id}
        className={isSrOnly ? "sr-only" : labelClassName}
      >
        {label}
      </Label>
      <div className="relative w-full">
        <Input
          className={`w-full${inputClassName}`}
          {...props}
          type={props.type === "password" ? typePw : props.type}
        />
        {Icon && (
          <Icon
            className="size-5 absolute right-3 top-1/2 -translate-y-1/2 text-tertiary-75"
            onClick={() =>
              setTypePw(typePw === "password" ? "text" : "password")
            }
          />
        )}
      </div>
    </div>
  );
};

export default BaseInputGroup;
