export interface RSVPWord {
  original: string;
  left: string;
  pivot: string;
  right: string;
  delayMod: number;
}

export class RSVPEngine {
  private words: RSVPWord[] = [];
  private wpm = 300;
  private isPlaying = false;
  private currentIndex = 0;
  private lastFrameTime = 0;
  private accumulatedTime = 0;
  private onWordUpdate: (word: RSVPWord) => void;
  private onComplete: () => void;
  private rafId: number | null = null;

  constructor(onWordUpdate: (word: RSVPWord) => void, onComplete: () => void) {
    this.onWordUpdate = onWordUpdate;
    this.onComplete = onComplete;
  }

  setText(text: string): void {
    this.words = text.trim().split(/\s+/).filter(Boolean).map((w) => this.processWord(w));
    this.currentIndex = 0;
  }

  setWPM(wpm: number): void {
    this.wpm = wpm;
  }

  play(): void {
    if (this.isPlaying) return;
    if (this.currentIndex >= this.words.length) this.currentIndex = 0;
    this.isPlaying = true;
    this.lastFrameTime = performance.now();
    this.accumulatedTime = 0;
    this.tick();
  }

  pause(rewind = true): void {
    this.isPlaying = false;
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    if (rewind) this.currentIndex = Math.max(0, this.currentIndex - 5);
    this.showCurrentWord();
  }

  seek(pct: number): void {
    if (!this.words.length) return;
    this.currentIndex = Math.floor(this.words.length * (pct / 100));
    this.showCurrentWord();
  }

  getProgress(): number {
    if (!this.words.length) return 0;
    return (this.currentIndex / this.words.length) * 100;
  }

  private showCurrentWord(): void {
    const word = this.words[this.currentIndex];
    if (word) this.onWordUpdate(word);
  }

  private calcDelayMod(word: string): number {
    const lastChar = word[word.length - 1] ?? '';
    if ('.?!'.includes(lastChar)) return 2.5;
    if (',;:'.includes(lastChar)) return 2.0;
    if (word.length > 12) return 1.5;
    return 1;
  }

  private processWord(word: string): RSVPWord {
    const len = word.length;
    const pivotIndex = len <= 1 ? 0 : Math.min(Math.ceil((len - 1) * 0.35), len - 1);
    return {
      original: word,
      left: word.slice(0, pivotIndex),
      pivot: word[pivotIndex] ?? '',
      right: word.slice(pivotIndex + 1),
      delayMod: this.calcDelayMod(word),
    };
  }

  private tick = (): void => {
    if (!this.isPlaying) return;
    const now = performance.now();
    this.accumulatedTime += now - this.lastFrameTime;
    this.lastFrameTime = now;
    const baseInterval = 60000 / this.wpm;
    const currentWord = this.words[this.currentIndex];
    const targetDuration = baseInterval * (currentWord?.delayMod ?? 1);
    if (this.accumulatedTime >= targetDuration) {
      this.accumulatedTime -= targetDuration;
      this.currentIndex++;
      if (this.currentIndex >= this.words.length) {
        this.isPlaying = false;
        this.onComplete();
        return;
      }
      this.showCurrentWord();
    }
    this.rafId = requestAnimationFrame(this.tick);
  };
}
