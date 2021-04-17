import { Box, Typography, Avatar, makeStyles, CardMedia, CardActionArea } from "@material-ui/core";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'
import {useRouter} from 'next/router'
import Image from 'next/image'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

const useStyles = makeStyles((item) => ({
  caption: {
    fontWeight: 500,
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    overflow: "hidden"
  },
  img: {
    width: "100%",
    height: 200,
  }
}))


function videoCard({ item }) {
  const classes = useStyles()
  const router = useRouter()
  const clickHandle = () => {
    document.location.href = item.videoUrl;
  }
  return (
    <Box>
        <CardActionArea onClick={() => 
        router.push(item.videoUrl)
        
      }>
        
        <Image width={500} height={300} alt={item.title} src={item.thumb} layout="intrinsic" className={classes.img}/>
        </CardActionArea>
        <Box display="flex" mt={1}>
          <Box mr={2}>
            <Avatar alt={item.authorName} src={item.authorAvatar} />

          </Box>
          <Box>
            <Typography
              className={classes.caption}
              gutterBottom
              variant="body1"
              color="textPrimary"
              >
              {item.title}

            </Typography>
            <Typography variant="body2" color="textSecondary">
              {item.authorName}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {`${item.views} - ${dayjs(item.updateAt).fromNow()}`}
            </Typography>
          </Box>
        </Box>
      </Box>
    )
}

export default videoCard