import React from "react";

const Choose = () => {
  return (
    <section>
      {/* section title */}
      <div className="text-center mx-2 md:max-w-[35%] md:mx-auto ">
        <h2 className="font-bold text-[27px]">Why Choose Us</h2>
        <p className="font-normal text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      {/* choose section content */}
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-20 mt-[60px]">
        <div className="hover:rounded-2xl hover:shadow-xl p-7">
          <img
            src="../images/choose/choose3.png"
            alt=""
            className="max-w-[81px]"
          />
          <h3 className="font-bold text-[19px] my-1">Trusted</h3>
          <p className="font-normal text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        <div className="hover:rounded-2xl hover:shadow-xl p-7">
          <img
            src="../images/choose/choose2.png"
            alt=""
            className="max-w-[81px]"
          />
          <h3 className="font-bold text-[19px] my-1">Easy to Use</h3>
          <p className="font-normal text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        <div className="hover:rounded-2xl hover:shadow-xl p-7">
          <img
            src="../images/choose/choose1.png"
            alt=""
            className="max-w-[81px]"
          />
          <h3 className="font-bold text-[19px] my-1">Faster</h3>
          <p className="font-normal text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>
      </div>
      {/* <div className="h-screen"></div> */}
    </section>
  );
};

export default Choose;
