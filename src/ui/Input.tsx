import { inputProps } from  '../types'

const Input = ({
  placeholder,
  value,
  name,
  onChange,
  type,
  className,
}: inputProps) => {
  return (
    <>
      <input
        placeholder={placeholder}
        value={value}
        name={name}
        type={type}
        onChange={onChange}
        className={`bg-green-400- px-4 py-2 w-[400px] outline-none border border-[#b5b5b7] rounded-lg ${className} `}
      />
    </>
  );
};
export default Input;
