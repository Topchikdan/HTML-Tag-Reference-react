import { useState } from 'react'
import Guide from './pages/Guide/Guide'
import Header from './components/Header/Header'
import { ThemeProvider } from './context/ThemeContext'
import './styles/theme.scss'
import './App.scss'

function App() {
  const [searchValue, setSearchValue] = useState('')
  const [showOnlyFavourites, setShowOnlyFavourites] = useState(false)
  const [favouritesCount, setFavouritesCount] = useState(0)

  return (
    <ThemeProvider>
      <div className="app">
        <Header
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          favouritesCount={favouritesCount}
          favouritesActive={showOnlyFavourites}
          onFavouritesClick={() => setShowOnlyFavourites((prev) => !prev)}
        />
        <Guide
          searchValue={searchValue}
          showOnlyFavourites={showOnlyFavourites}
          onFavouritesCountChange={setFavouritesCount}
        />
        <footer className="app__footer">
          <span>Справочник по тегам HTML</span>
          <span className="app__footer-dot">·</span>
          <span>нажмите на тег, чтобы открыть подробное описание</span>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
