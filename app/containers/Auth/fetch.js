import { AuthDeniedError } from "./errors";

export default function fetch (user) {
  //An authentication request should be here
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (user.username === "admin" && user.password === "admin") resolve(user);
      else reject(new AuthDeniedError("Wrong username or password"));
    }, 1000);
  });
};