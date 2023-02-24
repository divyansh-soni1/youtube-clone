import React from "react";
import {Grid} from '@material-ui/core'
import SearchBar from './components/SearchBar'
// import {VideoList} from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
import youtube, { baseParams } from './apis/youtube';


class App extends React.Component{

   state ={
    videos: [],
    selectedVideo:null,
   }
             
   componentDidMount(){
    this.handleSubmit('pdf generation with react and node')
   }
  

   onVideoSelect=(video) =>{
    this.setState({selectedVideo:video});
   }
     handleSubmit= async (term)=>{
        const Response=  await youtube.get('/search', {
            params: {
              ...baseParams,
              q: term
            }
          });

    this.setState({videos: Response.data.items, selectedVideo:Response.data.items[0]});
    
     }


    render(){
        const{selectedVideo,videos}= this.state;
        return (
           <Grid  justifyContent="center" container spacing={10}>
              <Grid item xs={12}>
                <Grid container spacing ={10}>

                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={this.handleSubmit}/>
                    </Grid>

                    <Grid item xs={8}>
                       <VideoDetail video={selectedVideo}/>
                    </Grid>

                    <Grid item xs={4}>
                        <VideoList videos= {videos} onVideoSelect={this.onVideoSelect}/>

                    </Grid>
                    


                </Grid>
              </Grid>
   


           </Grid>
        )
           
         
        
    }
}

export default App;