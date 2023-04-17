import React, {useState, useEffect}  from 'react'
import './AddComment.css'
import {useParams, Link, useNavigate} from "react-router-dom"
import axios from 'axios'
import {toast} from 'react-toastify'
import Header from '../Header/Header'

const initialState = {
  comment: "",
  name:"",
  
}

const AddComment = () => {
  const [state, setState] = useState(initialState);
  const {comment,name} = state;
  const[error, setError] = React.useState(false);
  const navigate = useNavigate();
  const [usernameAvailable, setUsernameAvailable] = useState(true);
  const [project_title, setSelectedValue] = useState('');

  useEffect(() => {
    
  }, );


  const handleSubmit = (e) =>{
    e.preventDefault();
    if ( !project_title || !comment || !name  ){
      setError(true);
      return false
    } if (!usernameAvailable) {
      // toast.error('Username is not available. Please choose a different username.');
      return false;
    }
    else{
      axios.post("http://localhost:5010/api/post", {
        project_title,
        comment,
        name
      }).then(() => {
        setState({project_title:"",comment:"",name:""})
        toast.success('Comment Added successfully!');
      })
      .catch((error) => toast.error(error.response.data));
      setTimeout(() => navigate("../project"), { replace: true });
    }
    
  }

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    
    if (name === 'project_title' && ( value.length > 15 )  ) {
      return
      
    }
    
  if (name === 'comment' && value.length > 90) {
    return; 
  }
  if (name === 'name' && value.length > 20) {
    return; 
  }
      setState({ ...state, [name]: value });
      

  }

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
 

  


  return (
    <div class='addadmin'>
    <Header/>
    <h1>Add Comment</h1>
        <br />
        <div class="description">
          <form class='adminform' onSubmit={handleSubmit}>

            <label>Project Title</label>
            {/* <input
             type="text"
             id='project_title'
             name='project_title'
             placeholder='~ Project Title ~'
             value={project_title}
             onChange={handleInputChange}
            /> */}
            <select value={project_title} onChange={handleChange}>
            <option value="">Select an option</option>
            <option value="Dashboard Panel">Dashboard Panel</option>
            <option value="Olx-Clone">Olx-Clone</option>
            <option value="Netflix-Clone">Netflix-Clone</option>
            <option value="Grid Line Builders">Grid Line Builders</option>
            <option value="Charlestown Pizza">Charlestown Pizza</option>
            <option value="TO DO List">TO DO List</option>
            </select>

           


            {error && !project_title&& <span class='invalid'> Enter Valid Project Title!! </span>}
        
            <label> Comment </label>
            <textarea
             id='comment'
             name='comment'
             placeholder='~ Comment ~'
             value={comment}
             onChange={handleInputChange}
             
            />
   
     {error && !comment && <span class='invalid'> Enter Valid Comment!! </span>}
 
            <label>Name</label>
            <input
             type="text"
             id='name'
             name='name'
             placeholder='~ Name ~'
             value={name}
             onChange={handleInputChange}
             
            />
          {error && !name && <span class='invalid'> Enter Valid Name OR Write Anonymous!! </span>}
            <br/>
          <input class='submit' type="submit" value="Add Comment"/>
          </form>
         
        </div>
      
        <div class="exit-btn">
          <a href="/project">
            <button class="exit" >Back</button>
          </a>
        </div>
    
        </div>
  )
}

export default AddComment