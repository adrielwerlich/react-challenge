import React, {useMemo} from 'react';
import { useSelector } from 'react-redux';
import { getHighlightedName } from '../service/utils';
import './Highlight.css';

function HighlightedNames() {
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.lastName);

  const firstHighlightHtml = useMemo(() => <span dangerouslySetInnerHTML={{ __html:  getHighlightedName(firstName) }} />, [firstName]);
  const lastHighlightHtml = useMemo(() => <span dangerouslySetInnerHTML={{ __html: getHighlightedName(lastName) }} />, [lastName]);

  return (
    <div>
      <h1>{firstHighlightHtml}</h1>
      <h1>{lastHighlightHtml}</h1>
    </div>
  )
}

export default HighlightedNames;