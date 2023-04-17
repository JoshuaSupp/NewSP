import React ,{useState, useEffect} from 'react'
import "./ViewComment.css"; // Import the CSS file for styling
import axios from "axios"
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import Header from '../Header/Header'

const ViewComment = ({ comments }) => {
  
    const[data, setData] = useState([]);

    const loadData = async () => {
      const response = await axios.get("http://localhost:5010/api/get");
      setData(response.data);
    };
  
    useEffect(() => {
      loadData();
    }, []);


  return (
    <div className="comments-table">
        <Header/>
        <h1>View Comments</h1>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Project Title</th>
            <th>Comment</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.project_title}</td>
              <td>{item.comment}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="exit-btn">
          <a href="/project">
            <button class="exit" >Back</button>
          </a>
        </div>
    </div>
  );
};

export default ViewComment;
