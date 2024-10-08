export interface IZapReports {
  "@programName": string;
  "@version": string;
  "@generated": string;
  site: IZapSiteData[];
}

export interface IZapSiteData {
  "@name": string;
  "@host": string;
  "@port": string;
  "@ssl": string;
  alerts: IZapAlertData[];
}

export interface IZapAlertData {
  pluginid: string;
  alertRef: string;
  alert: string;
  name: string;
  riskcode: string;
  confidence: string;
  riskdesc: string;
  desc: string;
  instances: IZapAlertInstanceData[];
  count: string;
  solution: string;
  otherinfo: string;
  reference: string;
  cweid: string;
  wascid: string;
  sourceid: string;
}

export interface IZapAlertInstanceData {
  uri: string;
  method: string;
  param: string;
  attack: string;
  evidence: string;
  otherinfo: string;
}
