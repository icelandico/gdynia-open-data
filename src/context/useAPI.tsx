import React, { useContext } from "react";
import { APIContext } from "./Provider";

export function useAPI() {
  const context = useContext(APIContext);

  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
