// lib/mines.ts
// Lógica pura do Campo Minado — compatível com React Native (Expo)

export type Cell = {
  r: number
  c: number
  isMine: boolean
  isRevealed: boolean
  isFlagged: boolean
  adjacentMines: number
}

export type Board = Cell[][]

export function createBoard(rows: number, cols: number, mineCount: number): Board {
  const total = rows * cols
  const mines = Math.max(1, Math.min(mineCount, total - 1))

  // cria matriz vazia
  const board: Board = Array.from({ length: rows }, (_, r) =>
    Array.from({ length: cols }, (_, c): Cell => ({
      r,
      c,
      isMine: false,
      isRevealed: false,
      isFlagged: false,
      adjacentMines: 0,
    })),
  )

  // sorteia minas
  const set = new Set<number>()
  while (set.size < mines) set.add(Math.floor(Math.random() * total))
  for (const idx of set) {
    const r = Math.floor(idx / cols)
    const c = idx % cols
    board[r][c].isMine = true
  }

  // conta adjacentes
  forEachCell(board, (cell) => {
    if (cell.isMine) return
    cell.adjacentMines = neighbors(board, cell.r, cell.c).filter((n) => n.isMine).length
  })

  return board
}

export function cloneBoard(board: Board): Board {
  return board.map((row) => row.map((c) => ({ ...c })))
}

export function inBounds(board: Board, r: number, c: number) {
  return r >= 0 && r < board.length && c >= 0 && c < board[0].length
}

export function neighbors(board: Board, r: number, c: number): Cell[] {
  const res: Cell[] = []
  for (let dr = -1; dr <= 1; dr++) {
    for (let dc = -1; dc <= 1; dc++) {
      if (dr === 0 && dc === 0) continue
      const rr = r + dr,
        cc = c + dc
      if (inBounds(board, rr, cc)) res.push(board[rr][cc])
    }
  }
  return res
}

export function toggleFlag(board: Board, r: number, c: number): Board {
  const next = cloneBoard(board)
  const cell = next[r][c]
  if (!cell.isRevealed) cell.isFlagged = !cell.isFlagged
  return next
}

/**
 * Revela célula com flood-fill iterativo para zeros.
 * Retorna:
 *  - board: novo tabuleiro
 *  - exploded: true se clicou em mina
 *  - revealedCount: quantas células seguras foram reveladas nesta ação
 */
export function reveal(board: Board, r: number, c: number): {
  board: Board
  exploded: boolean
  revealedCount: number
} {
  const next = cloneBoard(board)
  let revealedCount = 0
  const stack: Array<[number, number]> = [[r, c]]
  let exploded = false

  while (stack.length) {
    const [rr, cc] = stack.pop()!
    if (!inBounds(next, rr, cc)) continue
    const cell = next[rr][cc]
    if (cell.isRevealed || cell.isFlagged) continue

    cell.isRevealed = true
    revealedCount++

    if (cell.isMine) {
      exploded = true
      // não propaga além da mina
      continue
    }

    // se é zero, abre vizinhos
    if (cell.adjacentMines === 0) {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue
          const nr = rr + dr
          const nc = cc + dc
          if (inBounds(next, nr, nc) && !next[nr][nc].isRevealed) {
            stack.push([nr, nc])
          }
        }
      }
    }
  }

  return { board: next, exploded, revealedCount }
}

export function allSafeRevealed(board: Board, mineCount?: number): boolean {
  // versão independente de mineCount
  for (const row of board) for (const c of row) if (!c.isMine && !c.isRevealed) return false
  return true
}

export function flagsLeft(board: Board, totalMines: number) {
  let flags = 0
  forEachCell(board, (c) => (flags += c.isFlagged ? 1 : 0))
  return Math.max(0, totalMines - flags)
}

export function forEachCell(board: Board, fn: (cell: Cell) => void) {
  for (let r = 0; r < board.length; r++) for (let c = 0; c < board[0].length; c++) fn(board[r][c])
}
