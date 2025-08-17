import { useState } from 'react'
import './CSS/App.css'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import Navbar from './components/Navbar'
import { TweetProvider} from './context/TweetContext';
import { useTweetContext } from './context/useTweetContext';
import LoginPage from './pages/LoginPage';


function AppContent() {
  const [page, setPage] = useState('home')
  const { session, loadingSession } = useTweetContext();

  const handlePageChange = (newPage) => {
    setPage(newPage);
  }

  if (loadingSession) {
    return <div className="loading-screen">Loading...</div>;
  }

  if (!session) {
    return <LoginPage />;
  }

  return (
    <>
      <Navbar onNavigate={handlePageChange} />
      <div className="main-screen"> 
        {page === 'home' && (<HomePage />)}
        {page === 'profile' && ( <ProfilePage /> )}
      </div>
    </>
  )
}

function App() {
  return (
    <TweetProvider>
      <AppContent />
    </TweetProvider>
  );
}

export default App
