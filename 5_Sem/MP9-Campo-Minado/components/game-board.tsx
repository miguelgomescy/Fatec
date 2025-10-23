"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Cell } from "@/components/cell"
import { createBoard, revealCell, toggleFlag, checkWin } from "@/lib/game-logic"
import { ArrowLeft, RotateCcw, Flag, Timer, Trophy, Bomb, Sun, Moon } from "lucide-react"
import confetti from "canvas-confetti"

type GameBoardProps = {
  difficulty: { rows: number; cols: number; mines: number }
  onBackToMenu: () => void
  onRestart: () => void
  theme: "light" | "dark"
  onToggleTheme: () => void
}

export function GameBoard({ difficulty, onBackToMenu, onRestart, theme, onToggleTheme }: GameBoardProps) {
  const [board, setBoard] = useState(() => createBoard(difficulty.rows, difficulty.cols, difficulty.mines))
  const [gameOver, setGameOver] = useState(false)
  const [won, setWon] = useState(false)
  const [flagCount, setFlagCount] = useState(0)
  const [time, setTime] = useState(0)
  const [timerActive, setTimerActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (timerActive && !gameOver && !won) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timerActive, gameOver, won])

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (gameOver || won) return

      if (!timerActive) {
        setTimerActive(true)
      }

      const newBoard = revealCell(board, row, col)
      setBoard(newBoard)

      if (newBoard[row][col].isMine) {
        setGameOver(true)
        setTimerActive(false)
        // Reveal all mines
        const revealedBoard = newBoard.map((row) =>
          row.map((cell) => ({
            ...cell,
            isRevealed: cell.isMine ? true : cell.isRevealed,
          })),
        )
        setBoard(revealedBoard)
      } else if (checkWin(newBoard, difficulty.mines)) {
        setWon(true)
        setTimerActive(false)
        // Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
    },
    [board, gameOver, won, timerActive, difficulty.mines],
  )

  const handleCellRightClick = useCallback(
    (row: number, col: number) => {
      if (gameOver || won) return

      if (!timerActive) {
        setTimerActive(true)
      }

      const cell = board[row][col]
      if (cell.isRevealed) return

      const newBoard = toggleFlag(board, row, col)
      setBoard(newBoard)
      setFlagCount((prev) => (cell.isFlagged ? prev - 1 : prev + 1))
    },
    [board, gameOver, won, timerActive],
  )

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="w-full max-w-4xl">
        <Card className="p-4 md:p-6 bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl relative">
          <div className="absolute top-4 right-4">
            <Button variant="ghost" size="icon" onClick={onToggleTheme} className="rounded-full hover:bg-secondary">
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </Button>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBackToMenu}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Menu
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onRestart}
              className="border-border hover:bg-secondary bg-transparent"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Restart
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
              <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                <Bomb className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Mines</p>
                <p className="text-xl font-bold text-foreground">{difficulty.mines - flagCount}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Flag className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Flags</p>
                <p className="text-xl font-bold text-foreground">{flagCount}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Timer className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Time</p>
                <p className="text-xl font-bold text-foreground font-mono">{formatTime(time)}</p>
              </div>
            </div>
          </div>

          {/* Game Over / Win Message */}
          {(gameOver || won) && (
            <div
              className={`mb-6 p-6 rounded-xl text-center ${
                won ? "bg-accent/10 border-2 border-accent/50" : "bg-destructive/10 border-2 border-destructive/50"
              }`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  won ? "bg-accent/20" : "bg-destructive/20"
                }`}
              >
                {won ? <Trophy className="w-8 h-8 text-accent" /> : <Bomb className="w-8 h-8 text-destructive" />}
              </div>
              <h2 className={`text-2xl font-bold mb-2 ${won ? "text-accent" : "text-destructive"}`}>
                {won ? "You Won!" : "Game Over"}
              </h2>
              <p className="text-muted-foreground mb-4">
                {won ? `Completed in ${formatTime(time)}` : "You hit a mine! Try again."}
              </p>
              <Button
                onClick={onRestart}
                className={won ? "bg-accent hover:bg-accent/90" : "bg-destructive hover:bg-destructive/90"}
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Play Again
              </Button>
            </div>
          )}

          {/* Board */}
          <div className="overflow-x-auto">
            <div
              className="inline-grid gap-1 p-4 rounded-xl bg-secondary/50"
              style={{
                gridTemplateColumns: `repeat(${difficulty.cols}, minmax(0, 1fr))`,
              }}
            >
              {board.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <Cell
                    key={`${rowIndex}-${colIndex}`}
                    cell={cell}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    onRightClick={() => handleCellRightClick(rowIndex, colIndex)}
                  />
                )),
              )}
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
