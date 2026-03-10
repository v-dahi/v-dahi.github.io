---
title: "Smart Street Light System"
oneLiner: "A solar-powered smart street light prototype that automatically adjusts brightness based on ambient conditions and vehicle presence."
date: "Undergraduate Group Project"
image: "/projects/ssl1.webp"
skills: ["IoT", "NodeMCU", "Raspberry Pi", "Sensors", "Solar Energy", "Embedded C", "Cloud", "System Design"]
highlights:
  - "Built a working prototype where LED brightness adjusted automatically in response to ambient light and motion detected by ultrasonic sensors."
  - "Integrated a solar panel with battery backup to power the system off-grid, reducing dependence on the grid entirely."
  - "Two-tier architecture with a NodeMCU handling local sensor logic and a Raspberry Pi managing cloud communication and monitoring."
awards: []
photos:
  - "/projects/ssl2.webp"
  - "/projects/ssl3.png"
---

## The Problem

Traditional street lights waste energy in two obvious ways, they run at full brightness all night regardless of whether anyone is around, and their solar panels are fixed at a single angle even though the sun's intensity changes throughout the day. Our group of four wanted to tackle both of these during our third year of undergrad by building a smarter, solar-powered alternative.

## What We Built

We built a prototype smart street light system that runs entirely off a solar panel with lithium battery backup and automatically dims or brightens its LED panel based on what the sensors detect. When no movement is detected the lights drop to a lower intensity, and when the ultrasonic sensor picks up a vehicle or person nearby the brightness ramps up. The whole system communicates with the cloud through a Raspberry Pi, which also handles monitoring.

The original plan included a tilting motor to rotate the solar panel and track the sun throughout the day, but the motors we had weren't strong enough to drive the panel reliably, so that part stayed on the drawing board. Everything else worked as intended.

## How It Works

The NodeMCU acts as the local brain of each light node. It reads data from the ultrasonic sensor to detect nearby movement and from an LDR to measure ambient light levels, and uses that to decide how bright the LED panel should be. The solar panel charges the lithium battery through a charge controller, which then powers the node continuously. The Raspberry Pi at the base station connects to the cloud and lets you monitor node status remotely.

## What I Took Away

This project taught me a lot about the gap between what looks good on a block diagram and what actually works on a bench. The tilting motor was the most obvious example — it was a reasonable idea but we underestimated the mechanical requirements. That lesson stuck with me. It also gave me hands-on experience designing a system that needs to run autonomously without any manual intervention, which is a constraint I kept running into later in my IoT work at Faclon Labs.