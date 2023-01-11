import { ITransportLine } from "../types/api";

export const getLineNumber = (collection: ITransportLine[], routeId: number) => {
  const foundRoute = collection.find(route => route.routeId === routeId);
  return foundRoute?.routeShortName;
};
