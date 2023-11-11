type ContentProps = {
  title: string;
  ratio: string;
};

const Content = ({ title, ratio: percentage }: ContentProps) => {
  return (
    <div className='relative  mx-4 inline-block'>
      <div className='flex items-center'>
        <div className={`bg-hunter_green rounded-[10px] w-2 h-2 mr-1`} />
        <div className={`font-bold text-hunter_green text-[12px]`}>{title}</div>
      </div>
      <div className={`font-bold text-primary text-[18px] text-center`}>
        {percentage}%
      </div>
    </div>
  );
};

const EnergyRatio = () => {
  return (
    <div className='bg-white rounded-[20px] px-10 py-10 inline-flex'>
      <Content title='Solar Energy' ratio='63' />
      <Content title='Soil Energy' ratio='15' />
      <Content title='Wind Energy' ratio='15' />
    </div>
  );
};

export default EnergyRatio;
