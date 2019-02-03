import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contactItem: {
    backgroundColor: "#AED6F1",
    marginBottom: 2,
    padding: 15,
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center"
  },
  avatarText: {
    color: "#FFF"
  },
  name: {
    paddingLeft: 14,
    fontSize: 20
  },
  AppoinmentContactItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#AED6F1",
    marginBottom: 2,
    padding: 15,
    alignItems: "center"
  },
  AppoinmentName: {
    alignItems: "center"
  },
  AppoinmentListName: {
    flexDirection: "column",
    flex: 5,
    paddingLeft: 14
  },
  contactNameList: {
    fontSize: 20
  },
  AppoinmentNumber: {
    flexDirection: "column",
    flex: 3
  },
  contactNumbersText: {
    paddingTop: 25,
    fontSize: 20,
    alignItems: "center",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  contactNameText: {
    fontSize: 22,
    fontWeight: "bold"
  },
  avatarImage: {
    width: 35,
    height: 35
  },
  modalView: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 150
  },
  innerModalView: {
    flex: 0,
    backgroundColor: "#AED6F1",
    padding: 20,
    height: 300
  },
  inputTextView: {
    paddingRight: 2,
    paddingLeft: 2,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#AED6F1'
  },
  inputText: {
    color: '#555555',
    paddingRight: 10,
    paddingLeft: 30,
    paddingTop: 10,
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#AED6F1',
    fontSize: 18
  },
  searchIcon: {
    paddingRight: 15,
  },
  noSearchResults: {
    marginBottom: 2,
    padding: 15,
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 20,
    alignSelf: 'center'
  },
  noSearchResultsText: {
    fontSize: 18
  }
});

export default styles;
