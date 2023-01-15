import { AiOutlineLoading3Quarters } from "react-icons/ai"

export function Button({ type, loading, children }) {
  return (
    <>
      {
        loading && (
          <div className="flex items-center gap-5">
            <button className="group font-medium text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gray-600 cursor-not-allowed">
              {
                children
              }
            </button>

            <span>
              <AiOutlineLoading3Quarters className="animate-spin" size={24} color="rgb(75 85 99)" />
            </span>
          </div>
        )
      }

      {
        !loading && (
          <button disabled={loading} type={type} className="group font-medium text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-105 duration-200 cursor-pointer">
            {
              children
            }
          </button>
        )
      }

    </>
  )
}