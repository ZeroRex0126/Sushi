import React from "react";
import { ContactCard } from "../Components";

const ContactUsPage = ({ sendEmail, setMessageDialog, closeMessageDialog }) => {
  return (
    <div>
      <ContactCard
        sendEmail={sendEmail}
        setMessageDialog={setMessageDialog}
        closeMessageDialog={closeMessageDialog}
      />
    </div>
  );
};

export default ContactUsPage;
