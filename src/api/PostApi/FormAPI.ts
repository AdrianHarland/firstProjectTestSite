type FormTypes = {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  phoneNumber: number | undefined;
};

export const subFrom = ({
  firstName,
  lastName,
  message,
  email,
  phoneNumber,
}: FormTypes) => {
  const headers = { "Content-type": "application/json; charset=UTF-8" };
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers,
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
      message: message,
      email: email,
      phoneNumber: phoneNumber,
    }),
  }).then((response) => response.status);
};
