import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    color: #fff;
    
`
export const WrapperUserInfo = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 20vh;
    h1{
        font-size: 3em;
        font-weight: bold;
    }

    h3{
        font-size: 1.5em;
    }

    h4{
        font-size: 1.5em;
    }

    a{
        font-size: 1.2em;
        color: #939393;
        font-style: italic;
        margin-bottom: 0.2em;
        
    }
`;
export const WrapperUserName = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    h3 {
        margin-right: 0.5em;
    }
`;
export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    div {
        margin: 2vh;
        text-align:center;
        
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    margin: 2vh 2vw;
    
`;   