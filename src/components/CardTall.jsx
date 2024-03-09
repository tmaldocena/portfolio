import IconButton from "./IconButton"

const CardTall = ({ classes, project, lang }) => {


    function addBg() {
        document.getElementById(project.title).classList.add('bg-second');
    }
    function hideBg() {
        document.getElementById(project.title).classList.remove('bg-second');
    }

    return (
        <div className={` ${classes} border flex flex-col items-center justify-end transition-all hover:scale-[1.02] bg-cover bg-bottom bg-no-repeat`} onMouseEnter={addBg} onMouseLeave={hideBg}>
                
                <div className="flex flex-col gap-4 transition-all justify-center relative items-center m-auto opacity-0 hover:opacity-100 bg-black/80 h-full" id="buttons">
                    <p className="text-white text-center text-lg font-sora mx-2">{lang && project.description_es || project.description_en}</p>
                    <div className="flex flex-row gap-4">
                        <IconButton type='github' link={(project.github || '')} colors='bg-black hover:bg-second border-second' invert='invert hover:invert-0'/>
                        <IconButton type='behance' link={(project.behance || '')} invert='invert hover:invert-0' />
                        <IconButton type='seeProject' link={(project.website || '')} colors='bg-black hover:bg-second border-second' invert='invert hover:invert-0'/>
                    </div>
                </div>   
                <h5 className="text-2xl font-sora font-bold w-full p-4 mb-0 rounded-xl" id={project.title}>{ project.title }</h5>    
        </div>
    )
}


export default CardTall