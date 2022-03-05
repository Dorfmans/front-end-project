import React, { useEffect } from "react";
import useGithub from '../../hooks/github-hooks'
import * as S from './styled'


const Profile = () => {

    const { githubState } = useGithub()

        useEffect(() => {
            console.log(githubState.user);
        }, [githubState.user])

    return (
        <S.Wrapper>
            <S.WrapperImage src={githubState.user.avatar} alt="Avatar do Usuário">
            </S.WrapperImage>
            <S.WrapperUserInfo>
                <h1>{githubState.user.name}</h1>
                <S.WrapperUserName>
                    <a 
                    rel="noreferrer"
                    href={githubState.user.html_url} target="_blank">{githubState.user.login}
                    </a>
                </S.WrapperUserName>
                <br></br>
                <S.WrapperUserName>
                    <h3>Location:  {githubState.user.location}</h3>
                </S.WrapperUserName>
                <S.WrapperUserName>
                    <h3>Blog:</h3>
                    <a 
                    rel="noreferrer"
                    href={githubState.user.blog} target="_blank">{githubState.user.blog}
                    </a>
                </S.WrapperUserName>
            <S.WrapperStatusCount>
                <div>
                    <h4>Followers</h4>
                    <span>{githubState.user.followers}</span>
                </div>
                <div>
                    <h4>Following</h4>
                    <span>{githubState.user.following}</span>
                </div>
                <div>
                    <h4>Repos</h4>
                    <span>{githubState.user.public_repos}</span>
                </div>
            </S.WrapperStatusCount>
            </S.WrapperUserInfo>
        </S.Wrapper>
    )
}

export default Profile