import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            voluptatem accusamus natus aliquam possimus vero illum autem,
            dolorem dolores provident sequi corporis saepe quod placeat a
            numquam harum, eaque maxime! aliquam possimus vero illum autem,
            dolorem dolores provident sequi corporis saepe quod placeat a
            numquam harum, eaque maxime!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa
            quis debitis sequi dolores aliquam omnis non soluta. Omnis non
            necessitatibus aspernatur eveniet sint ipsum ratione illum iste amet
            dolorem.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veniam.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-black hover:text-white transition duration-500 ease-in">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-black hover:text-white transition duration-500">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sit.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 hover:bg-black hover:text-white transition duration-500">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            sit.
          </p>
        </div>
      </div>

      {/* 訂閱區塊 */}
      <NewsletterBox />
    </div>
  );
};

export default About;
