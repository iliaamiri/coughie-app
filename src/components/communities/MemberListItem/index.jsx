import "./index.css";

const sampleMember = {
    name: "Megan",
    avatar: "src/assets/profileAvatars/atikh-bana-_KaMTEmJnxY-unsplash.jpg",
    o2: 10000,
}

export function MemberListItem({member = sampleMember}) {
    return (
        <div className={'member-item'}>
            <div>
                <img className={'avatar'} src={member.avatar} alt=""/>
                <span>{member.name}</span>
            </div>
            <span className={'o2'}>{member.o2}</span>
        </div>
    );
}