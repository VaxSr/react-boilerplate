import { useQuery } from "@tanstack/react-query";
import { get } from "./api";

const useGet = () => {
  return useQuery({
    queryKey: ["get-"],
    queryFn: async () => get(),
    staleTime: Infinity,
  });
};

export { useGet };
