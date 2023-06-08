import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import requests from '../Request'
function Home() {
  return (
    <div>
        <Main/>
        <Row rowId="1" title='Up Coming' fetchURL={requests.requestUpcoming}/>
        <Row rowId="3" title='Trending' fetchURL={requests.requestTrending}/>
        <Row rowId="8" title='Romance' fetchURL={requests.requestRomance}/>
        <Row rowId="5" title='Horror' fetchURL={requests.requestHorror}/>
        <Row rowId="4" title='Top Rated' fetchURL={requests.requestTopRated}/>
        <Row rowId="2" title='Popular' fetchURL={requests.requestPopular}/>
        <Row rowId="6" title='Action' fetchURL={requests.requestAction}/>
        <Row rowId="7" title='Comedy' fetchURL={requests.requestComedy}/>
    </div>
  )
}

export default Home