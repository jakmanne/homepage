import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Testimonials({ data }) {
  if (!data?.testimonials) return null;

  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              speed={600}
              pagination={{ clickable: true }}
              loop={true}
            >
              {data.testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.user}>
                  <blockquote>
                    <p>{testimonial.text}</p>
                    <cite>{testimonial.user}</cite>
                  </blockquote>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
