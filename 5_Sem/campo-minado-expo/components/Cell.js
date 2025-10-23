// components/Cell.js
import React from "react";
import { Pressable, Text, View } from "react-native";

export default function Cell({ cell, size, onPress, onLongPress }) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      delayLongPress={250}
      style={{
        width: size,
        height: size,
        borderWidth: 1,
        borderColor: "#3a3a3a",
        backgroundColor: cell.isRevealed ? "#111" : "#2b2b2b",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        {!cell.isRevealed ? (
          cell.isFlagged ? <Text style={{ fontSize: 16 }}>🚩</Text> : null
        ) : cell.isMine ? (
          <Text style={{ fontSize: 16 }}>💣</Text>
        ) : cell.adjacentMines > 0 ? (
          <Text style={{ fontSize: 16, fontWeight: "800", color: "#e5e5e5" }}>
            {cell.adjacentMines}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}
