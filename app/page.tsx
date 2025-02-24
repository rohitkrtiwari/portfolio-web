import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello, I'm Rohit Tiwari 👋
      </h1>
      <p className="mb-4">
        {`I am an Embedded Systems Developer with a passion for creating efficient, real-time solutions. My journey into the world of programming began during my early academic years, where I found myself fascinated by the inner workings of software and hardware integration. I started with C and C++, building a strong foundation in low-level programming and memory management. As I delved deeper, my interest expanded into Python and Assembly, allowing me to work on microcontrollers, embedded devices, and real-time tracking systems.
        Education and Technical Growth
        I pursued my diploma in engineering, where I built my first E-commerce website (Electrozon) using PHP and MySQL, a project that took about three months to develop and deploy. This hands-on experience solidified my understanding of backend development and database management.

        During my undergraduate studies, I became more involved in real-time tracking systems, leading me to develop a vehicle tracking system integrating the SIM900A module and GPS technology. Around the same time, I worked on an ISRO satellite tracking project, which deepened my expertise in networking and real-time data analysis.

        Advanced Learning and Projects
        As I progressed, I became interested in cybersecurity and cryptography, leading me to develop an LSB steganography script in C to hide data within images. This project refined my skills in bitwise operations and low-level image manipulation. Later, I took on the challenge of implementing Data Encryption Standard (DES) from scratch in C, where I successfully completed the initial and reverse permutations, key scheduling, and Feistel function implementation.

        Beyond development, I have a strong interest in systems programming and networking, with hands-on experience in BASH scripting, TCP/IP protocols, Bluetooth, Zigbee, and UI/UX design. My work with development tools for embedded systems such as analyzers, oscilloscopes, and JTAG has further strengthened my expertise in hardware debugging and simulations.
.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
