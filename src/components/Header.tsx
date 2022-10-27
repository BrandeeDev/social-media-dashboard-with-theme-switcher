import ModeSwitcher from "./ModeSwitcher";

const Header = () => {
    return (
        <div className="flex flex-col w-full  justify-start items-start lg:flex-row lg:justify-between lg:items-center">
            <div
                className="flex flex-col w-full justify-start items-start border-b border-[#848BAB] pb-6 lg:pb-0 lg:border-0 ">
                <h1 className="font-inter not-italic font-bold text-2xl leading-[29px] text-[#1D1F29] dark:text-white lg:text-[28px] lg:leading-[34px]">Social
                    Media Dashboard</h1>
                <p className="font-inter not-italic font-bold text-sm leading-[17px] text-[#63687D] mt-1 dark:text-[#8C98C6]">Total
                    Followers: 23,004</p>

            </div>
            <ModeSwitcher/>
        </div>

    );

};
export default Header;
