export default function Checkbox(props) {
  return (
    <label className="flex flex-row items-center text-white text-[12px] leading-5 cursor-pointer">
      <input
        type="checkbox"
        className="mr-3 checkbox bg-[0E0E0E] border border-[#404040] w-[14px] h-[14px] rounded-[4px]"
        checked={props.checked}
        onChange={props.onChange}
      />

      {props.children}
    </label>
  );
}
