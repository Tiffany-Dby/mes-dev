import { useForm, UseFormProps, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";
import { useState } from "react";
import { postRequest } from "@/shared/tools/api";

interface UseCustomFormProps<T extends FieldValues> extends UseFormProps<T> {
  schema: ZodSchema<T>;
  apiUrl: string;
}

const useCustomForm = <T extends FieldValues>({
  schema,
  apiUrl,
  defaultValues,
  ...formOptions
}: UseCustomFormProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
    ...formOptions,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    setServerError(null);

    setIsLoading(true);
    const { error } = await postRequest<{ message: string }, T>(apiUrl, data);
    setIsLoading(false);

    if (error) {
      setServerError(error);

      return;
    }

    form.reset();
  });

  return { form, handleSubmit, isLoading, serverError };
};

export default useCustomForm;
