import React, { useEffect, useState } from 'react';
import RepositoryItem from '../repository-item';
import useGithub from '../../hooks/github-hooks'

import * as S from './styled'


const Repositories = () => {

  const { githubState, getUserRepos, getUserStarred} = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

  useEffect(() => {
    if (githubState.user.login)
    {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    setHasUserForSearchRepos(githubState.repositories)
  }, [githubState.user])
  
  return (
    <>
    {hasUserForSearchRepos ? (
      <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'>
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <S.WrapperList>
        {githubState.repositories.map((item) => (
          <RepositoryItem 
          key={item.id}
          name={item.name} 
          fullName={item.full_name}
          linkToRepo={item.full_name} />
          ))
        }
        </S.WrapperList>
      </S.WrapperTabPanel>
   <S.WrapperTabPanel>
        <S.WrapperList>
        {githubState.starred.map((item) => (
          <RepositoryItem 
          key={item.id}
          name={item.name} 
          fullName={item.full_name}
          linkToRepo={item.full_name} />
          ))
        }
        </S.WrapperList>
      </S.WrapperTabPanel>
    </S.WrapperTabs>) : ( <> </> )} 
    </>
  )
}
export default Repositories;