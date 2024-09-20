import { useState } from 'react';
import { LoadingSpinner } from '../../shared';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { State } from '../interface';
import { useIssuesInfinite } from '../hooks/useIssuesInfinite';

export const ListViewInfinite = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const { issuesQuery } = useIssuesInfinite({
    state: state,
    selectedLabels,selectedLabels,
  });
  const issues = issuesQuery.data?.pages.flat() ?? [];

  const onLabelSelected = (label : string) => {
      if(selectedLabels.includes(label)){
        setSelectedLabels( selectedLabels.filter( (l) => l !== label ) );
      }else{
          setSelectedLabels([ ...selectedLabels, label ]);
      }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        { issuesQuery.isLoading ?
         <LoadingSpinner /> : 
          (<div className='flex flex-col justify-center'>
            <IssueList issues={ issues } onStateChange={ setState } state = { state } /> 
            

              <button
                onClick={ () => issuesQuery.fetchNextPage() }
                disabled={ !issuesQuery.hasNextPage || issuesQuery.isFetchingNextPage }
                className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all disabled:bg-gray-500'
                >
                  { issuesQuery.isFetchingNextPage ? 'Cargando...' : 'Cargar más'}
                  
              </button>

            
          </div>
          )}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker selectedLabels={selectedLabels} onLabelSelected = { onLabelSelected} />
      </div>
    </div>
  );
};
