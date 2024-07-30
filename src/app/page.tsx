'use client'
import Homepage from "./(home)/Homepage";
import RecipeSection from "./(home)/RecipeSection";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function Home() {
  return (
    <main className="snap-y snap-mandatory ">
      {/* <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={0.8}> */}
          <Homepage />
        {/* </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}> */}
          <RecipeSection />
        {/* </ParallaxLayer>
      </Parallax> */}
    </main>
  );
}
