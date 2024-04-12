import React, { useContext, useState } from 'react'
import { BookDataContext } from './BooksContext'

const AddBook = () => {

  const { addBook } = useContext(BookDataContext)
  const [data, setData] = useState({
    _id: null,
    name: "",
    Author: "",
    genre: "",
    star_rating: "",
    published: "",
    price: "",
    language: "",
    image: "",
  })

  const handleSubmit =(e) => {
    e.preventDefault()
    const id = Math.random()
    data._id = id
    addBook(data)
    console.log(data)
  }
  return (
    <div>
      <form action="">
        <div>
          <label>Upload Thumbnail : </label>
          <input type="file" accept="image/gif, image/jpeg, image/png" />
        </div>
        <div>
          <div>
            <label>Title : </label>
            <input type="text" onChange={(e) => data.name = e.target.value}/>
          </div>
          <div>
            <label>Author : </label>
            <input type="text" onChange={(e) => data.Author = e.target.value}/>
          </div>
          <div>
            <label>Genre : </label>
            <input type="text" onChange={(e) => data.genre = e.target.value}  />
          </div>
          <div>
            <label>Language : </label>
            <input type="text" onChange={(e) => data.language = e.target.value}/>
          </div>
          <div>
            <label>price : </label>
            <input type="text" onChange={(e) => data.price = e.target.value}/>
          </div>
          <div>
            <label>Published Date : </label>
            <input type="text" onChange={(e) => data.published = e.target.value}/>
          </div>
          <div>
            <label>Rating : </label>
            <input type="text"  onChange={(e) => data.star_rating = e.target.value} />
          </div>
          <button type="submit" onClick={(e) => handleSubmit(e)}>submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddBook