type CardProps = {
  title: string;
  value: string;
  date?: string;
};

const Card = ({ title, value, date }: CardProps) => (
  <div className='bg-white rounded-[20px] overflow-hidden px-[10px] py-[8px]'>
    <div className='font-bold text-[16px] leading-[32px]'>{title}</div>
    <div className='font-bold text-[24px] leading-[32px] whitespace-nowrap text-primary-700'>
      {value}
    </div>
    {date && (
      <div className='h-[24px]'>
        <div className='font-medium text-[14px] leading-[24px] text-gray-400'>
          {date}
        </div>
      </div>
    )}
  </div>
);

const Grid = () => {
  return (
    <div className='relative grid grid-cols-2 grid-rows-3 gap-4 p-4'>
      <Card title='Daily average consumption is' value='12.10 kWh' />
      <Card title='Night-Time usage' value='30%' />
      <Card title='Highest consumption' value='12.10 kWh' date='12/10/2023' />
      <Card title='Use the most electricity' value='Sunday' />
      <Card title='Lowest consumption' value='12.10 kWh' date='12/10/2023' />
      <Card title='Use the least electricity' value='Tuesday' />
    </div>
  );
};

export default Grid;
