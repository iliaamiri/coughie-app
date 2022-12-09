import "./index.css";
import {SearchBar} from "../../components/communities/SearchBar/index.jsx";
import {GroupBubble} from "../../components/communities/GroupBubble/index.jsx";
import {useEffect, useState} from "preact/hooks";
import {GroupBubbleModal} from "../../components/communities/GroupBubbleModal";
import {UserActionsContext} from "../../lib/contexts";
import {Button} from "../../components/communities/Buttons/index.jsx";
import * as groupService from "../../lib/services/group.service.js";
import * as userService from "../../lib/services/user.service.js";
import * as mockExperienceService from "../../lib/services/mockExperience.service.js";
import {useUser} from "../../lib/hooks/useUser.jsx";

const communitySizeToClassName = (size) => {
    if (size < 5) {
        return 'small';
    } else if (size < 10) {
        return 'medium';
    } else {
        return 'large';
    }
}

const Communities = () => {
    const [user] = useUser();
    const [currentOpenGroup, setCurrentOpenGroup] = useState(null);

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

        setCommunitiesList(groupService.findAllGroups().map(g => {
            g.isSearchMatch = true;
            return g;
        }));

        return () => {
            document.querySelector('body').removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSearchSubmit = () => {
        console.log("search submitted");
    };
    const handleSearchBarChange = (value) => {
        setCommunitiesList((currentCommunity) => {
            if (value.length < 1) {
                return [...currentCommunity.map(g => {
                    g.isSearchMatch = true;
                    return g;
                })];
            }
            const shadowed = [...currentCommunity];
            return shadowed.map((community) => {
                community.name.toLowerCase().includes(value.toLowerCase()) ? community.isSearchMatch = true : community.isSearchMatch = false;
                return community;
            });
        });
    };

    const handleJoinChatRoom = (group) => {
        userService.joinGroup({groupId: group.id});
        window.location.href = "/communities/chat/" + group.id;
    };
    const handleViewChatRoom = (group) => {
        setCurrentOpenGroup(group);
    };

    const handleLoadMore = () => {
        // seed more communities
        const generatedGroups = mockExperienceService.seedRandomGroups(10).map(g => {
            g.isSearchMatch = true;
            return g;
        });
        setCommunitiesList([...communitiesList, ...generatedGroups]);
    }

    return (
        <>
            {currentOpenGroup &&
                <GroupBubbleModal onClose={() => setCurrentOpenGroup(null)} onJoin={handleJoinChatRoom}
                                  group={currentOpenGroup}/>}
            <header className={'communities'}>
                <h1 className={'communities-page-title'}><span>Community</span></h1>
                <SearchBar isShown={shouldSearchBarAppear} onSearchSubmit={handleSearchSubmit}
                           onSearchBarChange={handleSearchBarChange}/>
            </header>
            <main className={'communities-bubble-container'}>
                <UserActionsContext.Provider value={{
                    onJoin: handleJoinChatRoom, onView: handleViewChatRoom
                }}>
                    {
                        communitiesList === null ? (
                            <div>Loading...</div>
                        ) : communitiesList.filter(g => g.isSearchMatch).map((group, index) => (
                            <GroupBubble group={group} size={communitySizeToClassName(group.membersIds.length)}
                                         isAnimated={index % 2 !== 0}/>
                        ))
                    }
                    <div className={'load-more-button-container'}>
                        <Button customClassNames={'load-more-button'} type={"primary"} size={"x-large"}
                                onClick={() => handleLoadMore()}>Load More</Button>
                    </div>
                </UserActionsContext.Provider>
            </main>
        </>
    );
}
export default Communities;
