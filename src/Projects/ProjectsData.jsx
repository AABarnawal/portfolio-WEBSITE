import Projects from "./Projects"
import backend from '../Components/backend.jpg';
import movie from '../Components/pjComp/Movie.PNG'
import bot from '../Components/pjComp/botlive.PNG'
import to from '../Components/pjComp/to-do.PNG'
import rps from '../Components/pjComp/rps.PNG'
import dice from '../Components/pjComp/DiceApp.jpg'
import Room from '../Components/pjComp/Roomdb.jpg'

const ProjectsData=[
    {
        id:1,
        img: bot,
        title: "Chat Bot",
        Description: "An Informational Bot to get information about certain questions",
        Link:"https://github.com/AABarnawal/botlive"
    },
    {
        id:2,
        img: to,
        title: "To-Do Chrome Extension",
        Description: "A to-do Chrome Extension with javascript and with manifest file ",
        Link:"https://github.com/AABarnawal/to-do-list"
    },
    {
        id:3,
        img: movie,
        title: "Movie Recommendation",
        Description: "movie recommendation site built in react js with layout and map funcionalities",
        Link:"https://github.com/AABarnawal/my-app"
    },
    {
        id:4,
        img: dice,
        title: "Roll Dice App",
        Description: "An Android App with material 3 ui design with functionalities to get a ranom genrated dice image",
        Link:"https://github.com/AABarnawal/DiceRollApp/tree/main/dicerollerapp"
    },
    {
        id:5,
        img: rps,
        title: "Rock Paper Sicissor",
        Description: "A simple web game of Rock, paper and scissor to play with Computer made with javaScript",
        Link:"https://github.com/AABarnawal/rps"
    },
    {
        id:6,
        img: Room,
        title: "Contact App",
        Description: "An app to store data, fetch data ,update data and delete data from local database",
        Link:"https://github.com/AABarnawal/RoomDbApp"
    }
]

export default ProjectsData;