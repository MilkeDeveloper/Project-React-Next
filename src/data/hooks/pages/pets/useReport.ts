import { useEffect, useState } from "react";
import { Report } from "../../../@types/Report";
import { ApiService } from "../../../services/ApiService";

export function useReport() {
    const [ReportList, setReportList] = useState<Report[]>([]);

    useEffect(() => {
        ApiService.get('/adocoes').then((response) => {
            setReportList(response.data);
        })

    }, [])

    return {
        ReportList
    } 
}