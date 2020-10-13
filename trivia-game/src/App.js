import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App () {
  const [triviaCategories, setTriviaCategories] = useState([])
  const fetchData = async () => {
    const response = await axios.get('https://opentdb.com/api_category.php')
    setTriviaCategories(response.data.trivia_categories)
  }
  console.log(triviaCategories)

  return (
    <>
      <div className='App'>
        <h1>Fetch trivia categories from an API and display them</h1>

        {/* fetch data from Trivia API */}
        <div>
          <button className='fetch-button' onClick={fetchData}>
            Click Me!
          </button>
        </div>

        {/* Display fetched data on page */}
        <div className='triviaCategories'>
          {triviaCategories.map((triviaCategory, index) => {
            return (
              <p key={`${triviaCategory.name}`}>
                {triviaCategory.name}
              </p>
            ) }
          )}
        </div>
      </div>
    </>
  )
}

export default App
