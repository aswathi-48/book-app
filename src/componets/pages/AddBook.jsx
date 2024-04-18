// import React, { useContext, useState } from 'react'
// import { BookDataContext } from './BooksContext'
// import './AddBook.css'
// import getRandomInt from '../../util/getRandomInt'
// import { useNavigate } from 'react-router-dom'

// const AddBook = () => {

//   const { addBook } = useContext(BookDataContext)
//   const navigate = useNavigate()
//   const [data, setData] = useState({
//     _id: null,
//     name: "",
//     Author: "",
//     genre: "",
//     star_rating: "",
//     published: "",
//     price: "",
//     language: "",
//     image: "",
//   })

  
//   const [imagePreview, setImagePreview] = useState(null); // State for image preview

  
//   const handleSubmit =(e) => {
//     e.preventDefault()
//     const id = getRandomInt(10,100)
//     data._id = id
//     addBook(data)
//     console.log(data)
//     alert("submited")
//     navigate('/books')
//   }
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setData({ ...data,[e.target.name]:URL.createObjectURL(e.target.files[0])})// Set the file to state
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result); // Set image preview
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  
//   return (
//     <div>
//       <h2 style={{ display:'flex' , justifyContent:"center"}}> Add ooks</h2>
//     <div className="form-container">     
//       <form action="" onSubmit={handleSubmit}>
   
//         <div>
//           <div>
//             <label>Title : </label>
//             <input type="text" onChange={(e) => data.name = e.target.value} required/>
//           </div>
//           <div>
//             <label>Author : </label>
//             <input type="text" onChange={(e) => data.Author = e.target.value} required/>
//           </div>
//           <div>
//             <label>Genre : </label>
//             <input type="text" onChange={(e) => data.genre = e.target.value}  />
//           </div>
//           <div>
//             <label>Language : </label>
//             <input type="text" onChange={(e) => data.language = e.target.value}/>
//           </div>
//           <div>
//             <label>price : </label>
//             <input type="text" onChange={(e) => data.price = e.target.value} required/>
//           </div>
//           <div>
//             <label>Rating : </label>
//             <input type="text"  onChange={(e) => data.star_rating = e.target.value} />
//           </div>
//           <div style={{ padding:'14px 0px' }}>
//             <label>Published Date : </label>
//             <input type="date" onChange={(e) => data.published = e.target.value}/>
//           </div>
//           <div >
//           <label>Upload Image : </label>
//           {/* <input type="file" name='image' accept="image/gif, image/jpeg, image/png"  onChange={handleImageChange} /> */}

//           <input type="file" name='image' onChange={handleFileChange} required/>
//           {imagePreview && (
//             <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', marginTop: '10px'}} />
//           )}
//         </div>
         
//           <button type="submit">submit</button>
//         </div>
//       </form>
//     </div>
//     </div>

//   )
// }

// export default AddBook



import React, { useContext, useState } from 'react'
import { BookDataContext } from './BooksContext'
import './AddBook.css'
import getRandomInt from '../../util/getRandomInt'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const AddBook = () => {

  const { addBook } = useContext(BookDataContext)
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState({
    _id: null,
    name: "",
   author: "",
   genre: "",
   star_rating: "",
   published: "",
   price: "",
   language: "",
   image:""
  })

  const storedToken = window.localStorage.getItem("access_token")
const [image,setImage] =useState({})


  const handleInputChange = (e) => {
    setFormValue(e.target.value,e.target.files[0])
 console.log("darsxdsx",formValue);
  }

  const handleImageChange =(e) => {
    console.log("datat");
    setImage (e.target.files[0])
    console.log("fileess",image);
  }


  const { register, handleSubmit} = useForm();

 

  const onSubmit = async(data) =>{
    console.log(data);
    const formData = new FormData();
    // formData.append("_id",formValue._id);
    formData.append("name",data.name);
    formData.append("author",data.author);
    formData.append("genre",data.genre);
    formData.append("star_rating",data.star_rating);
    formData.append("published",data.published);
    formData.append("price",data.price);
    formData.append("language",data.language);
    formData.append("image",data.image[0])
    console.log(image,"imagee");
    await axios.post(' https://book-store-node-27us.onrender.com/api/v1/books/add',formData, {
      headers: {
        Authorization: `Bearer ${storedToken}`

    }
    })
    .then((res) => console.log(res.data))
      navigate('/books')

  }

  
  const [imagePreview, setImagePreview] = useState(null); // State for image preview

  
  // const handleSubmit =(e) => {
  //   e.preventDefault()
  //   const id = getRandomInt(10,100)
  //   data._id = id
  //   addBook(data)
  //   console.log(data)
  //   alert("submited")
  //   navigate('/books')
  // }


  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setData({ ...data,[e.target.name]:URL.createObjectURL(e.target.files[0])})// Set the file to state
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImagePreview(reader.result); // Set image preview
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  
  return (
    <div>
      <h2 style={{ display:'flex' , justifyContent:"center"}}> Add ooks</h2>
    <div className="form-container">     
      <form action="" onSubmit={handleSubmit(onSubmit)}>
   
        <div>
          <div>
            <label>Title : </label>
            <input type="text" onChange={handleInputChange} {...register("name")} />
          </div>
          <div>
            <label>Author : </label>
            <input type="text" onChange={handleInputChange}  {...register("author")}/>
          </div>
          <div>
            <label>Genre : </label>
            <input type="text" onChange={handleInputChange} {...register("genre")} />
          </div>
          <div>
            <label>Language : </label>
            <input type="text" onChange={handleInputChange} {...register("language")}/>
          </div>
          <div>
            <label>price : </label>
            <input type="number" onChange={handleInputChange} {...register("price")}/>
          </div>
          <div>
            <label>Rating : </label>
            <input type="number" onChange={handleInputChange}  {...register("star_rating")}/>
          </div>
          <div style={{ padding:'14px 0px' }}>
            <label>Published Date : </label>
            <input type="date" onChange={handleInputChange} {...register("published")}/>
          </div>
          <div >
          <label>Upload Image : </label>
          {/* <input type="file" name='image' accept="image/gif, image/jpeg, image/png"  onChange={handleImageChange} /> */}

          {/* <input type="file" name='image' onChange={handleFileChange} {...register("image")}/>
          {imagePreview && (
            <img src={imagePreview} alt="Preview" style={{ maxWidth: '100px', marginTop: '10px'}} />
          )} */}
          <input type="file" filename='image' accept="image/gif, image/jpeg, image/png"  onChange={handleImageChange} {...register("image")} />
        </div>
         
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
    </div>

  )
}

export default AddBook
