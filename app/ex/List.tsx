import { people } from './data';
import { getImageURL } from './utils';

export default function List() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const everyoneElse = people.filter(person =>
    person.profession !== 'chemist'
  );

  return (
    <>
      <h1>Scientists</h1>
      <h3>Chemists</h3>
      <ul>
        {chemists.map(person =>
          <li key={person.id}>
            <img
              src={getImageURL({ person })}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
      <br />
      <h3>everyoneElse</h3>
      <ul>
        {everyoneElse.map(person =>
          <li key={person.id}>
            <img
              src={getImageURL({ person })}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {' ' + person.profession + ' '}
              known for {person.accomplishment}
            </p>
          </li>
        )}
      </ul>
    </>
  );
}
