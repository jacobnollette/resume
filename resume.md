# Jacob Nollette
Minneapolis, MN • jacob@jacobnollette.com • 952-428-9199 • jacobnollette.com

Platform Engineer and DevOps specialist with 5+ years of production experience building internal developer platforms, CI/CD pipelines, and cloud infrastructure. Reduced deployment time by 96% (full days → 13 minutes) across 15+ microservices at TSI. Deep background in Kubernetes, Terraform, GitHub Actions, GitLab CI, and developer experience tooling. Hands-on with AI/agent infrastructure — running Ollama, n8n, and RAG pipelines in production. Remote-first, immediately available.

---

## CORE COMPETENCIES

**CI/CD & Developer Experience:** GitHub Actions, GitLab CI/CD, Jenkins (MPL Shared Library/Groovy), Docker, trunk-based development, parameterized pipelines, containerized build agents, artifact management (JFrog Artifactory), Packer VM builds.

**Cloud & Infrastructure:** GCP (primary), AWS, Azure, Terraform, CloudFormation, Kubernetes (GKE, EKS, KubeSpray/bare-metal), Proxmox, Hyper-V, DigitalOcean, Hetzner.

**Platform Engineering:** Internal developer platforms, Go CLI tooling, standardized dev environments, GitOps (ArgoCD), IaC-first deployments, VM appliance packaging (multi-hypervisor targets), self-service infrastructure patterns.

**Networking & Security:** IAM/SSO/MFA (Okta, Duo, TOTP), supply-chain scanning (JFrog X-Ray), SonarQube SAST, zero-trust networking (Tailscale, Cloudflare Tunnels), HAProxy, NGINX/WAF, pfSense, OWASP hardening, Vault.

**AI & Agents:** Ollama (Open WebUI), n8n (RAG pipelines, multi-agent orchestration), Claude, Gemini, GitHub Copilot, Playwright/Crawl4AI web automation, Go-based webhook load testing, Pydantic-validated structured outputs.

**Storage & Data:** Ceph (CRUSH rules, BlueStore/OSD tuning), ZFS (ARC/log/meta tuning), MinIO (S3/IAM), MySQL/Postgres/MSSQL orchestration, DR automation, tiered storage, real-time sync pipelines.

**Programming & Scripting:** Go, Bash, Groovy, Python, JavaScript, PowerShell, PHP.

**Observability & SRE:** Prometheus, Grafana, Loki, SLOs, structured alerting, DR automation, blameless incident response.

---

## PROFESSIONAL EXPERIENCE

### Platform / DevOps Engineer — North Shore Automation
*Los Angeles, CA (Remote) • 2022 (Jan) – Present*

Fractional DevOps consultant modernizing CI/CD and platform infrastructure for media and studio workflow clients.

- Diagnosed SWE bottlenecks and rewrote pipelines to be vendor-agnostic (GitLab ↔ GitHub Actions); orchestrated company-wide migration to GitHub Actions, consolidating downstream repos into monorepos/monopipelines for improved artifact traceability.
- Built a CLI toolset for deploying studio/media workflow microservices with Docker Compose across compute and NAS nodes, backed by versioned CI artifacts (GitHub Actions); deployment engineers install, upgrade, backup, and manage dependencies without touching raw manifests.
- Built a Bash + Docker appliance and CLI for on-prem media-management stacks; packaged ops tasks including backup/restore, blue-green upgrades, health checks, and safe power cycles.
- Hardened NGINX load balancers against OWASP Top 10 (rate-limiting, strict TLS, header sanitation).
- Authored a Go-based n8n webhook load-tester to benchmark scaling behavior and quantify database backend trade-offs under controlled RPS.
- Terraformed AWS for turn-key DAM environments; produced Rocky Linux/Ubuntu VMDKs for VMware, Proxmox, and AWS EC2.

---

### DevOps Engineer — TSI Inc.
*Shoreview, MN • 2022 (Feb) – 2026 (Mar)*

