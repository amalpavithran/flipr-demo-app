import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
class News extends React.Component {
  render(){
      var news = [{
            id: 1,
            name: "/News1.png"
        },
            {
                id: 2,
                name: "/News2.png"
        },
        {
            id: 3,
            name: "/News3.png"
        }]
    return (
        <Carousel className="mx-auto  d-block" style={{width:"40rem"}}>
          {news.map((el, idx) => (
            <Carousel.Item  interval={10000}>
            <img
                className=" d-block"
                src={el.name}
                alt="First slide"
                style={{width:"40rem"}}
                />
            </Carousel.Item>
        ))}
</Carousel>
    );
  }
}

export default News;