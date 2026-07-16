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
    "summary": "Platform and enterprise tooling engineer with 8+ years implementing, integrating, and administering engineering platforms end to end — GitHub, GitLab (self-hosted), Atlassian (Jira/Confluence/Bitbucket), Retool, JFrog Artifactory, and SonarQube. Hands-on across the AI tooling ecosystem: Ollama, n8n, RAG pipelines, and multi-agent orchestration (Claude, Gemini, Copilot) running in production. Measures and improves delivery performance — cut deployment time 96% (full days → 13 minutes) across 15+ microservices at TSI. Strong REST API, webhook, SQL, SSO/SAML, and Terraform integration skills. Minneapolis-based, available for hybrid on-site, immediately available.",
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
        "Terraform",
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
      "name": "Networking & Security",
      "keywords": [
        "IAM, SSO/SAML, MFA (Okta, Duo, TOTP)",
        "Supply-chain scanning (JFrog X-Ray)",
        "SonarQube SAST",
        "Zero-trust networking (Tailscale, Cloudflare Tunnels)",
        "HAProxy",
        "NGINX/WAF",
        "pfSense",
        "OWASP hardening",
        "Vault"
      ]
    },
    {
      "name": "AI & Agents",
      "keywords": [
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
      "name": "North Shore Automation",
      "position": "Platform / DevOps Engineer",
      "location": "Los Angeles, CA (Remote)",
      "startDate": "2022-01",
      "endDate": "",
      "summary": "Fractional DevOps consultant modernizing CI/CD and platform infrastructure for media and studio workflow clients.",
      "highlights": [
        "Diagnosed SWE bottlenecks and rewrote pipelines to be vendor-agnostic (GitLab ↔ GitHub Actions); orchestrated company-wide migration to GitHub Actions — org-level repository and Actions administration — consolidating downstream repos into monorepos/monopipelines for improved artifact traceability.",
        "Built a CLI toolset for deploying studio/media workflow microservices with Docker Compose across compute and NAS nodes, backed by versioned CI artifacts (GitHub Actions); deployment engineers install, upgrade, backup, and manage dependencies without touching raw manifests.",
        "Built a Bash + Docker appliance and CLI for on-prem media-management stacks; packaged ops tasks including backup/restore, blue-green upgrades, health checks, and safe power cycles.",
        "Hardened NGINX load balancers against OWASP Top 10 (rate-limiting, strict TLS, header sanitation).",
        "Authored a Go-based n8n webhook load-tester to benchmark scaling behavior and quantify database backend trade-offs under controlled RPS.",
        "Terraformed AWS for turn-key DAM environments; produced Rocky Linux/Ubuntu VMDKs for VMware, Proxmox, and AWS EC2."
      ]
    },
    {
      "name": "TSI Inc.",
      "position": "DevOps Engineer",
      "location": "Shoreview, MN",
      "startDate": "2022-02",
      "endDate": "2026-03",
      "summary": "Owned platform engineering, CI/CD, and enterprise tooling for a cloud-native SaaS company. Implemented, integrated, and administered developer platforms — GitHub, Jenkins, Atlassian, Retool, Artifactory, SonarQube — plus Kubernetes infrastructure and security-first deployment pipelines across four GCP projects.",
      "x_groups": [
        {
          "name": "CI/CD & Release Engineering",
          "highlights": [
            {
              "text": "Cut deployment time 96% — rebuilt CI/CD for 15+ microservices using GitHub Actions, Jenkins, Docker, and Bash; converged 15 discrete pipelines into a single trunk-based pipeline spanning four GCP projects. Full rollout: 13 minutes end-to-end.",
              "notes": [
                "How: Jenkins MPL Shared Library (Groovy) for DRY stages (build → test → scan → artifact → deploy); containerized build agents; parameterized pipelines for env-specific promotion with guarded approvals.",
                "Security/Quality gates: JFrog X-Ray supply-chain scanning + SonarQube SAST; build-blocking on critical findings."
              ]
            },
            "Built a Go-based CLI to spin up a standardized Docker development shell with baked-in env/creds — enabling reproducible local deploys that mirror CI environments exactly."
          ]
        },
        {
          "name": "Enterprise Tooling & Platform Engineering",
          "highlights": [
            "Implemented Retool end to end — initial setup through production rollout: version-controlled Git-synced configuration, CI/CD image baking, role-scoped permissions and user access management, and tenant-onboarding runbooks.",
            "Enabled Retool to safely interface with an air-gapped IoT monitoring network (Linux/Postgres): parallel subnet design, VPN-gated egress, and strict ACLs preserving isolation.",
            "Deployed a database-driven application on GCP end to end: Terraform-orchestrated networking and Cloud SQL (MySQL/SQL Server) provisioning, with automated database snapshots and disaster-recovery orchestration.",
            "Provisioned Kubernetes microservices and CronJobs via Terraform and OCI images; standardized image baselines and deployment variables to eliminate environment drift.",
            "Managed Windows dev/QA fleets: patch management, always-on stability, and deprecation coordination across rolling software cycles.",
            "Hyper-V/VMware/Proxmox packaging for internal appliances — build once, publish to multiple hypervisor targets."
          ]
        },
        {
          "name": "Security, SSO/SAML & Tool Administration",
          "highlights": [
            "Implemented SSO/SAML and MFA across all cloud vendors, enforced via domain controller; streamlined the user-access lifecycle — provisioning, access reviews, and terminations.",
            "Administered the Atlassian ecosystem (Jira, Confluence, Bitbucket): disaster-recovery automation with scheduled exports and tested restores, plus infrastructure runbooks and lifecycle maintenance.",
            "Hunted and reduced supply-chain vulnerabilities with Artifactory/X-Ray; formalized recurring maintenance jobs to prevent drift."
          ]
        }
      ]
    },
    {
      "name": "LuminFire",
      "position": "Systems Engineer",
      "location": "Minneapolis, MN",
      "startDate": "2018-01",
      "endDate": "2022-02",
      "summary": "Introduced modern CI/DevOps practices at a Minneapolis agency; owned GitLab platform and AWS infrastructure for the company's full WordPress portfolio.",
      "highlights": [
        "Implemented and administered self-hosted GitLab for the company's full portfolio: led the migration from Bitbucket Cloud (Bash automation); integrated object storage and OpenSearch/Elastic for deep code search.",
        "Scaled GitLab via object storage migration, instance right-sizing, and IOPS tuning.",
        "Authored AWS CloudFormation templates to assemble standardized \"build boxes\" from native services (CodeCommit, Secrets Manager, Session Manager, EC2, RDS, S3).",
        "Implemented TrueNAS (ZFS) with automated DR snapshots/scrubs to protect creative assets from bit-rot.",
        "Rolled out Duo MFA, Jamf MDM, and VPN to enable zero-trust remote work (2020).",
        "Built custom WordPress/front-end components (CSS/JS) with emphasis on performance and pixel accuracy."
      ]
    },
    {
      "name": "jacobnollette.com LLC / Self-Hosting Lab",
      "position": "Principal",
      "location": "Minneapolis, MN",
      "startDate": "2005-01",
      "endDate": "",
      "summary": "20-year practice spanning client consulting (2011–2018: WordPress, front-end, CMS delivery) and an ongoing R&D homelab for production-grade DevOps, AI/agent infrastructure, and reliability engineering patterns.",
      "x_groups": [
        {
          "name": "AI, Agents & Agentic Orchestration",
          "highlights": [
            "Orchestrate multi-agent development workflows coordinating concurrent Claude, Gemini, and Codex agents across projects; work state persists in git-worktree-backed hooks enabling agents to resume across sessions.",
            "Built an agentic web scraper using Playwright (browser automation), Crawl4AI (pipeline orchestration), and Ollama (local LLM inference) for structured data extraction; validated with Pydantic schemas.",
            "Deployed and administered high-performance n8n for AI assistant automation; built compound RAG pipelines, structured agent inputs with JavaScript, and webhook/agent load-tested with a custom Go tool."
          ]
        },
        {
          "name": "Infrastructure & Platform",
          "highlights": [
            "Designed and operated a private-cloud homelab: Proxmox virtualization, Kubernetes (KubeSpray/Ansible), and Ceph-backed storage (CephFS/RBD) with custom CRUSH rules.",
            "Ceph reliability engineering: corrected OSD/FSID collision; re-laid BlueStore with 250GB block.db on NVMe (moving RocksDB off HDDs); updated CRUSH for host/device-class failure domains; restored healthy PG states and improved tail latency.",
            "Built secure data/storage services with MinIO on CephFS: scoped S3 IAM policies, lifecycle/retention automation, and real-time sync pipelines (Syncthing/Resilio/RClone CronJobs).",
            "Implemented zero-exposure networking: Cloudflare Tunnels, Tailscale mesh, HAProxy L4/L7 load balancing.",
            "Ran GPU-accelerated AI/agent workloads (n8n, Ollama) and multi-node media ingest/transcoding (NVENC, Tdarr)."
          ]
        }
      ]
    },
    {
      "name": "Little Sand Lake Area Association",
      "position": "Webmaster & Tech Consultant",
      "location": "Dorset, MN (Side project)",
      "startDate": "2018-04",
      "endDate": "",
      "highlights": [
        "Designed and built a WordPress member portal with Gravity Forms/GravityKit + Stripe recurring subscriptions; eliminated manual annual dues collection for ~150 properties.",
        "Secured hyperscale nonprofit cloud grants; drove hosting costs near zero; implemented multi-cloud DR and real-time canary/availability monitoring.",
        "Created searchable, map-based GIS directory from county records; applied AI tooling to transcribe and archive quarterly board meetings."
      ]
    },
    {
      "name": "Steiger Heritage Club",
      "position": "Webmaster",
      "location": "Minnesota (Side project)",
      "startDate": "2021-08",
      "endDate": "",
      "highlights": [
        "Stood up WordPress hosting stack on Azure Nonprofit Cloud; designed visual identity system and launched organization's initial web presence.",
        "Remediated DDoS attack; tuned WAF to stabilize public-facing endpoints."
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
  "projects": [
    {
      "name": "13-minute trunk-based multi-project deploy (GCP)",
      "description": "Single pipeline orchestrating 15+ microservices across 4 GCP projects — Groovy DRY stages → Docker build → unit test → X-Ray/SonarQube → artifact publish → Terraform apply; per-env promotion with guarded approvals."
    },
    {
      "name": "Developer environment standardization (Go CLI)",
      "description": "Built a Go CLI that spins up a standardized Docker dev shell with baked-in env/creds — any engineer on any machine gets a reproducible environment that mirrors CI exactly. Eliminated onboarding environment drift."
    },
    {
      "name": "Studio workflow deployment CLI (North Shore Automation)",
      "description": "Bash + Docker Compose CLI toolkit spanning compute and NAS nodes, consuming versioned GitHub Actions build artifacts. Deployment engineers run declarative commands for install, blue-green upgrades, cron backup scheduling, and dependency management — abstracting compose topology entirely."
    },
    {
      "name": "Ceph cluster reliability engineering",
      "description": "Multi-node cluster across failure domains with CRUSH rules and device-class separation. Recovered from OSD/FSID collision, re-laid BlueStore with NVMe block.db, restored healthy PG states, improved tail latency. Built observability around cluster health, recovery events, and capacity planning."
    },
    {
      "name": "Terraform-orchestrated Cloud SQL DR (GCP)",
      "description": "Deployed a database-driven application in Google Cloud with Terraform orchestrating networking and Cloud SQL (MySQL/SQL Server) provisioning; automated database snapshots and disaster-recovery workflows for tested, repeatable restores."
    },
    {
      "name": "Air-gapped IoT data access (Retool)",
      "description": "Designed network architecture for safe read access to an air-gapped industrial monitoring network — parallel subnet, VPN-gated egress, strict ACLs, principle-of-least-privilege role-scoped queries."
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
    "version": "2.0.0",
    "lastModified": "2026-07-16",
    "theme": "json-editorial",
    "x_extensions": {
      "work[].x_groups": "Optional array of { name, highlights[] } used when a role's bullets are organized under sub-headings. When present, render in place of (or alongside) work[].highlights.",
      "work[].highlights[]": "Each entry is either a plain string or an object { text, notes[] } where notes[] are indented sub-bullets under the main highlight.",
      "education[].x_summary": "Free-text supplemental description (not part of the canonical JSON Resume education object).",
      "empty endDate": "An empty-string endDate denotes a present/ongoing role and renders as \"Present\"."
    }
  }
};
