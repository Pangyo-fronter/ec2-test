import axios from 'axios';
import { useState } from 'react';

function App() {
  const [getData, setGetData] = useState('');
  const [postData, setPostData] = useState('');
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleGet = (e) => {
    e.preventDefault();
    
    axios({
      method: 'GET',
      url: 'http://localhost:5000/test'
    })
    .then(res => setGetData(JSON.stringify(res.data)));
  }

  const handlePost = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:5000/test',
      data: { greeting: value },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => setPostData(JSON.stringify(res.data)));
  }

  const handleReset = () => {
    setGetData('');
    setPostData('');
  }

  return (
    <div>
      <h1>Hello React World</h1>
      <form>
        <button onClick={handleGet}>GET JSON DATA</button>
      </form>
      <div>
        {getData}
      </div>
      <form>
        <button onClick={handlePost}>POST JSON DATA</button>
        <input type="text" value={value} onChange={handleChange} />
      </form>
      <div>
        {postData}
      </div>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}

export default App;
