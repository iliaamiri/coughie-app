import "./index.css";

export function MemberListItem({member}) {
    return (
        <div className={'member-item'}>
            <div>
                <img className={'avatar'} src={member.imageUrl ?? '/assets/profileAvatars/default.jpg'} alt=""/>
                <span>{member.uname}</span>
            </div>
            <span className={'o2'}>{member.o2} O2</span>
        </div>
    );
}