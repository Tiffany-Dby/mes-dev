import { Button } from "@/lib/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/lib/components/ui/form";
import { ApiRoutes, AppRoutes } from "@/shared/types/Routes";
import BaseCard from "@/shared/ui/components/BaseCard";
import BaseInputGroup from "@/shared/ui/components/BaseInputGroup";
import useCustomForm from "@/shared/hooks/useCustomForm";
import { SignInSchema, SignInData } from "@/users/schemas/SignInSchema";
import { MailIcon, EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const SignInCard = () => {
  const [typePassword, setTypePassword] = useState("password");

  const { form, handleSubmit, isLoading, serverError } = useCustomForm({
    schema: SignInSchema,
    apiUrl: ApiRoutes.signIn,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const fields: {
    name: keyof SignInData;
    label: string;
    type: string;
    placeholder: string;
    autocomplete: string;
    icon?: React.ComponentType<{ className?: string; onClick?: () => void }>;
    toggleType?: () => void;
  }[] = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
      autocomplete: "email",
      icon: MailIcon,
    },
    {
      name: "password",
      label: "Mot de passe",
      type: typePassword,
      placeholder: "Mot de passe",
      autocomplete: "current-password",
      icon: typePassword === "password" ? EyeIcon : EyeOffIcon,
      toggleType: () =>
        setTypePassword((prev) => (prev === "password" ? "text" : "password")),
    },
  ];

  return (
    <BaseCard
      title={<h1 className="text-4xl uppercase">Connexion</h1>}
      description={
        <>{serverError && <p className="text-danger">{serverError}</p>}</>
      }
      content={
        <Form {...form}>
          <form className="grid gap-5" onSubmit={handleSubmit}>
            {fields.map(
              ({
                name,
                label,
                type,
                placeholder,
                autocomplete,
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
                          autoComplete={autocomplete}
                          icon={Icon}
                          toggleType={toggleType}
                        />
                      </FormControl>
                      <FormMessage className="text-danger" />
                    </FormItem>
                  )}
                />
              )
            )}
            <Link to={AppRoutes.home} className="underline justify-self-end">
              Mot de passe oublié ?
            </Link>
            <div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Connexion en cours..." : "Je me connecte"}
              </Button>
            </div>
          </form>
        </Form>
      }
      footer={
        <div className="flex flex-col gap-5 w-full">
          <div className="w-full px-6">
            <div className="h-[1px] w-full bg-tertiary-25"></div>
          </div>
          <div className="flex flex-col gap-1">
            <p>Pas encore inscrit(e) ?</p>
            <div className="text-center">
              <Link
                to={AppRoutes.signUp}
                className="block border-[1px] border-primary-100 text-primary-100 text-sm font-medium bg-primary-100-foreground py-2 px-4 hover:bg-primary-100 hover:text-primary-100-foreground transition-colors duration-500 h-9 rounded-md"
              >
                Je m'inscris
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default SignInCard;
