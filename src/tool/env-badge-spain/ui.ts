export interface EnvBadgeSpainUI extends Record<string, string> {
  step1Label: string;
  vehicleCar: string;
  vehicleMoto: string;
  vehicleHeavy: string;
  errVehicle: string;

  step2Label: string;
  fuelElectric: string;
  fuelPhevHigh: string;
  fuelPhevLow: string;
  fuelHybridGas: string;
  fuelGasoline: string;
  fuelDiesel: string;
  errFuel: string;

  step3Label: string;
  yearPre2000: string;
  year20002005: string;
  year20062013: string;
  yearPost2014: string;
  errYear: string;
  helpText: string;

  submitBtn: string;

  resultTitle: string;

  badge0Label: string;
  badge0Letter: string;
  badge0Sub: string;
  badge0Desc: string;

  badgeEcoLabel: string;
  badgeEcoLetter: string;
  badgeEcoDesc: string;

  badgeCLabel: string;
  badgeCLetter: string;
  badgeCDesc: string;

  badgeBLabel: string;
  badgeBLetter: string;
  badgeBDesc: string;

  badgeALabel: string;
  badgeALetter: string;
  badgeASub: string;
  badgeADesc: string;

  warningText: string;
  resetBtn: string;
}
