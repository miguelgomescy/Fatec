export type CellType = {
  isMine: boolean
  isRevealed: boolean
  isFlagged: boolean
  adjacentMines: number
}

export function createBoard(rows: number, cols: number, mineCount: number): CellType[][] {
  // Initialize empty board
  const board: CellType[][] = Array(rows)
    .fill(null)
    .map(() =>
      Array(cols)
        .fill(null)
        .map(() => ({
          isMine: false,
          isRevealed: false,
          isFlagged: false,
          adjacentMines: 0,
        })),
    )

  // Place mines randomly
  let minesPlaced = 0
  while (minesPlaced < mineCount) {
    const row = Math.floor(Math.random() * rows)
    const col = Math.floor(Math.random() * cols)

    if (!board[row][col].isMine) {
      board[row][col].isMine = true
      minesPlaced++
    }
  }

  // Calculate adjacent mines for each cell
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (!board[row][col].isMine) {
        board[row][col].adjacentMines = countAdjacentMines(board, row, col)
      }
    }
  }

  return board
}

function countAdjacentMines(board: CellType[][], row: number, col: number): number {
  const rows = board.length
  const cols = board[0].length
  let count = 0

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue

      const newRow = row + i
      const newCol = col + j

      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        if (board[newRow][newCol].isMine) {
          count++
        }
      }
    }
  }

  return count
}

export function revealCell(board: CellType[][], row: number, col: number): CellType[][] {
  const newBoard = board.map((row) => row.map((cell) => ({ ...cell })))

  if (newBoard[row][col].isRevealed || newBoard[row][col].isFlagged) {
    return newBoard
  }

  newBoard[row][col].isRevealed = true

  // If cell has no adjacent mines, reveal adjacent cells recursively
  if (newBoard[row][col].adjacentMines === 0 && !newBoard[row][col].isMine) {
    const rows = board.length
    const cols = board[0].length

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue

        const newRow = row + i
        const newCol = col + j

        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          if (!newBoard[newRow][newCol].isRevealed) {
            const recursiveBoard = revealCell(newBoard, newRow, newCol)
            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                newBoard[r][c] = recursiveBoard[r][c]
              }
            }
          }
        }
      }
    }
  }

  return newBoard
}

export function toggleFlag(board: CellType[][], row: number, col: number): CellType[][] {
  const newBoard = board.map((row) => row.map((cell) => ({ ...cell })))
  newBoard[row][col].isFlagged = !newBoard[row][col].isFlagged
  return newBoard
}

export function checkWin(board: CellType[][], mineCount: number): boolean {
  let revealedCount = 0
  const totalCells = board.length * board[0].length

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[row][col].isRevealed) {
        revealedCount++
      }
    }
  }

  return revealedCount === totalCells - mineCount
}
