import { StyleSheet } from "react-native";

export default StyleSheet.create({
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "stretch",
    justifyContent: "center",
    height: "100%",
  },

  titleMainDiv: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    backgroundColor: "#687089",
    marginTop: "10%",
  },

  title: {
    textAlign: "center",
    color: "white",
    width: "100%",
    fontSize: 20,
  },

  outsideView: {
    width: "100%",
    marginTop: "-5%",
  },

  insideView: {
    backgroundColor: "#767C96",
    color: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    paddingTop: "25%",
    paddingBottom: "25%",
  },

  insideText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },

  tags: {
    color: "white",
  },

  outsideTags: {
    backgroundColor: "#959AAD",
    color: "white",
    marginRight: "3%",
    marginBottom: "3%",
    padding: "2%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
  },

  insideTags: {
    position: "absolute",
    right: 0,
    bottom: 0,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },

  buttonStyle: {
    backgroundColor: "#687089",
    width: "95%",
    padding: "3%",
    textAlign: "center",
    borderRadius: 15,
    marginTop: "5%",
  },
});