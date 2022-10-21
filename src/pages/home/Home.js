import React, {useState} from "react";
import logotype from "./../../icons/nissan-home.jpg"
import firstCar from "./../../icons/nissan-first.jpg"
import secondCar from "./../../icons/nissan-second.jpg"
import thirdCar from "./../../icons/nissan-third.jpg"
import "./Home.css"



function Home(){
    const [condition, setCondition] = useState(false);
    const [text, setText] = useState("View more")

    const clickHandler = () => {
        if (condition === false){
            setCondition(true);
            setText("View less")
        }
        else{
            setCondition(false);
            setText("View more")
        }

    };

    return(
        <div>
            <div className="heading">
                <div>
                    <img src={logotype} className="heading-img" alt="nissan"/>
                </div>
                <div className="heading-texts">
                    <h1 className="head">The only home for all Nissans</h1>
                    <p className="head-text">Explore our store now.<br/><br/> We truly believe
                        that you will find the right car for yourself.<br/> Starting from top
                        tuned cars and ending with total shitboxes.<br/> They are waiting for you here.</p>
                </div>
            </div>

            <section className="propositions">
                <div className="first-car">
                    <img src={firstCar} alt="fast"/>
                    <h2>Nissan R-35 1MWt</h2>
                    <p>One of the fastest non-track nissans in the whole Ukraine.
                        Will gap any motorcycle and other vehicles</p>
                </div>

                <div className="second-car">
                    <img src={secondCar} alt="cool"/>
                    <h2>Nissan R-34 Tuner</h2>
                    <p>Always respect the older ones, because you exist just because of them.
                        A car for true Car Guys. Will never let you down on a showdown.</p>
                </div>

                <div className="third-car">
                    <img src={thirdCar} alt="slow"/>
                    <h2>Nissan ElectricShit Shitbox edition </h2>
                    <p>If you are one of those, we will get this thing
                        just from the scrapyard fresh and undamaged</p>
                </div>
            </section>
            {condition && <div className="hidden">
                <h2>Interesting fact</h2>
                <p>The Skyline name originated from Prince automobile company,
                    which developed and sold the Skyline line of sedans before merging with Nissan-Datsun.
                    The original Skyline was launched by the Prince Motor Company in April 1957 and was powered
                    by a 1.5-litre engine. The later iteration launched in 1964 called the Prince Skyline GT
                    was powered by a 2.0-litre G7 inline-6 engine shared with the up market Prince Gloria sedan.
                    Two road going versions were built. The S54A which had a single carburettor engine rated at
                    78 kW (106 PS; 105 hp) and the S54B which had a triple carburettor engine rated at 92 kW (125 PS; 123 hp)
                    and production totalled 100 units.</p>
            </div>}
            <button className = "viewmore" onClick={clickHandler}>{text}</button>

        </div>
    )
}

export default Home;