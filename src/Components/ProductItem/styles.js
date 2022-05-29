import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    borderRadius: 15,
    "&:hover": {
      boxShadow: "0 0 12px 2px #999999",
    },
    "@media (max-width:860px)": {
      "&:hover": {},
    },
  },
  media: {
    height: 250,
    paddingTop: "56.25%",
  },
  CardContentContainer: {
    height: "120px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  AddIconBtn: {
    width: "50px",
    height: "50px",
  },
}));
