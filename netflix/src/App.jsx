
import './App.css'
import Cover from './components/Cover'
import Row from './components/Row'
import requests from './request'
import instance from './instance'

function App() {
  

  return (
    <>
      <Cover fetchUrl={requests.fetchNetflixOriginals}/>
      
      <Row isPoster='true' title='Trending Movie' fetchUrl={requests. fetchTrending}/>
      <Row title='netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Top Rated'  fetchUrl={requests.fetchTopRated}/>
      <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance'  fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={requests. fetchDocumentaries}/>
    </>
  )
}

export default App
