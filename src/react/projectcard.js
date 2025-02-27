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

function ProjectCardDescription ({header, desc, desc2}) {
    return (
        <div>
            <div class="text-text-1 text-2xl subpixel-antialiased">{header}</div>
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
                    <img class="w-fit duration-300 hover:scale-150 rounded-xl max-h-44" src="/assets/projects/pppad/pppad1.png"/>
                    <img class="w-fit duration-300 hover:scale-150 rounded-xl max-h-44" src="/assets/projects/pppad/pppad2.png"/>
                </div>
                <div class="px-6 pt-4">
                    <ProjectCardDescription 
                    header="Hall Effect Keypad"
                    desc="Rapid trigger keypad for osu!"
                    desc2="The Wooting offerings were too expensive at the time, so I made my own. Takes analog signals from the magnet embedded in the switch for variable actuation distances"/>
                </div>

                <div class="px-3 py-2 flex space-x-2">
                <SocialsButton title="Youtube" link="https://www.youtube.com/shorts/CRPU_5PrwT0" />
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
                    <img class="w-fit duration-300 hover:scale-150 rounded-xl max-h-44" src="/assets/projects/pppad/pppad1.png"/>
                    <img class="w-fit duration-300 hover:scale-150 rounded-xl max-h-44" src="/assets/projects/pppad/pppad2.png"/>
                </div>
                <div class="px-6 pt-4">
                    <ProjectCardDescription 
                    header="Hall Effect Keypad"
                    desc="Rapid trigger keypad for osu!"
                    desc2="The Wooting offerings were too expensive at the time, so I made my own. Takes analog signals from the magnet embedded in the switch for variable actuation distances"/>
                </div>

                <div class="px-3 py-2 flex space-x-2">
                <SocialsButton title="Youtube" link="https://www.youtube.com/shorts/CRPU_5PrwT0" />
                </div>
            </div>
        </div>
    )
}

function ProjectCardList () {
    return (
        <div class="grid grid-cols-2 gap-8 mt-[5%]">
            <div class="animate-fade"> <ProjectCardPppad/> </div>
            <div class="animate-fade"> <ProjectCardVex/> </div>
        </div>
    )
}

const elements = document.querySelectorAll('.projectcardlist');

elements.forEach(element => {
    const root = ReactDOM.createRoot(element)
    root.render(<ProjectCardList />)
});