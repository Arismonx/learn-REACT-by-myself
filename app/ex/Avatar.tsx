import { getImageURL } from './utils'


function Profile({
    person,
    imageSize = 70
}: {
    person: {
        imageId: string
        name: string
        profession: string
        awards: string[]
        discovery: string
    }
    imageSize?: number
}) {
    const imageSrc = getImageURL({person});
    return (
        <>
            <section className="profile" >
                <h2>{person.name}</h2>
                <img
                    className="avatar"
                    src={imageSrc}
                    alt={person.name}
                    width={imageSize}
                    height={imageSize}
                />
                <ul>
                    <li><b>Profession:</b> {person.profession}</li>
                    <li>
                        <b>Awards: {person.awards.length} </b>
                        ({person.awards.join(', ')})
                    </li>
                    <li>
                        <b>Discovered: </b>
                        {person.discovery}
                    </li>
                </ul>
            </section>
        </>
    );

}
export default function Avatar() {
    return (
        <>
            <h1>Notable Scientists</h1>
            <Profile person={{
                imageId: 'szV5sdG',
                name: 'Maria Skłodowska-Curie',
                profession: 'physicist and chemist',
                discovery: 'polonium (chemical element)',
                awards: [
                    'Nobel Prize in Physics',
                    'Nobel Prize in Chemistry',
                    'Davy Medal',
                    'Matteucci Medal'
                ],
            }} />
            <Profile person={{
                imageId: 'YfeOqp2',
                name: 'Katsuko Saruhashi',
                profession: 'geochemist',
                discovery: 'a method for measuring carbon dioxide in seawater',
                awards: [
                    'Miyake Prize for geochemistry',
                    'Tanaka Prize'
                ],
            }} />
        </>
    );
}