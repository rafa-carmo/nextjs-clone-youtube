import React from "react";
import {Box, Button, Grid} from "@material-ui/core"
import Layout from "src/components/Layout"
import VideoCard from "src/components/VideoCard";


function Home({ data }) {
  return (
    <Layout title="Youtube"> 
      <Box p={2}>
        <Grid container spacing={4}>
          
          {data.map((item) => 
          {
            return(
              <Grid key={item.id} item x1={3} lg={3} md={4} sm={6} xs={12}> 
                <VideoCard item={item} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Layout>
  );
}


export async function getStaticProps(){
  const data = [
    {
      id: 1,
      title: "Arctic Monkeys - Do I Wanna Know? (Official Video)",
      authorId: 1,
      authorName: "Arctic Monkeys",
      authorAvatar: "avatarUrl",
      views: 10,
      thumb: "/thumbs/next01.jpg",
      videoUrl: "url",
      updateAt: new Date()
    },
    {
      id: 2,
      title: "Sweet but Psycho",
      authorId: 2,
      authorName: "Sweet",
      authorAvatar: "avatarUrl",
      views: 50,
      thumb: "/thumbs/next02.jpg",
      videoUrl: "url",
      updateAt: new Date()
    },
    {
      id: 3,
      title: "Cyndi Lauper - Girls Just Want To Have Fun (Official Video)",
      authorId: 3,
      authorName: "Cyndi Lauper",
      authorAvatar: "avatarUrl",
      views: 1000,
      thumb: "/thumbs/next03.jpg",
      videoUrl: "url",
      updateAt: new Date()
    },
    {
      id: 4,
      title: "【HD】After Dark - Aimer - After Rain【中日字幕】",
      authorId: 4,
      authorName: "Aimer",
      authorAvatar: "avatarUrl",
      views: 1000,
      thumb: "/thumbs/next04.webp",
      videoUrl: "url",
      updateAt: new Date()
    },
  ]
  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    }
  }
}


export default Home;