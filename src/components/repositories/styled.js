import styled from 'styled-components'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
    display: flex:
    font-size: 2em;
    width: 100%;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 0.3em;
    display: flex;
    margin-top: 1em;
    `
WrapperTabList.tabsRole = "TabList";



export const WrapperTab = styled(Tab)`
    background: #181818;
    color: #939393;
    border-radius: 1em;
    border: 1px solid #939393;
    padding: 1em;
    user-select: none;
    cursor: pointer;
    z-index: 9999;
    margin: 1em;
    
    &:focus {
        outline:none;
    };

    &.is-selected {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-top-right-radius: 1em;
        border-top-left-radius: 1em;
        border-bottom: 1px solid #181818;
    };
`
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    width: 95vw;
    min-height: 400px;
    display: none;
    background: #181818;
    color: #fff;
    padding: 1em;
    border-radius: 10px;
    border: 1px solid #181818;
    box-shadow: 0 0 0.3em rgba(255, 255, 255, 1);
    margin-top: -2.3em;
    margin-left: 0.5em;
    margin-right: -5em;

    &.is-selected {
        display: block;
    }
    
`;

export const WrapperList = styled.div`
    display: flex;
    flex-wrapper: wrap;
    flex-direction: column;
    justify-content: center;
`

WrapperTabPanel.tabsRole = "TabPanel"
