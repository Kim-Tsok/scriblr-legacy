import sideImg from "/Side image.png";
import sideImgRes from "/Side Image(res).png";
import img from "/img for create.png";

const CreateSideImg = () => {
  return (
    <>
      <div className="w-[60%] h-[95%] flex max-md:hidden">
        <img
          src={sideImg}
          className="object-contain w-full h-full max-[1360px]:hidden"
        />
        <img
          src={sideImgRes}
          className="object-contain h-full w-full hidden max-[1360px]:block max-[979px]:hidden"
        />
        <img
          src={img}
          className="object-contain h-full w-full hidden max-[979px]:block "
        />
      </div>
    </>
  );
};

export default CreateSideImg;
