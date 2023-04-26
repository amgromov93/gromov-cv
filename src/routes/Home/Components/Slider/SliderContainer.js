import React from "react";
import Slider from "react-slick";

import styles from "../../../../sass/style.module.scss";

export default function SliderContainer() {
  const htmlClasses = styles.slider__img + ' ' + styles.slider__img_html;
  const cssClasses = styles.slider__img + ' ' + styles.slider__img_css;
  const jsClasses = styles.slider__img + ' ' + styles.slider__img_js;
  const reactClasses = styles.slider__img + ' ' + styles.slider__img_react;
  const gitClasses = styles.slider__img + ' ' + styles.slider__img_git;
  const npmClasses = styles.slider__img + ' ' + styles.slider__img_npm;
  const bootstrapClasses = styles.slider__img + ' ' + styles.slider__img_bootstrap;
  const muiClasses = styles.slider__img + ' ' + styles.slider__img_mui;
  const antdClasses = styles.slider__img + ' ' + styles.slider__img_antd;

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={htmlClasses}></div>
        <div className={cssClasses}></div>
        <div className={jsClasses}></div>
        <div className={reactClasses}></div>
        <div className={gitClasses}></div>
        <div className={npmClasses}></div>
        <div className={bootstrapClasses}></div>
        <div className={muiClasses}></div>
        <div className={antdClasses}></div>
      </Slider>
    </div>
  )
}