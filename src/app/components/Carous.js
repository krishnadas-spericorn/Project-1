import React, { Component } from 'react';
import { Carousel, CarouselItem,  CarouselControl,   CarouselIndicators,  CarouselCaption } from 'reactstrap';
  const items = [
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2018/TPR/SMPSpringPrime/VX-1574-TPR_SMP-2up_GW-Hero-Desktop-1500x300-1X_NewTag._CB500476372_.jpg',
      altText: '',
      caption: ''
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2018/EDITORIAL/SPRING_1/GATEWAY/DESKTOP/HERO_M_S_SpringBoots_1x._CB487353696_.jpg',
      altText: '',
      caption: ''
    },
    {
      src: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/2017/Herotator_Desktop_1500x300_marchTPR_Key._CB500252931_.jpg',
      altText: '',
      caption: ''
    }
  ];

  class Carous extends Component {
    constructor(props) {
        super(props);
    
    
    
        this.state = { activeIndex: 0, open: false};
    
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
      }
    
      onExiting() {
        this.animating = true;
      }
    
      onExited() {
        this.animating = false;
      }
    
      next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
      render() {
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
          return (
    
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
            
          );
        });

    return (

        <div>  
            <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        </div>
    );
}
}
export default Carous;
