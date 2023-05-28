const Google = () => {
  return (
    <div className="overflow-hidden relative w-full h-[900px] text-left text-sm text-dimgray font-roboto">
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[60px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[26px] text-sm font-roboto text-gray-100 text-left inline-block">
          About
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[22px] left-[82.59px] text-sm font-roboto text-gray-100 text-left inline-block">
          Store
        </button>
        <div className="absolute top-[6px] left-[126.06px] flex flex-row py-0 pr-0 pl-[1470.3499755859375px] items-start justify-start">
          <div className="w-[268.64px] flex flex-row py-0 pr-1 pl-8 box-border items-center justify-between">
            <div className="flex flex-row py-0 pr-[14.639995574951172px] pl-[15px] items-start justify-start">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-[13px] leading-[24px] font-arial text-gray-200 text-left inline-block">
                Images
              </button>
            </div>
            <div className="flex flex-row py-1.5 pr-2 pl-3 items-center justify-start gap-[20px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 overflow-hidden shrink-0">
                <img
                  className="absolute top-[0px] left-[calc(50%_-_12px)] w-6 h-6"
                  alt=""
                  src="/frame.svg"
                />
              </button>
              <button className="cursor-pointer [border:none] py-2.5 pr-[25.280000686645508px] pl-[25.719999313354492px] bg-royalblue rounded flex flex-row items-start justify-start">
                <div className="relative text-sm tracking-[0.25px] leading-[16px] font-medium font-roboto text-white text-center">
                  Sign in
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[258px] left-[calc(50%_-_136px)] w-[272px] h-[92px] object-cover"
        alt=""
        src="/googlelogo-color-272x92dppng@2x.png"
      />
      <div className="absolute top-[370px] left-[calc(50%_-_292px)] flex flex-col pt-1.5 px-0 pb-3 items-center justify-center gap-[18px]">
        <div className="rounded-3xl bg-white box-border w-[584px] flex flex-row p-px items-start justify-start border-[1px] border-solid border-gainsboro">
          <input
            className="[border:none] bg-[transparent] relative w-[582px] h-[46px]"
            type="text"
          />
        </div>
        <div className="flex flex-row py-[11px] pr-[151.1099853515625px] pl-[151.08999633789062px] items-start justify-start gap-[11.89px]">
          <button className="cursor-pointer pt-[3.5px] pb-[5.5px] pr-[18.410003662109375px] pl-[18px] bg-whitesmoke-300 rounded flex flex-row items-start justify-start border-[1px] border-solid border-whitesmoke-100">
            <div className="relative text-sm leading-[27px] font-roboto text-darkslategray text-center">
              Google Search
            </div>
          </button>
          <button className="cursor-pointer pt-[3.5px] pb-[5.5px] pr-[17.5px] pl-[18px] bg-whitesmoke-300 rounded flex flex-row items-start justify-start border-[1px] border-solid border-whitesmoke-100">
            <div className="relative text-sm leading-[27px] font-roboto text-darkslategray text-center">
              I'm Feeling Lucky
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Google;
