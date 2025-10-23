import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container:{ flex:1, backgroundColor:"#0b0b0b" },
  header:{ flexDirection:"row", alignItems:"center", gap:10, padding:12, justifyContent:"space-between" },
  badge:{ color:"#fff", fontWeight:"800" },
  btn:{ borderWidth:1, borderColor:"#4f46e5", paddingVertical:6, paddingHorizontal:12, borderRadius:8 },
  btnText:{ color:"#4f46e5", fontWeight:"700" },
  overlay:{ position:"absolute", left:0, right:0, top:0, bottom:0, alignItems:"center", justifyContent:"center", backgroundColor:"rgba(0,0,0,0.5)", gap:12 },
  overlayTitle:{ color:"#fff", fontSize:22, fontWeight:"800" },
});
