import { useState } from "react";
import API from "@/service/middleware";
import useSWR from "swr";
import { IVulnerability } from "@/types/vulnerability";
import { AxiosResponse } from "axios";

interface IUseVulnerabilities {
  AddNewVulnerability: (body: IVulnerability) => Promise<AxiosResponse>;
  vulnerabilities: IVulnerability[] | undefined;
}

const useVulnerabilities = (): IUseVulnerabilities => {
  const {
    data: vulnerabilities,
    error,
    isLoading,
    mutate: GetVulnerabilities,
  } = useSWR("/api/vulnerabilities");

  const AddNewVulnerability = async (body: IVulnerability) => {
    try {
      const response = await API.post("/api/vulnerability", body);
      GetVulnerabilities();
      return response;
    } catch (error: any) {
      console.log(error);
      return error.response;
    }
  };

  return { AddNewVulnerability, vulnerabilities };
};

export default useVulnerabilities;
