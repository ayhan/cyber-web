import API from "@/service/middleware";
import useSWR from "swr";
import { IVulnerability } from "@/types/vulnerability";
import { AxiosResponse } from "axios";

interface IUseVulnerabilities {
  AddNewVulnerability: (body: IVulnerability) => Promise<AxiosResponse>;
  vulnerabilities: IVulnerability[] | undefined;
  DeleteVulnerability: (id: number) => Promise<AxiosResponse>;
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

  const DeleteVulnerability = async (id: number | undefined) => {
    try {
      const response = await API.delete(`/api/vulnerability/${id}`);
      GetVulnerabilities();
      return response;
    } catch (error: any) {
      console.log(error);
      return error.response;
    }
  };

  return { AddNewVulnerability, DeleteVulnerability, vulnerabilities };
};

export default useVulnerabilities;
