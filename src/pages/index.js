import React, { useEffect, useState } from "react"
import Layout from "../components/layout/layout";
import Image from "../components/image/image";
import FeedContainer from "../components/feed-container/feed-container";
import { getData } from "../utils/data-utils";
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    async function fetchData(){
      const { data: { data }} = await getData({ url: '/api/photos' });
      setPhotos(data);
    }
    
    fetchData();
  }, []);

  return (
    <Layout>
      <FeedContainer>
        { photos.length ? photos.map((photo, index) => (
          <Image 
            key={index}
            thumbnail={photo.attributes.image.data.attributes.formats.small.url}
            imageSource={photo.attributes.image.data.attributes.url} 
            title={photo.attributes.title}
            description={photo.attributes.description}
            year={photo.attributes.year}/>
        )) : (<></>)}
      </FeedContainer>
    </Layout>
  )
}

export default IndexPage
