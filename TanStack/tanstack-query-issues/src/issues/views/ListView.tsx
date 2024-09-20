import { useState } from 'react';
import { LoadingSpinner } from '../../shared';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';
import { State } from '../interface';

export const ListView = () => {
  const [state, setState] = useState<State>(State.All);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const { issuesQuery, page, nextPage, previousPage } = useIssues({
    state: state,
    selectedLabels,selectedLabels,
  });
  const issues = issuesQuery.data ?? [];

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
          (<>
            <IssueList issues={ issues } onStateChange={ setState } state = { state } /> 
            <div className="flex justify-center items-center">
              <button
                onClick={previousPage}
                className='p-2 bg-blue rounded-md hover:bg-blue-700 transition-all'
                >
                  Anterior
              </button>

              <span className="">{page}</span>

              <button
                onClick={nextPage}
                className='p-2 bg-blue rounded-md hover:bg-blue-700 transition-all'
                >
                  Siguiente
              </button>

            </div>
          </>
          )}
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker selectedLabels={selectedLabels} onLabelSelected = { onLabelSelected} />
      </div>
    </div>
  );
};
