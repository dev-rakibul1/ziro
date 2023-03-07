import { React } from "react";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import Slider from "react-slick";
import "./Custom.css";

const Customer = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    nextArrow: <FaLongArrowAltRight className="text-sm customer-slider-next" />,
    prevArrow: <FaLongArrowAltLeft className="text-sm customer-slider-prev" />,
  };

  return (
    <section className="customer-wrapper">
      {/* section title */}
      <div className="md:max-w-[35%] px-2 mx-auto text-center">
        <h2 className="text-2xl font-semibold">What our Customer Says</h2>
        <p className="text-[14px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <Slider {...settings}>
        <div>
          {/* customer content */}
          <div className="flex items-center justify-between flex-col lg:flex-row px-2 gap-7 mt-14">
            {/* img */}
            <div className="relative md:max-w-[30%] w-full">
              <img src="../images/customer/customer1.png" alt="" />
              {/* blockquote  */}
              <span className="absolute top-0 left-0 text-5xl">
                <FaQuoteLeft />
              </span>
            </div>

            {/* article */}
            <article className="md:max-w-[70%] w-full">
              {/*customer article top */}
              <div className="customer-top flex justify-between items-center">
                <div>
                  <h5 className="font-semibold">William Smith</h5>{" "}
                  <p className="font-normal">CEO of True Love Studios</p>
                </div>

                {/* customer rating */}
                <div className="flex justify-between items-center my-7">
                  <ul className="customer-rating flex justify-between items-center text-[#FE8D4D]">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                  <span className="ml-2">4.8</span>
                </div>
              </div>
              {/* customer article content */}
              <div>
                <p className="text-[14px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
              </div>
              {/* customer article footer */}
              <div className=" my-7 w-full">
                <div className=" flex justify-end">
                  <div className="avatar-group -space-x-6">
                    <div className="avatar">
                      <div className="w-12">
                        <img
                          src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img
                          src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img
                          src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral-focus text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div>
          {/* customer content */}
          <div className="flex items-center justify-between flex-col lg:flex-row px-2 gap-7 mt-14">
            {/* img */}
            <div className="relative md:max-w-[30%] w-full">
              <img src="../images/customer/customer1.png" alt="" />
              {/* blockquote  */}
              <span className="absolute top-0 left-0 text-5xl">
                <FaQuoteLeft />
              </span>
            </div>

            {/* article */}
            <article className="md:max-w-[70%] w-full">
              {/*customer article top */}
              <div className="customer-top flex justify-between items-center">
                <div>
                  <h5 className="font-semibold">William Smith</h5>{" "}
                  <p className="font-normal">CEO of True Love Studios</p>
                </div>

                {/* customer rating */}
                <div className="flex justify-between items-center my-7">
                  <ul className="customer-rating flex justify-between items-center text-[#FE8D4D]">
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                    <li>
                      <FaStar />
                    </li>
                  </ul>
                  <span className="ml-2">7.4</span>
                </div>
              </div>
              {/* customer article content */}
              <div>
                <p className="text-[14px]">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur
                </p>
              </div>
              {/* customer article footer */}
              <div className="flex justify-end my-7">
                <div>
                  <div className="avatar-group -space-x-6">
                    <div className="avatar">
                      <div className="w-12">
                        <img
                          src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img
                          src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar">
                      <div className="w-12">
                        <img
                          src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="avatar placeholder">
                      <div className="w-12 bg-neutral-focus text-neutral-content">
                        <span>+99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Customer;
