import './App.css';
import Comment from './components/Comment';

const commentData = {
  author: {
    name: 'Kitty',
    avatarUrl: 'https://placekitten.com/740/600',
  },
  text: 'Learn React is Awesome',
  date: new Date()
}

function App() {
  return (
    <div className="App">
      <Comment 
        author={commentData.author} 
        text={commentData.text} 
        date={commentData.date}/>
    </div>
  );
}

export default App;
