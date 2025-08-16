import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'
import { TweetProvider } from './context/TweetContext';

function App() {
  const [page, setPage] = useState('home')

  const handlePageChange = (newPage) => {
    setPage(newPage);
  }

  return (
    <TweetProvider>
      <Navbar onNavigate={handlePageChange} />
      <div className="main-screen"> 
        {page === 'home' && (<HomePage />)}
        {page === 'profile' && ( <ProfilePage /> )}
      </div>
    </TweetProvider>
  )
}

export default App
