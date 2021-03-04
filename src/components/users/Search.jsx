import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { users, searchUsers, clearUsers } = githubContext;
  const { setAlert } = alertContext;
  const [text, setText] = useState('')

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault()
    if(text === '') {
      setAlert('Please enter some text', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  }

  return (
    <div>
      <form  onSubmit={onSubmit} action="" className="form">
        <input 
          type="text" 
          name="text" 
          autoComplete="off" 
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input 
          type="submit" 
          value="Search" 
          className="btn btn-dark btn-block"
        />
      </form>
      {
        users.length > 0 && 
        <button 
          className="btn btn-light btn-block" 
          onClick={clearUsers}>
          Clear
        </button>
      }
    </div>
  )
}

export default Search;
