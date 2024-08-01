import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/hero/hero";
import About from "../../components/about/about";
import CategorySection from "../../components/CategorySection/CategorySection";
import CourseSection from "../../components/CourseSection/CourseSection";
import Testimonial from "../../components/Testimonial/Testimonial";
import Education from "../../components/Education/Education";
import TeamSection from "../../components/TeamSection/TeamSection";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import BlogSection from "../../components/BlogSection/BlogSection";
import Newslatter from "../../components/Newslatter/Newslatter";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar hclass={"wpo-header-style-4"} />
      <Hero />
      <TeamSection pbClass={"pb-big"} />
      <ChooseSection />
      <About />
      <Education />
      <BlogSection />
      <CategorySection />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default HomePage;