Owned platform engineering and CI/CD for a cloud-native SaaS company. Built and maintained internal developer tooling, Kubernetes infrastructure, and security-first deployment pipelines across four GCP projects.

**CI/CD & Release Engineering**

- **Cut deployment time 96%** — rebuilt CI/CD for 15+ microservices using GitHub Actions, Jenkins, Docker, and Bash; converged 15 discrete pipelines into a single trunk-based pipeline spanning four GCP projects. Full rollout: 13 minutes end-to-end.
  - *How:* Jenkins MPL Shared Library (Groovy) for DRY stages (build → test → scan → artifact → deploy); containerized build agents; parameterized pipelines for env-specific promotion with guarded approvals.
  - *Security/Quality gates:* JFrog X-Ray supply-chain scanning + SonarQube SAST; build-blocking on critical findings.
- Built a **Go-based CLI** to spin up a standardized Docker development shell with baked-in env/creds — enabling reproducible local deploys that mirror CI environments exactly.

**Platform Engineering & Kubernetes**

- Provisioned Kubernetes microservices and CronJobs via Terraform and OCI images; standardized image baselines and deployment variables to eliminate environment drift.
- Delivered Retool as a version-controlled VM appliance: Git-synced read-only config, CI/CD image baking, and runbooks for tenant-specific deployments.
- Enabled Retool to safely interface with an air-gapped IoT monitoring network (Linux/Postgres): parallel subnet design, VPN-gated egress, and strict ACLs preserving isolation.
- Managed Windows dev/QA fleets: patch management, always-on stability, and deprecation coordination across rolling software cycles.
- Hyper-V/VMware/Proxmox packaging for internal appliances — build once, publish to multiple hypervisor targets.

**Security, SSO/MFA & SRE**

- Launched MFA across all cloud vendors and enforced SSO via domain controller; reduced access-review and termination effort significantly.
- Hunted and reduced supply-chain vulnerabilities with Artifactory/X-Ray; formalized recurring maintenance jobs to prevent drift.
- Owned disaster-recovery automation for Jira/Confluence/Bitbucket: scheduled exports, tested restores, and infrastructure runbooks.

---

### Systems Engineer — LuminFire
*Minneapolis, MN • 2018 (Jan) – 2022 (Feb)*

Introduced modern CI/DevOps practices at a Minneapolis agency; owned GitLab platform and AWS infrastructure for the company's full WordPress portfolio.

- Led migration from Bitbucket Cloud → self-hosted GitLab (Bash automation); integrated object storage and OpenSearch/Elastic for deep code search.
- Scaled GitLab via object storage migration, instance right-sizing, and IOPS tuning.
- Authored AWS CloudFormation templates to assemble standardized "build boxes" from native services (CodeCommit, Secrets Manager, Session Manager, EC2, RDS, S3).
- Implemented TrueNAS (ZFS) with automated DR snapshots/scrubs to protect creative assets from bit-rot.
- Rolled out Duo MFA, Jamf MDM, and VPN to enable zero-trust remote work (2020).
- Built custom WordPress/front-end components (CSS/JS) with emphasis on performance and pixel accuracy.

---

### Principal — jacobnollette.com LLC / Self-Hosting Lab
*Minneapolis, MN • 2005 (Jan) – Present*

20-year practice spanning client consulting (2011–2018: WordPress, front-end, CMS delivery) and an ongoing R&D homelab for production-grade DevOps, AI/agent infrastructure, and reliability engineering patterns.

**AI, Agents & Agentic Orchestration**

- Orchestrate multi-agent development workflows coordinating concurrent Claude, Gemini, and Codex agents across projects; work state persists in git-worktree-backed hooks enabling agents to resume across sessions.
- Built an agentic web scraper using Playwright (browser automation), Crawl4AI (pipeline orchestration), and Ollama (local LLM inference) for structured data extraction; validated with Pydantic schemas.
- Deployed and administered high-performance n8n for AI assistant automation; built compound RAG pipelines, structured agent inputs with JavaScript, and webhook/agent load-tested with a custom Go tool.

