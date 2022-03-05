import React from 'react';
import * as S from './styled'

const RepositoryItem = ({name, fullName, linkToRepo}) => {
  return (
  <S.Item>
    <br></br>
    <br></br>
    <br></br>
    <h2>{name}</h2>
    <br></br>
    <h4>Link:</h4>
    <a
        rel="noreferrer"
        href={linkToRepo} 
        target="_blank">
        {fullName}
    </a>
    <br></br>
    <br></br>
    <br></br>
</S.Item>

  );
}

export default RepositoryItem;