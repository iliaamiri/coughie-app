import "./index.css";
import {SearchBar} from "../../components/communities/SearchBar/index.jsx";
import {GroupBubble} from "../../components/communities/GroupBubble/index.jsx";
import {useEffect, useState} from "preact/hooks";
import {GroupBubbleModal} from "../../components/communities/GroupBubbleModal";

const Communities = () => {
    const [currentOpenGroupId, setCurrentOpenGroupId] = useState("some-id");

    const [communitiesList, setCommunitiesList] = useState(null);

    const [shouldSearchBarAppear, setShouldSearchBarAppear] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            let scrollValue = document.querySelector('body').scrollTop;
            if (scrollValue > 100) {
                setShouldSearchBarAppear(false);
            } else {
                setShouldSearchBarAppear(true);
            }
        };
        document.querySelector('body').addEventListener('scroll', handleScroll);
        return () => {
            document.querySelector('body').removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearchSubmit = () => {

    };
    const handleSearchBarChange = (value) => {

    };

    const handleJoinChatRoom = ({ groupId }) => {
        console.log(`Joining Group Chat #${groupId}`)
    }

    return (
        <>
            {currentOpenGroupId && <GroupBubbleModal onClose={() => setCurrentOpenGroupId(null)} onJoin={handleJoinChatRoom} groupId={currentOpenGroupId}/>}
            <header className={'communities'}>
                <h1 className={'communities-page-title'}><span>Community</span></h1>
                <SearchBar isShown={shouldSearchBarAppear} onSearchSubmit={handleSearchSubmit} onSearchBarChange={handleSearchBarChange}/>
            </header>
            <main className={'communities-bubble-container'}>
                <GroupBubble size={'large'} isAnimated={true} />
                <GroupBubble size={'small'} />
                <GroupBubble size={'small'} isAnimated={true} />
                <GroupBubble size={'large'} />
                <GroupBubble size={'medium'} isAnimated={true} />
                <GroupBubble size={'medium'} />
                <GroupBubble size={'medium'} isAnimated={true} />
                <GroupBubble size={'small'} isAnimated={true} />
                <GroupBubble size={'small'} isAnimated={true} />
                <GroupBubble size={'small'} isAnimated={true} />
                <GroupBubble size={'small'} isAnimated={true} />
            </main>
        </>
    );
}
export default Communities;
