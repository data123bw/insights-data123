# Data 123 Insights Hub

Public source for **[insights.data123.online](https://insights.data123.online)** — open, evidence-linked intelligence dashboards built by [Data 123](https://www.data123.online) for organisations in Botswana.

Every publication here is built from official sources only — government statistical releases, regulator filings, and national surveys. No estimates, no modelling beyond what the source documents themselves report.

## What's here

**Live now**

- **Crime & Public Safety Intelligence 2024** — national trends since 2019, all 17 police districts, 11 serious offences profiled. Source: Botswana Police Service.
- **BSE Integrated Report FY2025** — market performance, securities and participation, Group financials, the 10X by 2030 strategy, and governance and risk for the Botswana Stock Exchange. Source: BSE Integrated Report 2025 and prior Annual Reports.

**In the pipeline**

Tourism & Hospitality, State of Digital Botswana (ICT), Labour Market & Employment, Education, and Agriculture.

## How it's built

This is an [Evidence.dev](https://evidence.dev) project — each report is a set of markdown pages backed by governed SQL sources. The underlying data goes through its own extraction, validation, and reconciliation process before it ever reaches a dashboard; every figure on a live page traces back to a specific source document and page.


## Local development

```bash
npm install
npm run sources
npm run dev
```

This spins up a local preview of the site. See the [Evidence CLI docs](https://docs.evidence.dev/cli/) for more.

## Interested in working with us?

Data 123 builds data analytics, business intelligence, and market research for organisations across Botswana. If you want to talk about this project, commission a custom intelligence publication, or explore what a governed data pipeline could do for your organisation:

- Website: [www.data123.online](https://www.data123.online)
- Email: [info@data123.online](mailto:info@data123.online)
- Phone: +267 71 965 383
- Gaborone, Botswana
