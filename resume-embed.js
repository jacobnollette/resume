// AUTO-GENERATED from resume.json by build-embed.js — do not edit by hand.
window.__RESUME__ = {
  "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  "basics": {
    "name": "Jacob Nollette",
    "label": "Platform Engineer & Enterprise Tooling Specialist",
    "email": "jacob@jacobnollette.com",
    "phone": "952-428-9199",
    "url": "https://jacobnollette.com",
    "summary": "Platform and DevOps engineer with 8+ years building and operating production infrastructure, on a broader technology background spanning web, systems, and cloud work. End-to-end experience implementing and administering GitHub/GitHub Actions, GitLab, Atlassian, Retool, JFrog Artifactory, SonarQube, Kubernetes, Terraform, and cloud infrastructure across GCP, AWS, and Azure. Track record of measurable impact, including reducing deployment time 96% to 13 minutes across 15+ microservices, recovering a production Ceph cluster with zero data loss, and building agentic engineering workflows using Claude, Codex, and GitHub Copilot.",
    "x_summaryBullets": [
      "Platform and DevOps engineer with 8+ years building and operating production infrastructure, on a broader technology background spanning web, systems, and cloud work.",
      "End-to-end experience implementing and administering GitHub/GitHub Actions, GitLab, Atlassian, Retool, JFrog Artifactory, SonarQube, Kubernetes, Terraform, and cloud infrastructure across GCP, AWS, and Azure.",
      "Track record of measurable impact, including reducing deployment time 96% to 13 minutes across 15+ microservices, recovering a production Ceph cluster with zero data loss, and building agentic engineering workflows using Claude, Codex, and GitHub Copilot."
    ],
    "location": {
      "city": "Minneapolis",
      "region": "MN",
      "countryCode": "US"
    },
    "profiles": [
      {
        "network": "Website",
        "username": "jacobnollette.com",
        "url": "https://jacobnollette.com"
      }
    ]
  },
  "skills": [
    {
      "name": "Enterprise Tooling",
      "keywords": [
        "GitHub/GitHub Actions",
        "GitLab",
        "Atlassian (Jira/Confluence/Bitbucket)",
        "Retool",
        "REST APIs/webhooks",
        "SSO/SAML",
        "SQL"
      ]
    },
    {
      "name": "Cloud & Infrastructure",
      "keywords": [
        "GCP",
        "AWS",
        "Azure",
        "Terraform",
        "CloudFormation",
        "Kubernetes",
        "Proxmox",
        "Hyper-V",
        "DigitalOcean",
        "Hetzner"
      ]
    },
    {
      "name": "CI/CD & Platform",
      "keywords": [
        "Jenkins",
        "GitLab CI/CD",
        "Docker",
        "trunk-based development",
        "JFrog Artifactory",
        "Packer",
        "internal developer platforms",
        "Go CLI tooling"
      ]
    },
    {
      "name": "Security & SRE",
      "keywords": [
        "Zero-trust architecture",
        "IAM governance",
        "MFA",
        "Vault",
        "NGINX/WAF",
        "OWASP hardening",
        "SLOs",
        "structured alerting",
        "disaster recovery"
      ]
    },
    {
      "name": "AI & Automation",
      "keywords": [
        "Claude",
        "Codex",
        "GitHub Copilot",
        "Ollama",
        "n8n",
        "Playwright",
        "Crawl4AI",
        "Pydantic",
        "multi-agent workflow orchestration"
      ]
    },
    {
      "name": "Programming",
      "keywords": [
        "Go",
        "Bash",
        "Groovy",
        "Python",
        "JavaScript",
        "PowerShell",
        "PHP"
      ]
    }
  ],
  "work": [
    {
      "name": "Software Donkey",
      "position": "Principal Trainer",
      "location": "Minneapolis, MN (Remote)",
      "startDate": "2026-08",
      "endDate": "",
      "summary": "Independent training practice helping solopreneurs and small teams build with AI and own the software they run — simple tools they can maintain themselves instead of renting a stack of subscriptions built for someone else's company.",
      "highlights": [
        "Teaches AI-assisted development as a daily working practice — how to scope a task, direct the tools, review what comes back, and ship it — so a one- or two-person shop can produce work that used to need a whole department.",
        "Replaces sprawling SaaS subscriptions with simple self-owned alternatives: the client keeps the code, the data, and the keys, with no per-seat pricing and nothing that holds their business hostage at renewal time.",
        "Builds the smallest thing that solves the problem and hands it over with plain-language documentation and hands-on training, so the client changes it themselves instead of waiting on a vendor.",
        "Meets small teams where they are — no platform team, no dedicated ops, no budget for enterprise tooling — and leaves them with something they can actually run."
      ]
    },
    {
      "name": "TSI Inc.",
      "position": "DevOps Engineer",
      "location": "Shoreview, MN",
      "startDate": "2022-02",
      "endDate": "2026-03",
      "summary": "Owned platform engineering, CI/CD, enterprise tooling, Kubernetes infrastructure, and security-first deployment pipelines across four GCP projects for a cloud-native SaaS company.",
      "highlights": [
        "Cut deployment time 96% by rebuilding CI/CD across the full microservice estate as sole platform engineer, consolidating 15 separate pipelines into one trunk-based pipeline with a 13-minute end-to-end rollout.",
        "Established policy-as-code deployment gates that block releases on critical security findings, built on reusable pipeline libraries with containerized, parameterized build stages.",
        "Built a Go CLI that creates standardized Docker development shells with preconfigured environment variables and credentials, enabling local environments to mirror CI.",
        "Delivered self-service internal tooling that let non-engineering teams query and act on operational data directly, removing engineering from routine request handling.",
        "Architected the development environment structure so access governance was enforceable by the IT organization, defining environment separation and role-based permission models that IT could administer directly.",
        "Delivered secure internal-tooling access to an air-gapped IoT monitoring network using parallel subnet design, VPN-gated egress, and strict ACLs.",
        "Provisioned production GCP applications with Terraform, Cloud SQL, automated database snapshots, and disaster-recovery orchestration; built reusable Terraform modules for standardized Kubernetes deployments.",
        "Administered IAM permissions across multiple cloud accounts and partnered with IT to implement SAML federation, enforcing MFA on cloud access.",
        "Established disaster recovery for the Atlassian toolchain, automating backups to cold storage and advising on multiple platform migrations.",
        "Built JQL-based reporting and dashboards enabling product owners to self-serve delivery visibility.",
        "Evaluated and audited Bitbucket plugin purchases, then authored the pipeline code that used them to extend CI capabilities in Jenkins."
      ]
    },
    {
      "name": "North Shore Automation",
      "position": "Platform / DevOps Engineer (Part-time)",
      "location": "Los Angeles, CA (Remote)",
      "startDate": "2022-04",
      "endDate": "2026-01",
      "summary": "Fractional DevOps consultant modernizing CI/CD and platform infrastructure for media and studio workflow clients while reducing manual operations, vendor lock-in, and deployment risk.",
      "highlights": [
        "Developed tooling and CI for a containerized appliance product, building the delivery pipeline in GitLab.",
        "Provisioned and orchestrated AWS environments with Terraform to host the containerized application.",
        "Co-led migration of the full CI/CD estate from GitLab to GitHub Actions.",
        "Delivered AWS-based digital asset management environments and produced portable Rocky Linux/Ubuntu VMDKs for VMware, Proxmox, and AWS EC2.",
        "Hardened public-facing NGINX infrastructure against OWASP Top 10 exposure through rate limiting, strict TLS, and header sanitation."
      ]
    },
    {
      "name": "LuminFire",
      "position": "Systems Engineer",
      "location": "Minneapolis, MN",
      "startDate": "2018-01",
      "endDate": "2022-02",
      "summary": "Introduced modern CI/DevOps practices at a Minneapolis agency and owned GitLab platform and AWS infrastructure for the company's WordPress portfolio.",
      "highlights": [
        "Built a unified automation layer that consolidated fleet maintenance across three heterogeneous hosting platforms, replacing per-platform manual processes with a single orchestration repository serving all client sites.",
        "Migrated the full portfolio from Bitbucket Cloud to self-hosted GitLab and scaled the platform through object-storage migration, instance right-sizing, and IOPS tuning.",
        "Built blue-green deployment infrastructure on AWS EC2 using declarative CloudFormation templates and standardized IaC provisioning.",
        "Progressed from manual VM provisioning to automating the full maintenance toolchain in Bash."
      ]
    },
    {
      "name": "jacobnollette.com LLC / Self-Hosting Lab",
      "position": "Principal",
      "location": "Minneapolis, MN",
      "startDate": "2012-05",
      "endDate": "",
      "summary": "Continuously operated independent practice: client consulting spanning web, full-stack, and infrastructure work, alongside an ongoing R&D homelab focused on production-grade DevOps, AI/agent infrastructure, cloud security, and reliability engineering.",
      "highlights": [
        "Directs and reviews multi-agent engineering workflows using Claude, Codex, and GitHub Copilot, including task delegation, review, and production merges.",
        "Built an agentic web scraper using Playwright, Crawl4AI, and Ollama for structured data extraction with Pydantic-validated outputs.",
        "Designed and operates a private-cloud homelab: a self-hosted hypervisor fleet, Kubernetes cluster, and distributed storage backend running production-grade workloads.",
        "Diagnosed and recovered a distributed storage cluster from a critical failure-domain fault with zero data loss, tuning the storage backend for improved tail latency.",
        "Containerized a client's monolithic application with Docker Compose, giving their team a reproducible local development environment for the first time.",
        "Grew into full-stack WordPress delivery, building custom plugins and structured content models with Advanced Custom Fields.",
        "Delivered pixel-perfect WordPress front-ends and SEO-driven implementations for medical marketing clients, translating design comps into production sites."
      ]
    },
    {
      "name": "Clear Software for Good",
      "position": "Creative Developer",
      "location": "Minneapolis, MN",
      "startDate": "2010-04",
      "endDate": "2012-05",
      "summary": "Front-end and creative development for WordPress and Ruby on Rails applications.",
      "highlights": [
        "Delivered front-end implementations and graphics-heavy interfaces for WordPress and Ruby on Rails applications, building interactive components and shared UI patterns.",
        "Operated Capistrano-driven deployment pipelines and Git-based workflows — first exposure to automated deployment."
      ]
    }
  ],
  "education": [
    {
      "institution": "Minneapolis College of Art and Design",
      "location": "Minneapolis, MN",
      "studyType": "B.F.A.",
      "area": "Web & Screen Environments",
      "endDate": "2020",
      "x_summary": "Blended design, typography, and interactive media with full-stack web development; Teaching Assistant and Instructor, Summer Expressions Session."
    }
  ],
  "volunteer": [
    {
      "organization": "Little Sand Lake Area Association",
      "position": "Webmaster & IT Specialist",
      "x_tag": "Volunteer",
      "startDate": "2018-04",
      "endDate": "",
      "summary": "Built member subscription infrastructure for a lakeshore nonprofit, integrating Stripe with a WordPress front end to accept online dues for the first time; migrated the organization from one-off payments to recurring subscriptions, standing up a member database and onboarding the full membership (~150 properties) onto it. Also provides technology leadership to the Board and executive team, and implemented nonprofit cloud grants, multi-cloud disaster recovery, and real-time availability monitoring."
    },
    {
      "organization": "Little Sand Bay Villas",
      "position": "Vice President",
      "x_tag": "Volunteer",
      "startDate": "2025",
      "endDate": "",
      "summary": "Provides technology leadership, administers the community Google Group, and supports members with technology needs."
    }
  ],
  "meta": {
    "canonical": "https://resume.jacobnollette.com/resume.json",
    "version": "3.1.0",
    "lastModified": "2026-09-02",
    "theme": "traditional",
    "x_extensions": {
      "basics.x_summaryBullets": "Optional array of strings rendered as the Summary section's bullet list, in place of basics.summary (which stays as a single-paragraph fallback and for machine-readable/ATS consumers).",
      "work[].highlights[]": "Array of plain strings rendered as bullet points under a role.",
      "education[].x_summary": "Free-text supplemental description (not part of the canonical JSON Resume education object).",
      "volunteer[].x_tag": "Short parenthetical label rendered next to the position, e.g. \"Volunteer\" or \"Side Project\".",
      "empty endDate": "An empty-string endDate denotes a present/ongoing role and renders as \"Present\"."
    }
  }
};
