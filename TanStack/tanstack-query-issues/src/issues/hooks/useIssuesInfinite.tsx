import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getIssues } from "../actions"
import { State } from "../interface";


interface Props {
    state: State,
    selectedLabels: string[],
}
export const useIssuesInfinite = ({state, selectedLabels}: Props) => {
    console.log(state);


    const issuesQuery = useInfiniteQuery({
        queryKey: ['issues', 'infinite', { state, selectedLabels }],
        queryFn: ({ pageParam, queryKey} ) => {
            const [,,args] = queryKey;
            const { state, selectedLabels } = args as Props;

            return getIssues(state, selectedLabels, pageParam)
        },
        staleTime: 1000 * 60 * 60, // 1 hour
        initialPageParam: 1,
        getNextPageParam: ( lastPage, pages ) => 
            lastPage.length > 0 ? pages.length + 1 : undefined
    });

    // console.log(issuesQuery.data);
    return {
        issuesQuery,
    }
}