**Infrastructure & Platform**

- Designed and operated a private-cloud homelab: Proxmox virtualization, Kubernetes (KubeSpray/Ansible), and Ceph-backed storage (CephFS/RBD) with custom CRUSH rules.
- Ceph reliability engineering: corrected OSD/FSID collision; re-laid BlueStore with 250GB block.db on NVMe (moving RocksDB off HDDs); updated CRUSH for host/device-class failure domains; restored healthy PG states and improved tail latency.
- Built secure data/storage services with MinIO on CephFS: scoped S3 IAM policies, lifecycle/retention automation, and real-time sync pipelines (Syncthing/Resilio/RClone CronJobs).
- Implemented zero-exposure networking: Cloudflare Tunnels, Tailscale mesh, HAProxy L4/L7 load balancing.
- Ran GPU-accelerated AI/agent workloads (n8n, Ollama) and multi-node media ingest/transcoding (NVENC, Tdarr).

---

### Webmaster & Tech Consultant — Little Sand Lake Area Association
*Dorset, MN (Side project) • 2018 (Apr) – Present*

- Designed and built a WordPress member portal with Gravity Forms/GravityKit + Stripe recurring subscriptions; eliminated manual annual dues collection for ~150 properties.
- Secured hyperscale nonprofit cloud grants; drove hosting costs near zero; implemented multi-cloud DR and real-time canary/availability monitoring.
- Created searchable, map-based GIS directory from county records; applied AI tooling to transcribe and archive quarterly board meetings.

---

### Webmaster — Steiger Heritage Club
*Minnesota (Side project) • 2021 (Aug) – Present*

- Stood up WordPress hosting stack on Azure Nonprofit Cloud; designed visual identity system and launched organization's initial web presence.
- Remediated DDoS attack; tuned WAF to stabilize public-facing endpoints.

---

### Creative Developer — Clear Software for Good
*Minnesota • 2010 (Apr) – 2012 (May)*

WordPress front-end developer collaborating with Ruby on Rails teams; operated Capistrano deployment pipelines; built interactive UI components and visual design assets.

---

## SELECTED DEEP-DIVE HIGHLIGHTS

**13-minute trunk-based multi-project deploy (GCP):** Single pipeline orchestrating 15+ microservices across 4 GCP projects — Groovy DRY stages → Docker build → unit test → X-Ray/SonarQube → artifact publish → Terraform apply; per-env promotion with guarded approvals.

**Developer environment standardization (Go CLI):** Built a Go CLI that spins up a standardized Docker dev shell with baked-in env/creds — any engineer on any machine gets a reproducible environment that mirrors CI exactly. Eliminated onboarding environment drift.

**Studio workflow deployment CLI (North Shore Automation):** Bash + Docker Compose CLI toolkit spanning compute and NAS nodes, consuming versioned GitHub Actions build artifacts. Deployment engineers run declarative commands for install, blue-green upgrades, cron backup scheduling, and dependency management — abstracting compose topology entirely.

**Ceph cluster reliability engineering:** Multi-node cluster across failure domains with CRUSH rules and device-class separation. Recovered from OSD/FSID collision, re-laid BlueStore with NVMe block.db, restored healthy PG states, improved tail latency. Built observability around cluster health, recovery events, and capacity planning.

**Air-gapped IoT data access (Retool):** Designed network architecture for safe read access to an air-gapped industrial monitoring network — parallel subnet, VPN-gated egress, strict ACLs, principle-of-least-privilege role-scoped queries.

---

## EDUCATION

**B.F.A., Web & Screen Environments** — Minneapolis College of Art and Design (2020)

Blended design, typography, and interactive media with full-stack web development. TA and Instructor, Summer Expressions Session.
