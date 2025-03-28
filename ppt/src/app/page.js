"use client";

import { useEffect } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import {
  TitleSlide,
  SurveyResultsTopicsSlide,
  SurveyResultsQuestionsSlide,
  TableOfContentsSlide,
  IntroductionSlide,
  SingaporeOverviewSlide,
  StudyAbroadSlide,
  IdentityStatusSlide,
  InternshipSlide,
  WorkExperienceSlide,
  JobSearchSlide,
  HousingSlide,
  TransportationSlide,
  LawSlide,
  QASlide,
} from "../components/slides";

export default function Home() {
  useEffect(() => {
    // Initialize Reveal.js
    let deck = new Reveal({
      controls: true,
      progress: true,
      center: false,
      hash: true,
      transition: "slide",
      backgroundTransition: "fade",
    });

    deck.initialize();

    return () => {
      deck = null;
    };
  }, []);

  return (
    <div className="reveal">
      <div className="slides">
        <TitleSlide />
        <SurveyResultsTopicsSlide />
        <SurveyResultsQuestionsSlide />
        <TableOfContentsSlide />
        <IntroductionSlide />
        <SingaporeOverviewSlide />
        <StudyAbroadSlide />
        <IdentityStatusSlide />
        <InternshipSlide />
        <WorkExperienceSlide />
        <JobSearchSlide />
        <HousingSlide />
        <TransportationSlide />
        <LawSlide />
        <QASlide />
      </div>
    </div>
  );
}
