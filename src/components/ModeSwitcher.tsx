import DarkModeToggle from "./DarkModeToggle";

const ModeSwitcher = () => {


    return (<div className="flex flex-row w-full justify-between items-center mt-4  lg:justify-end lg:gap-x-[13px]">
        <p className="font-inter not-italic font-bold text-sm leading-[17px] text-[#63687D] dark:text-[#8C98C6]"> Dark Mode</p>
      <DarkModeToggle />

    </div>);

};
export default ModeSwitcher;

