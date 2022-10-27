import up from "../../images/icon-up.svg";
import down  from "../../images/icon-down.svg";
const AchievementItem = (props: { borderColor: string, icon: string, userName: string, number: string, type: string, difference: string, isIncreased: boolean }) => {
        return (
            <div className={`rounded-[5px]  w-full      ${props.borderColor} pt-1`}>
                <div
                    className={`rounded-[5px]   w-full h-full flex flex-col justify-center items-center  pb-6 pt-8 bg-[#F1F3FA] hover:bg-[#E1E4F0] dark:bg-[#252B42] dark:hover:bg-[#333A55] lg:pt-8 lg:pb-6 lg:px-[64px]`}>
                    <div className="flex flex-row w-full justify-center items-center gap-x-2">
                        <img src={require(`../../images/${props.icon}`)} alt=""/>
                        <p className="font-inter font-bold not-italic text-xs leading-[15px] text-[#63687D] dark:text-[#8C98C6] ">{props.userName}</p>
                    </div>
                    <p className="font-inter not-italic font-bold text-[56px] leading-[48px] text-center tracking-[-2px] text-[#1D1F29] dark:text-white mt-7">
                        {props.number}
                    </p>
                    <p className="font-inter font-normal not-italic text-xs leading-[15px] text-[#63687D] dark:text-[#8C98C6] text-center tracking-[5px] uppercase mt-[9px]">{props.type}</p>
                    <div className="flex flex-row justify-center items-center gap-x-1 mt-[25px]">
                        <img src={props.isIncreased?up:down} alt="" className="w-[px] h-[4px] "/>
                        <span className={` font-inter not-italic font-bold text-xs leading-[15px] ${props.isIncreased?"text-[#1EB589]":"text-[#DC414C]"}`}>{`${props.difference} Today`}</span>
                    </div>


                </div>
            </div>
           );
    }
;
export default AchievementItem;
