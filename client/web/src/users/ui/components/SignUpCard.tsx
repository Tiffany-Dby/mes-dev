import { Button } from "@/lib/components/ui/button";
import { AppRoutes } from "@/shared/types/Routes";
import BaseCard from "@/shared/ui/components/BaseCard";
import BaseInputGroup from "@/shared/ui/components/BaseInputGroup";
import useSignUp from "@/users/hooks/useSignUp";
import { CircleUserRoundIcon, EyeOffIcon, MailIcon } from "lucide-react";
import { Link } from "react-router";

const SignUpCard = () => {
  const {
    handleSignUpChange,
    handleSignUpSubmit,
    signUpForm,
    signUpLoading,
    signUpError,
    signUpSuccess,
  } = useSignUp();

  const signUpFields = [
    {
      label: "Prénom",
      id: "firstName",
      type: "text",
      placeholder: "Prénom",
      icon: CircleUserRoundIcon,
    },
    {
      label: "Nom",
      id: "lastName",
      type: "text",
      placeholder: "Nom",
      icon: CircleUserRoundIcon,
    },
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "Email",
      icon: MailIcon,
    },
    {
      label: "Mot de passe",
      id: "password",
      type: "password",
      placeholder: "Mot de passe",
      icon: EyeOffIcon,
    },
    {
      label: "Confirmer mot de passe",
      id: "confirmPassword",
      type: "password",
      placeholder: "Confirmer mot de passe",
      icon: EyeOffIcon,
    },
  ];

  return (
    <BaseCard
      title={<h1 className="text-4xl uppercase">Inscription</h1>}
      description={
        <>
          {signUpError && <p className="text-danger">{signUpError}</p>}
          {signUpSuccess && (
            <p className="text-success">Inscription réussie !</p>
          )}
        </>
      }
      content={
        <form className="flex flex-col gap-5" onSubmit={handleSignUpSubmit}>
          {signUpFields.map(({ label, id, type, placeholder, icon }) => (
            <BaseInputGroup
              key={id}
              label={label}
              isSrOnly={true}
              type={type}
              id={id}
              name={id}
              placeholder={placeholder}
              icon={icon}
              value={signUpForm[id as keyof typeof signUpForm]}
              onChange={handleSignUpChange}
            />
          ))}
          <div>
            <Button type="submit" className="w-full" disabled={signUpLoading}>
              {signUpLoading ? "Création du compte..." : "Je crée mon compte"}
            </Button>
          </div>
        </form>
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
                to={AppRoutes.home}
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
