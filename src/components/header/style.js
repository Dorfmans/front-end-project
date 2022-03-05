import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    input {
        text-align: center;
        font-size 1em;
        width: 90vw;
        height: 60px;
        background: #181818;
        margin 0.5em;
        border-radius: 1em;
        border: 2px solid #939393;
        color: #939393;
        
    }
    button {
        font-size: 1em;
        font-weight: bold;
        width: 8vw;
        height: 60px;
        background: #181818;
        margin 0.5em;
        border-radius: 1em;
        border: 2px solid #939393;

        &:hover {
            background-color: #939393;
            color: #181818;
        }
    }

`