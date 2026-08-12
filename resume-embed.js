// AUTO-GENERATED from resume.json by build-embed.js — do not edit by hand.
window.__RESUME__ = {
  "$schema": "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
  "basics": {
    "name": "Jacob Nollette",
    "label": "Platform Engineer & Enterprise Tooling Specialist",
    "image": "./headshot.png",
    "email": "jacob@jacobnollette.com",
    "phone": "952-428-9199",
    "url": "https://jacobnollette.com",
    "summary": "Platform and enterprise tooling engineer with 16+ years in technology — including 8+ years focused on platform and DevOps engineering — and a proven track record of turning slow, manual delivery into fast, secure, self-service platforms — GitHub, GitLab, Atlassian (Jira/Confluence/Bitbucket), Retool, JFrog Artifactory, and SonarQube, implemented and administered end to end. Track record: cut deployment time 96% (full days to 13 minutes) across 15+ microservices at TSI; recovered a production Ceph cluster from a failure-domain collision with zero data loss; eliminated manual dues collection for ~150 properties with a self-service member portal. Builds cloud security engineering into every platform delivered — automated policy gates, zero-trust network architecture, and IAM governance that reduces standing access risk. Directs and reviews multi-agent AI engineering workflows (Claude, Gemini, Copilot) in production, from task delegation through review to merge. Strong REST API, SQL, SSO/SAML, and Terraform skills. Minneapolis-based, available for hybrid on-site, immediately available.",
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
      "name": "Enterprise Tooling & Integrations",
      "keywords": [
        "End-to-end tool implementation & rollout",
        "GitHub / GitHub Actions administration",
        "GitLab administration (self-hosted)",
        "Atlassian (Jira, Confluence, Bitbucket)",
        "Retool",
        "REST APIs & webhooks",
        "SQL (MySQL, Postgres, MSSQL)",
        "SSO/SAML & user access management",
        "Dashboards & KPI reporting",
        "Team onboarding, runbooks & documentation"
      ]
    },
    {
      "name": "Cloud Security Engineering",
      "keywords": [
        "Zero-trust network architecture (Tailscale, Cloudflare Tunnels, HAProxy, pfSense)",
        "Automated policy enforcement (JFrog X-Ray, SonarQube SAST — build-blocking on critical findings)",
        "IAM governance & access risk reduction (SSO/SAML, MFA, access lifecycle)",
        "NGINX/WAF, OWASP hardening",
        "Secrets management (Vault)"
      ]
    },
    {
      "name": "CI/CD & Developer Experience",
      "keywords": [
        "GitHub Actions",
        "GitLab CI/CD",
        "Jenkins (MPL Shared Library/Groovy)",
        "Docker",
        "Trunk-based development",
        "Parameterized pipelines",
        "Containerized build agents",
        "Artifact management (JFrog Artifactory)",
        "Packer VM builds"
      ]
    },
    {
      "name": "Cloud & Infrastructure",
      "keywords": [
        "GCP (primary)",
        "AWS",
        "Azure",
        "Terraform (reusable, standardized secure deployment modules)",
        "CloudFormation",
        "Kubernetes (GKE, EKS, KubeSpray/bare-metal)",
        "Proxmox",
        "Hyper-V",
        "DigitalOcean",
        "Hetzner"
      ]
    },
    {
      "name": "Platform Engineering",
      "keywords": [
        "Internal developer platforms",
        "Go CLI tooling",
        "Standardized dev environments",
        "GitOps (ArgoCD)",
        "IaC-first deployments",
        "VM appliance packaging (multi-hypervisor targets)",
        "Self-service infrastructure patterns"
      ]
    },
    {
      "name": "AI & Agents",
      "keywords": [
        "Multi-agent workflow leadership (task delegation, review, merge)",
        "Ollama (Open WebUI)",
        "n8n (RAG pipelines, multi-agent orchestration)",
        "Claude",
        "Gemini",
        "GitHub Copilot",
        "Playwright/Crawl4AI web automation",
        "Go-based webhook load testing",
        "Pydantic-validated structured outputs",
        "AI tooling evaluation & administration"
      ]
    },
    {
      "name": "Storage & Data",
      "keywords": [
        "Ceph (CRUSH rules, BlueStore/OSD tuning)",
        "ZFS (ARC/log/meta tuning)",
        "MinIO (S3/IAM)",
        "GCP Cloud SQL DR orchestration (MySQL, SQL Server)",
        "MySQL/Postgres/MSSQL",
        "DR automation",
        "Tiered storage",
        "Real-time sync pipelines"
      ]
    },
    {
      "name": "Programming & Scripting",
      "keywords": [
        "Go",
        "Bash",
        "Groovy",
        "Python",
        "JavaScript",
        "PowerShell",
        "PHP"
      ]
    },
    {
      "name": "Observability & SRE",
      "keywords": [
        "SLOs",
        "Structured alerting",
        "DR automation",
        "Blameless incident response"
      ]
    }
  ],
  "work": [
    {
      "name": "TSI Inc.",
      "position": "DevOps Engineer",
      "location": "Shoreview, MN",
      "startDate": "2022-02",
      "endDate": "2026-03",
      "summary": "Owned platform engineering, CI/CD, and enterprise tooling for a cloud-native SaaS company, with a track record of measurable delivery gains: implemented, integrated, and administered developer platforms — GitHub, Jenkins, Atlassian, Retool, Artifactory, SonarQube — plus Kubernetes infrastructure and security-first deployment pipelines across four GCP projects.",
      "x_groups": [
        {
          "name": "CI/CD & Release Engineering",
          "highlights": [
            {
              "text": "Cut deployment time 96% — rebuilt CI/CD for 15+ microservices using GitHub Actions, Jenkins, Docker, and Bash; converged 15 discrete pipelines into a single trunk-based pipeline spanning four GCP projects. Full rollout: 13 minutes end-to-end.",
              "notes": [
                "How: Jenkins MPL Shared Library (Groovy) for DRY stages (build, test, scan, artifact, deploy) with containerized, parameterized pipelines and guarded approvals; JFrog X-Ray and SonarQube SAST gate deployment on critical findings — a policy-as-code compliance pattern."
              ]
            },
            "Built a Go-based CLI to spin up a standardized Docker development shell with baked-in env/creds — enabling reproducible local deploys that mirror CI environments exactly."
          ]
        },
        {
          "name": "Enterprise Tooling & Platform Engineering",
          "highlights": [
            "Took Retool from zero to production rollout end to end: version-controlled Git-synced configuration, CI/CD image baking, role-scoped permissions and user access management, and tenant-onboarding runbooks.",
            "Delivered safe Retool access to an air-gapped IoT monitoring network (Linux/Postgres) with zero isolation compromise: parallel subnet design, VPN-gated egress, and strict ACLs.",
            "Delivered a production database-driven application on GCP end to end: Terraform-orchestrated networking and Cloud SQL (MySQL/SQL Server) provisioning, with automated database snapshots and disaster-recovery orchestration.",
            "Eliminated environment drift across Kubernetes deployments by building reusable, standardized Terraform modules provisioning microservices and CronJobs with locked-down OCI image baselines — a secure-by-default deployment pattern."
          ]
        },
        {
          "name": "Security & IAM Governance",
          "highlights": [
            "Led IAM governance and access-risk reduction: implemented SSO/SAML and MFA across all cloud vendors, enforced via domain controller; owned the user-access lifecycle — provisioning, access reviews, and terminations — to minimize standing access risk.",
            "Administered the Atlassian ecosystem (Jira, Confluence, Bitbucket): disaster-recovery automation with scheduled exports and tested restores, plus infrastructure runbooks and lifecycle maintenance."
          ]
        }
      ]
    },
    {
      "name": "North Shore Automation",
      "position": "Platform / DevOps Engineer (Part-time)",
      "location": "Los Angeles, CA (Remote)",
      "startDate": "2022-01",
      "endDate": "2026-01",
      "summary": "Fractional, part-time DevOps consultant with a track record of modernizing CI/CD and platform infrastructure for media and studio workflow clients — cutting vendor lock-in, manual ops toil, and deployment risk.",
      "highlights": [
        "Eliminated vendor lock-in and improved artifact traceability: diagnosed SWE delivery bottlenecks, rewrote pipelines to be vendor-agnostic (GitLab and GitHub Actions), and led the company-wide migration to GitHub Actions — org-level repository and Actions administration — consolidating downstream repos into monorepos/monopipelines.",
        "Removed manifest-level ops risk from deployments: built a CLI toolset for deploying studio/media workflow microservices with Docker Compose across compute and NAS nodes, backed by versioned CI artifacts (GitHub Actions), so deployment engineers install, upgrade, backup, and manage dependencies without touching raw manifests.",
        "Closed OWASP Top 10 exposure on public-facing infrastructure by hardening NGINX load balancers (rate-limiting, strict TLS, header sanitation) — cloud security engineering built into the platform work.",
        "Delivered turn-key DAM environments on AWS via Terraform; produced Rocky Linux/Ubuntu VMDKs portable across VMware, Proxmox, and AWS EC2."
      ]
    },
    {
      "name": "LuminFire",
      "position": "Systems Engineer",
      "location": "Minneapolis, MN",
      "startDate": "2018-01",
      "endDate": "2022-02",
      "summary": "Introduced modern CI/DevOps practices at a Minneapolis agency, with a track record of platform migrations that scaled cleanly — owned GitLab platform and AWS infrastructure for the company's full WordPress portfolio.",
      "highlights": [
        "Led the company's full portfolio onto self-hosted GitLab — migrated off Bitbucket Cloud (Bash automation), then scaled via object storage migration, instance right-sizing, and IOPS tuning as adoption grew portfolio-wide.",
        "Built blue-green deployment infrastructure on AWS EC2 via declarative CloudFormation templates — standardized, repeatable Infrastructure-as-Code provisioning across production and development environments.",
        "Enabled zero-trust remote work (2020) by rolling out Duo MFA, Jamf MDM, and VPN."
      ]
    },
    {
      "name": "jacobnollette.com LLC / Self-Hosting Lab",
      "position": "Principal",
      "location": "Minneapolis, MN",
      "startDate": "2005-01",
      "endDate": "",
      "summary": "20-year practice with a track record spanning client consulting (2011–2018: WordPress, front-end, CMS delivery) and an ongoing R&D homelab that proves out production-grade DevOps, AI/agent infrastructure, and reliability engineering patterns.",
      "x_groups": [
        {
          "name": "AI, Agents & Agentic Orchestration",
          "highlights": [
            "Directs and reviews multi-agent engineering workflows in production — delegating implementation work to concurrent Claude, Gemini, and Codex agents, then reviewing and merging their output to a production quality bar; work state persists in git-worktree-backed hooks so agents resume across sessions.",
            "Built an agentic web scraper on Playwright (browser automation), Crawl4AI (pipeline orchestration), and Ollama (local LLM inference) for structured data extraction at scale; validated with Pydantic schemas."
          ]
        },
        {
          "name": "Infrastructure & Platform",
          "highlights": [
            "Designed and operated a private-cloud homelab: Proxmox virtualization, Kubernetes (KubeSpray/Ansible), and Ceph-backed storage (CephFS/RBD) with custom CRUSH rules.",
            "Ceph reliability engineering: corrected an OSD/FSID collision, re-laid BlueStore with NVMe block.db, restored healthy PG states, and improved tail latency.",
            "Cloud security engineering: zero-trust network architecture (Cloudflare Tunnels, Tailscale mesh) and HAProxy L4/L7 load balancing to eliminate exposed attack surface."
          ]
        }
      ]
    },
    {
      "name": "Little Sand Lake Area Association",
      "position": "Webmaster & IT Specialist",
      "location": "Dorset, MN (Volunteer)",
      "startDate": "2018-04",
      "endDate": "",
      "highlights": [
        "Provides ongoing technology leadership consultation to the Board of Directors, executive team, and sub-committees — advising on technology strategy and the automation of business operations.",
        "Designed and built a WordPress member portal (Gravity Forms/GravityKit + Stripe) handling both annual dues collection for ~150 properties and voluntary subscriptions that fund the lake's water-quality monitoring and inspection program.",
        "Secured hyperscale nonprofit cloud grants; drove hosting costs near zero; implemented multi-cloud DR and real-time canary/availability monitoring.",
        "Created a searchable, map-based GIS directory from county records; applied AI tooling to transcribe and archive quarterly board meetings.",
        "Produces the Association's annual live event — live sound and video engineering, live streaming, and YouTube channel management — plus recurring yearly content such as the annual boat parade video."
      ]
    },
    {
      "name": "Little Sand Bay Villas",
      "position": "Vice President",
      "location": "Northern Minnesota (Volunteer)",
      "startDate": "2025",
      "endDate": "",
      "highlights": [
        "Serves as Vice President of the HOA board for a lake community in northern Minnesota; administers the community Google Group and provides hands-on technology support to members, including help getting online.",
        "Maintains physical infrastructure: patches the community's dirt road, handles light electrical work, and services the beach pump system."
      ]
    },
    {
      "name": "Steiger Heritage Club",
      "position": "Webmaster",
      "location": "Minnesota (Side project)",
      "startDate": "2021-08",
      "endDate": "",
      "highlights": [
        "Stood up a WordPress hosting stack on Azure Nonprofit Cloud, designed the organization's visual identity system, and remediated a DDoS attack by tuning WAF to stabilize public-facing endpoints."
      ]
    },
    {
      "name": "Clear Software for Good",
      "position": "Creative Developer",
      "location": "Minnesota",
      "startDate": "2010-04",
      "endDate": "2012-05",
      "summary": "WordPress front-end developer collaborating with Ruby on Rails teams; operated Capistrano deployment pipelines; built interactive UI components and visual design assets.",
      "highlights": []
    }
  ],
  "education": [
    {
      "institution": "Minneapolis College of Art and Design",
      "studyType": "B.F.A.",
      "area": "Web & Screen Environments",
      "endDate": "2020",
      "x_summary": "Blended design, typography, and interactive media with full-stack web development. TA and Instructor, Summer Expressions Session."
    }
  ],
  "meta": {
    "canonical": "https://resume.jacobnollette.com/resume.json",
    "version": "2.1.0",
    "lastModified": "2026-08-11",
    "theme": "json-editorial",
    "x_extensions": {
      "work[].x_groups": "Optional array of { name, highlights[] } used when a role's bullets are organized under sub-headings. When present, render in place of (or alongside) work[].highlights.",
      "work[].highlights[]": "Each entry is either a plain string or an object { text, notes[] } where notes[] are indented sub-bullets under the main highlight.",
      "education[].x_summary": "Free-text supplemental description (not part of the canonical JSON Resume education object).",
      "empty endDate": "An empty-string endDate denotes a present/ongoing role and renders as \"Present\"."
    }
  }
};
