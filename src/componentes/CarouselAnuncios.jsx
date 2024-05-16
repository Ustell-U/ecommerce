import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/banner_img (1).jpg";
import img2 from "../images/banner_img (2).jpg";
import img3 from "../images/banner_img (3).jpg";
import img4 from "../images/banner_img (4).jpg";
import img5 from "../images/banner_img (5).jpg";
import img6 from "../images/banner_img (6).jpg";
import img7 from "../images/banner_img (7).jpg";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Forth slide"
        />
        <Carousel.Caption>
          <h5>Forth slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h5>Fith slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h5>Sixth slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
          className="d-block w-100"
          src={img7}
          alt="Seventh slide"
        />
        <Carousel.Caption>
          <h5>Seventh slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
  );
}

export default DarkVariantExample;


