import React from 'react'
import { Grid } from '@mui/material'
import './ClientReviewStyles.css'
import HeadingTitle from '../../Components/HeadingTitle/HeadingTitle'
import user from '../../Assets/user.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";

const ClientReviews = () => {
  return (
    <>
      <div className="reviews-container">
        <HeadingTitle name={'REVIEWS'} />
        <div className="review-card">
          <Grid container justifyContent={'center'}>

            <Swiper
              spaceBetween={12}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="review-box">
                  <Grid container>
                    <Grid item xs={12} sm={12} md={9}>
                      <p className="review-text">
                        "The Service offered by <span className="title">N VISION DENTAL</span> was fantastic. I've never seen such quality work by any dental lab in my career
                        I would recommend N VISION DENTAL anytime
                        ."
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                   <img src={user} alt="user-image" className="user-img" />
                      <h3 className="review-img-name">DR.ABC</h3>
                    </Grid>
                  </Grid>

                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="review-box">
                  <Grid container>
                    <Grid item xs={12} sm={12} md={9}>
                      <p className="review-text">
                        "The Service offered by <span className="title">N VISION DENTAL</span> was fantastic. I've never seen such quality work by any dental lab in my career
                        I would recommend N VISION DENTAL anytime
                        ."
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                   <img src={user} alt="user-image" className="user-img" />
                      <h3 className="review-img-name">DR.DEF</h3>
                    </Grid>
                  </Grid>

                </div>

              </SwiperSlide>
              <SwiperSlide>
                <div className="review-box">
                  <Grid container>
                    <Grid item xs={12} sm={12} md={9}>
                      <p className="review-text">
                        "The Dental Implant made by <span className="title">N VISION DENTAL</span> was fantastic. I've never seen such quality work by any dental lab in my career
                        I would recommend N VISION DENTAL anytime
                        ."
                      </p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                   <img src={user} alt="user-image" className="user-img" />
                      <h3 className="review-img-name">DR.GHI</h3>
                    </Grid>
                  </Grid>

                </div>

              </SwiperSlide>
            </Swiper>

          </Grid>
        </div>
      </div>
    </>
  )
}

export default ClientReviews