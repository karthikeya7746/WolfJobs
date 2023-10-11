import { toast } from "react-toastify";
import { getFormBody } from "./apiUtils";
import { loginURL, signUpURL } from "./constants";

export async function login(email: string, password: string, navigate: any) {
  const url = loginURL;
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: getFormBody({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Login data", data);
      if (data.success) {
        sessionStorage.setItem("token", data.data.token);
        navigate("/dashboard");
      }
      toast.error("Login Failed");
    });
}

export function signup(
  email: string,
  password: string,
  confirmPassword: string,
  name: string,
  role: string,
  navigate: any
) {
  const url = signUpURL;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: getFormBody({
      email,
      password,
      confirm_password: confirmPassword,
      name,
      role,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        sessionStorage.setItem("token", data.data.token);
        console.log("Navigating to dashboard");
        navigate("/dashboard");
        return;
      }
      toast.error("Sign up Failed");
    });
}