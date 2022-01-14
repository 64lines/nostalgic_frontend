import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import Video from "../components/video/video"
import FeedContainer from "../components/feed-container/feed-container"
import { getData } from "../utils/data-utils"

function VideosPage() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    async function fetchData(){
      const { data: { data }} = await getData({ url: '/api/videos' });
      setVideos(data);
    }
    
    fetchData();
  }, []);

  return (
    <Layout>
      <FeedContainer>
        { videos.map((video, index) => (
          <Video 
            key={index}
            videoSource={video.attributes.video.data.attributes.url} 
            title={video.attributes.title}
            description={video.attributes.description}
            year={video.attributes.year}/>
        ))}
      </FeedContainer>
    </Layout>
  )
}

export default VideosPage