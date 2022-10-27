import OverviewItem from "./OverviewItem";

const DUMMY_List = [
    {id: 1, type: "Page Views", icon: "icon-facebook.svg", number: "87", percentage: 3, isIncreased: true},
    {id: 2, type: "Likes", icon: "icon-facebook.svg", number: "52", percentage: 2, isIncreased: false},
    {id: 3, type: "Likes", icon: "icon-instagram.svg", number: "5462", percentage: 2257, isIncreased: true},
    {id: 4, type: "Profile Views", icon: "icon-instagram.svg", number: "52k", percentage: 1375, isIncreased: true},
    {id: 5, type: "Retweets", icon: "icon-twitter.svg", number: "117", percentage: 303, isIncreased: true},
    {id: 6, type: "Likes", icon: "icon-twitter.svg", number: "507", percentage: 553, isIncreased: true},
    {id: 7, type: "Likes", icon: "icon-youtube.svg", number: "107", percentage: 19, isIncreased: false},
    {id: 8, type: "Total Views", icon: "icon-youtube.svg", number: "1407", percentage: 12, isIncreased: false},
];
const OverviewList = () => {

    return (<div className="mt-[46px] flex flex-col w-fill justify-start  items-start">
        <h3 className="font-inter not-italic font-bold text-2xl leading-[29px] text-[#63687D] dark:text-white">Overview - Today</h3>
        <ul className="mt-[27px] lg:mt-6 flex flex-col w-full justify center items-center gap-y-4 list-none lg:grid lg:grid-cols-4 lg:gap-x-[30px]">
            {DUMMY_List.map(item => <li className="w-full" key={item.id}><OverviewItem type={item.type} icon={item.icon}
                                                                    number={item.number} percentage={item.percentage}
                                                                    isIncreased={item.isIncreased}/></li>)}

        </ul>

    </div>)
};
export default OverviewList;
