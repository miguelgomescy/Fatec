import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container:{ flex:1, backgroundColor:"#0b0b0b" },
  content:{ padding:16, gap:16 },
  title:{ color:"#fff", fontSize:22, fontWeight:"800" },
  card:{ backgroundColor:"#171717", borderRadius:12, padding:16, gap:8 },
  subtitle:{ color:"#fff", fontSize:16, fontWeight:"700" },
  row:{ flexDirection:"row", flexWrap:"wrap", gap:8 },
  rowBetween:{ flexDirection:"row", alignItems:"center", justifyContent:"space-between" },
  pill:{ borderWidth:1, borderColor:"#4f46e5", paddingVertical:8, paddingHorizontal:12, borderRadius:999 },
  pillText:{ color:"#4f46e5", fontWeight:"700" },
  group:{ flex:1, minWidth:100 },
  label:{ color:"#bbb", fontSize:12, marginBottom:4 },
  input:{ borderWidth:1, borderColor:"#333", color:"#fff", padding:10, borderRadius:8 },
  hint:{ color:"#888" },
  startBtn:{ backgroundColor:"#4f46e5", padding:14, borderRadius:12, alignItems:"center" },
  startText:{ color:"#fff", fontWeight:"800" },
});
