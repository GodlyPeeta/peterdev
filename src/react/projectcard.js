class SocialsButton extends React.Component {
    render() {
        return (
            <a href={this.props.link}>
                <div className="flex justify-between rounded-full px-3 py-1 hover:bg-text-2/20 transition ease-in-out">
                    <div className="text-copper-penny text-thin ml-1">
                        {this.props.title}
                    </div>
                </div>
            </a>
        )
    }
}

function ProjectCardDescription ({header, year, desc, desc2}) {
    return (
        <div>
            <div class="flex justify-between items-center text-text-1 text-2xl subpixel-antialiased">
                <div class="text-text-1 text-left"> {header} </div>
                <div class="text-text-2 text-right text-xl"> {year} </div>
            </div>
            <p class="text-text-2 text-md subpixel-antialiased mt-2">{desc}</p>
            <p class="text-text-2 text-md subpixel-antialiased mt-1">{desc2}</p>
        </div>
    )
}

function ProjectCardPppad () {
    return (
        <div>
            <div class="bg-foreground w-[30rem] rounded-xl">
                <div class="grid grid-cols-2 md:grid-cols-2 gap-4 overflow-visible">
                    <img class="w-fit rounded-xl max-h-44" src="/assets/projects/pppad/pppad1.png"/>
                    <img class="w-fit rounded-xl max-h-44" src="/assets/projects/pppad/pppad2.png"/>
                </div>
                <div class="px-6 pt-4">
                    <ProjectCardDescription 
                    header="Hall Effect Keypad"
                    year="2023"
                    desc="Rapid trigger keypad for osu!"
                    desc2="The Wooting offerings were too expensive at the time, so I made my own. Takes analog signals from the magnet embedded in the switch for variable actuation distances"/>
                </div>

                <div class="px-3 py-2 flex space-x-2">
                <SocialsButton title="Youtube (Prototype)" link="https://www.youtube.com/shorts/CRPU_5PrwT0" />
                </div>
            </div>
        </div>
    )
}

function ProjectCardVex () {
    return (
        <div>
            <div class="bg-foreground w-[30rem] rounded-xl">
                <div class="grid grid-cols-2 md:grid-cols-2 gap-4 overflow-visible">
                    <img class="w-fit rounded-xl max-h-44" src="/assets/projects/vex/thing.png"/>
                    <img class="w-fit rounded-xl max-h-44" src="/assets/projects/vex/thing2.png"/>
                </div>
                <div class="px-6 pt-4">
                    <ProjectCardDescription 
                    header="Vex Robotics Team Captain"
                    year="2021"
                    desc="Team captain for the 2021 Vex robotics game! Wrote a PID and Odometry system and achieved second place in Provincials, lost first place due to a faulty battery :("
                    desc2=""/>
                </div>

                <div class="px-3 py-2 flex space-x-2">
                <SocialsButton title="Github" link="https://github.com/GodlyPeeta/vex-tipping-point-auto" />
                <SocialsButton title="Youtube" link="https://www.youtube.com/live/1_hn4KvXP64?si=1xigZBP6Ukx1waAS&t=39739" />
                </div>
            </div>
        </div>
    )
}

function ProjectCardPPJuice () {
    return (
        <div>
            <div class="bg-foreground w-[30rem] rounded-xl">
                <div class="grid overflow-visible">
                    <img class="w-fit rounded-xl" src="/assets/projects/ppjuice/ppj4.png"/>
                    {/* <img class="w-fit rounded-xl max-h-44" src="/assets/projects/ppjuice/ppj2.png"/> */}
                </div>
                <div class="px-6 pt-4">
                    <ProjectCardDescription 
                    header="ppjuice (osu bot)"
                    year="2021"
                    desc="Discord bot for osu! Wasn't satisfied with the limits and speed of the other osu bots, so I made my own. Has all the features, like real time score tracking and map visualization."
                    desc2="No longer maintained."/>
                </div>

                <div class="px-3 py-2 flex space-x-2">
                <SocialsButton title="Github" link="https://github.com/GodlyPeeta/pp-juice" />
                </div>
            </div>
        </div>
    )
}

function ProjectCard3dp () {
    return (
        <div>
            <div class="bg-foreground w-[30rem] rounded-xl">
                <div class="grid grid-cols-2 md:grid-cols-2 gap-4 overflow-visible">
                    <img class="w-fit rounded-xl max-h-44" src="/assets/projects/3dp/3dp1.png"/>
                    <img class="w-fit rounded-xl max-h-44" src="/assets/projects/3dp/3dp2.png"/>
                </div>
                <div class="px-6 pt-4 py-4"> 
                    {/* remove py-4 when adding socials button */}
                    <ProjectCardDescription 
                    header="Freelance 3D Printing"
                    year="2024"
                    desc="Designed and manufactured cool stuff for business and consumer clients. Made roughly $5000 revenue last year."
                    desc2=""/>
                </div>
{/* 
                <div class="px-3 py-2 flex space-x-2">
                <SocialsButton title="Github" link="https://github.com/GodlyPeeta/pp-juice" />
                </div> */}
            </div>
        </div>
    )
}

function ProjectCardList () {
    return (
        // <div>
        //     <div class="grid grid-cols-2 gap-8 mt-[5%]">
        //         <div class="animate-fade"> <ProjectCardPppad/> </div>
        //         <div class="animate-fade"> <ProjectCardVex/> </div>
        //     </div>
        //     <div class="grid grid-cols-2 gap-8 mt-[4%]">
        //         <div class="animate-fade"> <ProjectCardPPJuice/> </div>
        //         <div class="animate-fade"> <ProjectCard3dp/> </div>
        //     </div>
        // </div>



        <div class="columns-2 gap-8 mt-[5%] pb-[5%]">
            <div class="grid gap-8">
                <div class="animate-fade hover:scale-105 duration-200"> <ProjectCard3dp/> </div>
                <div class="animate-fade hover:scale-105 duration-200"> <ProjectCardPPJuice/> </div>
            </div>
            <div class="grid gap-8">
                <div class="animate-fade hover:scale-105 duration-200"> <ProjectCardPppad/> </div>
                <div class="animate-fade hover:scale-105 duration-200"> <ProjectCardVex/> </div>
            </div>
        </div>

    )
}

const elements = document.querySelectorAll('.projectcardlist');

elements.forEach(element => {
    const root = ReactDOM.createRoot(element)
    root.render(<ProjectCardList />)
});