import { HomeContainer } from "./_containers/home";

export default function Home() {
  return <HomeContainer />;
}

// This component design could be possible instead of returning <HomeContainer />
// return <>
//          <HeroContainer />
//          <CategoriesContainer />
//          <FeaturesContainer />
//        </>
