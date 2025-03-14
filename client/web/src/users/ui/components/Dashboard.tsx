import { ApiRoutes } from "@/shared/types/Routes";
import BaseCard from "@/shared/ui/components/BaseCard";
import {
  ChangePasswordData,
  ChangePasswordSchema,
} from "@/users/schemas/ChangePasswordSchema";
import {
  PersonalInfoData,
  PersonInfosSchema,
} from "@/users/schemas/PersonalInfosSchema";
import CollapsibleForm from "./CollapsibleForm";
import { useAuth } from "@/users/context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  const passwordDefaultValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const passwordFields: {
    name: keyof ChangePasswordData;
    label: string;
    type: string;
    placeholder: string;
    autoComplete: string;
  }[] = [
    {
      name: "currentPassword",
      label: "Mot de passe actuel",
      type: "password",
      placeholder: "Mot de passe actuel",
      autoComplete: "current-password",
    },
    {
      name: "newPassword",
      label: "Nouveau mot de passe",
      type: "password",
      placeholder: "Nouveau mot de passe",
      autoComplete: "new-password",
    },
    {
      name: "confirmPassword",
      label: "Confirmer nouveau mot de passe",
      type: "password",
      placeholder: "Confirmer nouveau mot de passe",
      autoComplete: "password",
    },
  ];

  const personalDefaultValues = {
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    email: user?.email ?? "",
  };
  const personalInfoFields: {
    name: keyof PersonalInfoData;
    label: string;
    type: string;
    placeholder: string;
    autoComplete: string;
  }[] = [
    {
      name: "lastName",
      label: "Nom",
      type: "text",
      placeholder: "Nom",
      autoComplete: "family-name",
    },
    {
      name: "firstName",
      label: "Prénom",
      type: "text",
      placeholder: "Prénom",
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Email",
      autoComplete: "email",
    },
  ];

  return (
    <BaseCard
      title={<h1 className="text-4xl uppercase">Mon compte</h1>}
      content={
        <div className="flex flex-col gap-2">
          {!user ? (
            <p>Chargement...</p>
          ) : (
            <>
              <CollapsibleForm
                formName="Informations personnelles"
                schema={PersonInfosSchema}
                inputFields={personalInfoFields}
                apiUrl={ApiRoutes.signUp}
                defaultValues={personalDefaultValues}
              />
              <div className="w-full">
                <div className="h-[1px] w-full bg-tertiary-25"></div>
              </div>
              <CollapsibleForm
                formName="Changer de mot de passe"
                schema={ChangePasswordSchema}
                inputFields={passwordFields}
                apiUrl={ApiRoutes.signUp}
                defaultValues={passwordDefaultValues}
              />
            </>
          )}
        </div>
      }
    />
  );
};

export default Dashboard;
