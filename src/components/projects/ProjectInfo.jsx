import Link from 'next/link'
import React from 'react'
import ProjectGrid from '@/components/projects/ProjectGrid'
import ProjectMiniMap from './ProjectMiniMap'


const ProjectInfo = ({ handleClick, index, setIndex, projectRefs }) => {
    const description = [
        {
            title: 'Masses',
            text: 'The instruments by which public opinion is organized and focused may be misused. But such organization and focusing are necessary to orderly life.'
        },
        {
            title: 'Invisible',
            text: 'As civilization has become more complex, and as the need for invisible government has been increas ingly demonstrated, the technical means have been invented and developed by which opinion may be regimented.'
        },
        {
            title: 'Expense',
            text: 'The invisible government tends to be concentrated in the hands of the few because of the expense of manipulating the social machinery which controls the opinions and habits of the masses.'
        },
        {
            title: 'Mechanism',
            text: 'No matter how sophisticated, how cynical the public may become about publicity methods, it must respond to the basic appeals, because it will always need food, crave amusement, long for beauty, respond to leadership.'
        },
        {
            title: 'Leadership',
            text: 'The important thing is that it is adaptable to the various means of communication, and is not confined to any one.'
        },
        {
            title: 'Communication',
            text: 'This practice of creating circumstances and of creating pictures in the minds of millions of persons is very common.'
        },
        {
            title: 'Circumstances',
            text: 'Vast numbers of human beings must cooperate in this manner if they are to live together as a smoothly functioning society.'
        },
        {
            title: 'Society',
            text: 'In almost every act of our daily lives, whether in the sphere of politics or business, in our social conduct or our ethical thinking, we are dominated by the relatively small number of persons who understand the mental processes and social patterns of the masses.'
        },
        {
            title: 'Patterns',
            text: 'It is they who pull the wires which control the public mind, who harness old social forces and contrive new ways to bind and guide the world.'
        },
        {
            title: 'Forces',
            text: 'It is not usually realized how necessary these invisible governors are to the orderly functioning of our group life.'
        }


    ]
    return (
        <div className='fixed top-0 h-screen w-screen flex flex-col justify-between md:w-[40vw] py-[15vh] px-[8vw] grotesk'>
            <div>
                <div className=' font-semibold'>{index % 10 < 9 ? `0${index % 10 + 1}` : index % 10 + 1}</div>
                <div className=' text-[4vw] font-medium leading-none mb-10'>{description[index % 10].title}</div>
                <div className=' max-w-[30ch] leading-snug mb-10'>{description[index % 10].text}</div>

                <Link href={"/more"} className='font-bold'>Veiw More</Link>
            </div>
            <div>
                <div onClick={() => handleClick(index)} className=" w-12 h-6 flex items-center stroke-black mt-auto"><svg viewBox="0 0 50 9"><path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path></svg> </div>
                <ProjectMiniMap index={index} setIndex={setIndex} projectRefs={projectRefs} />
            </div>
        </div>
    )
}

export default ProjectInfo