export type MorseSignal = '.' | '-' | ' ';

export const MORSE_DICTIONARY: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....',
  I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.',
  Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-',
  Y: '-.--', Z: '--..',
  '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
  '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--',
  '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...',
  ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', _: '..--.-',
  '"': '.-..-.', $: '...-..-', '@': '.--.-.',
};

export type MorseBitType = 'dot' | 'dash' | 'gap' | 'charSpace' | 'wordSpace';

export class MorseBit {
  type: MorseBitType;
  duration: number;
  isActive: boolean;

  constructor(type: MorseBitType, unit: number) {
    this.type = type;
    this.isActive = type === 'dot' || type === 'dash';

    const durations: Record<MorseBitType, number> = {
      dot: unit, dash: unit * 3, gap: unit, charSpace: unit * 3, wordSpace: unit * 7,
    };
    this.duration = durations[type];
  }
}

export class MorseEngine {
  private unit: number;
  private isPlaying = false;
  private stopSignal = false;
  private onStateChange: (active: boolean, bit: MorseBit | null) => void;

  constructor(wpm = 15, onStateChange: (active: boolean, bit: MorseBit | null) => void) {
    this.unit = 1200 / wpm;
    this.onStateChange = onStateChange;
  }

  static textToMorse(text: string): string {
    return text.toUpperCase().split('').map((char) => {
      if (char === ' ') return '/';
      return MORSE_DICTIONARY[char] ?? '?';
    }).join(' ');
  }

  private static compileCharBits(bits: string[], unit: number, addSpace: boolean): MorseBit[] {
    const result: MorseBit[] = [];
    for (let j = 0; j < bits.length; j++) {
      const bit = bits[j];
      if (bit === '.') result.push(new MorseBit('dot', unit));
      if (bit === '-') result.push(new MorseBit('dash', unit));
      if (j < bits.length - 1) result.push(new MorseBit('gap', unit));
    }
    if (addSpace) result.push(new MorseBit('charSpace', unit));
    return result;
  }

  static compileSequence(text: string, wpm: number): MorseBit[] {
    const unit = 1200 / wpm;
    const sequence: MorseBit[] = [];
    const normalized = text.toUpperCase();

    for (let i = 0; i < normalized.length; i++) {
      const char = normalized[i];
      if (!char) continue;

      if (char === ' ') {
        sequence.push(new MorseBit('wordSpace', unit));
        continue;
      }

      const code = MORSE_DICTIONARY[char];
      if (!code) continue;

      const nextChar = normalized[i + 1];
      const addSpace = i < normalized.length - 1 && nextChar !== ' ';
      sequence.push(...MorseEngine.compileCharBits(code.split(''), unit, addSpace));
    }

    return sequence;
  }

  stop() { this.stopSignal = true; }

  private async playBit(bit: MorseBit): Promise<void> {
    this.onStateChange(bit.isActive, bit);
    if (bit.isActive && navigator.vibrate) navigator.vibrate(bit.duration);
    await this.wait(bit.duration);
    if (bit.isActive) this.onStateChange(false, null);
  }

  private async playOnce(sequence: MorseBit[]): Promise<void> {
    for (const bit of sequence) {
      if (this.stopSignal) break;
      await this.playBit(bit);
    }
  }

  async transmit(sequence: MorseBit[], loop = false): Promise<void> {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.stopSignal = false;

    do {
      await this.playOnce(sequence);
      if (loop && !this.stopSignal) await this.wait(this.unit * 7);
    } while (loop && !this.stopSignal);

    this.isPlaying = false;
    this.onStateChange(false, null);
  }

  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  isActive(): boolean { return this.isPlaying; }
}
