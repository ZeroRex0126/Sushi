import "./App.css";
import { MessageDialog, Navbar } from "./Components";
import { Routes, Route } from "react-router-dom";
import { ContactUsPage, MenuPage, HomePage, About } from "./Pages";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { sendEmail } from "./lib/sendemail";
import { useState } from "react";

function App() {
  const [messageDialog, setMessageDialog] = useState({
    message: "",
    isOpen: false,
    item: {},
    productName: "",
    iconElement: <></>,
    funtionExecute: () => {},
    redirect: false,
    buttonMessage: "",
  });

  const closeMessageDialog = (type) => {
    if (type === "OrderConfirmation") {
      setMessageDialog({
        message: "",
        isOpen: false,
        item: "",
        productName: "",
        iconElement: <CheckCircleRoundedIcon />,
        funtionExecute: () => {},
        redirect: false,
        buttonMessage: "",
      });
    }
  };

  return (
    <>
      <img src="/img/waves.png" alt="" className="background" />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/ContactUs"
          element={
            <ContactUsPage
              sendEmail={sendEmail}
              setMessageDialog={setMessageDialog}
              closeMessageDialog={closeMessageDialog}
            />
          }
        ></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
      {messageDialog.isOpen && (
        <MessageDialog
          item={messageDialog.item}
          nameProduct={messageDialog.productName}
          onDialog={messageDialog.funtionExecute}
          message={messageDialog.message}
          iconElement={messageDialog.iconElement}
          redirect={messageDialog.redirect}
          buttonMessage={messageDialog.buttonMessage}
        />
      )}
    </>
  );
}

export default App;
