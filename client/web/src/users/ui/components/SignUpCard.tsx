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
          <BaseInputGroup
            label="Prénom"
            isSrOnly={true}
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Prénom"
            icon={CircleUserRoundIcon}
            value={signUpForm.firstname}
            onChange={handleSignUpChange}
          />
          <BaseInputGroup
            label="Nom"
            isSrOnly={true}
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Nom"
            icon={CircleUserRoundIcon}
            value={signUpForm.lastname}
            onChange={handleSignUpChange}
          />
          <BaseInputGroup
            label="Email"
            isSrOnly={true}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            icon={MailIcon}
            value={signUpForm.email}
            onChange={handleSignUpChange}
          />
          <BaseInputGroup
            label="Mot de passe"
            isSrOnly={true}
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
            icon={EyeOffIcon}
            value={signUpForm.password}
            onChange={handleSignUpChange}
          />
          <BaseInputGroup
            label="Confirmer mot de passe"
            isSrOnly={true}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirmer mot de passe"
            icon={EyeOffIcon}
            value={signUpForm.confirmPassword}
            onChange={handleSignUpChange}
          />
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
