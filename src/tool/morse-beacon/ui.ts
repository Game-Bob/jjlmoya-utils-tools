export interface MorseBeaconUI extends Record<string, string> {
  labelMessage: string;
  placeholder: string;
  btnTransmit: string;
  btnSosLoop: string;
  btnStop: string;
  labelTorch: string;
  statusStandby: string;
  statusTransmitting: string;
  statusStopping: string;
  statusWaiting: string;
  statusReady: string;
  statusNoTorch: string;
  statusNoPermission: string;
  statusNotSupported: string;
  statusReqHttps: string;
  statusSending: string;
}
