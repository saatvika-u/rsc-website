export type JourneySlide = {
  label: string
  image?: string
  alt: string
}

export type JourneyEvent = {
  year: number
  title: string
  description: string
  slides: JourneySlide[]
}

const placeholderSlides = (year: number): JourneySlide[] => [
  {
    label: "Team photo",
    alt: `Team photo placeholder for ${year}`,
  },
  {
    label: "Robot photo",
    alt: `Robot photo placeholder for ${year}`,
  },
]

export const journeyEvents: JourneyEvent[] = [
  {
    year: 2026,
    title: "The journey continues",
    description: "Add the team's 2026 achievements and developments here.",
    slides: placeholderSlides(2026),
  },
  {
    year: 2025,
    title: "Building the next chapter",
    description: "Add the team's 2025 achievements and developments here.",
    slides: placeholderSlides(2025),
  },
  {
    year: 2024,
    title: "Latest achievements and developments",
    description:
      "A new year of competition, ambitious builds, and continued technical development.",
    slides: placeholderSlides(2024),
  },
  {
    year: 2023,
    title: "A top-five Robocon finish",
    description:
      "Secured fifth place in Robocon's Harpoon Throwing challenge. Hosted six Robotica events, including Robowars and Virtual Robotics.",
    slides: placeholderSlides(2023),
  },
  {
    year: 2022,
    title: "New robots, new capabilities",
    description:
      "Ranked thirteenth in Robocon and conducted industrial robot training. Built a holonomic drive, a four-legged robot, and a bionic hand.",
    slides: placeholderSlides(2022),
  },
  {
    year: 2021,
    title: "Research meets the arena",
    description:
      "Ranked thirteenth in Robocon and presented 13 papers at ICIT-2021. Built Lagori robots, an underwater ROV, and a swerve drive.",
    slides: placeholderSlides(2021),
  },
  {
    year: 2019,
    title: "National Robotex champions",
    description:
      "Won the 3 kg Sumo event at National Robotex, partnered with Siemens India, and developed a custom PID motor controller.",
    slides: placeholderSlides(2019),
  },
  {
    year: 2018,
    title: "India's first TRS student chapter",
    description:
      "Founded India's first Student Chapter of The Robotics Society. Developed CAN and RS-485 protocols, a humanoid torso, an ornithopter, and an AGV.",
    slides: placeholderSlides(2018),
  },
  {
    year: 2017,
    title: "National Robocon champions",
    description:
      "Won National Robocon and developed a mecanum drive and electronic pressure regulator for pneumatics.",
    slides: placeholderSlides(2017),
  },
  {
    year: 2016,
    title: "First Runner-Up at Robocon",
    description:
      "Won the MathWorks and Fastest Job Completing Robot awards. Published papers on robotic fish and omni-drive robots.",
    slides: placeholderSlides(2016),
  },
  {
    year: 2015,
    title: "Award-winning innovation",
    description:
      "Won Best Innovative Design from ROHM and Best Manual Operators at Robocon. Developed badminton-playing robots with 2D LIDAR.",
    slides: placeholderSlides(2015),
  },
  {
    year: 2014,
    title: "New partners, challenging builds",
    description:
      "Partnered with Pepperl+Fuchs. Built a quadrotor with IMU stability and a wall-climbing robot.",
    slides: placeholderSlides(2014),
  },
  {
    year: 2005,
    title: "Five students. One mission.",
    description:
      "Robot Study Circle was founded by five students with a shared mission to learn robotics through making. Our story starts here.",
    slides: placeholderSlides(2005),
  },
]
