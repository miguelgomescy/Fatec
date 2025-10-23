import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Switch, ScrollView } from "react-native";
import s from "../styles/HomeStyles";

export default function HomeScreen({ navigation }) {
  const [rows, setRows] = useState(8);
  const [cols, setCols] = useState(8);
  const [mines, setMines] = useState(10);
  const [twoPlayers, setTwoPlayers] = useState(false);

  const clamp = (v, a, b) => Math.max(a, Math.min(b, Number(v) || 0));
  const preset = (r, c, m) => { setRows(r); setCols(c); setMines(m); };

  return (
    <ScrollView style={s.container} contentContainerStyle={s.content}>
      <Text style={s.title}>Configurar Partida</Text>

      <View style={s.card}>
        <Text style={s.subtitle}>Tamanhos Rápidos</Text>
        <View style={s.row}>
          {[ [8,8,10], [10,10,20], [15,15,40] ].map(([r,c,m],i)=>(
            <TouchableOpacity key={i} style={s.pill} onPress={()=>preset(r,c,m)}>
              <Text style={s.pillText}>{r}×{c} • {m}💣</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={s.card}>
        <Text style={s.subtitle}>Personalizado</Text>
        <View style={s.row}>
          <View style={s.group}><Text style={s.label}>Linhas</Text>
            <TextInput value={String(rows)} onChangeText={t=>setRows(clamp(t,1,100))}
              keyboardType="numeric" style={s.input} />
          </View>
          <View style={s.group}><Text style={s.label}>Colunas</Text>
            <TextInput value={String(cols)} onChangeText={t=>setCols(clamp(t,1,100))}
              keyboardType="numeric" style={s.input} />
          </View>
          <View style={s.group}><Text style={s.label}>Bombas</Text>
            <TextInput value={String(mines)} onChangeText={t=>setMines(clamp(t,1,rows*cols-1))}
              keyboardType="numeric" style={s.input} />
          </View>
        </View>
        <Text style={s.hint}>Máximo 100×100. Bombas &lt; {rows*cols}.</Text>
      </View>

      <View style={s.card}>
        <View style={s.rowBetween}><Text style={s.subtitle}>Dois jogadores</Text>
          <Switch value={twoPlayers} onValueChange={setTwoPlayers} />
        </View>
      </View>

      <TouchableOpacity style={s.startBtn}
        onPress={()=>navigation.navigate("Game",{ rows, cols, mines, twoPlayers })}>
        <Text style={s.startText}>Começar Jogo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
