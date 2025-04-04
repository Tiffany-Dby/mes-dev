import { FetchConfig, FetchMethod } from "../types/Api";
import { ApiRoutes } from "../types/Routes";

const getRequest = async <T>(url: string, token?: string) => {
  const config = {
    method: FetchMethod.GET,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };

  return await request<T>(url, config);
};


const postRequest = async <T, B extends object>(
  url: string,
  body: B
): Promise<{ result: T; error: string | null; status: number }> => {
  const config: FetchConfig = {
    method: FetchMethod.POST,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  };

  return await request<T>(url, config);
};

const putRequest = async <T, B extends object>(url: string, body: B, token?: string) => {
  const config = {
    method: FetchMethod.PUT,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(body),
  };

  return await request<T>(url, config);
};


const request = async <T>(
  url: string,
  config: FetchConfig
): Promise<{ result: T; error: string | null; status: number }> => {
  let result = [];
  let error = null;
  let status = -1;

  try {
    const response = await fetch(ApiRoutes.url + url, config);

    status = response.status;
    result = await response.json();

    if (status >= 400)
      throw new Error(
        `Error ${status}: ${result?.detail || "Something went wrong"}`
      );
  } catch (err) {
    if (err instanceof Error) error = err.message;
  } finally {
    // eslint-disable-next-line no-unsafe-finally
    return { result, error, status };
  }
};

export { getRequest, postRequest, putRequest };
