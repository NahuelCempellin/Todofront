const BannerCards = () => {
  return (
    <div className=" absolute w-[520px] mt-[-100px] h-[100px] ml-[-18px] overflow-hidden flex items-center justify-around ">
      <div
        className="w-[300px] h-[300px]
      rounded-full mt-[-150px] ml-[-200px] blur-3xl
      bg-[#5062DD]"
      ></div>
      <div
        className="w-[280px] h-[280px]
      rounded-full mt-[-250px] mr-[-150px] blur-2xl
      bg-[#34BFFC]"
      ></div>
    </div>
  );
};

export default BannerCards;
