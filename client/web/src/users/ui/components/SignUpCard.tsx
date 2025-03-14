import { Button } from "@/lib/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/components/ui/form";
import useCustomForm from "@/shared/hooks/useCustomForm";
import { ApiRoutes, AppRoutes } from "@/shared/types/Routes";
import BaseCard from "@/shared/ui/components/BaseCard";
import BaseInputGroup from "@/shared/ui/components/BaseInputGroup";
import { SignUpData, SignUpSchema } from "@/users/schemas/SignUpSchema";
import {
  CircleUserRoundIcon,
  EyeIcon,
  EyeOffIcon,
  MailIcon,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const SignUpCard = () => {
  const [typePassword, setTypePassword] = useState<"text" | "password">(
    "password"
  );
  const [typeConfirmPassword, setTypeConfirmPassword] = useState<
    "text" | "password"
  >("password");

  const { form, handleSubmit, isLoading, serverError } = useCustomForm({
    schema: SignUpSchema,
    apiUrl: ApiRoutes.signUp,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const fields: {
    name: keyof SignUpData;
    label: string;
    type: string;
    placeholder: string;
    autoComplete: string;
    icon?: React.ComponentType<{ className?: string; onClick?: () => void }>;
    toggleType?: () => void;
  }[] = [
    {
      name: "firstName",
      label: "Prénom",
      type: "text",
      placeholder: "Prénom",
      autoComplete: "name",
      icon: CircleUserRoundIcon,
    },
    {
      name: "lastName",
      label: "Nom",
      type: "text",
      placeholder: "Nom",
      autoComplete: "family-name",
      icon: CircleUserRoundIcon,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
      autoComplete: "email",
      icon: MailIcon,
    },
    {
      name: "password",
      label: "Mot de passe",
      type: typePassword,
      placeholder: "Mot de passe",
      autoComplete: "new-password",
      icon: typePassword === "password" ? EyeIcon : EyeOffIcon,
      toggleType: () =>
        setTypePassword((prev) => (prev === "password" ? "text" : "password")),
    },
    {
      name: "confirmPassword",
      label: "Confirmer mot de passe",
      type: typeConfirmPassword,
      placeholder: "Confirmer mot de passe",
      autoComplete: "new-password",
      icon: typeConfirmPassword === "password" ? EyeIcon : EyeOffIcon,
      toggleType: () =>
        setTypeConfirmPassword((prev) =>
          prev === "password" ? "text" : "password"
        ),
    },
  ];

  return (
    <BaseCard
      title={<h1 className="text-4xl uppercase">Inscription</h1>}
      description={
        <>{serverError && <p className="text-danger">{serverError}</p>}</>
      }
      content={
        <Form {...form}>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {fields.map(
              ({
                name,
                label,
                type,
                placeholder,
                autoComplete,
                icon: Icon,
                toggleType,
              }) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor={name} className="sr-only">
                        {label}
                      </FormLabel>
                      <FormControl>
                        <BaseInputGroup
                          {...field}
                          id={name}
                          type={type}
                          placeholder={placeholder}
                          icon={Icon}
                          autoComplete={autoComplete}
                          toggleType={toggleType}
                        />
                      </FormControl>
                      <FormMessage className="text-danger" />
                    </FormItem>
                  )}
                />
              )
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Création du compte..." : "Je crée mon compte"}
            </Button>
          </form>
        </Form>
      }
      footer={
        <div className="flex flex-col gap-5 w-full">
          <div className="w-full px-6">
            <div className="h-[1px] w-full bg-tertiary-25"></div>
          </div>
          <div className="flex flex-col gap-1">
            <p>Déjà inscrit(e) ?</p>
            <div className="text-center">
              <Link
                to={AppRoutes.signIn}
                className="block border-[1px] border-primary-100 text-primary-100 text-sm font-medium bg-primary-100-foreground py-2 px-4 hover:bg-primary-100 hover:text-primary-100-foreground transition-colors duration-500 h-9 rounded-md"
              >
                Je me connecte
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default SignUpCard;
