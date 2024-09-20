import { useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions"
import { State } from "../interface";
import { useEffect, useState } from "react";

interface Props {
    state: State,
    selectedLabels: string[],
}
export const useIssues = ({state, selectedLabels}: Props) => {
    console.log(state);

    const [page, setPage] = useState(1);

    const issuesQuery = useQuery({
        queryKey: ['issues', { state, selectedLabels, page  }],
        queryFn: () => getIssues(state, selectedLabels, page),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    useEffect(() => {
        setPage(1);
    }, [state]);

    useEffect(() => {
        setPage(1);
    }, [ selectedLabels]);

    const nextPage = () => {
        if(issuesQuery.data?.length === 0) {
            return;
        }
        setPage(page + 1);
    }

    const previousPage = () => {
        if(page === 1) {
            return;
        }
        setPage(page - 1);

    }

    // console.log(issuesQuery.data);
    return {
        issuesQuery,
        page,
        nextPage,
        previousPage,
    }
}