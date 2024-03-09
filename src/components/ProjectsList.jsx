import IconButton from "./IconButton"
import projects from "../data/projects.json"

const ProjectsList = () => {
  return (
    <ul className="pt-4">
        {projects.map((project, index) => (
            project.priority != 1 && (
                <li key={index} className="w-full py-2 flex flex-row justify-between items-center">
                    <span className="font-sora text-base text-white">{ project.title }</span>
                <div className="flex gap-2">
                    <IconButton type='github' link={(project.github || '')} colors='hover:bg-second' invert={'invert hover:invert-0'}/>
                    <IconButton type='behance' link={(project.behance || '')} disabled={true} colors='hover:bg-second' invert={'invert hover:invert-0'}/>
                    <IconButton type='seeProject' link={(project.website || '')} colors='hover:bg-second' invert={'invert hover:invert-0'}/>
                </div>
                </li>
            )
        ))}
  </ul>
  )
}

export default ProjectsList