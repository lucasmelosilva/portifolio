import Calc from '../assets/portfolio/calc.png'

function Portfolio() {
  const portfolios = [
    {
      id: 1,
      image: Calc,
      code: "https://github.com/lucasmelosilva/calculadora",
      demo: "https://lucasmelosilva.github.io/calculadora"
    },
    {
      id: 2,
      image: Calc,
      code: "https://github.com/lucasmelosilva/calculadora",
      demo: "https://lucasmelosilva.github.io/calculadora"
    },
    {
      id: 3,
      image: Calc,
      code: "https://github.com/lucasmelosilva/calculadora",
      demo: "https://lucasmelosilva.github.io/calculadora"
    },
    {
      id: 4,
      image: Calc,
      code: "https://github.com/lucasmelosilva/calculadora",
      demo: "https://lucasmelosilva.github.io/calculadora"
    },
    {
      id: 5,
      image: Calc,
      code: "https://github.com/lucasmelosilva/calculadora",
      demo: "https://lucasmelosilva.github.io/calculadora"
    },
    {
      id: 6,
      image: Calc,
      code: "https://github.com/lucasmelosilva/calculadora",
      demo: "https://lucasmelosilva.github.io/calculadora"
    }
  ]


  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen">
      <div className="max-w-screen-lg p-4 flex mx-auto flex-col  justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2  md:grid-cols-3 gap-8 px-12 sm:px-0">
          {
            portfolios.map(({ id, image, code, demo }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
                <img src={image} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className="flex items-center justify-center">
                  <a
                    href={demo}
                    target="_blank"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export { Portfolio }