import React, { useState, FormEvent } from "react";
import "./UserForm.scss";
import { subFrom } from "../../api/PostApi/FormAPI";
import { toast } from "react-toastify";

const UserForm = () => {
  const [statusCode, setStatusCode] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<number>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await subFrom({
        firstName,
        lastName,
        message,
        email,
        phoneNumber,
      });
      if (response === 201) {
        toast.success("Great Success");
      } else {
        toast.warn("Form submission error");
      }
    } catch (error: any) {
      toast.error("500 API Error");
      console.error("Error submitting form data:", error.message);
    }
  };

  return (
    <>
      <form className="fields-container" onSubmit={handleSubmit}>
        <div className="inner-fields-container">
          <label>First Name: </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value as string);
            }}
          />
        </div>
        <div className="inner-fields-container">
          <label>Last Name: </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value as string);
            }}
          />
        </div>
        <div className="inner-fields-container">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="inner-fields-container">
          <label>Message: </label>
          <input
            type="text"
            name="message"
            value={message}
            required
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
        <div className="inner-fields-container">
          <label>Phone number: </label>
          <input
            type="number"
            name="phone"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value as unknown as number);
            }}
          />
        </div>
        <br />
        <br />
        <button className="submitBTN" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default UserForm;
