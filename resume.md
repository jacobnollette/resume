# Jacob Nollette
Minneapolis, MN • jacob@jacobnollette.com • 952-428-9199 • jacobnollette.com

Platform and enterprise tooling engineer with 8+ years and a proven track record of turning slow, manual delivery into fast, secure, self-service platforms — GitHub, GitLab (self-hosted), Atlassian (Jira/Confluence/Bitbucket), Retool, JFrog Artifactory, and SonarQube, implemented and administered end to end. Track record: cut deployment time 96% (full days → 13 minutes) across 15+ microservices at TSI; recovered a production Ceph cluster from an OSD/FSID failure-domain collision with restored healthy PG states and improved tail latency; eliminated manual annual dues collection for ~150 properties with a self-service Stripe-backed member portal. Builds cloud security engineering into every platform delivered — automated policy gates that block deployment on critical findings, zero-trust network architecture, and IAM governance that reduces standing access risk. Hands-on across the AI tooling ecosystem: Ollama, n8n, RAG pipelines, and multi-agent orchestration (Claude, Gemini, Copilot) running in production. Strong REST API, webhook, SQL, SSO/SAML, and Terraform integration skills. Actively expanding into policy-as-code and CSPM tooling. Minneapolis-based, available for hybrid on-site, immediately available.

---

## CORE COMPETENCIES

**Enterprise Tooling & Integrations:** End-to-end tool implementation & rollout, GitHub / GitHub Actions administration, GitLab administration (self-hosted), Atlassian (Jira, Confluence, Bitbucket), Retool, REST APIs & webhooks, SQL (MySQL, Postgres, MSSQL), SSO/SAML & user access management, dashboards & KPI reporting, team onboarding, runbooks & documentation.

**Cloud Security Engineering:** Zero-trust network architecture (Tailscale, Cloudflare Tunnels, HAProxy, pfSense), automated policy enforcement (JFrog X-Ray, SonarQube SAST — build-blocking on critical findings), IAM governance & access risk reduction (SSO/SAML, MFA, access lifecycle), NGINX/WAF, OWASP hardening, secrets management (Vault).

**CI/CD & Developer Experience:** GitHub Actions, GitLab CI/CD, Jenkins (MPL Shared Library/Groovy), Docker, trunk-based development, parameterized pipelines, containerized build agents, artifact management (JFrog Artifactory), Packer VM builds.

**Cloud & Infrastructure:** GCP (primary), AWS, Azure, Terraform (reusable, standardized secure deployment modules), CloudFormation, Kubernetes (GKE, EKS, KubeSpray/bare-metal), Proxmox, Hyper-V, DigitalOcean, Hetzner.

**Platform Engineering:** Internal developer platforms, Go CLI tooling, standardized dev environments, GitOps (ArgoCD), IaC-first deployments, VM appliance packaging (multi-hypervisor targets), self-service infrastructure patterns.

**AI & Agents:** Ollama (Open WebUI), n8n (RAG pipelines, multi-agent orchestration), Claude, Gemini, GitHub Copilot, Playwright/Crawl4AI web automation, Go-based webhook load testing, Pydantic-validated structured outputs, AI tooling evaluation & administration.

**Storage & Data:** Ceph (CRUSH rules, BlueStore/OSD tuning), ZFS (ARC/log/meta tuning), MinIO (S3/IAM), GCP Cloud SQL DR orchestration (MySQL, SQL Server), MySQL/Postgres/MSSQL, DR automation, tiered storage, real-time sync pipelines.

**Programming & Scripting:** Go, Bash, Groovy, Python, JavaScript, PowerShell, PHP.

**Observability & SRE:** SLOs, structured alerting, DR automation, blameless incident response.

---

## PROFESSIONAL EXPERIENCE

### DevOps Engineer — TSI Inc.
*Shoreview, MN • 2022 (Feb) – 2026 (Mar)*

