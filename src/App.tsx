import './assets/logo/bunchoblogs-logo.jpeg';
import './assets/styles/reset.css';
import './assets/styles/variables.css';
import './App.css';
import Header from './components/header/Header';
import BlogList from './components/bloglist/BlogList';


function App() {

  return (
    <>
      <Header>Bunch `o Blogs</Header>
      <main>
        <BlogList />
      </main>
    </>

  )
}

export default App
