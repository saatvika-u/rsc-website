import { useEffect } from "react"
import { createBrowserRouter, Outlet, useLocation } from "react-router"
import AboutUsPage from "../pages/AboutUs/AboutUsPage"
import AwardsPage from "../pages/Awardspage/AwardsPage"
import CompetitionsPage from "../pages/Competitions/CompetitionsPage"
import ContactPage from "../pages/ContactUs/ContactPage"
import AlumniPage from "../pages/DistinguishedAlumini/AlumniPage"
import FtcPage from "../pages/FTC/FtcPage"
import GalleryPage from "../pages/Gallery/GalleryPage"
import HomePage from "../pages/Home/HomePage"
import IeeePage from "../pages/IEEE/IeeePage"
import JourneyPage from "../pages/Journey/JourneyPage"
import MediaCoveragePage from "../pages/MediaCoverage/MediaCoveragePage"
import MindsparkPage from "../pages/Mindspark/MindsparkPage"
import NotFoundPage from "../pages/NotFound/NotFoundPage"
import PapersPublishedPage from "../pages/PapersPublished/PapersPublishedPage"
import PatentsPage from "../pages/Patents/PatentsPage"
import ProjectsPage from "../pages/Projects/ProjectsPage"
import RoboconPage from "../pages/Robocon/RoboconPage"
import RobotexPage from "../pages/Robotex/RobotexPage"
import SocialOutreachPage from "../pages/SocialOutreach/SocialOutreachPage"
import SponsorsPage from "../pages/Sponsors/SponsorsPage"
import TeamPage from "../pages/Team/TeamPage"
import TrsPage from "../pages/TRS/TrsPage"

function Root() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return <Outlet />
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "journey", Component: JourneyPage },
      { path: "about", Component: AboutUsPage },
      { path: "team", Component: TeamPage },
      { path: "projects", Component: ProjectsPage },
      { path: "robocon", Component: RoboconPage },
      { path: "competitions", Component: CompetitionsPage },
      { path: "sponsors", Component: SponsorsPage },
      { path: "awards", Component: AwardsPage },
      { path: "contact", Component: ContactPage },
      { path: "distinguished-alumni", Component: AlumniPage },
      { path: "ftc", Component: FtcPage },
      { path: "ieee", Component: IeeePage },
      { path: "gallery-2024", Component: GalleryPage },
      { path: "media-coverage", Component: MediaCoveragePage },
      { path: "mindspark", Component: MindsparkPage },
      { path: "papers-published", Component: PapersPublishedPage },
      { path: "patents", Component: PatentsPage },
      { path: "robotex", Component: RobotexPage },
      { path: "social-outreach", Component: SocialOutreachPage },
      { path: "trs", Component: TrsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
])
