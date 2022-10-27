import AchievementItem from "./AchievementItem";

const DUMMY_LIST = [
        {
            id: 1,
            borderColor: "bg-[#178FF5]",
            icon: "icon-facebook.svg",
            userName: "@nathanf",
            number: "1987",
            type: "Followers",
            difference: "12",
            isIncreased: true
        },
        {
            id: 2,
            borderColor: "bg-[#1DA1F2]",
            icon: "icon-twitter.svg",
            userName: "@nathanf",
            number: "1044",
            type: "Followers",
            difference: "99",
            isIncreased: true
        },

        {
            id: 3,
            borderColor: "bg-orange_border_gradient",
            icon: "icon-instagram.svg",
            userName: "@nathanf",
            number: "11k",
            type: "Followers",
            difference: "1099",
            isIncreased: true
        },
        {
            id: 4,
            borderColor: "bg-[#C4032B]",
            icon: "icon-youtube.svg",
            userName: "Nathan F.",
            number: "8239",
            type: "SUBSCRIBERS",
            difference: "144",
            isIncreased: false
        },

    ]
;
const AchievementList = () => {
    return (<ul className="flex flex-col w-full justify-center items-center gap-y-6 list-none mt-[40px] lg:w-full lg:grid lg:grid-cols-4 lg:gap-x-[30px]">
        {DUMMY_LIST.map(item => <li key={item.id} className="w-full"><AchievementItem borderColor={item.borderColor} icon={item.icon}
                                                                   number={item.number} type={item.type}
                                                                   userName={item.userName}
                                                                   isIncreased={item.isIncreased}
                                                                   difference={item.difference}/></li>)}

    </ul>)

};
export default AchievementList;