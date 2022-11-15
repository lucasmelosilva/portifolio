import css from '../assets/css.png'
import github from '../assets/github.png'
import graphql from '../assets/graphql.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import reactjs from '../assets/react.png'
import vitejs from '../assets/vitejs-logo.png'
import tailwind from '../assets/tailwind.png'



function Experience() {
  const techs = [
    {
      id: 1,
      image: html,
      title: "HTML",
      style: "shadow-orange-500"
    },
    {
      id: 2,
      image: github,
      title: "GitHub",
      style: "shadow-gray-400"
    },
    {
      id: 3,
      image: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500"
    },
    {
      id: 4,
      image: css,
      title: "CSS",
      style: "shadow-blue-500"
    },
    {
      id: 5,
      image: node,
      title: "Node JS",
      style: "shadow-lime-300"
    },
    {
      id: 6,
      image: graphql,
      title: "GraphQL",
      style: "shadow-pink-400"
    },
    {
      id: 7,
      image: reactjs,
      title: "React JS",
      style: "shadow-teal-300"
    },
    {
      id: 8,
      image: vitejs,
      title: "Vite JS",
      style: "shadow-fuchsia-500"
    },
    {
      id: 9,
      image: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400"
    }
  ]
  return (
    <div
      name="experience"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Experience</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:p-0 text-center py-8 ">
          {
            techs.map(({ id, image, title, style }) => (
              <div key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg" + " " + style}>
                <img src={image} alt={title} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export { Experience }