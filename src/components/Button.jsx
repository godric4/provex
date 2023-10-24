const Button = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`text-center font-[700] capitalize px-2 py-2 border font-montserrat text-[.8rem] leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-secondary text-primary border-white border-2'
      }  ${fullWidth && 'w-full'}`}
    >
      {label}
    </button>
  );
};

export default Button;
