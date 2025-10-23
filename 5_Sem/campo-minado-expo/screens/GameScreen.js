import React, { useMemo, useRef, useState } from "react";
import { View, Text, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import ConfettiCannon from "react-native-confetti-cannon";
import { Audio } from "expo-av";
import Cell from "../components/Cell";
import s from "../styles/GameStyles";
import { createBoard, reveal, toggleFlag, allSafeRevealed, flagsLeft } from "../lib/mine";


const EXPLOSION = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_3e4d39f4e2.mp3?filename=grenade-1-112683.mp3";
const VICTORY   = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_3b0dfb37f8.mp3?filename=game-bonus-144751.mp3";

export default function GameScreen() {
  const { params:{ rows, cols, mines, twoPlayers } } = useRoute();
  const nav = useNavigation();
  const [board, setBoard] = useState(()=>createBoard(rows, cols, mines));
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState({1:0,2:0});
  const confettiRef = useRef(null);

  const cellSize = useMemo(()=>{
    const W = Dimensions.get("window").width - 16;
    return Math.max(16, Math.min(48, Math.floor(W/cols)));
  },[cols]);

  async function play(uri){ try{ const {sound}=await Audio.Sound.createAsync({uri}); await sound.playAsync(); setTimeout(()=>sound.unloadAsync(),1200);}catch{} }

  function reset(){
    setBoard(createBoard(rows, cols, mines));
    setGameOver(false); setWin(false); setTurn(1); setScore({1:0,2:0});
  }

  function onPressCell(r,c){
    if (gameOver||win) return;
    const { board:next, exploded, revealedCount } = reveal(board,r,c);
    setBoard(next);
    if (twoPlayers && !exploded) setScore(s=>({ ...s, [turn]: s[turn]+revealedCount }));
    if (exploded){ setGameOver(true); play(EXPLOSION); }
    else if (allSafeRevealed(next)){ setWin(true); play(VICTORY); setTimeout(()=>confettiRef.current?.start(),50); }
    else if (twoPlayers) setTurn(t=>t===1?2:1);
  }

  function onLongPressCell(r,c){
    if (gameOver||win) return;
    setBoard(toggleFlag(board,r,c));
  }

  const data = useMemo(()=>board.flat(),[board]);

  return (
    <View style={s.container}>
      {/* HUD */}
      <View style={s.header}>
        <Text style={s.badge}>💣 {flagsLeft(board, mines)}</Text>
        <Text style={s.badge}>📐 {rows}×{cols}</Text>
        {twoPlayers && <Text style={s.badge}>👥 P{turn} • P1 {score[1]} | P2 {score[2]}</Text>}
        <TouchableOpacity onPress={reset} style={s.btn}><Text style={s.btnText}>Reiniciar</Text></TouchableOpacity>
      </View>

      {/* Grid */}
      <FlatList
        data={data}
        keyExtractor={(it)=>`${it.r}-${it.c}`}
        numColumns={cols}
        renderItem={({item})=>(
          <Cell cell={item} size={cellSize}
            onPress={()=>onPressCell(item.r,item.c)}
            onLongPress={()=>onLongPressCell(item.r,item.c)} />
        )}
        contentContainerStyle={{ padding: 8 }}
        initialNumToRender={Math.min(300, rows*cols)}
        windowSize={15}
        removeClippedSubviews
      />

      {(win||gameOver) && (
        <View style={s.overlay}>
          <Text style={s.overlayTitle}>{win ? "🎉 Você venceu!" : "💥 Game Over"}</Text>
          <View style={{flexDirection:"row", gap:12}}>
            <TouchableOpacity onPress={reset} style={s.btn}><Text style={s.btnText}>Reiniciar</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>nav.goBack()} style={s.btn}><Text style={s.btnText}>Sair</Text></TouchableOpacity>
          </View>
        </View>
      )}

      <ConfettiCannon ref={confettiRef} autoStart={false} count={180} origin={{x:200,y:0}} fadeOut />
    </View>
  );
}
