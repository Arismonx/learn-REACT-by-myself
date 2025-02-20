import Panel from './Panel';
import { getImageURL } from './utils';

export default function Profile_1({ person }: { person: any }) {
    return (
        <Panel>
            <Header person={person} />
            <Avatar person={person} />
        </Panel>
    )
}

function Header({ person }:{person:any}) {
    return <h1>{person.name}</h1>;
}

function Avatar({ person }:{person:any}) {
    return (
        <img
            className="avatar"
            src={getImageURL({person})}
            alt={person.name}
            width={50}
            height={50}
        />
    );
}