Owned platform engineering, CI/CD, and enterprise tooling for a cloud-native SaaS company, with a track record of measurable delivery gains: implemented, integrated, and administered developer platforms — GitHub, Jenkins, Atlassian, Retool, Artifactory, SonarQube — plus Kubernetes infrastructure and security-first deployment pipelines across four GCP projects.

**CI/CD & Release Engineering**

- **Cut deployment time 96%** — rebuilt CI/CD for 15+ microservices using GitHub Actions, Jenkins, Docker, and Bash; converged 15 discrete pipelines into a single trunk-based pipeline spanning four GCP projects. Full rollout: 13 minutes end-to-end.
  - *How:* Jenkins MPL Shared Library (Groovy) for DRY stages (build → test → scan → artifact → deploy); containerized build agents; parameterized pipelines for env-specific promotion with guarded approvals.
  - *Automated security policy enforcement:* JFrog X-Ray supply-chain scanning + SonarQube SAST gating deployment on critical findings — a policy-as-code compliance-gate pattern.
- Built a **Go-based CLI** to spin up a standardized Docker development shell with baked-in env/creds — enabling reproducible local deploys that mirror CI environments exactly.

**Enterprise Tooling & Platform Engineering**

- Took Retool from zero to production rollout end to end: version-controlled Git-synced configuration, CI/CD image baking, role-scoped permissions and user access management, and tenant-onboarding runbooks.
- Delivered safe Retool access to an air-gapped IoT monitoring network (Linux/Postgres) with zero isolation compromise: parallel subnet design, VPN-gated egress, and strict ACLs.
- Delivered a production database-driven application on GCP end to end: Terraform-orchestrated networking and Cloud SQL (MySQL/SQL Server) provisioning, with automated database snapshots and disaster-recovery orchestration.
- Eliminated environment drift across Kubernetes deployments by building reusable, standardized Terraform modules provisioning microservices and CronJobs with locked-down OCI image baselines — a secure-by-default deployment pattern.
- Kept Windows dev/QA fleets always-on and current: patch management, stability ownership, and deprecation coordination across rolling software cycles.
- Cut appliance packaging effort to build-once-publish-many across Hyper-V, VMware, and Proxmox for internal appliances.

**Security & IAM Governance**

- Led IAM governance and access-risk reduction: implemented SSO/SAML and MFA across all cloud vendors, enforced via domain controller; owned the user-access lifecycle — provisioning, access reviews, and terminations — to minimize standing access risk.
- Administered the Atlassian ecosystem (Jira, Confluence, Bitbucket): disaster-recovery automation with scheduled exports and tested restores, plus infrastructure runbooks and lifecycle maintenance.
- Hunted and reduced supply-chain vulnerabilities with Artifactory/X-Ray; formalized recurring maintenance jobs to prevent drift.

---

### Platform / DevOps Engineer — North Shore Automation
*Los Angeles, CA (Remote) • 2022 (Jan) – 2026 (Jan)*

Fractional DevOps consultant with a track record of modernizing CI/CD and platform infrastructure for media and studio workflow clients — cutting vendor lock-in, manual ops toil, and deployment risk.

- Eliminated vendor lock-in and improved artifact traceability: diagnosed SWE delivery bottlenecks, rewrote pipelines to be vendor-agnostic (GitLab ↔ GitHub Actions), and led the company-wide migration to GitHub Actions — org-level repository and Actions administration — consolidating downstream repos into monorepos/monopipelines.
- Removed manifest-level ops risk from deployments: built a CLI toolset for deploying studio/media workflow microservices with Docker Compose across compute and NAS nodes, backed by versioned CI artifacts (GitHub Actions), so deployment engineers install, upgrade, backup, and manage dependencies without touching raw manifests.
- Cut recovery time on on-prem media-management stacks to single commands: built a Bash + Docker appliance and CLI packaging backup/restore, blue-green upgrades, health checks, and safe power cycles.
- Closed OWASP Top 10 exposure on public-facing infrastructure by hardening NGINX load balancers (rate-limiting, strict TLS, header sanitation) — cloud security engineering built into the platform work.
- Gave clients data-driven scaling decisions by authoring a Go-based n8n webhook load-tester to benchmark scaling behavior and quantify database backend trade-offs under controlled RPS.
- Delivered turn-key DAM environments on AWS via Terraform; produced Rocky Linux/Ubuntu VMDKs portable across VMware, Proxmox, and AWS EC2.

