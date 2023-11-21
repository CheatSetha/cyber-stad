"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function TimeLine() {
  return (
    <Timeline data-aos="fade-up" data-aos-duration="2000">
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-xl">August 2023</Timeline.Time>
          <Timeline.Title className="text-xl font-bold text-white">
            Start course
          </Timeline.Title>
          <Timeline.Body className="text-xl font-semibold">
            We have started our course and do the research with many theories
            such overview in Cybersecurity field, Cyber kill chain, networking,
            etc.{" "}
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-xl">September 2023</Timeline.Time>
          <Timeline.Title className="text-xl font-bold text-white">
            Continue Research
          </Timeline.Title>
          <Timeline.Body className="text-xl font-semibold">
            In this month we learned about many activities related to computer
            networking, Cyber security threat, Malware, Offensive in
            cybersecurity such as defend in depth, Opering System, and abit of
            information security.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-xl">October 2023</Timeline.Time>
          <Timeline.Title className="text-xl font-bold text-white">
            Continue Research
          </Timeline.Title>
          <Timeline.Body className="text-xl font-semibold">
            In this month, we have continued following our curriculum of
            learning about information security, Ethical hacking theory & some
            pratical lab as well as about web security.{" "}
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className="text-xl">
            November - December 2023
          </Timeline.Time>
          <Timeline.Title className="text-xl font-bold text-white">
            Last month of our course
          </Timeline.Title>
          <Timeline.Body className="text-xl font-semibold">
            In this month, we have continued to finished our curriculum and
            start initing our project lab for hacking demo on the closing
            ceremony.{" "}
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
