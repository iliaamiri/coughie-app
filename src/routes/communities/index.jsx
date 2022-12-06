import {SearchBar} from "../../components/communities/SearchBar/index.jsx";
import "./index.css";
import {GroupBubble} from "../../components/communities/GroupBubble/index.jsx";

const Communities = () => {
    const handleSearchSubmit = () => {

    };
    const handleSearchBarChange = (value) => {

    };

    return (
        <>
            <header className={'communities'}>
                <h1 className={'communities-page-title'}><span>Community</span></h1>
                <SearchBar onSearchSubmit={handleSearchSubmit} onSearchBarChange={handleSearchBarChange}/>
            </header>
            <main className={'communities-bubble-container'}>
                <GroupBubble size={'large'} isAnimated={true} />
                <GroupBubble size={'small'} />
                <GroupBubble size={'small'} isAnimated={true} />
                <GroupBubble size={'large'} />
                <GroupBubble size={'medium'} isAnimated={true} />
                <GroupBubble size={'medium'} />
                <GroupBubble size={'medium'} isAnimated={true} />
            </main>
        </>
    );
}
export default Communities;
