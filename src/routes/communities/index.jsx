import "./index.css";
import {SearchBar} from "../../components/communities/SearchBar/index.jsx";
import {GroupBubble} from "../../components/communities/GroupBubble/index.jsx";
import {useEffect, useState} from "preact/hooks";
import {GroupBubbleModal} from "../../components/communities/GroupBubbleModal";
import {UserActionsContext} from "../../lib/contexts";
import {Button} from "../../components/communities/Buttons/index.jsx";

const Communities = () => {
    const [currentOpenGroupId, setCurrentOpenGroupId] = useState(null);

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
        window.location.href = "/communities/chat/" + groupId;
    };
    const handleViewChatRoom = ({ groupId }) => {
        console.log(`Viewing Group Chat #${groupId}`)
        setCurrentOpenGroupId(groupId);
    };

    return (
        <>
            {currentOpenGroupId && <GroupBubbleModal onClose={() => setCurrentOpenGroupId(null)} onJoin={handleJoinChatRoom} groupId={currentOpenGroupId}/>}
            <header className={'communities'}>
                <h1 className={'communities-page-title'}><span>Community</span></h1>
                <SearchBar isShown={shouldSearchBarAppear} onSearchSubmit={handleSearchSubmit} onSearchBarChange={handleSearchBarChange}/>
            </header>
            <main className={'communities-bubble-container'}>
                <UserActionsContext.Provider value={{
                    onJoin: handleJoinChatRoom, onView: handleViewChatRoom
                }}>
                    <GroupBubble groupId={"ascrk"} size={'large'} isAnimated={true} />
                    <GroupBubble groupId={"asdasdfg"} size={'small'} />
                    <GroupBubble groupId={"friekdl"} size={'small'} isAnimated={true} />
                    <GroupBubble groupId={"dapofj03dklsj"} size={'large'} />
                    <GroupBubble groupId={"fklasd"} size={'medium'} isAnimated={true} />
                    <GroupBubble size={'medium'} />
                    <GroupBubble size={'medium'} isAnimated={true} />
                    <GroupBubble size={'small'} isAnimated={true} />
                    <GroupBubble size={'small'} isAnimated={true} />
                    <GroupBubble size={'small'} isAnimated={true} />
                    <GroupBubble size={'small'} isAnimated={true} />
                    <Button customClassNames={'load-more-button'} type={"primary"} size={"x-large"}>Load More</Button>
                </UserActionsContext.Provider>
            </main>
        </>
    );
}
export default Communities;
