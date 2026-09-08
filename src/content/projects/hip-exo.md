---
title: "Hip Exoskeleton — IMU Firmware & Bring-up"
description: "A new open-source IMU driver so a hip exoskeleton could read its orientation sensor — written, tested, and debugged during hardware bring-up."
image: ""
---

## The problem
Our hip exoskeleton in Max Shepherd's Wearable Robotics Lab couldn't read its
inertial measurement unit (IMU). The open-source moteus firmware that runs the
actuators only supported a different family of IMU chips, so the MPU6050 sensor
on our hardware returned nothing usable.

## What I did
- Isolated the failure to the firmware — confirmed the driver simply had no
  support for the MPU6050, rather than assuming a wiring or sensor fault.
- Wrote a new IMU driver so the firmware could initialize and read the MPU6050,
  then tested and debugged it against live sensor output until it reported valid
  orientation data.
- Contributed the driver back to the project as open source:
  [github.com/v-dahi/moteus-imu-firmware](https://github.com/v-dahi/moteus-imu-firmware)

## What I'm building now
Custom battery packs for a back exoskeleton, and integrating the same IMU
firmware across both the back and hip exos.

## What I learned
Characterize where a failure actually is before changing anything — once I
confirmed the problem was a missing driver rather than hardware, the fix became
clear. It's the first thing I've built that other people can actually use.