import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import img_5 from "../../images/carousel_img/05.jpg";
import img_6 from "../../images/carousel_img/06.jpg";
import img_7 from "../../images/carousel_img/07.jpg";

export default function App() {
  return (
    <div>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselInner>
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={img_5} alt='img carousel' />
            <MDBCarouselCaption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={img_6} alt='img carousel' />
            <MDBCarouselCaption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={img_7} alt='img carousel' />
            <MDBCarouselCaption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
}
