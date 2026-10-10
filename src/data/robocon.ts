export type RoboconEvent = {
  year: number
  theme: string
  location: string
  description: string
  achievement?: string
  images: {
    src: string
    alt: string
  }[]
}

export const roboconEvents: RoboconEvent[] = [
  {
    year: 2024,
    theme: "Harvest Day",
    location: "Vietnam",
    description:
      "Inspired by Vietnam's terraced fields, the challenge involved two robots performing tasks related to rice cultivation, including sowing, harvesting, and transferring grains to silos.",
    achievement:
      "First Prize in MATLAB, winner of the FUSION VISIONARY Award, and eighth place overall.",
    images: [
      {
        src: "/images/robocon/robocon-24.jpg",
        alt: "Robot Study Circle at ROBOCON 2024",
      },
    ],
  },
  {
    year: 2023,
    theme: "Casting Flowers over Angkor Wat",
    location: "Phnom Penh, Cambodia",
    description:
      "The challenge involved two robots, a rabbit and an elephant, working together to toss rings onto poles.",
    achievement:
      "Ranked fifth and named First Runner-Up in the MathWorks Modeling Award.",
    images: [
      {
        src: "/images/robocon/Robocon_2023.png",
        alt: "Robot Study Circle at ROBOCON 2023",
      },
    ],
  },
  {
    year: 2022,
    theme: "Lagori",
    location: "Delhi, India",
    description:
      "Based on the traditional southern Indian game, two teams alternated as seeker and hitter. The seeker's robots broke and rebuilt a pile of stones while carrying a ball, and the hitter attempted to dislodge that ball. Teams scored for the stones displaced and rebuilt.",
    achievement: "Placed thirteenth in the event.",
    images: [],
  },
  {
    year: 2021,
    theme: "Throwing Arrows into Pots",
    location: "Jimo, China",
    description:
      "Based on the East Asian game of pitch-pot, each team designed two robots to collect and throw arrows into five pots. One robot could also enter the inner field, rotate pots, block opponents, and return arrows. Reaching all five pots secured an immediate K.O. victory.",
    achievement: "Finished with an overall rank of 14.",
    images: [],
  },
  {
    year: 2020,
    theme: "Robo Rugby 7s",
    location: "Suva, Fiji",
    description:
      "The challenge was to play rugby sevens with two robots while navigating five obstacles representing defending players.",
    achievement: "Judges' Special Award and sixth place overall.",
    images: [],
  },
  {
    year: 2019,
    theme: "Sharing the Knowledge",
    location: "Ulaanbaatar, Mongolia",
    description:
      "The theme was based on Mongolia's traditional message relay system.",
    achievement:
      "Ranked third in the MathWorks Modeling Competition at National Robocon 2019.",
    images: [
      {
        src: "/images/robocon/Robocon_2019.png",
        alt: "Robot Study Circle robot at ROBOCON 2019",
      },
      {
        src: "/images/robocon/Robocon%202019.png",
        alt: "Robot Study Circle team at ROBOCON 2019",
      },
    ],
  },
  {
    year: 2018,
    theme: "Ném Còn",
    location: "Ninh Binh, Vietnam",
    description:
      "The challenge was based on ném còn, a traditional game in which shuttlecocks are thrown through a ring mounted at height.",
    achievement:
      "Ranked fourth at National Robocon 2018 and received the Best Aesthetic Robot Award among 115 teams.",
    images: [],
  },
  {
    year: 2017,
    theme: "Asobi: The Landing Disc",
    location: "Tokyo, Japan",
    description:
      "Centered on asobi, or play, teams had to land discs on poles of different heights and distances. Landing at least one disc on every pole completed the game.",
    achievement:
      "Won National Robocon among 115 teams, along with Best Idea and the MathWorks Tools prize, before representing India internationally. The team also received the Nagase Award and won the Best Lovely Robot public poll.",
    images: [
      {
        src: "/images/robocon/Robocon2017.jpg",
        alt: "Robot Study Circle representing India at International ROBOCON 2017",
      },
      {
        src: "/images/robocon/Robocon-2017.png",
        alt: "Robot Study Circle at the ROBOCON 2017 arena",
      },
      {
        src: "/images/robocon/Robocon-17.png",
        alt: "Robot Study Circle team during ROBOCON 2017",
      },
      {
        src: "/images/robocon/Robocon17.png",
        alt: "ROBOCON 2017 competition robot",
      },
    ],
  },
  {
    year: 2016,
    theme: "Clean Energy Recharging the World",
    location: "Bangkok, Thailand",
    description:
      "The theme explored the use of renewable energy. Red and blue teams, each with two robots, competed head-to-head.",
    achievement:
      "First Runner-Up nationally, Fastest Task Completing Robot, Best Manual Operator, and winner of the MATLAB Task Simulation Competition.",
    images: [
      {
        src: "/images/robocon/Robocon2016.jpg",
        alt: "Robot Study Circle at ROBOCON 2016",
      },
      {
        src: "/images/robocon/Robocon-2016.png",
        alt: "Robot Study Circle robot competing at ROBOCON 2016",
      },
    ],
  },
  {
    year: 2015,
    theme: "Robominton — Badminton RoboGame",
    location: "Yogyakarta, Indonesia",
    description:
      "Red and blue teams each built two robots to compete against one another in a doubles badminton match.",
    achievement:
      "Best Manual Operator Award and the ROHM Best Innovative Design Award.",
    images: [
      {
        src: "/images/robocon/Robocon_2015.png",
        alt: "Robot Study Circle at ROBOCON 2015",
      },
    ],
  },
  {
    year: 2014,
    theme: "A Salute for Parenthood",
    location: "Pune, India",
    description:
      "Hosted by India, the competition celebrated the theme A Salute for Parenthood.",
    achievement: "Best Innovative Design Award.",
    images: [],
  },
  {
    year: 2013,
    theme: "The Green Planet",
    location: "Vietnam",
    description:
      "VTV's competition theme focused on The Green Planet.",
    achievement:
      "Best Innovative Design Award and one of only two teams in India to complete the Robocon 2013 task.",
    images: [],
  },
  {
    year: 2012,
    theme: "In Pursuit of Peace and Prosperity",
    location: "Hong Kong",
    description:
      "Hong Kong's theme challenged teams in the Pursuit of Peace and Prosperity.",
    achievement: "Second Runner-Up at Robocon 2012.",
    images: [],
  },
  {
    year: 2011,
    theme: "Lighting Happiness with Friendship",
    location: "Bangkok, Thailand",
    description:
      "Thailand's theme centered on Krathong and Lighting Happiness with Friendship.",
    images: [],
  },
  {
    year: 2010,
    theme: "Robo-Pharaohs Build Pyramids",
    location: "Cairo, Egypt",
    description:
      "Egypt's competition theme challenged Robo-Pharaohs to build pyramids.",
    images: [],
  },
  {
    year: 2009,
    theme: "Kago",
    location: "Tokyo, Japan",
    description:
      "The challenge reimagined the traditional Japanese kago palanquin, replacing its human carriers with robots.",
    images: [
      {
        src: "/images/robocon/Robocon_09.png",
        alt: "Robot Study Circle at ROBOCON 2009",
      },
    ],
  },
  {
    year: 2008,
    theme: "Govinda",
    location: "Pune, India",
    description:
      "India's theme drew from Govinda and the traditional game of capturing butter or cheese from above.",
    achievement: "The first Robocon entered by COEP.",
    images: [],
  },
]
