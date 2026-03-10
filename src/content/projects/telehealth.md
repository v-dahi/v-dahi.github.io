---
title: "Telehealth: Connectivity to Wellness"
oneLiner: "A portable telehealth kiosk that streams live patient vitals to remote specialists, so clinical decisions are backed by real data not just a video call."
date: "Undergraduate Group Project"
image: "/projects/telehealth_3.png"
skills: ["IoT", "Raspberry Pi", "ESP32", "Sensors", "Web Dashboard", "Networking", "System Design", "Integration", "Debugging"]
highlights:
  - "Live vitals monitoring dashboard streaming Temperature, BPM, SpO2, and ECG in real time."
  - "End-to-end system, sensor hardware, data pipeline, and remote specialist interface designed as one product."
  - "Filed for patent in India (Publication ID: 202521062488)."
awards: []
demo: "https://drive.google.com/file/d/144HkU0PO-r-hf2dJn4Wz8D2FZsQ3SGYO/view?usp=sharing"
photos:
  - "/projects/telehealth_7.png"
  - "/projects/telehealth_3.png"
  - "/projects/telehealth_4.png"
  - "/projects/telehealth_5.png"
  - "/projects/telehealth_6.png"
---

## The Problem

Teleconsultation helps rural clinics reach specialists, but a video call still leaves the doctor working off descriptions rather than data. If a patient's SpO2 is dropping or their ECG looks abnormal, "the patient seems a bit breathless" isn't enough to act on. We wanted to change that.

## What We Built

We prototyped a portable telehealth kiosk that captures patient vitals locally (Temperature, BPM, SpO2, and ECG) and streams them live to a web dashboard a remote specialist can view in real time. The goal was to make the expert's side of the call data-backed, so they can guide the local clinician with actual readings instead of guesswork.

Rather than treating this as a web project with some sensors bolted on, we designed it as an end-to-end system. The hardware runs on two tiers: an ESP-WROOM handles sensor calibration and local processing, while a Raspberry Pi runs the dashboard and video consult. This split was a deliberate choice so that sensor-level work wouldn't compete with the dashboard and video stream for resources.

## Technical Highlights

Getting stable, trustworthy readings from ECG and SpO2 took real iteration. I wrote the sensor drivers and data aggregation code, and put together calibration procedures detailed enough for future handoff and deployment. The trickier part was making everything behave as one product once it was all connected, since integration issues tend to only show up at that stage.

## Patent

This project was filed for an Indian patent and published under ID 202521062488.

## Demo

<iframe
  src="https://drive.google.com/file/d/144HkU0PO-r-hf2dJn4Wz8D2FZsQ3SGYO/preview"
  width="100%"
  height="480"
  allow="autoplay"
></iframe>

Direct link: https://drive.google.com/file/d/144HkU0PO-r-hf2dJn4Wz8D2FZsQ3SGYO/view?usp=sharing

## What I Took Away

This project changed how I think about building things. When hardware, software, and a real user flow all have to work together, the failure modes are different and issues only show up when everything is connected. I got a lot better at integration debugging, designing for reliability in resource-constrained environments, and explaining a technical system to people who aren't engineers.