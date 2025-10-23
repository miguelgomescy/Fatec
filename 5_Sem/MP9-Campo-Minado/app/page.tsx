"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { GameBoard } from "@/components/game-board"
import { Bomb, Flag, Trophy, Moon, Sun, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Difficulty = "easy" | "medium" | "hard" | "custom"

const DIFFICULTIES = {
  easy: { rows: 8, cols: 8, mines: 10 },
  medium: { rows: 12, cols: 12, mines: 20 },
  hard: { rows: 16, cols: 16, mines: 40 },
}

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)
  const [difficulty, setDifficulty] = useState<Difficulty>("easy")
  const [gameKey, setGameKey] = useState(0)
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [showCustom, setShowCustom] = useState(false)

  const [customConfig, setCustomConfig] = useState({
    rows: 10,
    cols: 10,
    mines: 15,
  })

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const handleStartGame = (diff: Difficulty) => {
    setDifficulty(diff)
    setGameStarted(true)
    setGameKey((prev) => prev + 1)
  }

  const handleStartCustomGame = () => {
    setDifficulty("custom")
    setGameStarted(true)
    setGameKey((prev) => prev + 1)
  }

  const handleBackToMenu = () => {
    setGameStarted(false)
    setShowCustom(false)
  }

  const handleRestart = () => {
    setGameKey((prev) => prev + 1)
  }

  const getCurrentConfig = () => {
    if (difficulty === "custom") {
      return customConfig
    }
    return DIFFICULTIES[difficulty as keyof typeof DIFFICULTIES]
  }

  if (gameStarted) {
    return (
      <GameBoard
        key={gameKey}
        difficulty={getCurrentConfig()}
        onBackToMenu={handleBackToMenu}
        onRestart={handleRestart}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    )
  }

  if (showCustom) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-secondary/20">
        <div className="w-full max-w-2xl">
          <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
            <div className="absolute top-4 right-4">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hover:bg-secondary">
                {theme === "dark" ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </Button>
            </div>

            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
                <Settings className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance text-foreground">Custom Game</h1>
              <p className="text-muted-foreground text-lg">Configure your board</p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <Label htmlFor="rows" className="text-foreground">
                  Rows (5-20)
                </Label>
                <Input
                  id="rows"
                  type="number"
                  min="5"
                  max="20"
                  value={customConfig.rows}
                  onChange={(e) =>
                    setCustomConfig((prev) => ({ ...prev, rows: Math.max(5, Math.min(20, Number(e.target.value))) }))
                  }
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="cols" className="text-foreground">
                  Columns (5-20)
                </Label>
                <Input
                  id="cols"
                  type="number"
                  min="5"
                  max="20"
                  value={customConfig.cols}
                  onChange={(e) =>
                    setCustomConfig((prev) => ({ ...prev, cols: Math.max(5, Math.min(20, Number(e.target.value))) }))
                  }
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="mines" className="text-foreground">
                  Mines (1-{Math.floor(customConfig.rows * customConfig.cols * 0.4)})
                </Label>
                <Input
                  id="mines"
                  type="number"
                  min="1"
                  max={Math.floor(customConfig.rows * customConfig.cols * 0.4)}
                  value={customConfig.mines}
                  onChange={(e) =>
                    setCustomConfig((prev) => ({
                      ...prev,
                      mines: Math.max(1, Math.min(Math.floor(prev.rows * prev.cols * 0.4), Number(e.target.value))),
                    }))
                  }
                  className="mt-2"
                />
              </div>

              <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                <p className="text-sm text-muted-foreground">
                  Board size:{" "}
                  <span className="font-semibold text-foreground">
                    {customConfig.rows}×{customConfig.cols}
                  </span>{" "}
                  ({customConfig.rows * customConfig.cols} cells)
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Difficulty:{" "}
                  <span className="font-semibold text-foreground">
                    {Math.round((customConfig.mines / (customConfig.rows * customConfig.cols)) * 100)}%
                  </span>{" "}
                  mines
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setShowCustom(false)} className="flex-1">
                Back
              </Button>
              <Button onClick={handleStartCustomGame} className="flex-1 bg-primary hover:bg-primary/90">
                Start Game
              </Button>
            </div>
          </Card>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="w-full max-w-2xl">
        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl relative">
          <div className="absolute top-4 right-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hover:bg-secondary">
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </Button>
          </div>

          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-6">
              <Bomb className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance text-foreground">Minesweeper</h1>
            <p className="text-muted-foreground text-lg">Clear the board without hitting any mines</p>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold text-foreground">Select Difficulty</h2>

            <button
              onClick={() => handleStartGame("easy")}
              className="w-full p-6 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-200 text-left group border-2 border-transparent hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                    Easy
                  </h3>
                  <p className="text-muted-foreground">8×8 grid • 10 mines</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Flag className="w-6 h-6 text-accent" />
                </div>
              </div>
            </button>

            <button
              onClick={() => handleStartGame("medium")}
              className="w-full p-6 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-200 text-left group border-2 border-transparent hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                    Medium
                  </h3>
                  <p className="text-muted-foreground">12×12 grid • 20 mines</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Bomb className="w-6 h-6 text-primary" />
                </div>
              </div>
            </button>

            <button
              onClick={() => handleStartGame("hard")}
              className="w-full p-6 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-200 text-left group border-2 border-transparent hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                    Hard
                  </h3>
                  <p className="text-muted-foreground">16×16 grid • 40 mines</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-destructive" />
                </div>
              </div>
            </button>

            <button
              onClick={() => setShowCustom(true)}
              className="w-full p-6 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-200 text-left group border-2 border-transparent hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                    Custom
                  </h3>
                  <p className="text-muted-foreground">Configure your own board</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
              </div>
            </button>
          </div>

          <div className="pt-6 border-t border-border">
            <h3 className="font-semibold mb-3 text-foreground">How to Play</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Left click</strong> to reveal a cell
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  <strong className="text-foreground">Right click</strong> to place a flag
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Numbers show how many mines are adjacent</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>Clear all safe cells to win</span>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </main>
  )
}
