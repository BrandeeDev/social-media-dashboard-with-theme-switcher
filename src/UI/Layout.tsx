import React from "react";

const Layout=(props:any)=>{
    return <main className={`pl-[25px] pr-4 pt-[36px] lg:pt- pb-[45px] lg:px-[165px] lg:pb-[75px] bg-white  dark:bg-[#1D1F29]`}  >
        {props.children}
    </main>
};
export default  Layout;