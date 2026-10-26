import AnimatedCount from "../../components/AnimatedCount"
import { Arrow, PageShell } from "../../components/RouteChrome"

type Paper = {
  title: string
  authors: string
  id: string
  link: string
  award?: string
}

const conferences: { name: string; papers: Paper[] }[] = [
  {
    name: "6th International Conference on Intelligent Technologies (ICIT — 2021)",
    papers: [
      {
        title: "Autonomous RFID Controlled Assisting Robot for Isolation Wards",
        authors:
          "Dr. S S Ohol, Lalit Duseja, Yash Deshmukh, Shantanu Karmuse",
        id: "ICIT22",
        link: "https://www.researchgate.net/publication/359083537_Autonomous_RFID_Controlled_Assisting_Robot_for_Isolation_Wards",
      },
      {
        title: "Design and Development of a Multi-finger Prosthetic Robotic Hand",
        authors:
          "Dr. S S Ohol, Arya Arsan, Samarth Chaudhari, Poorval Wanere, Rushikesh Pabalkar, Chetan Pathrabe",
        id: "ICIT24",
        link: "https://www.researchgate.net/publication/359083828_Design_Development_of_a_Multi-finger_Prosthetic_Robotic_hand",
      },
      {
        title:
          "ROS based Compact Mobile Robot for Area Mapping, Autonomous Navigation and Path Planning",
        authors:
          "Dr. S S Ohol, Aniruddha Gaikwad, Mihir Kulkarni, Anuja Agnihotri, Samruddhi Purohit",
        id: "ICIT26",
        link: "https://www.researchgate.net/publication/375895922_ROS_based_Compact_Mobile_Robot_for_Area_Mapping_Autonomous_Navigation_and_Path_Planning",
      },
      {
        title:
          "A Low Latency Self-balancing Algorithm for Real-time Quadrupedal Robots",
        authors: "Dr. S S Ohol, Mudit Singal",
        id: "ICIT35",
        link: "https://www.researchgate.net/publication/359050100_A_low_latency_self-balancing_algorithm_for_real-time_quadrupedal_robots_suitable_for_navigating_unstable_rapidly_deforming_environments",
      },
      {
        title:
          "The Performance Parameter Analysis and Calibration Methodology for the Industrial Robot",
        authors: "Dr. S S Ohol, Ravindra Shinde",
        id: "ICIT08",
        link: "https://www.researchgate.net/publication/359083530_The_Performance_Parameter_Analysis_and_Calibration_Methodology_for_the_Industrial_Robot",
      },
      {
        title:
          "Development of Low Cost Adaptive Cruise Control System for Automatic Transmission Vehicle for Low Speed Operations",
        authors: "Dr. S S Ohol, Aniruddha Sonawane",
        id: "ICIT15",
        link: "https://www.researchgate.net/publication/359083734_Development_of_Low-cost_Adaptive_Cruise_Control_System_for_Automatic_Transmission_vehicle_for_Low-speed_Operations",
      },
      {
        title:
          "Two Legs Balancing with Appropriate Gait Cycle and its Simulation for Combined Motion Analysis",
        authors: "Dr. S S Ohol, Shantanu Bharad",
        id: "ICIT17",
        link: "https://www.researchgate.net/publication/359083616_Two_Legs_Balancing_with_Appropriate_Gait_Cycle_and_Its_Simulation_for_Combined_Motion_Analysis",
      },
      {
        title: "In-pipe Inspection Robot for Varying Pipe Sizes",
        authors: "Dr. S S Ohol, Atul Gargade",
        id: "ICIT18",
        link: "https://www.researchgate.net/publication/359083654_In-pipe_Inspection_Robot_for_Varying_Pipe_Sizes",
      },
      {
        title:
          "Design, Development, Analytical Study and Performance Analysis of a Prototype of Ornithopter",
        authors:
          "Dr. S S Ohol, Madhura Mitkari, Vaishnavi Chakradeo, Riyaa Jadhav, Kalyani Deshmukh",
        id: "ICIT27",
        link: "https://www.researchgate.net/profile/Shantipal-Ohol/publication/359083481_Design_development_analytical_study_and_performance_analysis_of_a_prototype_of_ornithopter/links/62272f313c53d31ba4b0fbd5/Design-development-analytical-study-and-performance-analysis-of-a-prototype-of-ornithopter.pdf",
      },
      {
        title: "Finite Element Analysis of a Novel Robotic Gripper: GRABO",
        authors:
          "Dr. S S Ohol, Aniket H Bhelsaikar, Pratik Chothe, Vinod Atpadkar, Debanik Roy",
        id: "ICIT29",
        link: "https://www.researchgate.net/publication/365131597_Finite_Element_Analysis_of_a_Novel_Robotic_Gripper_Grabo",
      },
      {
        title:
          "Qualitative Flexural Modulus Analysis for Establishing Appropriateness of Pig Femur Bone for Biomedical Experimentation",
        authors: "Dr. S S Ohol, Pankaj S. Aglawe, Subodh Gade",
        id: "ICIT32",
        link: "https://www.researchgate.net/publication/359083841_Qualitative_flexural_modulus_analysis_for_establishing_appropriateness_of_pig",
      },
      {
        title:
          "Study of Aerodynamic Behavior of a Symmetrical Airfoil in a Low Wind Speed Region",
        authors: "Dr. S S Ohol, Pranoti Shinde, Vipin K. Tripathi",
        id: "ICIT44",
        link: "https://www.researchgate.net/publication/359083627_Study_of_an_aerodynamic_behavior_of_a_symmetrical_airfoil_under_in_a_low_wind_speed_region",
      },
      {
        title:
          "Impact on Industrial Robot Calibration Due to Techno-commercial Aspects in Conventional Industrial Robot",
        authors: "Dr. S S Ohol, Pranoti Shinde, Vipin K. Tripathi",
        id: "ICIT44",
        link: "https://www.researchgate.net/publication/348366800_Comparative_Need_Analysis_of_Industrial_Robot_Calibration_Methodologies",
      },
    ],
  },
  {
    name: "International Conference on Robotics, Intelligent Automation & Control Technologies (RIACT 2020)",
    papers: [
      {
        title:
          "Design and Validation of a MATLAB Simulation to Obtain Customized Gait Cycle for Exoskeleton",
        authors: "Dr. S S Ohol",
        id: "RIACT 121",
        link: "https://www.researchgate.net/publication/348368181_Development_of_lower_body_exoskeleton_mathematical_modeling_and_video_analysis_of_its_prototype_for_obtaining_customized_joint_actuation",
        award: "Best Paper Award",
      },
      {
        title:
          "Inverse Kinematic Analysis of a Fixture for Fine Alignment of Central Axis of Top and Bottom Frame Using Simulation",
        authors: "Dr. S S Ohol and P S Aglawe",
        id: "RIACT 121",
        link: "https://www.researchgate.net/publication/348366053_Inverse_kinematic_analysis_of_a_fixture_for_fine_alignment_of_central_axis_of_top_and_bottom_frame_using_simulation",
      },
      {
        title:
          "Comparative Need Analysis of Industrial Robot Calibration Methodologies",
        authors: "Sumedh N Chiwande and Dr. Shantipal S Ohol",
        id: "RIACT 117",
        link: "https://www.researchgate.net/publication/271664497_Comparison_of_two_calibration_methods_for_a_small_industrial_robot_based_on_an_optical_CMM_and_a_laser_tracker",
      },
      {
        title:
          "Design and Development of In-pipe Inspection Robot for Various Pipe Sizes",
        authors: "Atul Gargade and Dr. Shantipal Ohol",
        id: "RIACT 11",
        link: "https://www.researchgate.net/publication/348369124_Design_and_Development_of_In-pipe_Inspection_Robot_for_Various_Pipe_Sizes",
      },
      {
        title:
          "Semi-autonomous Parking System for Automatic Transmission Vehicles",
        authors: "Sameer Kaware, Dr. S. S. Ohol",
        id: "RIACT 122",
        link: "https://www.researchgate.net/publication/348368718_Semi-Autonomous_Parking_system_for_Automatic_Transmission_vehicles/fulltext/5ffaf82e45851553a034323a/Semi-Autonomous-Parking-system-for-Automatic-Transmission-vehicles.pdf",
      },
      {
        title: "Industrial Robot Performance Analysis Using Low Cost Set-up",
        authors: "Kirti Chachane, Dr. S. S. Ohol, S Chiwande",
        id: "RIACT 118",
        link: "https://www.researchgate.net/publication/348366946_Industrial_robot_performance_analysis_using_low_cost_set-_up",
      },
      {
        title:
          "Development of Lower Body Exoskeleton, Mathematical Modeling and Video Analysis of its Prototype for Obtaining Customized Joint Actuation",
        authors: "Dr. S. S. Ohol and K. D. Kalantri",
        id: "RIACT 120",
        link: "https://www.researchgate.net/publication/348368181_Development_of_lower_body_exoskeleton_mathematical_modeling_and_video_analysis_of_its_prototype_for_obtaining_customized_joint_actuation",
        award: "Best Paper Award",
      },
      {
        title:
          "Design, Development and Analysis of Human Exoskeleton for Enhancing Human Capabilities",
        authors:
          "R V Vibhute, S S Yeole, S D Waghmare, T A Tonde and Dr. S S Ohol",
        id: "RIACT 124",
        link: "https://www.researchgate.net/publication/304692723_Dynamic_exoskeleton_design_and_analysis_of_a_human_exoskeleton_to_enhance_maximum_dynamic_performance",
      },
      {
        title: "Autonomous Snake Robot with Serpentine Type Navigation",
        authors:
          "M G Bangar, H S Nirgude, S P Ghodake and Dr. S S Ohol",
        id: "RIACT 126",
        link: "https://www.researchgate.net/publication/365131666_Autonomous_Snake_Robot_with_Serpentine_type_Navigation",
      },
    ],
  },
]

export default function PapersPublishedPage() {
  const paperCount = conferences.reduce(
    (total, conference) => total + conference.papers.length,
    0,
  )

  return (
    <PageShell
      className="research-route"
      title={
        <>
          Papers published: <AnimatedCount value={paperCount} inline />
        </>
      }
    >
      <div className="publication-archive">
        {conferences.map((conference, conferenceIndex) => (
          <section
            className="publication-conference"
            aria-labelledby={`conference-${conferenceIndex}`}
            key={conference.name}
          >
            <header>
              <h2 id={`conference-${conferenceIndex}`}>
                {conference.name}
                <span>{conference.papers.length} published papers</span>
              </h2>
            </header>
            <div className="publication-list">
              {conference.papers.map((paper) => (
                <article key={`${paper.id}-${paper.title}`}>
                  <div className="publication-meta">
                    <span>{paper.id}</span>
                    {paper.award && <strong>{paper.award}</strong>}
                  </div>
                  <h3>{paper.title}</h3>
                  <p>{paper.authors}</p>
                  <a
                    className="publication-view"
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View paper <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  )
}
