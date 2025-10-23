"use client"

import type React from "react"

import { Flag, Bomb } from "lucide-react"
import type { CellType } from "@/lib/game-logic"

type CellProps = {
  cell: CellType
  onClick: () => void
  onRightClick: () => void
}

const NUMBER_COLORS = [
  "",
  "text-blue-500",
  "text-green-500",
  "text-red-500",
  "text-purple-500",
  "text-yellow-500",
  "text-pink-500",
  "text-cyan-500",
  "text-orange-500",
]

export function Cell({ cell, onClick, onRightClick }: CellProps) {
  const handleClick = () => {
    if (!cell.isRevealed && !cell.isFlagged) {
      onClick()
    }
  }

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    onRightClick()
  }

  return (
    <button
      onClick={handleClick}
      onContextMenu={handleContextMenu}
      className={`
        w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-sm md:text-base font-bold rounded transition-all duration-150
        ${
          cell.isRevealed
            ? cell.isMine
              ? "bg-destructive text-destructive-foreground"
              : "bg-muted text-foreground"
            : "bg-card hover:bg-card/80 border-2 border-border hover:border-primary/50 cursor-pointer active:scale-95"
        }
      `}
    >
      {cell.isRevealed ? (
        cell.isMine ? (
          <Bomb className="w-4 h-4 md:w-5 md:h-5" />
        ) : cell.adjacentMines > 0 ? (
          <span className={NUMBER_COLORS[cell.adjacentMines]}>{cell.adjacentMines}</span>
        ) : null
      ) : cell.isFlagged ? (
        <Flag className="w-4 h-4 md:w-5 md:h-5 text-accent" />
      ) : null}
    </button>
  )
}
