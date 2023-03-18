import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    //padding: '20px 0',
  },
  icon: {
    marginRight: "20px",
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "20px 0",
  },
  appBar: {
    marginTop: "40px",
    marginBottom: "40px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    paddingBottom: '20px'
  },
  cardMedia: {
    paddingTop: "50%",
  },
  cardMediaLegend: {
    paddingTop: "12%",
  },
  cardMediaLarge: {
    paddingTop: "100%",
  },
  cardMediaOverview: {
    height: 500,
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1400,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  },
}));

export default useStyles;
