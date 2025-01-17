import './assets/logo/bunchoblogs-logo.jpeg';
import './assets/styles/reset.css';
import './assets/styles/variables.css';
import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import { useState } from 'react';
import BlogListItem from './components/blogListItem/BlogListItem';

function App() {
  const [blogList, setBlogList] = useState([]);

  return (
    <>
      <Header>Bunch `o Blogs</Header>
      <main>
        <SearchBar setBloglist={setBlogList} />
        <BlogListItem />
      </main>
    </>

  )
}

export default App
