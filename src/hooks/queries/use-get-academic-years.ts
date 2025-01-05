import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "~/constants/query-keys";
import type { AcademicYears } from "~/types/responses/academic-years";
import axios from "~/utils/axios";

const useGetAcademicYears = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.ACADEMIC_YEARS],
    queryFn: () => axios.get<AcademicYears>("api/v1/academic_years"),
  });
};

export default useGetAcademicYears;
