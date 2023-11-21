const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className=" section">
        {title} <span className="font-bold text-primary-7">{subtitle}</span>
      </h1>
    </div>
  );
};
export default Title;
