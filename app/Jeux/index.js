import { Tetris } from "./tetris.js";
import { GameConfig } from "./piece.js";

const tetris = new Tetris();

window.TETRIS_CONFIG = GameConfig;
window.Tetris = {
  start: () => tetris.start(window.TETRIS_CONFIG),
  stop: () => tetris.stop(),
  restart: () => {
    tetris.stop();
    tetris.start(window.TETRIS_CONFIG);
  },
  pause: () => tetris.pause(),
  continue: () => tetris.continue(),
};
