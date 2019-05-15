import {List, Stack} from 'immutable';

enum SquareStates {
  Empty,
  Cross,
  Circle
}

enum GameState {
  Idle,
  WinPlayerO,
  WinPlayerX
}

enum Messages {
  SetSquare,
  Reset
}

export interface WinPlayerO {
  kind: GameState.WinPlayerO
}

export interface WinPlayerX {
  kind: GameState.WinPlayerX
}

export interface SetSquare {
  kind: Messages.SetSquare,
  player: SquareStates,
  coords: [number, number]
}

export interface Reset {
  kind: Messages.Reset
}

export class Game {
  state: GameState
}

export class Board {
  squares: List<SquareStates>
}

export class BoardHistory {
  history: Stack<Board>
}
