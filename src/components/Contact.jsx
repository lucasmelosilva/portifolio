import { useEffect, useRef, useState } from "react"
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus('')
    }, 10000)

    return (() => {
      clearInterval(timer)
    })
  }, [status])

  const statusSpan = {
    success: {
      text: "Message sent successfully",
      style: "bg-blue-400"
    },
    err: {
      text: "Error sending message",
      style: "bg-red-400"
    }
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_ID)
      .then((result) => {
        console.log(result.status)
        setStatus('success')
      }, (error) => {
        console.log(error.text);
        setStatus('err')
      });
  }

  return (
    <div
      name="contact"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center md:justify-start items-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full md:w-1/2 gap-4"
          >

            {
              status && <div id="message" className={`p-2 rounded-md text-center ${statusSpan[status].style}`}>
                <p>{statusSpan[status].text}</p>
              </div>

            }
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2  rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2  rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="group font-medium text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-105 duration-200 cursor-pointer">Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export { Contact }