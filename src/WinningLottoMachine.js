import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
import Validator from './utils/Validator.js';
import WinningLotto from './WinningLotto.js';
import { PRINT_MESSAGES, ERROR_MESSAGES } from './constants/messages.js';
import REGEX from './constants/regex.js';

class WinningLottoMachine {
  static async createWinningLotto() {
    const winningLotto = await WinningLottoMachine.#getValidWinningLotto();
    await WinningLottoMachine.#setValidBonusNums(winningLotto);
    return winningLotto;
  }

  static async #getValidWinningLotto() {
    while (true) {
      try {
        const winningNumbers = await InputView.getUserInput(PRINT_MESSAGES.INPUT.WINNING_NUMBERS);
        const validNumbers = WinningLottoMachine.#validateWinningNumbers(winningNumbers);
        return new WinningLotto(validNumbers);
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  static async #setValidBonusNums(winningLotto) {
    while (true) {
      try {
        const bonusNumber = await InputView.getUserInput(PRINT_MESSAGES.INPUT.BONUS_NUMBER);
        WinningLottoMachine.#validateBonusNumber(bonusNumber);
        winningLotto.setBonusNumber(parseInt(bonusNumber, 10));
        return;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  static #validateWinningNumbers(winningNumbers) {
    Validator.checkIsNull(winningNumbers);
    Validator.checkRegexPattern(
      winningNumbers,
      REGEX.NUMBER_AND_COMMA_REGEX,
      ERROR_MESSAGES.INVALID_WINNING_NUMBER_INPUT,
    );
    return winningNumbers.split(',');
  }

  static #validateBonusNumber(bonusNumber) {
    Validator.checkIsNull(bonusNumber);
    Validator.checkRegexPattern(
      bonusNumber,
      REGEX.NUMBER_REGEX,
      ERROR_MESSAGES.INVALID_BONUS_NUMBER_INPUT,
    );
  }
}

export default WinningLottoMachine;
