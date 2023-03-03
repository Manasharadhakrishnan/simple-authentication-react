import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function Userdetails(props) {
  const { isLoggedIn } = props;
  console.log('userdetails',isLoggedIn)
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    fetch('https://63cfb75b8a780ae6e67b1f01.mockapi.io/user')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

    
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login')
    }
  }, [isLoggedIn, navigate]);


  function editFunc() { }

  function deleteFunc() { }

  return (

    <div>{isLoggedIn &&
      <div className="container table-responsive py-5 my-3">
        <table className="table table-dark table-bordered table-hover " >
          <thead className="thead-dark">
            <tr>
              <th scope="col sm">First</th>
              <th scope="col sm">Last</th>
              <th scope="col sm">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.firstName}</td>
                  <td>{post.lastName}</td>
                  <td>{post.email}</td>
                  <td>
                    <button className="border-0 bg-primary ms-4 rounded" type="button" onClick={editFunc}>
                      Edit
                    </button>
                    <button className="border-0 bg-danger ms-4 rounded" type="button" onClick={deleteFunc}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>}
    </div>


  )
}
const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(
  mapStateToProps
)(Userdetails);
