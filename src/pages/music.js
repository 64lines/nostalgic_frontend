import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout"
import Audio from "../components/audio/audio";
import FeedContainer from "../components/feed-container/feed-container"
import { getData } from "../utils/data-utils";

function MusicPage() {
  const [audios, setAudios] = useState([])

  useEffect(() => {
    async function fetchData(){
      const { data: { data }} = await getData({ url: '/api/audios' });
      setAudios(data);
    }
    
    fetchData();
  }, []);

  return (
    <Layout>
      <FeedContainer>
        { audios.map((audio, index) => (
          <Audio 
            key={index}
            audioSource={audio.attributes.audio.data.attributes.url} 
            title={audio.attributes.title}
            description={audio.attributes.description}
            year={audio.attributes.year}/>
        ))}
      </FeedContainer>
    </Layout>
  )
}

export default MusicPage