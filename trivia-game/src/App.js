import React, { useState } from 'react'
import './App.css'
import axios from 'axios'

function App () {
  const [triviaCategories, setTriviaCategories] = useState(null)
  const fetchData = async () => {
    const response = await axios.get('https://opentdb.com/api_category.php')
    setTriviaCategories(response.data)
  }

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
        <div className="triviaCategories">
          {triviaCategories && triviaCategories.map((triviaCategory, index) => {
            const category = triviaCategories.name
            console.log(category)

            return (
              <div className='triviaCategory' key={index}>
                <h1>Category {index + 1}</h1>
                <h2>{triviaCategory.name}</h2>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
