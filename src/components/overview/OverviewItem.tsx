import up from "../../images/icon-up.svg";
import down  from "../../images/icon-down.svg";
const OverviewItem=(props: {type:string,icon: string,number:string,percentage:number, isIncreased:boolean})=>{

    return(
        <div className="flex flex-col w-full pt-[26px] pb-[19px] pr-[31px] pl-6 gap-y-[21px] bg-[#F1F3FA] hover:bg-[#E1E4F0] dark:bg-[#252B42] dark:hover:bg-[#333A55] rounded-[5px] ">
            <div className="flex flex-row justify-between items-center w-full">
                <p className="font-inter font-bold text-sm leading-[17px] text-[#63687D] dark:text-[#8C98C6] ">{props.type}</p>
                <img src={require(`../../images/${props.icon}`)} alt="" className="w-[20px] h-[20px] "  />

            </div>
            <div className="flex flex-row justify-between items-end w-full">
                <p className="font-inter not-italic font-bold text-[32px] leading-[39px] text-[#1D1F29] dark:text-white">{props.number}</p>
                <div className="flex flex-row justify-center items-center gap-x-[3px]">
                    <img src={props.isIncreased?up:down} alt="" className="w-[8px] h-[4px]"/>
                    <p className={`font-inter font-bold not-italic text-xs leading-[15px] text-right ${props.isIncreased?"text-[#1EB589]":"text-[#DC414C]"}`}>{`${props.percentage}%`}</p>

                </div>

            </div>

        </div>
    );
};
export  default  OverviewItem;
