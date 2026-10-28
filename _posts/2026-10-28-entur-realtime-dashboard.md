---
title: "Real-time transit dashboard with Python, PostgreSQL and Grafana"
date: 2026-10-28 10:00:00 +0100
categories: [Projects, Data engineering]
tags: [python, postgresql, grafana, docker, entur, real-time]
mermaid: true
---

I wanted to learn and try hands-on experience with real-time data, so I built a small pipeline
that collects live bus positions from Entur's open API and shows them in Grafana.
Everything runs locally with Docker Compose.

![Grafana dashboard with delays, most delayed lines and live vehicle positions](/assets/img/posts/entur/dashboard.png)

## Architecture

```mermaid
flowchart LR
    A["Entur SIRI Lite API"] -->|"HTTP GET every 30 s"| B["Python collector"]
    B -->|"INSERT ... ON CONFLICT DO NOTHING"| C[("PostgreSQL")]
    C -->|"SQL"| D["Grafana"]
```

## What I learned

- The API allows 4 requests per minute; polling every 15 s still hit rate limits (HTTP 429).
- A `requestorId` makes Entur return only changes since the last request.
- Idempotent inserts (unique key + `ON CONFLICT DO NOTHING`) keep re-fetched data from creating duplicates.
- The dashboard and data source are provisioned from files, so `docker compose up` rebuilds everything.

Code and instructions: [github.com/heeminK/kang-entur-dashboard](https://github.com/heeminK/kang-entur-dashboard)
