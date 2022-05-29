import "./App.css";
import { MessageDialog, Navbar } from "./Components";
import { Routes, Route } from "react-router-dom";
import { ContactUsPage, MenuPage, HomePage, About } from "./Pages";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { sendEmail } from "./lib/sendemail";
import { useEffect, useState } from "react";
import { commerce } from "./lib/commerce";
import { MDBSpinner } from "mdb-react-ui-kit";
import ScrollToTop from "./lib/ScrollToTop";

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
  const [appIsLoading, setappIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchShoppingData = async () => {
    const products = await commerce.products.list();
    const categories = await commerce.categories.list();

    setProducts(products.data);
    setCategories(categories.data);
    setappIsLoading(false);
  };

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

  useEffect(() => {
    fetchShoppingData();
  }, []);

  return !appIsLoading ? (
    <>
      <img src="/img/waves.png" alt="" className="background" />
      <ScrollToTop />
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/menu"
          element={<MenuPage products={products} categories={categories} />}
        ></Route>
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
  ) : (
    <div className="app-loading">
      <MDBSpinner grow className="ms-2 app-loading-icon" color="dark">
        <span className="loadingText">Loading...</span>
      </MDBSpinner>
    </div>
  );
}

export default App;
