import { Grid, TextField } from "@material-ui/core";
import { Typography } from "@mui/material";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import "./ContactCard.css";
import { Fade } from "react-reveal";
import AnimatedBtn from "../animatedBtn/animatedBtn";

const ContactCard = ({ sendEmail, setMessageDialog, closeMessageDialog }) => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const methods = useForm();
  return (
    <main>
      <div className="h-divider">
        <div className="shadow"></div>
        <div className="text2">
          <img src="/img/divider-img.png" alt="" />
        </div>
      </div>
      <Grid container className="contact-component-container">
        <Grid item sm={12} md={6} className="contact-details">
          <Fade left cascade>
            <h1>Contacts</h1>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet dignissim diam. Donec sed arcu eget odio convallis
              hendrerit nec sed erat. Mauris facilisis eros eleifend elit
              interdum elementum. Morbi sit amet consectetur purus. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Nunc pulvinar est sit amet ex pulvinar, et
              placerat nisi porta. Maecenas eget neque et sem dictum malesuada
              vitae pellentesque enim. In hac habitasse platea dictumst.
              Vestibulum condimentum in nulla sed faucibus. Praesent eget
              consectetur elit, consequat vehicula tellus. Donec pulvinar non ex
              at venenatis.
            </Typography>
          </Fade>
        </Grid>

        <Grid item sm={12} md={6} className="contact-form">
          <h1>Contact Us</h1>
          <FormProvider {...methods}>
            <Fade right cascade>
              <form
                onSubmit={methods.handleSubmit(() => {
                  sendEmail(
                    {
                      fName,
                      lName,
                      email,
                      description,
                    },
                    { subject: "Contact Us", emailType: "CONTACT" }
                  );
                  setfName("");
                  setlName("");
                  setEmail("");
                  setDescription("");
                  setMessageDialog({
                    message:
                      "Thank you for your message, we will be contacting you soon ",
                    isOpen: true,
                    item: "",
                    productName: "",
                    iconElement: (
                      <CheckCircleRoundedIcon className="message-check-icon" />
                    ),
                    funtionExecute: () =>
                      closeMessageDialog("OrderConfirmation"),
                    redirect: false,
                    buttonMessage: "See you soon !!!",
                  });
                })}
              >
                <TextField
                  fullWidth
                  required
                  name="firstName"
                  label="First name"
                  value={fName}
                  onChange={(e) => {
                    setfName(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  required
                  name="lastName"
                  label="Last name"
                  value={lName}
                  onChange={(e) => {
                    setlName(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  required
                  name="email"
                  type="email"
                  label="E-mail Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  minRows={10}
                  fullWidth
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <br />
                <br />
                <AnimatedBtn
                  title={"Contact Us"}
                  isBtn={true}
                  btnType={"submit"}
                  color={{ "--btn-color": "green" }}
                />
                <br />
                <br />
              </form>
            </Fade>
          </FormProvider>
        </Grid>
      </Grid>
      <div className="spacer-vertical left">
        <div className="mask text2">
          {/* <div className="vertical-bg">
            <img src="/img/divider-img.png" />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default ContactCard;
