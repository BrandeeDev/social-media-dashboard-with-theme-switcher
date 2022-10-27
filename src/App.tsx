import React from 'react';
import {useState} from "react";
import Layout from "./UI/Layout";
import Header from "./components/Header";
import ModeSwitcher from "./components/ModeSwitcher";
import AchievementList from "./components/achievements/AchievementList";
import OverviewList from "./components/overview/OverviewList";

function App() {

  return (
    <Layout >
      <Header />
        <AchievementList />
      <OverviewList />
    </Layout>
  );
}

export default App;
