import React, {useEffect, useState}from 'react'
import { CircularProgress, Grid , Pagination as P} from '@mui/material'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const itemsPerPage = 5;
const Home = () => {
  const [data, setData]= useState([])
  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=100').then(response=> setData(response.data)).catch(e=>console.log(e));
  }, [])
  const [currentPage, setCurrentPage] = useState(1)
  const startIndex =currentPage * itemsPerPage
  const endIndex= startIndex + itemsPerPage
  const currentData=data.slice(startIndex, endIndex)

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  }
  const [carousel, setCarousel]= useState([])
  useEffect(() => {
    axios.get('https://picsum.photos/v2/list').then(response=> setCarousel(response.data)).catch(e=>console.log(e));
  }, [])
  return (
    <div style={{marginTop: '5%', marginLeft: '2%', marginRight: '2%'}}>
      <Swiper
      modules={[Navigation, Pagination, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      effect='fade'
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {carousel.map((item, id)=>(
        <SwiperSlide id={id}>
          <img src={item.download_url} alt={item.author} style={{height: '80vh', margin: '2% auto' ,width: '100%'}}/>
        </SwiperSlide>
      ))}
    </Swiper>
    <Grid container spacing={1} sx={{marginTop: '2%'}}>
      <Grid item sm={6} xs={12} >
        {currentData.length===0 ? (<div>Loading <CircularProgress /></div>) : (<img src={currentData[0].download_url} alt={currentData[0].author} style={{height: '100vh',width: '100%'}}/>)}
        </Grid>
      <Grid item sm={6} xs={12} spacing={2}>
        <Grid item sm={6} xs={12} >
        {currentData.length===0 ? (<div>Loading <CircularProgress /></div>) : (<img src={currentData[1].download_url} alt={currentData[1].author} style={{height: '50vh',width: '200%'}}/>)}
        </Grid>
        <Grid item sm={6} xs={12} >
        {currentData.length===0 ? (<div>Loading <CircularProgress /></div>) : (<img src={currentData[2].download_url} alt={currentData[2].author} style={{height: '50vh',width: '200%'}}/>)}
        </Grid>
      </Grid>
    </Grid>
    <Grid container spacing={1}>
    <Grid item sm={6} xs={12} >
    {currentData.length===0 ? (<div>Loading <CircularProgress /></div>) : (<img src={currentData[3].download_url} alt={currentData[3].author} style={{height: '50vh',width: '100%'}}/>)}
    </Grid>
    <Grid item sm={6} xs={12}>
    {currentData.length===0 ? (<div>Loading <CircularProgress /></div>) : (<img src={currentData[4].download_url} alt={currentData[4].author} style={{height: '50vh' ,width: '100%'}}/>)}
    </Grid>
    </Grid>
    <P sx={{margin: '2% auto', width: '30%'}} 
    count={Math.ceil(data.length / itemsPerPage)-1}
    page={currentPage}
    onChange={handlePageChange}
    color="secondary" />
    </div>
  )
}

export default Home