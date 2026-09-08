---
title: "Hip Exoskeleton — IMU Firmware & Bring-up"
oneLiner: "A new open-source IMU driver so a hip exoskeleton could read its orientation sensor, written, tested, and debugged during hardware bring-up."
date: "Shepherd Lab, Northeastern University"
image: "/projects/exo_1.jpg"
skills: ["Embedded Firmware", "IMU", "MPU6050", "moteus", "Hardware Bring-up", "Debugging", "Open Source"]
highlights:
  - "Wrote a new IMU driver for the open-source moteus servo firmware to support the MPU6050."
  - "Tested and debugged against live sensor output until it reported valid orientation data."
  - "Contributed the driver back to the project as open source on GitHub."
awards: []
demo: "https://github.com/v-dahi/moteus-imu-firmware"
photos: []
---

## The Problem

Our hip exoskeleton in Max Shepherd's Wearable Robotics Lab couldn't read its inertial measurement unit (IMU). The open-source moteus firmware that runs the actuators only supported a different family of IMU chips, so the MPU6050 sensor on our hardware returned nothing usable.

## What I Did

I isolated the failure to the firmware, confirming the driver simply had no support for the MPU6050 rather than assuming a wiring or sensor fault. I then wrote a new IMU driver so the firmware could initialize and read the MPU6050, and tested and debugged it against live sensor output until it reported valid orientation data. I contributed the driver back to the project as open source.

Repo: https://github.com/v-dahi/moteus-imu-firmware

## What I'm Building Now

Custom battery packs for a back exoskeleton, and integrating the same IMU firmware across both the back and hip exos.

## What I Learned

Characterize where a failure actually is before changing anything. Once I confirmed the problem was a missing driver rather than hardware, the fix became clear. It's the first thing I've built that other people can actually use.
