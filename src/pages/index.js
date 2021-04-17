import React from "react";
import {Box, Button, Grid} from "@material-ui/core"
import Layout from "src/components/Layout"
import VideoCard from "src/components/VideoCard";
import getVideos from "src/database/getVideos";


function Home({ data }) {
  return (
    <Layout title="Youtube"> 
      <Box p={2}>
        <Grid container spacing={4}>
          
          {data.map((item) => 
          {
            return(
              <Grid key={item._id} item x1={3} lg={3} md={4} sm={6} xs={12}> 
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

  const data = await getVideos()
  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    },
    revalidate: 15
  }
}


export default Home;