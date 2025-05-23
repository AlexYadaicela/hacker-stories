import * as React from 'react'; 

function App() {
  const [title, setTitle] = React.useState('React'); 
  const welcome = {
    title: 'React', 
    greeting: 'Hey'
  }
  const nums = [1, 2, 3, 4, 5]; 
  const liItem = nums.map((num) => 
    <li>{num}</li>
  )

    return(
      <div>
        <h1>Hello <i>{title}</i></h1>
        <label htmlFor="title">Enter a title</label>
        <input type="text" name="title" id="title" />
        <button onClick={() => {
          const input = document.querySelector('#title'); 
          setTitle(input.value); 
        }}>Change Title</button>

        <ul>
          {liItem}
        </ul>
      </div>
    )
}

export default App; 
