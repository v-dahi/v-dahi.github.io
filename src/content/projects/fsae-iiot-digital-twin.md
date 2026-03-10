---
title: "FSAE: IIoT-Based Digital Twin"
oneLiner: "A field-level encryption framework for Industrial IoT Digital Twin systems that protects sensitive telemetry without breaking real-time performance."
date: "2026"
image: "/projects/fsae_1.jpeg.webp"
skills: ["IIoT", "Digital Twin", "MQTT", "Python", "AES-256-GCM", "Security", "Edge Computing", "Dashboards", "Systems Design"]
highlights:
  - "Designed and implemented Field-Sensitive Adaptive Encryption (FSAE), a context-aware field-level encryption framework for IIoT telemetry."
  - "End-to-end MQTT pipeline with role-aware subscribers, a live Plotly Dash dashboard, and selective AES-256-GCM encryption."
  - "Encryption overhead of only 0.04 ms at median latency, well under the sub-millisecond budget required by real-time Digital Twin systems."
photos:
- "fsae3.webp"
- "fsae_2.png"
- "fsae4.webp"
---

## The Problem

Industrial Digital Twin systems need a continuous stream of sensor telemetry to mirror physical assets in real time. The catch is that not all of that data is equally sensitive. Something like ambient temperature is fine to transmit openly, but operator IDs, GPS coordinates, or actuator commands could expose trade secrets, personal information, or safety-critical state. The obvious fix of encrypting everything works in theory but adds latency and CPU overhead that can push edge devices beyond their real-time budgets. For our EECE 5155 course project at Northeastern, my teammate Boyang Wang and I wanted to find a smarter middle ground.

## What We Built

We designed and implemented Field-Sensitive Adaptive Encryption (FSAE), a framework that evaluates each field in a telemetry message individually and only encrypts the ones that actually need it. The full system runs as an end-to-end MQTT pipeline in Python where a publisher simulates an IIoT device generating telemetry, an Eclipse Mosquitto broker routes messages, and multiple subscribers with different privilege levels receive and interpret the stream. A live Plotly Dash dashboard visualizes which fields are being encrypted in real time as context shifts.

## How It Works

The core of FSAE is a scoring model we called S-I-T, which stands for Sensitivity, Impact, and Timeliness. Every field in the telemetry schema gets scored across three dimensions: how sensitive it is if exposed, how dangerous it would be if forged, and how time-critical it is for control decisions. Those scores feed into a context-aware policy engine that also reads the current network risk level, the subscriber's role, and the system's event state. Together, these factors determine which fields get encrypted for each individual message.

Fields that score above the high-risk threshold always get encrypted. Medium-risk fields get encrypted when the context calls for it, so on a public network or during an alert state the policy automatically tightens. Low-risk fields pass through as plain text. The encryption itself uses AES-256-GCM, which provides both confidentiality and tamper detection in a single operation. Each field gets its own 12-byte random nonce per message so the structure stays JSON-compatible throughout, and different subscribers on the same topic can reconstruct only the view they are authorized to see.

## Results

We benchmarked FSAE against a baseline with encryption disabled. Without encryption the median end-to-end latency was 0.39 ms. With FSAE enabled it was 0.43 ms, an overhead of about 0.04 ms at the median and under 0.1 ms at the 95th percentile. Throughput stayed constant at 2 messages per second in both modes, and the total latency with encryption on stayed comfortably under 1 ms, which satisfies the timing requirements of high-speed Digital Twin scenarios.

## What I Took Away

This project pushed me to think about security not as a binary on/off decision but as something proportional to actual risk and adapted to runtime conditions. Designing the S-I-T scoring model and the policy engine meant reasoning carefully about what "sensitive" actually means in an industrial context, and then making those decisions fast enough that they wouldn't affect latency. It also gave me a much clearer picture of how MQTT-based architectures work under real load, and how to structure a system so that different consumers of the same data stream can have genuinely different views of it.