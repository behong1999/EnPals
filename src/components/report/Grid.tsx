type CardProps = {
  title: string;
  value: string;
  date?: string;
};

const Card = ({ title, value, date }: CardProps) => (
  <div
    className="bg-gray-100 rounded-lg py-8 
  flex flex-col gap-4 justify-center items-center"
  >
    <div className="font-bold text-base md:text-lg text-center">{title}</div>
    <div className="font-bold text-sm md:text-base whitespace-nowrap text-primary-700">
      {value}
    </div>
    {date && (
      <div className="h-[24px]">
        <div className="font-medium text-xs md:text-sm text-gray-400">
          {date}
        </div>
      </div>
    )}
  </div>
);

const Grid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
      <Card title="Daily average consumption is" value="12.10 kWh" />
      <Card title="Night-Time usage" value="30%" />
      <Card title="Highest consumption" value="12.10 kWh" date="12/10/2023" />
      <Card title="Use the most electricity" value="Sunday" />
      <Card title="Lowest consumption" value="12.10 kWh" date="12/10/2023" />
      <Card title="Use the least electricity" value="Tuesday" />
    </div>
  );
};

export default Grid;
