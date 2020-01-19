import React from 'react';
import API from "./configs/data";
import './App.css';
import Search from './components/Search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


class App extends React.Component {
  state={
    videos: [],
    selectedVideo: {}
  }

  componentDidMount () {
    
    this.searchVideo("vienna");
  }

  searchVideo = async text => {
    const response = await API.get("/search",{
      params: {
      q: text
    }}
  );
    this.setState({
      videos: response.data.items,
      
    })
    // console.log(this.state.videos)
  }


  onVideoSelect = video => {
    
    this.setState({
      selectedVideo: video,
    }, )
    console.log(this.state.selectedVideo)

  }


render() {
  return(
    <div>
      <Search searchVideo={this.searchVideo}/>
      <div className="main">
      <VideoDetail  video={this.state.selectedVideo}/>
      <VideoList videos={this.state.videos}
      onVideoSelect={this.onVideoSelect}
      />
      </div>
    </div>
  )
}
}
export default App;
