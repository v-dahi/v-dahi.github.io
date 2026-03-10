---
title: "Smart Water Distribution System"
oneLiner: "An IoT-based prototype that monitors water flow in real time and lets you control distribution valves remotely through a mobile app."
date: "Undergraduate Group Project"
image: "/projects/swds_1.jpg"
skills: ["IoT", "NodeMCU", "ESP8266", "Sensors", "Embedded C", "Web Dashboard", "Networking", "System Design"]
highlights:
  - "Built a working prototype that monitors flow rate and volume in real time and controls solenoid valves remotely through a mobile dashboard."
  - "Integrated flow sensors with NodeMCU ESP8266 and a relay-controlled solenoid valve system with automatic shutoff at a predefined volume."
  - "End-to-end wireless control achieved with approximately 3 seconds of latency over Wi-Fi."
awards: []
photos:
  - "/projects/swds_4.png"
  - "/projects/swds_5.jpeg"
  - "/projects/swds_2.png"
  - "/projects/swds_3.jpg"
---

## The Problem

In a traditional water distribution setup, someone has to physically operate valves across an entire network, which makes even distribution difficult and leaves a lot of room for error. Leakages go undetected, water gets wasted in some areas while others run dry, and there is no easy way to monitor how much is actually flowing at any point. As a second year undergrad project, our group of four wanted to build something that tackled this directly using low-cost hardware and IoT.

## What We Built

We built a working prototype of a smart water distribution system that monitors flow rate and total volume through a pipeline and lets an operator control solenoid valves remotely through a mobile dashboard. The user sets a target volume from the app, the valve opens, and the system automatically shuts off once that volume has been reached. A 100L tank fed the pipeline, and the whole thing ran wirelessly over Wi-Fi.

My contribution was the sensor and microcontroller side. I integrated the flow sensors with the NodeMCU ESP8266, wrote the code to read pulse data from the hall effect sensors, calculate flow rate and cumulative volume, and send that data back to the cloud for the dashboard to display. I also worked on the relay logic that triggered the solenoid valves based on the volume comparison.

## How It Works

The flow sensors sit on the pipeline outlets and use a hall effect sensor to count rotations of a small internal rotor as water passes through. Each pulse corresponds to a known volume of water, so by counting pulses over time you get both flow rate and total volume. That data gets sent from the NodeMCU to a cloud server and displayed live on the mobile dashboard. When the measured volume matches the user's input, the NodeMCU signals the relay to cut power to the solenoid valve and stop the flow. The pipeline also has a third outlet that recycles water back to the tank if both valves are closed, so nothing goes to waste.

## Results

The prototype worked end to end. Valves opened and closed on command from the app, the flow and volume readings updated live, and the automatic shutoff triggered reliably at the set limit. There was about a 3 second latency between app commands and valve response over Wi-Fi, which is expected for this class of hardware and acceptable for a distribution monitoring use case. The system was presented as part of our undergraduate coursework and later written up as a paper.

## What I Took Away

This was my first real experience taking a hardware project all the way from a circuit on a bench to a working system with a live interface. Getting the flow sensor readings to be stable and consistent took more iteration than I expected, and it pushed me to think carefully about calibration and noise at the embedded level. It also gave me an early taste of the full IoT stack, from sensor to microcontroller to cloud to dashboard, which became the foundation for a lot of the work I did later at Faclon Labs.