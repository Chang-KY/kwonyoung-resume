const Title = (props: { title: string, subTitle?: string }) => {
  const {title, subTitle} = props;

  return (
    <h2 className="text-2xl font-bold text-left text-black border-b border-gray-300 pb-2">
      {title}
      {subTitle && <span className="text-xs font-normal ml-3">{subTitle}</span>}
    </h2>
  );
};

export default Title;
