import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-purple-400">Get in Touch</h2>
      <p className="text-gray-400 mb-12">
        I'm always open to new opportunities, collaborations and interesting projects.  
        Feel free to reach out!
      </p>

      <div className="flex justify-center gap-8">
        <a
          href="leandro_esmerdel@hotmail.com"
          className="text-gray-300 hover:text-purple-400 transition text-2xl"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/esmerdel"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-purple-400 transition text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/leandro-esmerdel/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-purple-400 transition text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  )
}
