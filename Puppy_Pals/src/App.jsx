import { useState } from 'react'
import { puppyList } from './data'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup);

  return (

    <div className='App'
      style={{
        width: '',
      }}>
      <h1 style={{
        color: 'blue',
        width: 'auto',
        margin: '10px auto 200px'
      }}
      >
        The best Puppies
      </h1>

      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}
          style={{
            color: 'whitesmoke',
          }}>
          {puppy.name}
        </p>
      ))}

      {featPupId && featuredPup && (
        <div className='Info'
          style={{
            textAlign: 'center',
          }}
        >
          <h2 style={{
            marginTop: '50px',
          }}
          >{featuredPup.name}</h2>
          <ul
            style={{
              listStyle: 'none',
              alignContent: 'center',
              color: 'crimson',
            }}>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App
