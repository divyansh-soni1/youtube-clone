import React from "react";
import {Paper,Typography} from '@material-ui/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



const VideoDetail =({video}) =>{
    
    if(!video) return <div>Loading..</div>
    console.log(video);
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
       <>
       <Paper elevation={6} style={{height: '70%'}}>
        <iframe src={videoSrc} frameborder="0" height="100%" width
        ="100%" title="Video Player"></iframe>
       </Paper>
       <Paper elevation={6}  style={{padding: '15px'}}>
        <Typography variant="h4">{video.snippet.title}-{video.snippet.channelTitle} </Typography>
        <Typography variant="subtitle1"> {video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2"> {video.snippet.description}</Typography>


       </Paper>
       
       
       </>
    )
}


export default VideoDetail;