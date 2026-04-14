export interface PasswordGeneratorUI extends Record<string, string> {
  generating: string;
  labelSecurity: string;
  labelLength: string;
  strengthWeak: string;
  strengthFair: string;
  strengthGood: string;
  strengthStrong: string;
  strengthUnbreakable: string;
  optionUppercase: string;
  optionLowercase: string;
  optionNumbers: string;
  optionSymbols: string;
  copyTitle: string;
  regenerateTitle: string;
}
