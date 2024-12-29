type ClassProps = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: ClassProps) => {
  const overlayStyles = `p-5 absolute z-28 flex h-[23.75rem] w-[28.125rem] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;
  return (
    <li className="relative mx-5 inline-block h-[23.75rem] w-[28.125rem]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default Class;
