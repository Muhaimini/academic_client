import { useQuery } from "@tanstack/react-query";
import axios from "~/utils/axios";

const useGetAcademicYears = () => {
  return useQuery({
    queryKey: ["academic-years"],
    queryFn: () => axios.get("api/v1/academic_years"),
  });
};

export default useGetAcademicYears;
