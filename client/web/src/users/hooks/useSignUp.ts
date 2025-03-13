import { postRequest } from "@/shared/tools/api";
import { ApiRoutes } from "@/shared/types/Routes";
import { useState } from "react";
import { SignUpData } from "@/users/types/SignUp";

const useSignUp = () => {
  const [signUpForm, setSignUpForm] = useState<SignUpData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSignUpLoading(true);
    setSignUpError(null);
    setSignUpSuccess(false);

    for (const key in signUpForm) {
      if (!signUpForm[key as keyof SignUpData].trim()) {
        setSignUpError("Tous les champs doivent être remplis");
        setSignUpLoading(false);

        return;
      }
    }

    if (signUpForm.password !== signUpForm.confirmPassword) {
      setSignUpError("Les mots de passe ne correspondent pas");
      setSignUpLoading(false);

      return;
    }

    const { error } = await postRequest<{ message: string }, SignUpData>(
      ApiRoutes.url + ApiRoutes.signUp,
      signUpForm
    );
    setSignUpLoading(false);

    if (error) {
      setSignUpError(error);

      return;
    }

    setSignUpSuccess(true);
    setSignUpForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return {
    handleSignUpChange,
    handleSignUpSubmit,
    signUpForm,
    signUpLoading,
    signUpError,
    signUpSuccess,
  };
};

export default useSignUp;
