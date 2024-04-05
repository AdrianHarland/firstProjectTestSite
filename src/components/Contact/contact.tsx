import React from "react";
import AppLayout from "../AppLayout";
import "./contact.scss";
import UserForm from "../Form/UserForm";

const Contact = () => {
  return (
    <AppLayout>
      <div className="content">
        <div className="content-contact">
          <h1 className="contact-text">
            If you are intersted in staying at Shrek's swamp, please register
            interst by filling out the fields below and we will get back to you
            in the next 5 working days
          </h1>
        </div>
        <UserForm />
      </div>
    </AppLayout>
  );
};

export default Contact;