---

### Systems Engineer — LuminFire
*Minneapolis, MN • 2018 (Jan) – 2022 (Feb)*

Introduced modern CI/DevOps practices at a Minneapolis agency, with a track record of platform migrations that scaled cleanly — owned GitLab platform and AWS infrastructure for the company's full WordPress portfolio.

- Led the company's full portfolio onto self-hosted GitLab: migrated off Bitbucket Cloud (Bash automation) and integrated object storage and OpenSearch/Elastic for deep code search.
- Scaled GitLab to portfolio-wide load via object storage migration, instance right-sizing, and IOPS tuning.
- Standardized developer onboarding by authoring AWS CloudFormation templates that assemble "build boxes" from native services (CodeCommit, Secrets Manager, Session Manager, EC2, RDS, S3).
- Protected creative assets from bit-rot by implementing TrueNAS (ZFS) with automated DR snapshots/scrubs.
- Enabled zero-trust remote work (2020) by rolling out Duo MFA, Jamf MDM, and VPN.
- Built custom WordPress/front-end components (CSS/JS) with emphasis on performance and pixel accuracy.

---

### Principal — jacobnollette.com LLC / Self-Hosting Lab
*Minneapolis, MN • 2005 (Jan) – Present*

20-year practice with a track record spanning client consulting (2011–2018: WordPress, front-end, CMS delivery) and an ongoing R&D homelab that proves out production-grade DevOps, AI/agent infrastructure, and reliability engineering patterns.

**AI, Agents & Agentic Orchestration**

- Run multi-agent development workflows in production, coordinating concurrent Claude, Gemini, and Codex agents across projects; work state persists in git-worktree-backed hooks enabling agents to resume across sessions.
- Delivered structured data extraction at scale by building an agentic web scraper on Playwright (browser automation), Crawl4AI (pipeline orchestration), and Ollama (local LLM inference); validated with Pydantic schemas.
- Deployed and administered high-performance n8n for AI assistant automation; built compound RAG pipelines, structured agent inputs with JavaScript, and webhook/agent load-tested with a custom Go tool.

**Infrastructure & Platform**

- Designed and operated a private-cloud homelab: Proxmox virtualization, Kubernetes (KubeSpray/Ansible), and Ceph-backed storage (CephFS/RBD) with custom CRUSH rules.
- Ceph reliability engineering: corrected OSD/FSID collision; re-laid BlueStore with 250GB block.db on NVMe (moving RocksDB off HDDs); updated CRUSH for host/device-class failure domains; restored healthy PG states and improved tail latency.
- Built secure data/storage services with MinIO on CephFS: scoped S3 IAM policies, lifecycle/retention automation, and real-time sync pipelines (Syncthing/Resilio/RClone CronJobs).
- Cloud security engineering: zero-trust network architecture (Cloudflare Tunnels, Tailscale mesh) and HAProxy L4/L7 load balancing to eliminate exposed attack surface.
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

**Terraform-orchestrated Cloud SQL DR (GCP):** Deployed a database-driven application in Google Cloud with Terraform orchestrating networking and Cloud SQL (MySQL/SQL Server) provisioning; automated database snapshots and disaster-recovery workflows for tested, repeatable restores.

**Air-gapped IoT data access (Retool):** Designed network architecture for safe read access to an air-gapped industrial monitoring network — parallel subnet, VPN-gated egress, strict ACLs, principle-of-least-privilege role-scoped queries.

---

## EDUCATION

**B.F.A., Web & Screen Environments** — Minneapolis College of Art and Design (2020)

Blended design, typography, and interactive media with full-stack web development. TA and Instructor, Summer Expressions Session.
