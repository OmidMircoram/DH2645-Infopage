import {useState} from 'react'
import './App.css'
import defPic from "./assets/defpic.jpg"
import Oscar from "./assets/Oscar.jpg"
import Alp from "./assets/Alp.jpg"
import Omid from "./assets/Omid.jpg"
import Kristian from "./assets/Kristian.jpg"
import Sam from "./assets/Sam.jpg"


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className={"back"}>

            <div className="main-elem-11">
                <div className="main-elem-4">
                <span className="main-elem-1">
                    <p>Group21</p>
                </span>
                    <div className="main-elem-2"/>
                    <div className="main-elem-3"/>
                </div>
                <div className="main-elem-8">
                <span className="main-elem-5">
                    <p>Welcome to Our Startup </p>
                </span>
                    <span className="main-elem-6">
                <p>We are a team of 5 students with a mission to revolutionize the spa industry. </p>
                </span>
                    <button className="main-elem-7" onClick={() => {
                        window.location = "https://bookaspa-95f8b.web.app/"
                    }}>
                        <p>Go to BookASpa</p>
                    </button>
                </div>
                <div className="main-elem-10 main-elem-10">
                <span className="main-elem-9 main-elem-9">
                    <img src={Oscar}/>
                </span>
                    <span className="main-elem-9 main-elem-9">
                    <img src={Alp}/>
                </span>
                    <span className="main-elem-9 main-elem-9">
                    <img src={Kristian}/>
                </span>
                    <span className="main-elem-9 main-elem-9">
                    <img src={Omid}/>
                </span>
                    <span className="main-elem-9 main-elem-9">
                    <img src={Sam}/>
                </span>
                </div>
            </div>
            <div className="infoholder">
                {/*<div className="main-elem-15">*/}
                {/*    <span className="main-elem-14">*/}
                {/*        <p>About Us </p>*/}
                {/*    </span>*/}
                {/*    <div className="main-elem-13">*/}
                {/*    <span className="main-elem-12">*/}
                {/*        <p>*/}
                {/*            We are all 5 students who met at university. Through the years we discovered a passion for changing*/}
                {/*            the spa industry. Through our own experiences, we discovered a gap in the market and felt a need to exploit it.*/}
                {/*        </p>*/}
                {/*    </span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="main-elem-15">
                    <span className="main-elem-14">
                        <p>The Problems </p>
                    </span>
                    <div className="main-elem-13">
                        <span className="main-elem-12">
                            <p>
                                After visiting spas throughout the years, we noticed that they always felt empty. Most of the time, you
                                had access to a big pool room, where you and your company could sit and enjoy the serene environment.
                                But it always felt a bit awkward. Since it's empty, we could speak as loudly we want. On the other hand,
                                it would feel wrong to speak as if no one could hear, since it's a spa after all. So, from this we concluded;
                                The spas are underutilized<br/><br/>

                                After getting to this realization, we started to investigate the spa business, with the intention of
                                finding out why there are so few visitors at a time. During this search, we often ended up with multiple
                                different tabs on our web browsers at the same time, one for each spa. To compare the different offers,
                                we had to switch between one spa to another. Sure, google could help us find spas, but even then there
                                seemed to be a focus on hotels that offers some form of spa treatment. This led us to come to yet another
                                conclusion; Comparing and booking spas is a hassle. Comparing to booking a ticket to another country,
                                finding a spa meant going to each individuals spas website and looking at one offer at the time. <br/><br/>

                                This felt unreasonable, and we started to look for solutions.

                            </p>
                        </span>
                    </div>
                </div>
                <div className="main-elem-15">
                    <span className="main-elem-14">
                       <p>The Solution </p>
                    </span>
                    <div className="main-elem-13">
                        <span className="main-elem-12">
                            <p>
                                The root of the problems were the difficulties finding a spa. So we examined the neighboring
                                insures, for instance hotel bookings or plane tickets, and concluded that none of them has this issue.
                                One common factor for all of these industries is the fact that there were at least one site where
                                you could compare different offers and find one that suits you without having to look at individual
                                offerings from different companies.<br/><br/>

                                So the solution seems simple. We need a service that aggregates the spa offerings and displays them
                                to the user in a comprehensive way.
                            </p>
                        </span>
                    </div>
                </div>
                <div className="main-elem-15">
                    <span className="main-elem-14">
                        <p>The Process </p>
                    </span>
                    <div className="main-elem-13">
                        <span className="main-elem-12">
                            <p>
                                First, we had to understand the market we were working with. We created a survey, with the goal to
                                understand the people who frequent spas. To properly understand the segment, we need to know who is
                                visiting the spas and what their life looks like. Other than asking about personal details like
                                gender and age, asked them how often they visit spas, what kind of treatment they prefer, and
                                what they are looking for in a spa.
                                <br/><br/>
                                While collecting consumer data, we started analysing the business side of the spa experience.
                                How big is the industry? Maybe the reason spas are empty is because there simply is not
                                enough interest in visiting one. As we'll find out, this is not the case. Other than the
                                spas themselves, how do other booking aggregators sustain themselves? Since we are aiming
                                to introduce a similar service in the spa world, there are a lot of valuable lessons to be
                                learned from the hotel booking business for instance.
                                <br/><br/>
                                After gathering some information and getting a good grip on the market as a whole, we started
                                developing a website, with the intent of testing the interface and design. At this stage, we
                                started creating our visual profile and BookASpa was born. Through iterative development,
                                user testing on the first prototype and syncing with the gathered data, we landed with
                                a final prototype.
                            </p>
                        </span>
                    </div>
                </div>
                <div className="main-elem-15">
                    <span className="main-elem-14">
                        <p>The tech </p>
                    </span>
                    <div className="main-elem-13">
                        <span className="main-elem-12">
                            <p>
                                For the idea to work, we need a solid tech foundation. While a "simple" booking site might
                                not require any ground breaking technology behind it, we do need to design and plan out the
                                flow of data to and from the spas quite extensively. This would also require the spas
                                to be willing to cooperate to some extent.
                                <br/><br/>
                                At first, we figured that simply web scraping would be enough, but that quickly turned ugly and
                                frankly, defeated the purpose. So we came up with three solutions, admin accounts, a middle-man
                                platform and direct database access.
                                <br/><br/>
                                The most likely solution would be to find spas who are willing to share their database with us
                                and allow us to make bookings directly into their existing systems. This is the most intuitive
                                and logical solution. Since our service allows for spa goers to easier find spas and compare them,
                                this results in the spas getting more bookings and increasing their revenue. So not cooperating
                                would mean leaving income on the table.
                            </p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="main-elem-15">
                    <span className="main-elem-14">
                        <p>The results </p>
                    </span>
                <div className="main-elem-13">
                        <span className="main-elem-12">
                            For now, we have a finished prototype with the user flow programmed. <br/>
                            The results speak for themselves. Have a look at our final prototype: <br/>
                           <button className="main-elem-7" onClick={() => {
                               window.location = "https://bookaspa-95f8b.web.app/"
                           }}>
                        <p>Go to BookASpa</p>
                    </button>
                        </span>
                </div>
            </div>
        </div>
    )
}

export default App
