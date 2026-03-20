const data = {
  flightPath: [
    {
      tier: "01",
      title: "Cultural Turbine",
      summary:
        "The top cultural construct of the system. It explains how Vape-Jet turns identity, standards, and improvement into one living operating engine.",
      bullets: [
        "Top cultural branch in the operating map",
        "Holds the turbine logic and the pillars together",
        "Keeps the loop alive from standard work to improvement",
      ],
    },
    {
      tier: "02",
      title: "Mission and Vision Support",
      summary:
        "Mission and vision reinforce the Cultural Turbine by supplying company direction, ambition, and the standard the system is trying to raise.",
      bullets: [
        "Defines why Vape-Jet exists",
        "Clarifies where the company is headed",
        "Supports the turbine with company direction",
      ],
    },
    {
      tier: "03",
      title: "Pillars",
      summary:
        "Execution, Collaboration, and Customer Impact define the behaviors Vape-Jet expects to see in daily work.",
      bullets: [
        "Execution: do it right, own outcomes, sharpen mastery",
        "Collaboration: communicate well and build together",
        "Customer Impact: solve real customer problems and carry the brand well",
      ],
    },
    {
      tier: "04",
      title: "Standard Work",
      summary:
        "Departments, systems, flows, and management standards make the pillars operational in the real business.",
      bullets: [
        "Departments own role and process execution",
        "Shared systems own tool-specific methods",
        "Management standards govern company-wide rules",
      ],
    },
  ],
  branches: [
    {
      id: "cultural-turbine",
      label: "Cultural Turbine",
      kicker: "Culture branch",
      summary:
        "Start here when explaining the top cultural construct of the system, how mission and vision support it, and how improvement stays tied to the same language used for coaching.",
      cards: [
        {
          title: "Mission and Vision Support",
          meta: "Directional support",
          description:
            "Mission and vision support the Cultural Turbine by defining company direction, future ambition, and the standard the system is trying to raise.",
          bullets: [
            "Purpose and future direction",
            "Company-wide reference point",
            "Support layer for the turbine",
          ],
        },
        {
          title: "Cultural Logic",
          meta: "Operating theory",
          description:
            "Explains the hierarchy clearly: Cultural Turbine at the top, mission and vision supporting it, then pillars, then standard work.",
          bullets: [
            "Shows how culture becomes execution",
            "Prevents pillars from becoming abstract",
            "Keeps standards tied to identity",
          ],
        },
        {
          title: "Pillars",
          meta: "Behavior model",
          description:
            "Execution, Collaboration, and Customer Impact sit beneath the Cultural Turbine and above the operating pages.",
          bullets: ["Execution", "Collaboration", "Customer Impact"],
        },
        {
          title: "Improvement Loop",
          meta: "Always on",
          description:
            "The turbine turns standard work into a compounding system rather than a static library.",
          bullets: [
            "Standard work -> execution",
            "Execution -> learning",
            "Learning -> improvement -> updated standard work",
          ],
        },
      ],
    },
    {
      id: "departments",
      label: "Departments",
      kicker: "Operating ownership",
      summary:
        "Department pages answer who owns the work, when it happens, how the team trains, and which role is accountable for results.",
      cards: [
        {
          title: "Core teams",
          meta: "10 hubs",
          description:
            "Marketing, Sales, Finance, Customer Support, Manufacturing, Logistics, Quality Control, Product Design, Engineering, and Software all get dedicated home bases.",
          bullets: ["Role standards", "Process standards", "Training paths and metrics"],
        },
        {
          title: "Pilot depth",
          meta: "Ops backbone",
          description:
            "Manufacturing, Quality Control, Logistics, and Customer Support remain the richest detailed branches for first-wave rollout.",
          bullets: [
            "Manufacturing execution",
            "QC release and containment",
            "Logistics readiness and shipment",
          ],
        },
        {
          title: "Controlled specs",
          meta: "Engineering lane",
          description:
            "Engineering owns controlled engineering specs when a technical requirement must govern material, fit, process, or performance.",
          bullets: [
            "Connector adhesive spec example",
            "Feeds Manufacturing and QC",
            "Routes through Change to Release",
          ],
        },
        {
          title: "Confluence fit",
          meta: "Browse by function",
          description:
            "Team members can start from their own department and still reach the right tool standard or cross-functional flow quickly.",
          bullets: ["Role ownership", "Department metrics", "Handoffs to shared systems"],
        },
      ],
    },
    {
      id: "shared-systems",
      label: "Shared Systems",
      kicker: "Platform truth",
      summary:
        "Use this branch when the question is mainly about how to operate inside a platform rather than which department owns the broader process.",
      cards: [
        {
          title: "Fusion",
          meta: "Design master",
          description:
            "Owns CAD models, assembly and fabrication drawings, vendor specs, revisions, and part-number definition.",
          bullets: [
            "Part numbering and drawing release",
            "Fusion-to-Odoo alignment",
            "Fusion-to-Product Home handoff",
          ],
        },
        {
          title: "Odoo",
          meta: "Execution system",
          description:
            "Owns executable items, BOMs, inventory, sales and service orders, workstation use, and quality checkpoints.",
          bullets: [
            "Equipment sales orders",
            "Support service orders",
            "BOM lock and release workflow",
          ],
        },
        {
          title: "Jira",
          meta: "Ticket traceability",
          description:
            "Owns VJSD customer tickets, VJN internal technical work, VCMP compatibility work, machine tickets, and feature requests.",
          bullets: [
            "Linked customer and internal work",
            "Feature intake and routing",
            "Machine coordination requests",
          ],
        },
        {
          title: "Brain",
          meta: "Fleet ops",
          description:
            "Owns telemetry, diagnostics context, and controlled remote take-the-stick sessions for the machine fleet.",
          bullets: ["Telemetry review", "Remote diagnostics", "Session logging and handoff"],
        },
      ],
    },
    {
      id: "cross-functional-flows",
      label: "Cross-Functional Flows",
      kicker: "Routing layer",
      summary:
        "Flows connect ownership boundaries without duplicating the detailed instructions that already live in department or shared-system pages.",
      cards: [
        {
          title: "Lead to Order",
          meta: "Commercial route",
          description:
            "Moves demand from marketing signal through HubSpot and Sales into executable Odoo orders and machine coordination.",
          bullets: [
            "HubSpot hygiene",
            "Quote to order transition",
            "Machine ticket when needed",
          ],
        },
        {
          title: "Order to Build",
          meta: "Release route",
          description:
            "Confirms released part numbers, drawings, and BOM readiness before work reaches the floor.",
          bullets: ["Fusion released references", "Odoo BOM readiness", "Workstation release"],
        },
        {
          title: "Issue to Resolution",
          meta: "Support route",
          description:
            "Routes a customer signal from VJSD through Brain, Zoom, spare parts, VJN, VCMP, or closure.",
          bullets: [
            "Help portal intake",
            "Brain telemetry review",
            "Remote support or escalation",
          ],
        },
        {
          title: "Change to Release",
          meta: "Controlled route",
          description:
            "Routes changes across Fusion, Odoo, Jira, Brain, and Product Home before released execution is affected.",
          bullets: [
            "Engineering and software change control",
            "Downstream impact check",
            "Published-document review",
          ],
        },
      ],
    },
    {
      id: "management-system",
      label: "Management System",
      kicker: "Company rules",
      summary:
        "Use this branch for company-wide operating standards that apply across teams and should not be buried inside a single department.",
      cards: [
        {
          title: "Product Data Control",
          meta: "Data discipline",
          description:
            "Defines part numbering, revision rules, drawing release states, and alignment between Fusion, Odoo, and Product Home.",
          bullets: [
            "Part numbering schema",
            "Revision logic",
            "Cross-system alignment checks",
          ],
        },
        {
          title: "Fleet Operations and Remote Access",
          meta: "Risk control",
          description:
            "Defines who may remote into machines, why, under what approval, and with what logging and customer-safe boundaries.",
          bullets: ["Role-based access", "Remote session rules", "Audit trail expectations"],
        },
        {
          title: "Floor Management",
          meta: "Daily discipline",
          description:
            "Creates company-wide expectations for 5S, Gemba, and visual management on the production floor.",
          bullets: ["5S standard", "Gemba walk standard", "Visual management"],
        },
        {
          title: "Operating Rhythms",
          meta: "Cadence",
          description:
            "Defines standups, Cultural Turbine reviews, and recurring review rhythms that keep the system alive.",
          bullets: [
            "Department standups",
            "Monthly turbine review",
            "Escalation and review cadences",
          ],
        },
      ],
    },
    {
      id: "governance",
      label: "Governance",
      kicker: "System rules",
      summary:
        "Governance keeps the repo and Confluence surfaces controlled, lightweight, and traceable as the library grows.",
      cards: [
        {
          title: "Metadata contract",
          meta: "Required fields",
          description:
            "Every governed page carries ownership, review cadence, status, operating layer, authoritative system, upload-control fields, and department applicability.",
          bullets: [
            "operating_layer",
            "applies_to_departments",
            "authoritative_system",
            "document_id and revision",
          ],
        },
        {
          title: "Page types",
          meta: "Controlled formats",
          description:
            "Department hubs, process standard work, checklists, training paths, improvement queues, controlled engineering specs, and operating standards all have clear templates.",
          bullets: [
            "Operating Standard added in v2",
            "Controlled Engineering Spec retained",
            "Authoritative References required",
          ],
        },
        {
          title: "No duplicate truth",
          meta: "Core rule",
          description:
            "Flows route. Departments instruct. Shared systems explain tool operation. Product Home publishes released product documentation.",
          bullets: [
            "Avoid shadow instructions",
            "Link to the authority",
            "Same-cycle updates on release-impacting change",
          ],
        },
        {
          title: "Pilot ownership",
          meta: "Named owner",
          description:
            "Russ Dudek is currently stamped as primary owner across the pilot lane, with backup ownership still to be filled.",
          bullets: [
            "Active review gate in governance",
            "Ready for named backup assignment",
            "Upload authority can be delegated later",
          ],
        },
      ],
    },
  ],
  templates: [
    {
      title: "Process Standard Work",
      kind: "Upload-ready markdown",
      filename: "process-standard-work-template.md",
      description:
        "Base markdown template for department-owned step-by-step standards with full metadata, revision control, and required sections.",
    },
    {
      title: "Checklist",
      kind: "Upload-ready markdown",
      filename: "checklist-template.md",
      description:
        "Point-of-execution verification template for completion-critical checks and inspections.",
    },
    {
      title: "Controlled Engineering Spec",
      kind: "Upload-ready markdown",
      filename: "controlled-engineering-spec-template.md",
      description:
        "Controlled template for material, process, fit, performance, and acceptance requirements.",
    },
    {
      title: "Operating Standard",
      kind: "Upload-ready markdown",
      filename: "operating-standard-template.md",
      description:
        "Cross-functional or company-wide standard template for governed operating rules.",
    },
    {
      title: "Department Hub",
      kind: "Upload-ready markdown",
      filename: "department-hub-template.md",
      description:
        "Template for a full department landing page with roles, processes, handoffs, metrics, and improvement queue.",
    },
    {
      title: "Role Standard Work",
      kind: "Upload-ready markdown",
      filename: "role-standard-work-template.md",
      description:
        "Role-specific template for recurring ownership expectations and coordination behavior.",
    },
    {
      title: "Training Path",
      kind: "Upload-ready markdown",
      filename: "training-path-template.md",
      description:
        "Training and readiness template for certification, onboarding, sign-off, and retraining lanes.",
    },
    {
      title: "Improvement Queue",
      kind: "Upload-ready markdown",
      filename: "improvement-queue-template.md",
      description:
        "Governed queue template for turning operational friction into reviewable improvement work.",
    },
    {
      title: "Upload Intake",
      kind: "Governance support form",
      filename: "upload-intake-template.md",
      description:
        "Canonical intake wrapper for clean markdown uploads with filename, placement, revision, and authority checks.",
    },
    {
      title: "Change Control Request",
      kind: "Governance support form",
      filename: "change-control-request-template.md",
      description:
        "Markdown request form for controlled changes that may alter standards, specs, software, BOMs, or training.",
    },
    {
      title: "Training Sign-Off Record",
      kind: "Training support form",
      filename: "training-signoff-record-template.md",
      description:
        "Crew- or individual-level sign-off sheet for acknowledgement, retraining reason, and checkbox-based compliance capture.",
    },
    {
      title: "Revision Control Register",
      kind: "Governance support form",
      filename: "revision-control-register-template.md",
      description:
        "Markdown register template for revision history, superseded documents, and training impact tracking.",
    },
  ],
  authorities: [
    {
      title: "Fusion",
      tag: "Authoritative design master",
      description:
        "Released CAD, drawings, vendor specs, revisions, and part-number definition start here before downstream execution systems act on them.",
      bullets: [
        "CAD and assembly/fab drawings",
        "Vendor-spec-linked design records",
        "Part number and revision state",
      ],
    },
    {
      title: "Odoo",
      tag: "Executable business record",
      description:
        "Item masters, BOMs, inventory, sales orders, service orders, workstation records, and quality checkpoints live here when the work becomes executable.",
      bullets: [
        "Equipment and support orders",
        "BOM creation and lock-down",
        "Inventory and workstation execution",
      ],
    },
    {
      title: "Jira",
      tag: "Traceability record",
      description:
        "Customer and internal work records stay linked here so support, engineering, software, compatibility, and commercial requests do not lose context.",
      bullets: ["VJSD, VJN, VCMP", "Machine tickets", "Feature request routing"],
    },
    {
      title: "Brain",
      tag: "Fleet telemetry and remote access",
      description:
        "Machine fleet telemetry, diagnostics context, and remote-control session state are governed here with strict operating rules.",
      bullets: [
        "Telemetry review before intervention",
        "Remote session controls",
        "Linked ticket and support evidence",
      ],
    },
    {
      title: "Product Home",
      tag: "Published released documentation",
      description:
        "Assembly manuals, build packets, user manuals, and product-facing released documentation stay in the sibling Product Home space.",
      bullets: [
        "Published build/use documents",
        "Referenced, not duplicated",
        "Updated in Change to Release when impacted",
      ],
    },
    {
      title: "Standard Work Repo + Confluence",
      tag: "Operating method",
      description:
        "The repo is the controlled drafting source, and Confluence is the browsing surface teams use day to day.",
      bullets: [
        "System templates and metadata",
        "Governed navigation structure",
        "Cultural and operational traceability",
      ],
    },
  ],
  flows: [
    {
      id: "lead-to-order",
      kicker: "Commercial flow",
      title: "Lead to Order",
      summary:
        "Moves demand from marketing signal into executable commercial work without losing context or commitment discipline.",
      steps: [
        "Marketing signal captured and qualified.",
        "HubSpot opportunity is created and maintained cleanly.",
        "Sales validates fit, scope, and commercial path.",
        "Odoo equipment sales order is created when booked.",
        "Machine ticket is created if order-specific coordination is required.",
      ],
    },
    {
      id: "order-to-build",
      kicker: "Release flow",
      title: "Order to Build",
      summary:
        "Ensures released references, BOM readiness, and build-release discipline before work reaches the production floor.",
      steps: [
        "Booked order triggers build review.",
        "Released part numbers and drawings are verified in Fusion.",
        "Odoo items and BOMs are confirmed build-ready.",
        "Engineering release readiness is checked for downstream impact.",
        "Workstations are released to execute the build.",
      ],
    },
    {
      id: "build-to-ship",
      kicker: "Operations flow",
      title: "Build to Ship",
      summary:
        "Routes work from build packet to production, QC, inventory movement, and shipment release without conflicting shop-floor instructions.",
      steps: [
        "Product Home build packet is the published reference.",
        "Manufacturing executes the work-cell standards.",
        "Quality checkpoints verify controlled requirements.",
        "Inventory movement is recorded in Odoo.",
        "Shipment release clears the order for outbound delivery.",
      ],
    },
    {
      id: "issue-to-resolution",
      kicker: "Support flow",
      title: "Issue to Resolution",
      summary:
        "Routes customer issues through the right troubleshooting lane, whether the answer is guidance, remote support, spare parts, VJN, or VCMP work.",
      steps: [
        "Customer issue enters as a VJSD ticket from the help portal or support intake.",
        "Support reviews Brain telemetry and machine context.",
        "Zoom troubleshooting or a controlled remote session is initiated if needed.",
        "Work branches to spare-parts ordering, VJN, VCMP, or direct closure.",
        "Customer-facing record is updated before the ticket closes.",
      ],
    },
    {
      id: "change-to-release",
      kicker: "Control flow",
      title: "Change to Release",
      summary:
        "Routes product, software, compatibility, and support-driven changes through the systems they impact before release reaches the field or floor.",
      steps: [
        "Change signal is logged from Jira, Fusion, software, support, or ops.",
        "Impact is checked across Fusion, Odoo, Jira, Brain, and Product Home.",
        "Engineering or software change control routes the approvals.",
        "Specs, BOMs, docs, and tickets are updated in the same release cycle.",
        "Downstream teams consume only the released references.",
      ],
    },
  ],
  departments: [
    { id: "all", label: "All Departments" },
    {
      id: "marketing",
      label: "Marketing",
      summary:
        "Owns demand-generation standards and how the brand shows up across social proof, search, web, and public-facing content.",
      standards: [
        "Social proof content creation",
        "SEO operating rhythm",
        "Website update workflow",
        "Brand-guideline maintenance",
      ],
    },
    {
      id: "sales",
      label: "Sales",
      summary:
        "Owns commercial intake, opportunity hygiene, order creation, and order-specific coordination signals.",
      standards: [
        "HubSpot operating rhythm",
        "Odoo equipment sales order creation",
        "Jira machine ticket creation",
        "Commitment-change escalation",
      ],
    },
    {
      id: "finance",
      label: "Finance",
      summary:
        "Owns close discipline, accounts payable, receivables, payroll, and controlled vendor-payment practices.",
      standards: [
        "Month-end close and reconciliation",
        "Accounts payable invoice intake and payment runs",
        "Customer invoicing and cash application",
        "Payroll preparation and submission",
        "Purchasing-card and expense control",
        "Vendor setup and payment-method control",
      ],
    },
    {
      id: "customer-support",
      label: "Customer Support",
      summary:
        "Owns customer-facing intake, troubleshooting, service order routing, and escalation into technical or compatibility work.",
      standards: [
        "VJSD intake and triage",
        "Brain telemetry review",
        "Zoom troubleshooting path",
        "Spare-parts ordering",
        "Odoo service order creation",
        "Escalation into VJN and VCMP",
      ],
    },
    {
      id: "manufacturing",
      label: "Manufacturing",
      summary:
        "Owns work-cell execution, point-of-use standards, training, and how released documentation is used on the floor.",
      standards: [
        "Workstation execution standards",
        "Assembly-manual use at work cells",
        "Controlled-spec application",
        "Released drawing and build-packet use",
        "Floor inventory handling",
        "Department standup participation",
      ],
    },
    {
      id: "logistics",
      label: "Logistics",
      summary:
        "Owns inventory accuracy, order readiness, spare fulfillment, and shipment release.",
      standards: [
        "Inventory control ownership",
        "Order-release readiness",
        "Spare-parts fulfillment",
        "Shipment release",
      ],
    },
    {
      id: "quality-control",
      label: "Quality Control",
      summary:
        "Owns checkpoint discipline, nonconformance routing, controlled-spec verification, and release signoff criteria.",
      standards: [
        "Quality checkpoint ownership",
        "Nonconformance containment",
        "Controlled-spec inspection",
        "Release signoff criteria",
      ],
    },
    {
      id: "product-design",
      label: "Product Design",
      summary:
        "Owns design frameworks, Fusion modeling expectations, drawing-pack readiness, and compatibility fixture support.",
      standards: [
        "Fusion modeling standards",
        "Drawing-pack readiness",
        "Hardware design framework",
        "Software design framework",
        "VCMP fixture/design support",
      ],
    },
    {
      id: "engineering",
      label: "Engineering",
      summary:
        "Owns change control execution, controlled specs, technical release gates, and product-data alignment with downstream systems.",
      standards: [
        "Engineering change control execution",
        "Controlled engineering specs",
        "Part-number approval path",
        "Drawing and vendor-spec release",
        "BOM approval and lock workflow",
        "VCMP technical review",
      ],
    },
    {
      id: "software",
      label: "Software",
      summary:
        "Owns VJN intake, feature request routing, software release standards, and support-facing release handoff.",
      standards: [
        "VJN triage",
        "Feature request evaluation path",
        "Major release standard",
        "Minor update standard",
        "Release notes and support handoff",
        "Brain-linked software troubleshooting",
      ],
    },
  ],
  orgChart: {
    leader: {
      name: "Russ Dudek",
      role: "Director of Operations",
      scope: "Pilot owner and current primary approval seat",
      coverage: "All department hubs, pilot operating lanes, and governance scaffolding",
    },
    branches: [
      {
        id: "marketing",
        label: "Marketing",
        lead: "Marketing Lead",
        crew: "Brand and Web Team",
        crewCount: "1 group / 3 people",
        trainingFocus: [
          "Brand governance skeleton",
          "Launch coordination handoff",
          "Future content and SEO standards",
        ],
      },
      {
        id: "sales",
        label: "Sales",
        lead: "Sales Lead",
        crew: "Commercial Team",
        crewCount: "1 group / 3 people",
        trainingFocus: [
          "Opportunity and order handoff skeleton",
          "Commercial ownership boundaries",
          "Future HubSpot and Odoo discipline",
        ],
      },
      {
        id: "manufacturing",
        label: "Manufacturing",
        lead: "Manufacturing Lead",
        crew: "Cell Leads + Technicians",
        crewCount: "2 groups / 9 people",
        trainingFocus: [
          "Workstations and assembly manuals",
          "Controlled spec application",
          "5S and standup discipline",
        ],
      },
      {
        id: "quality-control",
        label: "Quality Control",
        lead: "Quality Control Lead",
        crew: "Inspectors + Release Signoff",
        crewCount: "1 group / 4 people",
        trainingFocus: [
          "Checkpoint discipline",
          "Controlled requirement verification",
          "Nonconformance containment",
        ],
      },
      {
        id: "logistics",
        label: "Logistics",
        lead: "Logistics Lead",
        crew: "Inventory + Shipment Crew",
        crewCount: "1 group / 4 people",
        trainingFocus: [
          "Inventory control",
          "Odoo movements and shipment release",
          "Spare-parts fulfillment",
        ],
      },
      {
        id: "customer-support",
        label: "Customer Support",
        lead: "Customer Support Lead",
        crew: "Support Techs",
        crewCount: "1 group / 5 people",
        trainingFocus: [
          "VJSD intake and triage",
          "Brain telemetry review",
          "Zoom and remote-session coordination",
        ],
      },
      {
        id: "finance",
        label: "Finance",
        lead: "Finance Lead",
        crew: "Accounting Crew + Payroll Lane",
        crewCount: "2 groups / 4 people",
        trainingFocus: [
          "Month-end close and reconciliation discipline",
          "AP, AR, and payroll approval control",
          "Vendor setup and controlled payment methods",
        ],
      },
      {
        id: "product-design",
        label: "Product Design",
        lead: "Product Design Lead",
        crew: "Design and Fixture Team",
        crewCount: "1 group / 3 people",
        trainingFocus: [
          "Fusion release-readiness skeleton",
          "Future design framework standards",
          "Compatibility handoff expectations",
        ],
      },
      {
        id: "engineering",
        label: "Engineering",
        lead: "Engineering Lead",
        crew: "Release + Change Owners",
        crewCount: "1 group / 3 people",
        trainingFocus: [
          "Controlled specs and change control",
          "Fusion and Odoo alignment",
          "VCMP and release packet review",
        ],
      },
      {
        id: "software",
        label: "Software",
        lead: "Software Lead",
        crew: "Release and Support Engineers",
        crewCount: "1 group / 3 people",
        trainingFocus: [
          "VJN and release skeleton",
          "Future feature-routing standards",
          "Support handoff expectations",
        ],
      },
      {
        id: "operations",
        label: "Operations Governance",
        lead: "Operations Standard Owner",
        crew: "Document and training coordinators",
        crewCount: "1 group / 2 people",
        trainingFocus: [
          "Upload gate authority",
          "Revision control and supersede handling",
          "Training acknowledgment follow-through",
        ],
      },
    ],
  },
  trainingRecords: [
    {
      id: "mfg-cell-a-connector-retention",
      team: "manufacturing",
      label: "Cell A Crew",
      audience: "Group sign-off",
      standard: "Connector Retention Application and Verification",
      revision: "C",
      trigger: "New revision release",
      due: "2026-03-25",
      acknowledged: false,
      signedAt: "",
    },
    {
      id: "mfg-final-test-lead",
      team: "manufacturing",
      label: "Manufacturing Lead",
      audience: "Individual sign-off",
      standard: "Final Testing and Quality Release",
      revision: "B",
      trigger: "Role recertification",
      due: "Current",
      acknowledged: true,
      signedAt: "2026-03-18",
    },
    {
      id: "qc-connectors-inspection",
      team: "quality-control",
      label: "QC Inspectors",
      audience: "Group sign-off",
      standard: "Connector Retention Inspection Check",
      revision: "B",
      trigger: "Knowledge drift check",
      due: "2026-03-22",
      acknowledged: false,
      signedAt: "",
    },
    {
      id: "qc-nonconformance-lead",
      team: "quality-control",
      label: "Quality Control Lead",
      audience: "Individual sign-off",
      standard: "Nonconformance Containment and Disposition",
      revision: "A",
      trigger: "Release-readiness confirmation",
      due: "Current",
      acknowledged: true,
      signedAt: "2026-03-17",
    },
    {
      id: "log-order-release-crew",
      team: "logistics",
      label: "Inventory and Shipment Crew",
      audience: "Group sign-off",
      standard: "Shipment Release Checklist",
      revision: "B",
      trigger: "Mis-pick corrective retraining",
      due: "2026-03-24",
      acknowledged: false,
      signedAt: "",
    },
    {
      id: "log-odoo-moves-lead",
      team: "logistics",
      label: "Logistics Lead",
      audience: "Individual sign-off",
      standard: "Order Release to Build Queue",
      revision: "A",
      trigger: "Quarterly refresh",
      due: "Current",
      acknowledged: true,
      signedAt: "2026-03-16",
    },
    {
      id: "support-vjsd-techs",
      team: "customer-support",
      label: "Support Tech Team",
      audience: "Group sign-off",
      standard: "VJSD Intake and Brain Telemetry Review",
      revision: "C",
      trigger: "Lack of understanding on escalation quality",
      due: "2026-03-21",
      acknowledged: false,
      signedAt: "",
    },
    {
      id: "support-zoom-lead",
      team: "customer-support",
      label: "Customer Support Lead",
      audience: "Individual sign-off",
      standard: "Zoom Troubleshooting and Remote Session Handoff",
      revision: "B",
      trigger: "Remote access rule update",
      due: "2026-03-20",
      acknowledged: false,
      signedAt: "",
    },
    {
      id: "finance-close-lead",
      team: "finance",
      label: "Finance Lead",
      audience: "Individual sign-off",
      standard: "Month-End Close and Reconciliation Standard",
      revision: "C",
      trigger: "Quarter-end close update",
      due: "Current",
      acknowledged: true,
      signedAt: "2026-03-19",
    },
    {
      id: "finance-ap-crew",
      team: "finance",
      label: "Accounting Crew",
      audience: "Group sign-off",
      standard: "Accounts Payable Invoice Intake, Approval, and Payment Run Standard",
      revision: "D",
      trigger: "Knowledge drift check",
      due: "2026-03-27",
      acknowledged: false,
      signedAt: "",
    },
    {
      id: "finance-payroll-lane",
      team: "finance",
      label: "Payroll Lane",
      audience: "Group sign-off",
      standard: "Payroll Preparation, Review, and Submission Standard",
      revision: "B",
      trigger: "New revision release",
      due: "2026-03-24",
      acknowledged: false,
      signedAt: "",
    },
    {
      id: "eng-change-control",
      team: "engineering",
      label: "Engineering Lead",
      audience: "Individual sign-off",
      standard: "Engineering Change Control Execution",
      revision: "B",
      trigger: "New release gate",
      due: "2026-03-23",
      acknowledged: true,
      signedAt: "2026-03-19",
    },
    {
      id: "ops-upload-gate",
      team: "operations",
      label: "Governance Coordinators",
      audience: "Group sign-off",
      standard: "Upload Gate and Revision Control Standard",
      revision: "A",
      trigger: "Initial rollout",
      due: "2026-03-26",
      acknowledged: false,
      signedAt: "",
    },
  ],
  uploaders: [
    {
      id: "russ-dudek",
      label: "Russ Dudek | Director of Operations",
      authorized: true,
      scope: "Pilot lane, governance, and company-wide operating standards",
    },
    {
      id: "engineering-lead",
      label: "Engineering Lead | Controlled Spec Owner",
      authorized: true,
      scope: "Engineering pages, controlled specs, change-to-release updates",
    },
    {
      id: "manufacturing-lead",
      label: "Manufacturing Lead | Department Owner",
      authorized: true,
      scope: "Manufacturing department pages and floor training records",
    },
    {
      id: "finance-controller",
      label: "Finance Lead | Controller",
      authorized: true,
      scope: "Finance department pages, payroll standards, and close-control uploads",
    },
    {
      id: "support-tech",
      label: "Support Tech | Pending upload authorization",
      authorized: false,
      scope: "Read-only until delegated upload rights are approved",
    },
  ],
  uploadRules: [
    {
      title: "Filename convention",
      body: "Use lowercase kebab-case and keep the basename aligned with `document_id`, for example `connector-retention-application-and-verification.md`.",
    },
    {
      title: "Template contract",
      body: "Frontmatter must include the v2 metadata fields, upload-control fields, and all required sections for the declared `work_type`.",
    },
    {
      title: "Revision control",
      body: "Every upload should carry a revision, effective date, training requirement, and a supersede reference when it replaces a live page.",
    },
    {
      title: "Authority gate",
      body: "Only authorized owners or delegates should be able to submit the file for active upload in the final system.",
    },
  ],
};

const scenarioData = {
  pilot: {
    label: "Pilot View",
    summary:
      "Simple skeleton view of the current operating shape, with only the baseline hubs, ownership lanes, and upload structure visible by default.",
    autoTrainingCoverage: false,
    orgChart: data.orgChart,
    trainingRecords: [],
    uploaders: data.uploaders,
    documentSets: [
      {
        type: "Skeleton Layer",
        title: "Department Skeletons",
        lane: "Manufacturing",
        revision: "A",
        status: "active",
        owner: "Manufacturing Lead",
        acceptance: "Template-level view only",
        training: "role-wide",
        supersedes: "none",
        note: "Pilot mode shows department structure and planned template lanes without named sample standards.",
      },
      {
        type: "Skeleton Layer",
        title: "Training Scaffold",
        lane: "Command Structure",
        revision: "A",
        status: "active",
        owner: "Operations Standard Owner",
        acceptance: "Pilot structure only",
        training: "role-wide",
        supersedes: "none",
        note: "Training stays visible as a framework, but detailed fictional sign-off examples remain reserved for Demo Mode.",
      },
      {
        type: "Skeleton Layer",
        title: "Governance Gate",
        lane: "Governance",
        revision: "A",
        status: "draft",
        owner: "Russ Dudek | Director of Operations",
        acceptance: "Concept gate in place",
        training: "role-wide",
        supersedes: "none",
        note: "Upload validation, revision rules, and routing remain visible in pilot mode because they shape the system even before richer examples exist.",
      },
      {
        type: "Skeleton Layer",
        title: "Demo Handoff",
        lane: "Demo Mode",
        revision: "A",
        status: "draft",
        owner: "Russ Dudek | Director of Operations",
        acceptance: "Rich example set deferred",
        training: "role-wide",
        supersedes: "none",
        note: "Named standards, rich fictional documents, sign-off depth, and mature example libraries live only behind the Demo Mode toggle.",
      },
    ],
  },
  demo: {
    label: "Demo Mode",
    summary:
      "Fictional mature-system view with GI Joe-inspired names, deeper revision history, mixed sign-off states, and a fuller controlled document library.",
    orgChart: {
      leader: {
        name: "Grant 'Duke' Mercer",
        role: "Operations Command Lead",
        scope: "Final release authority for standards, training completion, and controlled document promotion.",
        coverage: "All branches, revision control, and release-readiness sign-off",
      },
      branches: [
        {
          id: "marketing",
          label: "Marketing",
          lead: "Avery 'Cover Girl' Cross",
          crew: "Brand Studio + Web Content Crew",
          crewCount: "2 groups / 6 people",
          trainingFocus: [
            "Brand and website governance",
            "Social proof and launch content discipline",
            "SEO rhythm and release coordination",
          ],
        },
        {
          id: "sales",
          label: "Sales",
          lead: "Wade 'Falcon' Mercer",
          crew: "Commercial Desk + Account Crew",
          crewCount: "2 groups / 7 people",
          trainingFocus: [
            "HubSpot opportunity hygiene",
            "Odoo order creation discipline",
            "Machine ticket escalation accuracy",
          ],
        },
        {
          id: "finance",
          label: "Finance",
          lead: "Lena 'Glenda' Price",
          crew: "Accounting Crew + Payroll Lane",
          crewCount: "2 groups / 5 people",
          trainingFocus: [
            "Month-end close and reconciliation discipline",
            "Payables, receivables, and payroll approval control",
            "Vendor setup and controlled payment-method governance",
          ],
        },
        {
          id: "manufacturing",
          label: "Manufacturing",
          lead: "Marina 'Scarlett' Vance",
          crew: "Redline Assembly Cell + Calibration Crew",
          crewCount: "3 groups / 12 people",
          trainingFocus: [
            "Work-cell assembly manuals",
            "Controlled adhesive and torque specs",
            "5S, standups, and point-of-use inspection",
          ],
        },
        {
          id: "quality-control",
          label: "Quality Control",
          lead: "Nolan 'Flint' Avery",
          crew: "Release Inspectors + Audit Crew",
          crewCount: "2 groups / 6 people",
          trainingFocus: [
            "Checkpoint and release discipline",
            "Nonconformance containment",
            "Revision-specific inspection updates",
          ],
        },
        {
          id: "logistics",
          label: "Logistics",
          lead: "Marcus 'Roadblock' Hayes",
          crew: "Inventory Accuracy + Outbound Team",
          crewCount: "2 groups / 7 people",
          trainingFocus: [
            "Odoo movement integrity",
            "Spare-parts fulfillment",
            "Shipment release and customer hold rules",
          ],
        },
        {
          id: "customer-support",
          label: "Customer Support",
          lead: "Jaye 'Lady Jaye' Mercer",
          crew: "VJSD Response Cell + Remote Support Desk",
          crewCount: "2 groups / 8 people",
          trainingFocus: [
            "VJSD triage and customer communication",
            "Brain telemetry interpretation",
            "Zoom and take-the-stick escalation control",
          ],
        },
        {
          id: "engineering",
          label: "Engineering",
          lead: "Miles 'Mainframe' Quinn",
          crew: "Spec and Release Control Team",
          crewCount: "2 groups / 5 people",
          trainingFocus: [
            "Controlled engineering specs",
            "Fusion, Odoo, and Product Home alignment",
            "VCMP and change-to-release governance",
          ],
        },
        {
          id: "product-design",
          label: "Product Design",
          lead: "Talia 'Jinx' Rowan",
          crew: "Industrial Design + Fixture Concept Team",
          crewCount: "2 groups / 5 people",
          trainingFocus: [
            "Fusion modeling discipline",
            "Drawing-pack readiness and handoff",
            "Compatibility fixture design support",
          ],
        },
        {
          id: "software",
          label: "Software",
          lead: "Theo 'Dial-Tone' Brooks",
          crew: "Release Team + Platform Support Engineers",
          crewCount: "2 groups / 6 people",
          trainingFocus: [
            "VJN triage and technical routing",
            "Major-release handoff to Support",
            "Feature request shaping and minor update control",
          ],
        },
        {
          id: "operations",
          label: "Operations Governance",
          lead: "Nick 'Breaker' Dalton",
          crew: "Document Control + Training Coordinators",
          crewCount: "1 group / 4 people",
          trainingFocus: [
            "Upload authority and naming control",
            "Revision register discipline",
            "Training sign-off and retraining follow-through",
          ],
        },
      ],
    },
    trainingRecords: [
      {
        id: "demo-mkt-brand-web",
        team: "marketing",
        label: "Brand Studio",
        audience: "Group sign-off",
        standard: "Website Update and Brand Governance",
        revision: "D",
        trigger: "Quarterly refresh",
        due: "2026-03-28",
        acknowledged: true,
        signedAt: "2026-03-16",
      },
      {
        id: "demo-sales-odoo-order",
        team: "sales",
        label: "Commercial Desk",
        audience: "Group sign-off",
        standard: "Equipment Sales Order Creation in Odoo",
        revision: "E",
        trigger: "New revision release",
        due: "2026-03-24",
        acknowledged: false,
        signedAt: "",
      },
      {
        id: "demo-fin-close",
        team: "finance",
        label: "Accounting Crew",
        audience: "Group sign-off",
        standard: "Month-End Close and Reconciliation Standard",
        revision: "F",
        trigger: "Quarter-end close pack update",
        due: "Current",
        acknowledged: true,
        signedAt: "2026-03-18",
      },
      {
        id: "demo-fin-payroll",
        team: "finance",
        label: "Payroll Lane",
        audience: "Group sign-off",
        standard: "Payroll Preparation, Review, and Submission Standard",
        revision: "C",
        trigger: "New revision release",
        due: "2026-03-22",
        acknowledged: false,
        signedAt: "",
      },
      {
        id: "demo-fin-card-control",
        team: "finance",
        label: "Lena 'Glenda' Price",
        audience: "Individual sign-off",
        standard: "Purchasing Card and Expense Control Standard",
        revision: "D",
        trigger: "Knowledge drift check",
        due: "2026-03-28",
        acknowledged: true,
        signedAt: "2026-03-17",
      },
      {
        id: "demo-mfg-workcell-a",
        team: "manufacturing",
        label: "Redline Assembly Cell",
        audience: "Group sign-off",
        standard: "Workstation 03 Final Assembly Standard",
        revision: "H",
        trigger: "New revision release",
        due: "2026-03-24",
        acknowledged: true,
        signedAt: "2026-03-18",
      },
      {
        id: "demo-mfg-calibration",
        team: "manufacturing",
        label: "Calibration Crew",
        audience: "Group sign-off",
        standard: "Final Torque and Seal Verification",
        revision: "F",
        trigger: "Knowledge drift check",
        due: "2026-03-26",
        acknowledged: false,
        signedAt: "",
      },
      {
        id: "demo-qc-release",
        team: "quality-control",
        label: "Release Inspectors",
        audience: "Group sign-off",
        standard: "Release Gate and Containment Standard",
        revision: "G",
        trigger: "Audit follow-up",
        due: "2026-03-22",
        acknowledged: true,
        signedAt: "2026-03-19",
      },
      {
        id: "demo-qc-lead",
        team: "quality-control",
        label: "Nolan 'Flint' Avery",
        audience: "Individual sign-off",
        standard: "Revision-Specific Inspection Change Review",
        revision: "D",
        trigger: "New revision release",
        due: "2026-03-21",
        acknowledged: true,
        signedAt: "2026-03-17",
      },
      {
        id: "demo-log-outbound",
        team: "logistics",
        label: "Outbound Team",
        audience: "Group sign-off",
        standard: "Shipment Release and Hold Control",
        revision: "E",
        trigger: "Customer miss corrective retraining",
        due: "2026-03-23",
        acknowledged: false,
        signedAt: "",
      },
      {
        id: "demo-log-inventory",
        team: "logistics",
        label: "Inventory Accuracy Crew",
        audience: "Group sign-off",
        standard: "Odoo Movement and Bin Integrity Standard",
        revision: "J",
        trigger: "Quarterly refresh",
        due: "Current",
        acknowledged: true,
        signedAt: "2026-03-15",
      },
      {
        id: "demo-support-vjsd",
        team: "customer-support",
        label: "VJSD Response Cell",
        audience: "Group sign-off",
        standard: "VJSD Triage, Brain Review, and Escalation Standard",
        revision: "K",
        trigger: "New revision release",
        due: "2026-03-20",
        acknowledged: true,
        signedAt: "2026-03-19",
      },
      {
        id: "demo-support-remote",
        team: "customer-support",
        label: "Remote Support Desk",
        audience: "Group sign-off",
        standard: "Remote Session Control and Customer Consent Standard",
        revision: "E",
        trigger: "Role recertification",
        due: "2026-03-27",
        acknowledged: false,
        signedAt: "",
      },
      {
        id: "demo-eng-specs",
        team: "engineering",
        label: "Spec Control Team",
        audience: "Group sign-off",
        standard: "Controlled Engineering Spec Lifecycle",
        revision: "F",
        trigger: "Release packet update",
        due: "Current",
        acknowledged: true,
        signedAt: "2026-03-16",
      },
      {
        id: "demo-eng-vcmp",
        team: "engineering",
        label: "VCMP Review Lead",
        audience: "Individual sign-off",
        standard: "Compatibility Fixture Release Workflow",
        revision: "C",
        trigger: "New fixture family release",
        due: "2026-03-25",
        acknowledged: false,
        signedAt: "",
      },
      {
        id: "demo-design-fusion",
        team: "product-design",
        label: "Industrial Design Team",
        audience: "Group sign-off",
        standard: "Fusion Modeling Standards",
        revision: "C",
        trigger: "Release packet update",
        due: "2026-03-26",
        acknowledged: true,
        signedAt: "2026-03-17",
      },
      {
        id: "demo-software-release",
        team: "software",
        label: "Release Team",
        audience: "Group sign-off",
        standard: "Software Major Release and Support Handoff Standard",
        revision: "C",
        trigger: "New revision release",
        due: "2026-03-21",
        acknowledged: false,
        signedAt: "",
      },
      {
        id: "demo-ops-doccontrol",
        team: "operations",
        label: "Document Control Team",
        audience: "Group sign-off",
        standard: "Upload Gate and Supersede Control Standard",
        revision: "D",
        trigger: "Authority refresh",
        due: "Current",
        acknowledged: true,
        signedAt: "2026-03-18",
      },
      {
        id: "demo-ops-training",
        team: "operations",
        label: "Training Coordinators",
        audience: "Group sign-off",
        standard: "Training Register and Knowledge Drift Review",
        revision: "F",
        trigger: "Monthly drift review",
        due: "2026-03-29",
        acknowledged: true,
        signedAt: "2026-03-18",
      },
    ],
    uploaders: [
      {
        id: "duke-mercer",
        label: "Grant 'Duke' Mercer | Operations Command Lead",
        authorized: true,
        scope: "All command branches and final release authority",
      },
      {
        id: "mainframe-quinn",
        label: "Miles 'Mainframe' Quinn | Engineering Release Owner",
        authorized: true,
        scope: "Controlled specs, Fusion alignment, and change-to-release pages",
      },
      {
        id: "breaker-dalton",
        label: "Nick 'Breaker' Dalton | Document Control Lead",
        authorized: true,
        scope: "Governance, upload gate, revision control, and training records",
      },
      {
        id: "glenda-price",
        label: "Lena 'Glenda' Price | Finance Lead",
        authorized: true,
        scope: "Finance department pages, close controls, payroll standards, and vendor-payment governance",
      },
      {
        id: "roadblock-hayes",
        label: "Marcus 'Roadblock' Hayes | Logistics Lead",
        authorized: false,
        scope: "Read-only until delegated upload authority is granted",
      },
    ],
    documentSets: [
      {
        type: "Controlled Engineering Spec",
        title: "Pump Head Connector Interface Control Spec",
        lane: "Engineering",
        revision: "F",
        status: "active",
        owner: "Miles 'Mainframe' Quinn",
        acceptance: "14 of 14 required sign-offs complete",
        training: "role-wide",
        supersedes: "Rev E",
        note: "Purple Loctite and electronics-grade silicone are fully released across production cells.",
      },
      {
        type: "Process Standard Work",
        title: "Final Assembly Cell Balance and Closeout Standard",
        lane: "Manufacturing",
        revision: "H",
        status: "active",
        owner: "Marina 'Scarlett' Vance",
        acceptance: "11 of 12 crew acknowledgements complete",
        training: "targeted",
        supersedes: "Rev G",
        note: "One calibration group remains open on the latest torque-sequence retraining.",
      },
      {
        type: "Operating Standard",
        title: "Upload Gate and Supersede Control Standard",
        lane: "Operations Governance",
        revision: "D",
        status: "active",
        owner: "Nick 'Breaker' Dalton",
        acceptance: "8 of 8 upload delegates accepted",
        training: "role-wide",
        supersedes: "Rev C",
        note: "All controlled uploads now require document_id alignment, authority match, and training-impact declaration.",
      },
      {
        type: "Operating Standard",
        title: "5S and Gemba Walk Operating Standard",
        lane: "Operations Governance",
        revision: "E",
        status: "active",
        owner: "Grant 'Duke' Mercer",
        acceptance: "9 of 9 team leads current",
        training: "role-wide",
        supersedes: "Rev D",
        note: "Used in demo mode to show a stable floor-discipline standard with full lead-level sign-off.",
      },
      {
        type: "Operating Standard",
        title: "Close Calendar and Reconciliation Control Standard",
        lane: "Finance",
        revision: "F",
        status: "active",
        owner: "Lena 'Glenda' Price",
        acceptance: "5 of 5 finance acknowledgements current",
        training: "role-wide",
        supersedes: "Rev E",
        note: "Demonstrates a mature finance close cadence with reconciliations, ownership windows, and escalation gates fully in force.",
      },
      {
        type: "Checklist",
        title: "Payroll Change Window and Submission Gate",
        lane: "Finance",
        revision: "C",
        status: "under review",
        owner: "Lena 'Glenda' Price",
        acceptance: "3 of 5 payroll acknowledgements complete",
        training: "targeted",
        supersedes: "Rev B",
        note: "Under review after a new pre-submission review checkpoint was added for payroll exception handling.",
      },
      {
        type: "Process Standard Work",
        title: "Vendor Payment Exception Routing Workflow",
        lane: "Finance",
        revision: "A",
        status: "draft",
        owner: "Lena 'Glenda' Price",
        acceptance: "1 of 4 required reviewers accepted",
        training: "targeted",
        supersedes: "none",
        note: "Shows a new finance workflow still collecting approval before payment holds and exception routing become active.",
      },
      {
        type: "Operating Standard",
        title: "Legacy Check Request and Manual Disbursement Playbook",
        lane: "Finance",
        revision: "B",
        status: "retired",
        owner: "Lena 'Glenda' Price",
        acceptance: "Retired and superseded",
        training: "none",
        supersedes: "Superseded by AP Payment and Vendor Control Rev D",
        note: "Kept in demo mode to show retirement history after Finance moved away from ad hoc manual disbursement practices.",
      },
      {
        type: "Training Path",
        title: "VJSD Remote Troubleshooting and Take-the-Stick Path",
        lane: "Customer Support",
        revision: "E",
        status: "under review",
        owner: "Jaye 'Lady Jaye' Mercer",
        acceptance: "5 of 8 support acknowledgements complete",
        training: "company-wide",
        supersedes: "Rev D",
        note: "Under review after a new consent checkpoint was added for remote control sessions.",
      },
      {
        type: "Checklist",
        title: "Release Gate and Containment Checklist",
        lane: "Quality Control",
        revision: "G",
        status: "active",
        owner: "Nolan 'Flint' Avery",
        acceptance: "6 of 6 inspector acknowledgements complete",
        training: "targeted",
        supersedes: "Rev F",
        note: "Tied directly to the field-failure containment rule and final shipment release.",
      },
      {
        type: "Shared System Hub",
        title: "Fusion Drawing Release and Vendor Spec Control",
        lane: "Shared Systems",
        revision: "G",
        status: "active",
        owner: "Miles 'Mainframe' Quinn",
        acceptance: "6 of 6 release owners accepted",
        training: "targeted",
        supersedes: "Rev F",
        note: "Shows mature design-master governance linking released drawings, vendor specs, and downstream data control.",
      },
      {
        type: "Shared System Hub",
        title: "Odoo BOM Lock and Release Workflow",
        lane: "Shared Systems",
        revision: "J",
        status: "active",
        owner: "Miles 'Mainframe' Quinn",
        acceptance: "7 of 7 affected owners accepted",
        training: "role-wide",
        supersedes: "Rev I",
        note: "Locks design-controlled BOM changes until Fusion and Product Home references are aligned.",
      },
      {
        type: "Cross-Functional Flow",
        title: "Issue Resolution Control Map",
        lane: "Cross-Functional Flows",
        revision: "C",
        status: "active",
        owner: "Jaye 'Lady Jaye' Mercer",
        acceptance: "Customer Support, Engineering, and Software all current",
        training: "none",
        supersedes: "Rev B",
        note: "Routes VJSD issues into Brain review, Zoom, spare fulfillment, VJN, VCMP, or closure.",
      },
      {
        type: "Process Standard Work",
        title: "VCMP Compatibility Fixture Release Workflow",
        lane: "Engineering",
        revision: "B",
        status: "draft",
        owner: "Miles 'Mainframe' Quinn",
        acceptance: "2 of 5 engineering reviewers accepted",
        training: "targeted",
        supersedes: "Rev A",
        note: "Draft example showing a compatibility-engineering workflow still collecting sign-off before release.",
      },
      {
        type: "Operating Standard",
        title: "Field Release Window and Support Readiness Standard",
        lane: "Software",
        revision: "C",
        status: "under review",
        owner: "Miles 'Mainframe' Quinn",
        acceptance: "Software and Support review in progress",
        training: "role-wide",
        supersedes: "Rev B",
        note: "Included to show cross-team release governance with incomplete acceptance before promotion.",
      },
      {
        type: "Operating Standard",
        title: "AI Governance and Assisted Work Review Standard",
        lane: "Management System",
        revision: "A",
        status: "draft",
        owner: "Nick 'Breaker' Dalton",
        acceptance: "0 of 4 required approvers accepted",
        training: "company-wide",
        supersedes: "none",
        note: "Draft example for a new company-wide rule set that has not yet entered active release.",
      },
      {
        type: "Operating Standard",
        title: "Legacy Quality Audit Response Playbook",
        lane: "Operations Governance",
        revision: "B",
        status: "retired",
        owner: "Grant 'Duke' Mercer",
        acceptance: "Retired and superseded",
        training: "none",
        supersedes: "Superseded by Quality Management Structure Rev F",
        note: "Kept visible in demo mode to show a mature library with proper retirement history.",
      },
    ],
  },
};

const demoDepartmentWorkLibrary = {
  marketing: [
    {
      id: "website-update-and-brand-governance",
      department: "marketing",
      title: "Website Update and Brand Governance",
      type: "Process Standard Work",
      revision: "D",
      status: "active",
      owner: "Marketing Lead",
      summary:
        "Governs how Vape-Jet updates public-facing web pages, brand language, and release-facing website content without drifting from approved messaging.",
      related: [
        "marketing-launch-readiness-checklist",
        "social-proof-content-creation",
        "seo-operating-rhythm",
      ],
      systems: ["Slack"],
      flows: ["Lead to Order"],
      trainingTitles: ["Website Update and Brand Governance"],
    },
    {
      id: "social-proof-content-creation",
      department: "marketing",
      title: "Social Proof Content Creation",
      type: "Process Standard Work",
      revision: "C",
      status: "active",
      owner: "Marketing Lead",
      summary:
        "Defines capture, approval, and posting flow for testimonials, install footage, and other credibility assets used in the demand engine.",
      related: ["marketing-launch-readiness-checklist", "website-update-and-brand-governance"],
      systems: ["Slack"],
      flows: ["Lead to Order"],
      trainingTitles: ["Social Proof Content Creation"],
    },
    {
      id: "seo-operating-rhythm",
      department: "marketing",
      title: "SEO Operating Rhythm",
      type: "Operating Standard",
      revision: "B",
      status: "active",
      owner: "Marketing Lead",
      summary:
        "Sets the recurring keyword, content-refresh, and search-performance review cadence for organic acquisition work.",
      related: ["website-update-and-brand-governance"],
      systems: ["Slack"],
      flows: ["Lead to Order"],
      trainingTitles: [],
    },
    {
      id: "marketing-launch-readiness-checklist",
      department: "marketing",
      title: "Marketing Launch Readiness Checklist",
      type: "Checklist",
      revision: "C",
      status: "active",
      owner: "Marketing Lead",
      summary:
        "Final pre-launch verification for site copy, proof assets, CTA links, and release-facing brand consistency.",
      related: ["website-update-and-brand-governance", "social-proof-content-creation"],
      systems: ["Slack"],
      flows: ["Lead to Order"],
      trainingTitles: [],
    },
  ],
  sales: [
    {
      id: "hubspot-opportunity-hygiene-standard",
      department: "sales",
      title: "HubSpot Opportunity Hygiene Standard",
      type: "Operating Standard",
      revision: "D",
      status: "active",
      owner: "Sales Lead",
      summary:
        "Defines stage discipline, required fields, and follow-up expectations so commercial work can route cleanly into order execution.",
      related: ["equipment-sales-order-creation-in-odoo", "machine-ticket-creation-and-routing"],
      systems: ["HubSpot"],
      flows: ["Lead to Order"],
      trainingTitles: [],
    },
    {
      id: "equipment-sales-order-creation-in-odoo",
      department: "sales",
      title: "Equipment Sales Order Creation in Odoo",
      type: "Process Standard Work",
      revision: "E",
      status: "under review",
      owner: "Sales Lead",
      summary:
        "Shows how booked commercial work becomes an executable equipment order in Odoo with the right commercial, build, and downstream routing fields.",
      related: [
        "hubspot-opportunity-hygiene-standard",
        "machine-ticket-creation-and-routing",
        "sales-commitment-change-escalation-checklist",
        "order-release-to-build-queue",
      ],
      systems: ["HubSpot", "Odoo"],
      flows: ["Lead to Order", "Order to Build"],
      trainingTitles: ["Equipment Sales Order Creation in Odoo"],
    },
    {
      id: "machine-ticket-creation-and-routing",
      department: "sales",
      title: "Machine Ticket Creation and Routing",
      type: "Checklist",
      revision: "B",
      status: "active",
      owner: "Sales Lead",
      summary:
        "Captures the minimum commercial and machine-specific information needed before downstream teams can act on order-specific coordination work.",
      related: ["equipment-sales-order-creation-in-odoo", "sales-commitment-change-escalation-checklist"],
      systems: ["Jira"],
      flows: ["Lead to Order"],
      trainingTitles: [],
    },
    {
      id: "sales-commitment-change-escalation-checklist",
      department: "sales",
      title: "Sales Commitment Change Escalation Checklist",
      type: "Checklist",
      revision: "B",
      status: "active",
      owner: "Sales Lead",
      summary:
        "Used when promised scope, timing, or customer commitments change after the commercial path has already started moving downstream.",
      related: ["hubspot-opportunity-hygiene-standard", "equipment-sales-order-creation-in-odoo"],
      systems: ["HubSpot", "Slack"],
      flows: ["Lead to Order", "Order to Build"],
      trainingTitles: [],
    },
  ],
  finance: [
    {
      id: "month-end-close-and-reconciliation-standard",
      department: "finance",
      title: "Month-End Close and Reconciliation Standard",
      type: "Process Standard Work",
      revision: "C",
      status: "active",
      owner: "Finance Lead",
      summary:
        "Defines the close calendar, reconciliation sequence, and review evidence needed to close each period without leaving unresolved balance-sheet or cash questions behind.",
      related: [
        "month-end-close-checklist",
        "customer-invoicing-cash-application-and-collections-standard",
        "purchasing-card-and-expense-control-standard",
        "payroll-preparation-review-and-submission-standard",
      ],
      systems: ["Odoo", "Slack"],
      flows: ["Lead to Order", "Build to Ship", "Issue to Resolution"],
      trainingTitles: ["Month-End Close and Reconciliation Standard"],
    },
    {
      id: "month-end-close-checklist",
      department: "finance",
      title: "Month-End Close Checklist",
      type: "Checklist",
      revision: "B",
      status: "active",
      owner: "Finance Lead",
      summary:
        "Execution checklist for period close tasks, reconciliation evidence, variance review, and handoff into final management sign-off.",
      related: ["month-end-close-and-reconciliation-standard"],
      systems: ["Odoo"],
      flows: ["Lead to Order", "Build to Ship"],
      trainingTitles: [],
    },
    {
      id: "accounts-payable-invoice-intake-approval-and-payment-run-standard",
      department: "finance",
      title: "Accounts Payable Invoice Intake, Approval, and Payment Run Standard",
      type: "Process Standard Work",
      revision: "D",
      status: "active",
      owner: "Finance Lead",
      summary:
        "Controls how vendor invoices are received, matched, approved, and released into payment runs without bypassing purchasing or approval discipline.",
      related: [
        "ap-payment-run-checklist",
        "vendor-setup-and-w-9-payment-method-control-standard",
        "purchasing-card-and-expense-control-standard",
      ],
      systems: ["Odoo", "Slack"],
      flows: ["Order to Build", "Build to Ship", "Change to Release"],
      trainingTitles: ["Accounts Payable Invoice Intake, Approval, and Payment Run Standard"],
    },
    {
      id: "ap-payment-run-checklist",
      department: "finance",
      title: "AP Payment Run Checklist",
      type: "Checklist",
      revision: "B",
      status: "under review",
      owner: "Finance Lead",
      summary:
        "Pre-release checklist for payment timing, approval evidence, banking controls, and hold review before a payment batch is submitted.",
      related: ["accounts-payable-invoice-intake-approval-and-payment-run-standard"],
      systems: ["Odoo"],
      flows: ["Order to Build", "Build to Ship"],
      trainingTitles: [],
    },
    {
      id: "customer-invoicing-cash-application-and-collections-standard",
      department: "finance",
      title: "Customer Invoicing, Cash Application, and Collections Standard",
      type: "Process Standard Work",
      revision: "C",
      status: "active",
      owner: "Finance Lead",
      summary:
        "Defines invoice release, cash application, and collections follow-through so revenue records stay aligned with customer and order reality.",
      related: [
        "month-end-close-and-reconciliation-standard",
        "vendor-setup-and-w-9-payment-method-control-standard",
      ],
      systems: ["Odoo", "Slack"],
      flows: ["Lead to Order", "Issue to Resolution"],
      trainingTitles: ["Customer Invoicing, Cash Application, and Collections Standard"],
    },
    {
      id: "payroll-preparation-review-and-submission-standard",
      department: "finance",
      title: "Payroll Preparation, Review, and Submission Standard",
      type: "Process Standard Work",
      revision: "B",
      status: "under review",
      owner: "Finance Lead",
      summary:
        "Controls payroll data preparation, exception review, and final submission so pay is accurate, approved, and traceable to the current cycle.",
      related: [
        "payroll-pre-submission-review-checklist",
        "month-end-close-and-reconciliation-standard",
      ],
      systems: ["Odoo", "Slack"],
      flows: ["Build to Ship", "Change to Release"],
      trainingTitles: ["Payroll Preparation, Review, and Submission Standard"],
    },
    {
      id: "payroll-pre-submission-review-checklist",
      department: "finance",
      title: "Payroll Pre-Submission Review Checklist",
      type: "Checklist",
      revision: "A",
      status: "active",
      owner: "Finance Lead",
      summary:
        "Checklist used before payroll submission to confirm hours, approval evidence, exception resolution, and payment-timing integrity.",
      related: ["payroll-preparation-review-and-submission-standard"],
      systems: ["Odoo"],
      flows: ["Build to Ship"],
      trainingTitles: [],
    },
    {
      id: "purchasing-card-and-expense-control-standard",
      department: "finance",
      title: "Purchasing Card and Expense Control Standard",
      type: "Operating Standard",
      revision: "D",
      status: "active",
      owner: "Finance Lead",
      summary:
        "Sets the rules for purchasing-card usage, receipt evidence, approval timing, and exception handling before spend becomes a settled finance record.",
      related: [
        "accounts-payable-invoice-intake-approval-and-payment-run-standard",
        "month-end-close-and-reconciliation-standard",
      ],
      systems: ["Odoo", "Slack"],
      flows: ["Order to Build", "Change to Release"],
      trainingTitles: ["Purchasing Card and Expense Control Standard"],
    },
    {
      id: "vendor-setup-and-w-9-payment-method-control-standard",
      department: "finance",
      title: "Vendor Setup and W-9 / Payment Method Control Standard",
      type: "Process Standard Work",
      revision: "C",
      status: "active",
      owner: "Finance Lead",
      summary:
        "Controls vendor creation, W-9 capture, banking detail review, and payment-method changes so disbursements only go to approved counterparties.",
      related: [
        "vendor-setup-control-checklist",
        "accounts-payable-invoice-intake-approval-and-payment-run-standard",
        "customer-invoicing-cash-application-and-collections-standard",
      ],
      systems: ["Odoo", "Slack"],
      flows: ["Order to Build", "Change to Release"],
      trainingTitles: ["Vendor Setup and W-9 / Payment Method Control Standard"],
    },
    {
      id: "vendor-setup-control-checklist",
      department: "finance",
      title: "Vendor Setup Control Checklist",
      type: "Checklist",
      revision: "A",
      status: "active",
      owner: "Finance Lead",
      summary:
        "Verification checklist for vendor master data, tax forms, payment-method changes, and approval evidence before the vendor is released for use.",
      related: ["vendor-setup-and-w-9-payment-method-control-standard"],
      systems: ["Odoo"],
      flows: ["Order to Build", "Change to Release"],
      trainingTitles: [],
    },
  ],
  "customer-support": [
    {
      id: "vjsd-intake-and-brain-telemetry-review",
      department: "customer-support",
      title: "VJSD Intake and Brain Telemetry Review",
      type: "Process Standard Work",
      revision: "C",
      status: "active",
      owner: "Customer Support Lead",
      summary:
        "Governs first response, machine-context review, and the intake path from customer-facing VJSD issues into the right troubleshooting lane.",
      related: [
        "zoom-troubleshooting-and-remote-session-handoff",
        "remote-session-control-and-customer-consent-standard",
        "spare-parts-ordering-and-service-order-creation",
      ],
      systems: ["Jira", "Brain"],
      flows: ["Issue to Resolution"],
      trainingTitles: [
        "VJSD Intake and Brain Telemetry Review",
        "VJSD Triage, Brain Review, and Escalation Standard",
      ],
    },
    {
      id: "zoom-troubleshooting-and-remote-session-handoff",
      department: "customer-support",
      title: "Zoom Troubleshooting and Remote Session Handoff",
      type: "Checklist",
      revision: "B",
      status: "active",
      owner: "Customer Support Lead",
      summary:
        "Covers the operator-facing troubleshooting call, the criteria for escalation into remote control, and the evidence that must be captured afterward.",
      related: [
        "vjsd-intake-and-brain-telemetry-review",
        "remote-session-control-and-customer-consent-standard",
      ],
      systems: ["Zoom", "Brain"],
      flows: ["Issue to Resolution"],
      trainingTitles: ["Zoom Troubleshooting and Remote Session Handoff"],
    },
    {
      id: "remote-session-control-and-customer-consent-standard",
      department: "customer-support",
      title: "Remote Session Control and Customer Consent Standard",
      type: "Operating Standard",
      revision: "E",
      status: "under review",
      owner: "Customer Support Lead",
      summary:
        "Defines customer notification, consent, operator conduct, and documentation rules for take-the-stick remote sessions.",
      related: ["vjsd-intake-and-brain-telemetry-review", "zoom-troubleshooting-and-remote-session-handoff"],
      systems: ["Brain", "Zoom"],
      flows: ["Issue to Resolution"],
      trainingTitles: ["Remote Session Control and Customer Consent Standard"],
    },
    {
      id: "spare-parts-ordering-and-service-order-creation",
      department: "customer-support",
      title: "Spare Parts Ordering and Service Order Creation",
      type: "Process Standard Work",
      revision: "C",
      status: "active",
      owner: "Customer Support Lead",
      summary:
        "Routes field needs into spare-parts fulfillment or service-order execution without losing customer context from the originating ticket.",
      related: ["vjsd-intake-and-brain-telemetry-review", "spare-parts-fulfillment-standard"],
      systems: ["Jira", "Odoo"],
      flows: ["Issue to Resolution"],
      trainingTitles: [],
    },
  ],
  manufacturing: [
    {
      id: "workstation-03-final-assembly-standard",
      department: "manufacturing",
      title: "Workstation 03 Final Assembly Standard",
      type: "Process Standard Work",
      revision: "H",
      status: "active",
      owner: "Manufacturing Lead",
      summary:
        "Released work-cell standard for final assembly, point-of-use references, and controlled build execution on the production floor.",
      related: [
        "connector-retention-application-and-verification",
        "final-testing-and-quality-release",
        "manufacturing-technician-training-path",
        "assembly-manual-point-of-use-standard",
      ],
      systems: ["Product Home", "Odoo"],
      flows: ["Build to Ship"],
      trainingTitles: ["Workstation 03 Final Assembly Standard"],
    },
    {
      id: "connector-retention-application-and-verification",
      department: "manufacturing",
      title: "Connector Retention Application and Verification",
      type: "Checklist",
      revision: "C",
      status: "under review",
      owner: "Manufacturing Lead",
      summary:
        "Point-of-use checklist for connector securement, adhesive application, and verification before the unit can advance to release checks.",
      related: [
        "workstation-03-final-assembly-standard",
        "final-testing-and-quality-release",
        "connector-retention-material-and-adhesive-spec",
        "connector-retention-inspection-check",
      ],
      systems: ["Odoo"],
      flows: ["Build to Ship"],
      trainingTitles: ["Connector Retention Application and Verification"],
    },
    {
      id: "final-testing-and-quality-release",
      department: "manufacturing",
      title: "Final Testing and Quality Release",
      type: "Process Standard Work",
      revision: "B",
      status: "active",
      owner: "Manufacturing Lead",
      summary:
        "Controls the final verification handoff between Manufacturing and QC before the unit becomes eligible for outbound release.",
      related: [
        "workstation-03-final-assembly-standard",
        "connector-retention-application-and-verification",
        "release-gate-and-containment-standard",
      ],
      systems: ["Odoo"],
      flows: ["Build to Ship"],
      trainingTitles: ["Final Testing and Quality Release"],
    },
    {
      id: "manufacturing-technician-training-path",
      department: "manufacturing",
      title: "Manufacturing Technician Training Path",
      type: "Training Path",
      revision: "C",
      status: "active",
      owner: "Manufacturing Lead",
      summary:
        "Defines onboarding, certification, and retraining expectations for technicians who execute released work-cell standards.",
      related: ["workstation-03-final-assembly-standard", "connector-retention-application-and-verification"],
      systems: ["Odoo"],
      flows: ["Build to Ship"],
      trainingTitles: [],
    },
    {
      id: "assembly-manual-point-of-use-standard",
      department: "manufacturing",
      title: "Assembly Manual Point-of-Use Standard",
      type: "Operating Standard",
      revision: "B",
      status: "active",
      owner: "Manufacturing Lead",
      summary:
        "Defines how Product Home build packets and released assembly references are presented, controlled, and consumed at the work cell.",
      related: ["workstation-03-final-assembly-standard"],
      systems: ["Product Home"],
      flows: ["Build to Ship"],
      trainingTitles: [],
    },
  ],
  logistics: [
    {
      id: "odoo-movement-and-bin-integrity-standard",
      department: "logistics",
      title: "Odoo Movement and Bin Integrity Standard",
      type: "Operating Standard",
      revision: "J",
      status: "active",
      owner: "Logistics Lead",
      summary:
        "Defines inventory movement discipline, bin accuracy expectations, and evidence quality inside Odoo.",
      related: ["order-release-to-build-queue", "shipment-release-checklist", "spare-parts-fulfillment-standard"],
      systems: ["Odoo"],
      flows: ["Order to Build", "Build to Ship"],
      trainingTitles: ["Odoo Movement and Bin Integrity Standard"],
    },
    {
      id: "order-release-to-build-queue",
      department: "logistics",
      title: "Order Release to Build Queue",
      type: "Process Standard Work",
      revision: "A",
      status: "active",
      owner: "Logistics Lead",
      summary:
        "Turns clean order data into a build-ready queue by validating release prerequisites before work reaches the floor.",
      related: ["equipment-sales-order-creation-in-odoo", "odoo-movement-and-bin-integrity-standard"],
      systems: ["Odoo"],
      flows: ["Order to Build"],
      trainingTitles: ["Order Release to Build Queue"],
    },
    {
      id: "shipment-release-checklist",
      department: "logistics",
      title: "Shipment Release Checklist",
      type: "Checklist",
      revision: "B",
      status: "active",
      owner: "Logistics Lead",
      summary:
        "Final outbound gate for packaging, documentation, shipment evidence, and customer-hold checks.",
      related: ["odoo-movement-and-bin-integrity-standard", "release-gate-and-containment-standard"],
      systems: ["Odoo"],
      flows: ["Build to Ship"],
      trainingTitles: ["Shipment Release Checklist", "Shipment Release and Hold Control"],
    },
    {
      id: "spare-parts-fulfillment-standard",
      department: "logistics",
      title: "Spare Parts Fulfillment Standard",
      type: "Process Standard Work",
      revision: "C",
      status: "active",
      owner: "Logistics Lead",
      summary:
        "Routes approved spare-part demand into picking, shipment, and customer-notification completion without breaking inventory control.",
      related: ["spare-parts-ordering-and-service-order-creation", "shipment-release-checklist"],
      systems: ["Odoo"],
      flows: ["Issue to Resolution", "Build to Ship"],
      trainingTitles: [],
    },
  ],
  "quality-control": [
    {
      id: "release-gate-and-containment-standard",
      department: "quality-control",
      title: "Release Gate and Containment Standard",
      type: "Process Standard Work",
      revision: "G",
      status: "active",
      owner: "Quality Control Lead",
      summary:
        "Defines the QC release gate, field-failure containment rules, and evidence needed before the unit can clear outbound release.",
      related: [
        "connector-retention-inspection-check",
        "nonconformance-containment-and-disposition",
        "revision-specific-inspection-change-review",
        "shipment-release-checklist",
      ],
      systems: ["Odoo"],
      flows: ["Build to Ship"],
      trainingTitles: ["Release Gate and Containment Standard"],
    },
    {
      id: "connector-retention-inspection-check",
      department: "quality-control",
      title: "Connector Retention Inspection Check",
      type: "Checklist",
      revision: "B",
      status: "active",
      owner: "Quality Control Lead",
      summary:
        "Inspection checkpoint used to verify connector securement against the released controlled requirement before QC release.",
      related: [
        "connector-retention-material-and-adhesive-spec",
        "connector-retention-application-and-verification",
        "release-gate-and-containment-standard",
      ],
      systems: ["Odoo"],
      flows: ["Build to Ship"],
      trainingTitles: ["Connector Retention Inspection Check"],
    },
    {
      id: "nonconformance-containment-and-disposition",
      department: "quality-control",
      title: "Nonconformance Containment and Disposition",
      type: "Process Standard Work",
      revision: "A",
      status: "active",
      owner: "Quality Control Lead",
      summary:
        "Defines how suspected failures are contained, documented, dispositioned, and routed to the right owner for correction.",
      related: ["release-gate-and-containment-standard", "revision-specific-inspection-change-review"],
      systems: ["Jira", "Odoo"],
      flows: ["Build to Ship", "Change to Release"],
      trainingTitles: ["Nonconformance Containment and Disposition"],
    },
    {
      id: "revision-specific-inspection-change-review",
      department: "quality-control",
      title: "Revision-Specific Inspection Change Review",
      type: "Training Path",
      revision: "D",
      status: "active",
      owner: "Quality Control Lead",
      summary:
        "Training and review lane for inspection changes introduced by new released specs, drawings, or release packet updates.",
      related: ["release-gate-and-containment-standard", "nonconformance-containment-and-disposition"],
      systems: ["Odoo"],
      flows: ["Change to Release", "Build to Ship"],
      trainingTitles: ["Revision-Specific Inspection Change Review"],
    },
  ],
  "product-design": [
    {
      id: "fusion-modeling-standards",
      department: "product-design",
      title: "Fusion Modeling Standards",
      type: "Operating Standard",
      revision: "C",
      status: "active",
      owner: "Product Design Lead",
      summary:
        "Sets core modeling, assembly structure, and release-readiness expectations for product-design-owned Fusion work.",
      related: ["drawing-pack-readiness-standard", "compatibility-fixture-design-handoff-checklist"],
      systems: ["Fusion"],
      flows: ["Change to Release", "Order to Build"],
      trainingTitles: ["Fusion Modeling Standards"],
    },
    {
      id: "drawing-pack-readiness-standard",
      department: "product-design",
      title: "Drawing Pack Readiness Standard",
      type: "Process Standard Work",
      revision: "B",
      status: "active",
      owner: "Product Design Lead",
      summary:
        "Defines the minimum drawing completeness, naming, and vendor-facing readiness criteria before release control takes over.",
      related: ["fusion-modeling-standards", "compatibility-fixture-design-handoff-checklist", "bom-approval-and-lock-workflow"],
      systems: ["Fusion"],
      flows: ["Change to Release", "Order to Build"],
      trainingTitles: [],
    },
    {
      id: "hardware-design-framework",
      department: "product-design",
      title: "Hardware Design Framework",
      type: "Operating Standard",
      revision: "B",
      status: "active",
      owner: "Product Design Lead",
      summary:
        "Explains the design-review logic, iteration boundaries, and handoff criteria for hardware product work.",
      related: ["fusion-modeling-standards", "drawing-pack-readiness-standard"],
      systems: ["Fusion", "Slack"],
      flows: ["Change to Release"],
      trainingTitles: [],
    },
    {
      id: "compatibility-fixture-design-handoff-checklist",
      department: "product-design",
      title: "Compatibility Fixture Design Handoff Checklist",
      type: "Checklist",
      revision: "A",
      status: "active",
      owner: "Product Design Lead",
      summary:
        "Used when compatibility or fixture design work must pass from Product Design into Engineering release control without losing fit and usage context.",
      related: ["fusion-modeling-standards", "compatibility-fixture-release-workflow"],
      systems: ["Fusion", "Jira"],
      flows: ["Change to Release", "Issue to Resolution"],
      trainingTitles: [],
    },
  ],
  engineering: [
    {
      id: "controlled-engineering-spec-lifecycle",
      department: "engineering",
      title: "Controlled Engineering Spec Lifecycle",
      type: "Operating Standard",
      revision: "F",
      status: "active",
      owner: "Engineering Lead",
      summary:
        "Defines how technically controlled requirements are created, reviewed, revised, released, and retired.",
      related: [
        "connector-retention-material-and-adhesive-spec",
        "engineering-change-control-execution",
        "bom-approval-and-lock-workflow",
      ],
      systems: ["Fusion", "Odoo", "Product Home"],
      flows: ["Change to Release"],
      trainingTitles: ["Controlled Engineering Spec Lifecycle"],
    },
    {
      id: "connector-retention-material-and-adhesive-spec",
      department: "engineering",
      title: "Connector Retention Material and Adhesive Spec",
      type: "Controlled Engineering Spec",
      revision: "F",
      status: "active",
      owner: "Engineering Lead",
      summary:
        "Authoritative released requirement for connector securement materials, process parameters, and inspection acceptance criteria.",
      related: [
        "controlled-engineering-spec-lifecycle",
        "connector-retention-application-and-verification",
        "connector-retention-inspection-check",
      ],
      systems: ["Fusion", "Product Home"],
      flows: ["Change to Release", "Build to Ship"],
      trainingTitles: [],
    },
    {
      id: "engineering-change-control-execution",
      department: "engineering",
      title: "Engineering Change Control Execution",
      type: "Process Standard Work",
      revision: "B",
      status: "active",
      owner: "Engineering Lead",
      summary:
        "Routes technical changes through classification, approval, downstream update checks, and release evidence before work reaches operations.",
      related: [
        "controlled-engineering-spec-lifecycle",
        "bom-approval-and-lock-workflow",
        "compatibility-fixture-release-workflow",
      ],
      systems: ["Fusion", "Odoo", "Jira", "Product Home"],
      flows: ["Change to Release"],
      trainingTitles: ["Engineering Change Control Execution"],
    },
    {
      id: "compatibility-fixture-release-workflow",
      department: "engineering",
      title: "Compatibility Fixture Release Workflow",
      type: "Process Standard Work",
      revision: "B",
      status: "draft",
      owner: "Engineering Lead",
      summary:
        "Controls VCMP compatibility and fixture work from intake through review, drawing/spec release, and downstream readiness checks.",
      related: [
        "engineering-change-control-execution",
        "compatibility-fixture-design-handoff-checklist",
      ],
      systems: ["Fusion", "Jira", "Odoo"],
      flows: ["Issue to Resolution", "Change to Release"],
      trainingTitles: ["Compatibility Fixture Release Workflow"],
    },
    {
      id: "bom-approval-and-lock-workflow",
      department: "engineering",
      title: "BOM Approval and Lock Workflow",
      type: "Process Standard Work",
      revision: "D",
      status: "active",
      owner: "Engineering Lead",
      summary:
        "Defines how released item masters and BOMs are approved, locked, and aligned between design, execution, and published build references.",
      related: [
        "controlled-engineering-spec-lifecycle",
        "engineering-change-control-execution",
        "drawing-pack-readiness-standard",
        "equipment-sales-order-creation-in-odoo",
      ],
      systems: ["Fusion", "Odoo", "Product Home"],
      flows: ["Order to Build", "Change to Release"],
      trainingTitles: [],
    },
  ],
  software: [
    {
      id: "vjn-triage-and-routing-standard",
      department: "software",
      title: "VJN Triage and Routing Standard",
      type: "Process Standard Work",
      revision: "C",
      status: "active",
      owner: "Software Lead",
      summary:
        "Defines how software-relevant issues are screened, categorized, and routed once they enter Jira as internal technical work.",
      related: ["software-major-release-and-support-handoff-standard", "feature-request-evaluation-path"],
      systems: ["Jira", "Slack"],
      flows: ["Issue to Resolution", "Change to Release"],
      trainingTitles: [],
    },
    {
      id: "software-major-release-and-support-handoff-standard",
      department: "software",
      title: "Software Major Release and Support Handoff Standard",
      type: "Operating Standard",
      revision: "C",
      status: "under review",
      owner: "Software Lead",
      summary:
        "Controls how major software releases move from planned release into Support-facing readiness, notes, escalation handling, and field communication.",
      related: ["vjn-triage-and-routing-standard", "minor-update-release-checklist"],
      systems: ["Jira", "Brain", "Slack"],
      flows: ["Change to Release", "Issue to Resolution"],
      trainingTitles: ["Software Major Release and Support Handoff Standard"],
    },
    {
      id: "feature-request-evaluation-path",
      department: "software",
      title: "Feature Request Evaluation Path",
      type: "Process Standard Work",
      revision: "B",
      status: "active",
      owner: "Software Lead",
      summary:
        "Shows how feature requests are screened for product, engineering, and release impact before entering committed technical work.",
      related: ["vjn-triage-and-routing-standard"],
      systems: ["Jira"],
      flows: ["Issue to Resolution", "Change to Release"],
      trainingTitles: [],
    },
    {
      id: "minor-update-release-checklist",
      department: "software",
      title: "Minor Update Release Checklist",
      type: "Checklist",
      revision: "B",
      status: "active",
      owner: "Software Lead",
      summary:
        "Lightweight checklist for minor releases where support impact, release notes, and rollback confidence still need explicit confirmation.",
      related: ["software-major-release-and-support-handoff-standard"],
      systems: ["Jira", "Slack"],
      flows: ["Change to Release"],
      trainingTitles: [],
    },
  ],
};

const pilotDepartmentWorkLibrary = {
  marketing: [
    {
      id: "marketing-hub",
      department: "marketing",
      title: "Marketing Hub",
      type: "Department Hub",
      revision: "A",
      status: "draft",
      owner: "Marketing Lead",
      summary:
        "Skeleton hub for marketing ownership, launch coordination, and future content standards in the pilot experience.",
      related: [],
      systems: ["HubSpot", "Slack"],
      flows: ["Lead to Order"],
      trainingTitles: [],
    },
  ],
  sales: [
    {
      id: "sales-hub",
      department: "sales",
      title: "Sales Hub",
      type: "Department Hub",
      revision: "A",
      status: "draft",
      owner: "Sales Lead",
      summary:
        "Skeleton hub for commercial ownership, order handoff, and future sales discipline in the pilot experience.",
      related: [],
      systems: ["HubSpot", "Odoo", "Jira"],
      flows: ["Lead to Order", "Order to Build"],
      trainingTitles: [],
    },
  ],
  finance: [
    {
      id: "finance-hub",
      department: "finance",
      title: "Finance Hub",
      type: "Department Hub",
      revision: "A",
      status: "draft",
      owner: "Finance Lead",
      summary:
        "Skeleton hub for finance ownership, close discipline, payroll, and future AP/AR control standards in the pilot experience.",
      related: [],
      systems: ["Odoo", "Slack"],
      flows: ["Lead to Order", "Order to Build", "Build to Ship"],
      trainingTitles: [],
    },
  ],
  "customer-support": [
    {
      id: "customer-support-hub",
      department: "customer-support",
      title: "Customer Support Hub",
      type: "Department Hub",
      revision: "A",
      status: "active",
      owner: "Customer Support Lead",
      summary:
        "Skeleton hub for support ownership, issue intake, and future troubleshooting standards in the pilot experience.",
      related: [],
      systems: ["Jira", "Brain", "Zoom"],
      flows: ["Issue to Resolution"],
      trainingTitles: [],
    },
  ],
  manufacturing: [
    {
      id: "manufacturing-hub",
      department: "manufacturing",
      title: "Manufacturing Hub",
      type: "Department Hub",
      revision: "A",
      status: "active",
      owner: "Manufacturing Lead",
      summary:
        "Skeleton hub for work-cell ownership, floor execution, and future build standards in the pilot experience.",
      related: [],
      systems: ["Odoo", "Product Home"],
      flows: ["Order to Build", "Build to Ship"],
      trainingTitles: [],
    },
  ],
  logistics: [
    {
      id: "logistics-hub",
      department: "logistics",
      title: "Logistics Hub",
      type: "Department Hub",
      revision: "A",
      status: "active",
      owner: "Logistics Lead",
      summary:
        "Skeleton hub for inventory, order release, and shipment ownership in the pilot experience.",
      related: [],
      systems: ["Odoo"],
      flows: ["Order to Build", "Build to Ship", "Issue to Resolution"],
      trainingTitles: [],
    },
  ],
  "quality-control": [
    {
      id: "quality-control-hub",
      department: "quality-control",
      title: "Quality Control Hub",
      type: "Department Hub",
      revision: "A",
      status: "active",
      owner: "Quality Control Lead",
      summary:
        "Skeleton hub for inspection, containment, and release ownership in the pilot experience.",
      related: [],
      systems: ["Odoo", "Jira"],
      flows: ["Build to Ship", "Change to Release"],
      trainingTitles: [],
    },
  ],
  "product-design": [
    {
      id: "product-design-hub",
      department: "product-design",
      title: "Product Design Hub",
      type: "Department Hub",
      revision: "A",
      status: "draft",
      owner: "Product Design Lead",
      summary:
        "Skeleton hub for design ownership, release-readiness, and future framework standards in the pilot experience.",
      related: [],
      systems: ["Fusion", "Slack"],
      flows: ["Change to Release", "Order to Build"],
      trainingTitles: [],
    },
  ],
  engineering: [
    {
      id: "engineering-hub",
      department: "engineering",
      title: "Engineering Hub",
      type: "Department Hub",
      revision: "A",
      status: "active",
      owner: "Engineering Lead",
      summary:
        "Skeleton hub for change control, controlled specs, and technical release ownership in the pilot experience.",
      related: [],
      systems: ["Fusion", "Odoo", "Jira", "Product Home"],
      flows: ["Order to Build", "Change to Release"],
      trainingTitles: [],
    },
  ],
  software: [
    {
      id: "software-hub",
      department: "software",
      title: "Software Hub",
      type: "Department Hub",
      revision: "A",
      status: "draft",
      owner: "Software Lead",
      summary:
        "Skeleton hub for software ownership, release handoff, and future VJN/feature standards in the pilot experience.",
      related: [],
      systems: ["Jira", "Slack", "Brain"],
      flows: ["Issue to Resolution", "Change to Release"],
      trainingTitles: [],
    },
  ],
};

const departmentWorkLibraries = {
  pilot: pilotDepartmentWorkLibrary,
  demo: demoDepartmentWorkLibrary,
};

function getDepartmentWorkIndexForScenario(scenarioId = activeScenario) {
  const library = departmentWorkLibraries[scenarioId] ?? pilotDepartmentWorkLibrary;
  return Object.values(library)
    .flat()
    .map((item) => ({
      ...item,
      trainingTitles:
        item.trainingTitles && item.trainingTitles.length > 0 ? item.trainingTitles : [item.title],
    }));
}

function getDepartmentWorkMapForScenario(scenarioId = activeScenario) {
  return new Map(getDepartmentWorkIndexForScenario(scenarioId).map((item) => [item.id, item]));
}

function getScenarioBranch(scenario, departmentId) {
  return scenario.orgChart.branches.find((branch) => branch.id === departmentId) ?? null;
}

function getDepartmentLabelStatic(departmentId) {
  return data.departments.find((item) => item.id === departmentId)?.label ?? departmentId;
}

function buildSyntheticTrainingRecord(scenarioId, scenario, item) {
  const branch = getScenarioBranch(scenario, item.department);
  const acknowledged = item.status === "active";
  const trigger =
    item.status === "draft"
      ? "Initial release training build"
      : item.status === "under review"
        ? "New revision release"
        : item.type === "Training Path"
          ? "Quarterly refresh"
          : "Current revision acknowledgement";

  const label =
    item.type === "Controlled Engineering Spec" || item.type === "Operating Standard"
      ? branch?.lead ?? `${getDepartmentLabelStatic(item.department)} Lead`
      : branch?.crew ?? `${getDepartmentLabelStatic(item.department)} Team`;

  return {
    id: `${scenarioId}-${item.id}-training`,
    team: item.department,
    label,
    audience:
      item.type === "Controlled Engineering Spec" || item.type === "Operating Standard"
        ? "Lead sign-off"
        : "Group sign-off",
    standard: item.trainingTitles[0],
    revision: item.revision,
    trigger,
    due: acknowledged ? "Current" : scenarioId === "demo" ? "2026-03-31" : "2026-03-28",
    acknowledged,
    signedAt: acknowledged ? (scenarioId === "demo" ? "2026-03-18" : "2026-03-17") : "",
  };
}

function ensureScenarioTrainingCoverage() {
  Object.entries(scenarioData).forEach(([scenarioId, scenario]) => {
    if (scenario.autoTrainingCoverage === false) {
      return;
    }

    getDepartmentWorkIndexForScenario(scenarioId).forEach((item) => {
      const titles = new Set(item.trainingTitles);
      const hasAttachedRecord = scenario.trainingRecords.some((record) => titles.has(record.standard));

      if (!hasAttachedRecord) {
        scenario.trainingRecords.push(buildSyntheticTrainingRecord(scenarioId, scenario, item));
      }
    });
  });
}

ensureScenarioTrainingCoverage();

const uploadContract = {
  navigationOnlyPageTypes: [
    "Vision and Mission",
    "Cultural Logic",
    "Pillar Overview",
    "Cultural Turbine Overview",
    "Cross-Functional Flow",
    "Shared Systems Overview",
    "Shared System Hub",
    "Management System Overview",
    "Governance Overview",
  ],
  navigationRequiredFields: [
    "page_type",
    "document_id",
    "revision",
    "effective_date",
    "supersedes",
    "upload_authority",
    "owner",
    "backup_owner",
    "status",
    "last_reviewed",
  ],
  requiredFields: [
    "page_type",
    "department",
    "operating_layer",
    "applies_to_departments",
    "authoritative_system",
    "work_type",
    "owner",
    "backup_owner",
    "pillars",
    "principles",
    "related_flow",
    "systems",
    "review_cadence",
    "status",
    "last_reviewed",
  ],
  uploadControlFields: [
    "document_id",
    "revision",
    "effective_date",
    "training_requirement",
    "supersedes",
    "upload_authority",
  ],
  requiredSections: [
    "Purpose",
    "Scope",
    "Trigger",
    "Completion Definition",
    "Steps / Decision Points",
    "Inputs / Outputs",
    "Risks / Escalations",
    "Linked Tools / Forms",
    "Authoritative References",
    "Pillar and Principle Mapping",
  ],
  navigationRequiredSections: ["Purpose", "Linked Standards"],
  additionalSectionsByWorkType: {
    "controlled-engineering-spec": [
      "Change Reason",
      "Controlled Requirement",
      "Approved Materials / Variants",
      "Prohibited Materials / Legacy Methods",
      "Application / Process Requirements",
      "Acceptance Criteria",
      "Validation / Release Evidence",
      "Downstream Controlled Updates",
    ],
    "department-hub": [
      "Charter and Outcomes",
      "Core Responsibilities",
      "Role-Based Standard Work",
      "Process-Based Standard Work",
      "Handoffs / Interfaces",
      "Training Path",
      "Metrics / Health Checks",
      "Improvement Queue",
    ],
    "operating-standard": ["Rule", "Scope of Application", "Exceptions / Escalations"],
    "training-path": [
      "Training Audience",
      "Acknowledgement and Sign-Off",
      "Retraining Triggers",
    ],
  },
  allowed: {
    page_type: [
      "Department Hub",
      "Operating Standard",
      "Role Standard Work",
      "Process Standard Work",
      "Controlled Engineering Spec",
      "Checklist",
      "Training Path",
      "Improvement Queue",
      "Vision and Mission",
      "Cultural Logic",
      "Pillar Overview",
      "Cultural Turbine Overview",
      "Cross-Functional Flow",
      "Shared Systems Overview",
      "Shared System Hub",
      "Management System Overview",
      "Governance Overview",
    ],
    work_type: [
      "department-hub",
      "operating-standard",
      "role-standard-work",
      "process-standard-work",
      "controlled-engineering-spec",
      "checklist",
      "training-path",
      "improvement-queue",
    ],
    operating_layer: ["department", "shared-system", "management-system", "product-interface"],
    status: ["draft", "active", "under review", "retired"],
    review_cadence: [
      "weekly",
      "monthly",
      "quarterly",
      "semiannual",
      "annual",
      "event-driven",
    ],
    authoritative_system: [
      "confluence-standard-work",
      "fusion",
      "odoo",
      "jira",
      "brain",
      "product-home",
      "hubspot",
      "slack",
      "zoom",
    ],
    training_requirement: ["none", "targeted", "role-wide", "company-wide"],
  },
};

const branchButtons = document.querySelector("#branch-buttons");
const branchKicker = document.querySelector("#branch-kicker");
const branchTitle = document.querySelector("#branch-title");
const branchSummary = document.querySelector("#branch-summary");
const branchGrid = document.querySelector("#branch-grid");
const commandLayout = document.querySelector(".command-layout");
const statStrip = document.querySelector("#stat-strip");
const signalChain = document.querySelector("#signal-chain");
const flightGrid = document.querySelector("#flight-grid");
const authorityCards = document.querySelector("#authority-cards");
const flowButtons = document.querySelector("#flow-buttons");
const flowKicker = document.querySelector("#flow-kicker");
const flowTitle = document.querySelector("#flow-title");
const flowSummary = document.querySelector("#flow-summary");
const flowSteps = document.querySelector("#flow-steps");
const departmentFilters = document.querySelector("#department-filters");
const departmentGrid = document.querySelector("#department-grid");
const departmentDetailPanel = document.querySelector("#department-detail-panel");
const templateGrid = document.querySelector("#template-grid");
const searchCard = document.querySelector("#search-card");
const searchDockRail = document.querySelector("#search-dock-rail");
const searchInput = document.querySelector("#search-input");
const searchResults = document.querySelector("#search-results");
const searchResultsHeading = document.querySelector("#search-results-heading");
const searchSummary = document.querySelector("#search-summary");
const searchGrid = document.querySelector("#search-grid");
const topbar = document.querySelector(".topbar");
const scenarioToggleTop = document.querySelector("#scenario-toggle-top");
const scenarioToggle = document.querySelector("#scenario-toggle");
const orgRoot = document.querySelector("#org-root");
const orgGrid = document.querySelector("#org-grid");
const trainingSummaryGrid = document.querySelector("#training-summary-grid");
const trainingProgressList = document.querySelector("#training-progress-list");
const retrainingList = document.querySelector("#retraining-list");
const trainingFilters = document.querySelector("#training-filters");
const signoffGrid = document.querySelector("#signoff-grid");
const documentGrid = document.querySelector("#document-grid");
const uploadActor = document.querySelector("#upload-actor");
const uploadFile = document.querySelector("#upload-file");
const uploadRuleList = document.querySelector("#upload-rule-list");
const uploadDropzone = document.querySelector("#upload-dropzone");
const uploadDropCopy = document.querySelector("#upload-drop-copy");
const uploadStatusTitle = document.querySelector("#upload-status-title");
const uploadStatusCopy = document.querySelector("#upload-status-copy");
const uploadStatusStrip = document.querySelector("#upload-status-strip");
const uploadPlacementCard = document.querySelector("#upload-placement-card");
const uploadIssuesList = document.querySelector("#upload-issues-list");
const uploadFixesList = document.querySelector("#upload-fixes-list");

let activeBranch = data.branches[0].id;
let activeFlow = data.flows[0].id;
let activeDepartment = "all";
let activeDepartmentDocId = "";
let activeScenario = "pilot";
let activeTrainingTeam = "all";
let searchIsDocked = false;
let latestUploadReport = null;

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getTeamLabel(teamId) {
  const branch = getScenario().orgChart.branches.find((item) => item.id === teamId);
  if (branch) {
    return branch.label;
  }

  const department = data.departments.find((item) => item.id === teamId);
  return department ? department.label : teamId;
}

function getScenario() {
  return scenarioData[activeScenario];
}

function isPilotScenario(scenarioId = activeScenario) {
  return scenarioId === "pilot";
}

function getPilotDepartmentBlueprint(departmentId) {
  if (!departmentId || departmentId === "all") {
    return null;
  }

  const department = data.departments.find((item) => item.id === departmentId);
  const hub = (pilotDepartmentWorkLibrary[departmentId] ?? [])[0] ?? null;

  if (!department || !hub) {
    return null;
  }

  return {
    department,
    hub,
    templateLanes: department.standards ?? [],
    checklistLanes: [
      "Checklist template lane",
      "Training acknowledgment template lane",
      "Escalation and handoff checklist lane",
    ],
    trainingLanes: [
      "Attach a training record to every released standard work item",
      "Use group or individual acknowledgement based on the work",
      "Reopen retraining on revision change, drift, or understanding gaps",
    ],
  };
}

function getStatusClass(status) {
  if (status === "active") {
    return "is-ok";
  }
  if (status === "under review" || status === "draft") {
    return "is-warning";
  }
  return "is-alert";
}

function getDepartmentWorkItems(departmentId) {
  return (departmentWorkLibraries[activeScenario] ?? pilotDepartmentWorkLibrary)[departmentId] ?? [];
}

function getDepartmentWorkItem(docId) {
  return getDepartmentWorkMapForScenario(activeScenario).get(docId) ?? null;
}

function getVisibleDepartments() {
  return activeDepartment === "all"
    ? data.departments.filter((dept) => dept.id !== "all")
    : data.departments.filter((dept) => dept.id === activeDepartment);
}

function ensureActiveDepartmentDoc() {
  const visibleDocIds = getVisibleDepartments().flatMap((dept) =>
    getDepartmentWorkItems(dept.id).map((item) => item.id),
  );

  if (visibleDocIds.length === 0) {
    activeDepartmentDocId = "";
    return;
  }

  if (!visibleDocIds.includes(activeDepartmentDocId)) {
    activeDepartmentDocId = visibleDocIds[0];
  }
}

function getTrainingRecordsForWorkItem(item) {
  const titles = new Set([item.title, ...(item.trainingTitles ?? [])]);
  return getScenario().trainingRecords.filter((record) => titles.has(record.standard));
}

function getBacklinksForWorkItem(docId) {
  return getDepartmentWorkIndexForScenario(activeScenario).filter((item) =>
    (item.related ?? []).includes(docId),
  );
}

function scrollDepartmentWorkbenchIntoView() {
  if (!departmentDetailPanel) {
    return;
  }

  const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 0;
  const panelTop = window.scrollY + departmentDetailPanel.getBoundingClientRect().top;
  const targetTop = Math.max(0, Math.round(panelTop - topbarHeight - 20));

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
}

function buildDefaultTrigger(item, trainingRecords) {
  if (trainingRecords.length > 0) {
    return `Current scenario trigger: ${trainingRecords[0].trigger}.`;
  }

  if (item.type === "Checklist") {
    return "Use this at the point of execution before the work can advance.";
  }

  if (item.type === "Training Path") {
    return "Use this when onboarding, recertification, or retraining is required.";
  }

  return "Use this whenever the owning team performs or governs this body of work.";
}

function buildScopeBullets(item, relatedDocs) {
  const bullets = [
    `Owning department: ${getTeamLabel(item.department)}`,
    `Primary systems: ${item.systems.join(", ")}`,
    `Primary flows: ${item.flows.join(", ")}`,
  ];

  if (relatedDocs.length > 0) {
    bullets.push(
      `Linked controlled references: ${relatedDocs
        .slice(0, 3)
        .map((doc) => doc.title)
        .join(", ")}.`,
    );
  }

  return bullets;
}

function buildTriggerText(item, trainingRecords) {
  if (item.type === "Department Hub") {
    return `Use this hub when ownership, the right next standard, or the correct ${getTeamLabel(item.department)} lane is not yet obvious.`;
  }

  if (trainingRecords.length > 0) {
    return `Current scenario trigger: ${trainingRecords[0].trigger}.`;
  }

  if (item.department === "marketing") {
    return "Use this when content, web, or launch-facing brand work needs a governed release path.";
  }
  if (item.department === "sales") {
    return "Use this when commercial work is booked, changed, or needs clean downstream coordination.";
  }
  if (item.department === "finance") {
    return "Use this when close, payable, receivable, payroll, or controlled spend work needs governed execution and sign-off.";
  }
  if (item.department === "customer-support") {
    return "Use this when a customer ticket needs triage, troubleshooting, service routing, or escalation.";
  }
  if (item.department === "manufacturing") {
    return "Use this at the work cell whenever released build execution or operator verification is required.";
  }
  if (item.department === "logistics") {
    return "Use this when inventory, order release, spare fulfillment, or outbound shipment control is in play.";
  }
  if (item.department === "quality-control") {
    return "Use this when inspection, containment, or release disposition work is active.";
  }
  if (item.department === "product-design") {
    return "Use this when design work must be prepared for release, review, or compatibility handoff.";
  }
  if (item.department === "engineering") {
    return "Use this when a technical change, spec, BOM, or compatibility release decision is being made.";
  }
  if (item.department === "software") {
    return "Use this when software work must move from request intake into release-ready execution and support handoff.";
  }

  return buildDefaultTrigger(item, trainingRecords);
}

function buildWorkStepBullets(item, checklistTitles, standardTitles, backlinks) {
  const linkedChecklistText =
    checklistTitles.length > 0
      ? `Open the attached execution aids first: ${checklistTitles.join(", ")}.`
      : "Open the current released references and verify the correct working context before proceeding.";
  const linkedStandardText =
    standardTitles.length > 0
      ? `Stay aligned to these linked governing standards: ${standardTitles.join(", ")}.`
      : "Confirm there is no missing upstream standard, spec, or system rule before executing.";
  const backlinkText =
    backlinks.length > 0
      ? `Before changing this artifact, review where it is used: ${backlinks
          .slice(0, 3)
          .map((doc) => doc.title)
          .join(", ")}.`
      : "Before changing this artifact, confirm whether any downstream team, checklist, or release packet depends on it.";

  if (item.type === "Department Hub") {
    return [
      `Start here to understand what ${getTeamLabel(item.department)} owns in the current operating model.`,
      "Use this skeleton hub to find the next standard, checklist, training path, or shared-system reference as the library matures.",
      linkedStandardText,
      `Confirm the primary systems and flows for this lane before drafting or revising deeper standards.`,
      backlinkText,
    ];
  }

  switch (item.department) {
    case "marketing":
      return [
        "Start from the current approved campaign or website change request and confirm the owner, launch window, and target audience.",
        linkedChecklistText,
        "Prepare the content, copy, proof assets, and brand-sensitive elements in the working draft before any publish step occurs.",
        "Run the review pass for links, visuals, CTA accuracy, and message consistency before publication.",
        backlinkText,
      ];
    case "sales":
      return [
        "Confirm the opportunity, quote, and booked scope match the customer commitment before any downstream order action is taken.",
        "Enter or review the required commercial, machine, shipping, and schedule fields in the execution system without leaving placeholders behind.",
        linkedChecklistText,
        "Route commitment changes or machine-specific exceptions before the order reaches build or fulfillment teams.",
        backlinkText,
      ];
    case "finance":
      return [
        "Start from the current period, transaction set, or payment cycle and confirm the owner, approval state, and source evidence are complete.",
        linkedChecklistText,
        "Reconcile invoices, cash, payroll inputs, or vendor/payment records against the live execution system before releasing the next action.",
        "Hold the work if approval evidence, vendor controls, tax support, or exception review is incomplete.",
        backlinkText,
      ];
    case "customer-support":
      return [
        "Open the originating customer record, confirm machine identity, issue severity, and the latest customer-facing context.",
        "Review Brain telemetry or machine evidence before deciding whether guidance, Zoom troubleshooting, parts, VJN, or VCMP is the right next lane.",
        linkedChecklistText,
        "Capture the troubleshooting outcome and update the customer-facing record before the work is considered complete.",
        backlinkText,
      ];
    case "manufacturing":
      return [
        "Start from the released build packet, workstation revision, and current traveler or job context at the cell.",
        linkedChecklistText,
        "Execute the physical build sequence exactly to the released method and record required evidence at the point of use.",
        "Stop and escalate if the part, tool, adhesive, drawing, or packet does not match the released reference.",
        backlinkText,
      ];
    case "logistics":
      return [
        "Verify the order, item, bin, or spare-parts demand against the live execution record before moving inventory.",
        "Complete the inventory, queue, or shipment action in Odoo with clean quantities, location data, and release evidence.",
        linkedChecklistText,
        "Hold the work if there is a mismatch in item status, shipment readiness, or customer hold condition.",
        backlinkText,
      ];
    case "quality-control":
      return [
        "Start from the current released revision, inspection criteria, and containment status of the unit or batch under review.",
        linkedChecklistText,
        "Verify the work against the controlled requirement and capture objective release or nonconformance evidence.",
        "Contain and route exceptions immediately instead of allowing ambiguous product status to move downstream.",
        backlinkText,
      ];
    case "product-design":
      return [
        "Start from the approved design intent, current model state, and the release or compatibility question that must be answered.",
        "Prepare the model, drawing, or handoff artifact so that nomenclature, fit logic, and release-readiness are explicit.",
        linkedChecklistText,
        linkedStandardText,
        backlinkText,
      ];
    case "engineering":
      return [
        "Classify the technical work first: controlled requirement, BOM/data update, drawing release, or change-control action.",
        linkedChecklistText,
        "Align Fusion, Odoo, Jira, and Product Home impacts before calling the change release-ready.",
        "Collect the approval evidence and downstream update proof needed for clean release traceability.",
        backlinkText,
      ];
    case "software":
      return [
        "Start from the Jira work record, affected release window, and the field/support impact of the requested change.",
        "Route the work through triage, solution definition, and release-readiness checks before support-facing communication is prepared.",
        linkedChecklistText,
        "Do not release until notes, rollback posture, and support handoff evidence are complete.",
        backlinkText,
      ];
    default:
      return [
        `Start from the current released revision (${item.revision}) and confirm owner authority with ${item.owner}.`,
        linkedChecklistText,
        `Execute the ${item.type.toLowerCase()} in the ${getTeamLabel(item.department)} lane and capture evidence in ${item.systems.join(", ")} as required.`,
        linkedStandardText,
        backlinkText,
      ];
  }
}

function buildInputOutputBullets(item) {
  if (item.type === "Department Hub") {
    return [
      `Inputs: an ownership question, a department-level execution need, or uncertainty about the right next page inside ${getTeamLabel(item.department)}.`,
      `Outputs: the correct lane, owner, and next standard or system reference for ${getTeamLabel(item.department)} work.`,
    ];
  }

  switch (item.department) {
    case "marketing":
      return [
        "Inputs: approved request, source assets, campaign context, and current brand guidance.",
        "Outputs: published content, launch evidence, and updated reference links for downstream commercial use.",
      ];
    case "sales":
      return [
        "Inputs: qualified opportunity, commercial terms, product scope, and customer commitments.",
        "Outputs: clean order record, machine coordination signal, and downstream-ready execution data.",
      ];
    case "finance":
      return [
        "Inputs: invoices, receipts, vendor records, payroll inputs, payment approvals, and close schedules.",
        "Outputs: reconciled balances, released payments or invoices, payroll submission evidence, and controlled vendor/payment records.",
      ];
    case "customer-support":
      return [
        "Inputs: VJSD ticket, machine telemetry, customer context, and field evidence.",
        "Outputs: resolved ticket path, escalated engineering/software record when required, and updated customer status.",
      ];
    case "manufacturing":
      return [
        "Inputs: released build packet, available parts/tools, and current workstation revision.",
        "Outputs: executed assembly step, captured verification evidence, and clean handoff into QC or the next cell.",
      ];
    case "logistics":
      return [
        "Inputs: live order or spare demand, item/bin status, and shipment prerequisites.",
        "Outputs: accurate inventory movement, queue release, or outbound shipment confirmation.",
      ];
    case "quality-control":
      return [
        "Inputs: unit status, released criteria, checkpoint evidence, and any containment history.",
        "Outputs: release decision, nonconformance record, or routed hold with clear status ownership.",
      ];
    case "product-design":
      return [
        "Inputs: design intent, compatibility need, current model state, and release criteria.",
        "Outputs: release-ready design artifact, clear handoff package, or defined follow-up into Engineering.",
      ];
    case "engineering":
      return [
        "Inputs: technical change signal, released references, impacted BOM/spec/doc context, and approval expectations.",
        "Outputs: approved controlled update, downstream system alignment, and release evidence.",
      ];
    case "software":
      return [
        "Inputs: Jira technical record, release target, issue context, and support impact.",
        "Outputs: triaged or released software change, support handoff evidence, and updated field-facing communication.",
      ];
    default:
      return [
        `Inputs: released references, current training state, and live system context from ${item.systems.join(", ")}.`,
        `Outputs: completed work evidence, updated downstream status, and a clean handoff through ${item.flows.join(", ")}.`,
      ];
  }
}

function buildRiskBullets(item) {
  if (item.type === "Department Hub") {
    return [
      "Escalate if the department lane is missing a needed standard, checklist, or training path for live work.",
      "Escalate if ownership between the department, a shared system, and a cross-functional flow is still unclear.",
      "Escalate if teams are relying on verbal instruction because the next controlled page has not been seeded yet.",
    ];
  }

  switch (item.department) {
    case "marketing":
      return [
        "Escalate if copy, claims, or media drift from approved brand language or product truth.",
        "Escalate if a public-facing change references an outdated release, feature, or support promise.",
        "Escalate if the launch artifact changes customer expectation without downstream team awareness.",
      ];
    case "sales":
      return [
        "Escalate if booked scope does not match the latest quote, product definition, or build readiness.",
        "Escalate if order-specific commitments would create downstream timing, machine, or fulfillment risk.",
        "Escalate if the order cannot be expressed cleanly in HubSpot, Odoo, or the required Jira path.",
      ];
    case "finance":
      return [
        "Escalate if payment, payroll, or invoice release would proceed without current approval evidence or supporting documentation.",
        "Escalate if vendor identity, W-9 status, or payment-method changes are unclear or conflict with the released record.",
        "Escalate if unreconciled balances or collections exceptions could distort the current financial picture or downstream commitments.",
      ];
    case "customer-support":
      return [
        "Escalate if telemetry and customer-reported behavior conflict or if remote control would require additional consent.",
        "Escalate if the issue implies a recurring defect, compatibility gap, or software release risk.",
        "Escalate if the customer record would close without the linked technical or fulfillment work being updated.",
      ];
    case "manufacturing":
      return [
        "Escalate if the released revision at the cell does not match the build packet, spec, or traveler.",
        "Escalate if material, tool, or adhesive substitutions are required but not formally released.",
        "Escalate if a checklist result or operator observation suggests the product should not continue downstream.",
      ];
    case "logistics":
      return [
        "Escalate if quantity, location, or shipment status cannot be reconciled in Odoo.",
        "Escalate if a spare or outbound release would ship product against a hold, mismatch, or unresolved QC status.",
        "Escalate if inventory accuracy risk could mask a broader system or process-control issue.",
      ];
    case "quality-control":
      return [
        "Escalate if the inspection reference is unclear, outdated, or mismatched to the build revision under review.",
        "Escalate if containment boundaries are unclear and product status could become ambiguous downstream.",
        "Escalate if the evidence indicates a repeated issue that should feed change control or retraining.",
      ];
    case "product-design":
      return [
        "Escalate if geometry, naming, or release-state assumptions are not aligned with Engineering control.",
        "Escalate if compatibility or fixture work could change a released part without a controlled path.",
        "Escalate if a drawing or model handoff would leave vendors or downstream teams with ambiguous intent.",
      ];
    case "engineering":
      return [
        "Escalate if the proposed technical change would alter a released requirement without downstream updates being defined.",
        "Escalate if Fusion, Odoo, Product Home, or Jira do not agree on the current release state.",
        "Escalate if the release evidence is incomplete but the change is being pushed toward production or field use.",
      ];
    case "software":
      return [
        "Escalate if the issue is being routed as a software matter without enough reproduction or field evidence.",
        "Escalate if the release window, support notes, or rollback posture are not ready for customer impact.",
        "Escalate if the change touches machine behavior that should also route through broader release control.",
      ];
    default:
      return [
        "Escalate if the released revision does not match the work being performed.",
        "Escalate if a linked checklist, training path, or upstream standard is missing or out of date.",
        "Escalate if the execution path would change a released spec, BOM, ticket path, or customer-facing behavior.",
      ];
  }
}

function buildDepartmentDocumentSections(item, trainingRecords, relatedDocs, backlinks) {
  const checklistTitles = relatedDocs
    .filter((doc) => ["Checklist", "Training Path"].includes(doc.type))
    .map((doc) => doc.title);
  const standardTitles = relatedDocs
    .filter((doc) => !["Checklist", "Training Path"].includes(doc.type))
    .map((doc) => doc.title);

  return [
    {
      title: "Purpose",
      paragraphs: [item.summary],
    },
    {
      title: "Scope",
      bullets: buildScopeBullets(item, relatedDocs),
    },
    {
      title: "Trigger",
      paragraphs: [buildTriggerText(item, trainingRecords)],
    },
    {
      title: "Core Steps",
      bullets: buildWorkStepBullets(item, checklistTitles, standardTitles, backlinks),
    },
    {
      title: "Inputs / Outputs",
      bullets: buildInputOutputBullets(item),
    },
    {
      title: "Risks / Escalations",
      bullets: buildRiskBullets(item),
    },
  ];
}

function alignSearchToResultsHeading() {
  const inputRect = searchInput.getBoundingClientRect();
  const headingRect = searchResultsHeading.getBoundingClientRect();
  const inputCenter = inputRect.top + inputRect.height / 2;
  const targetCenter = headingRect.top + headingRect.height / 2 + 2;
  const delta = Math.max(0, Math.round(targetCenter - inputCenter));

  searchDockRail.style.setProperty("--search-shift", `${delta}px`);
}

function scrollToResultsHeading() {
  const topbarHeight = topbar ? topbar.getBoundingClientRect().height : 0;
  const headingTop = window.scrollY + searchResultsHeading.getBoundingClientRect().top;
  const targetTop = Math.max(0, Math.round(headingTop - topbarHeight - 20));

  window.scrollTo({
    top: targetTop,
    behavior: "smooth",
  });
}

function dockSearch(inline) {
  if (!inline) {
    commandLayout.classList.remove("is-searching");
    searchCard.classList.remove("is-inline-search");
    searchDockRail.style.setProperty("--search-shift", "0px");
    searchIsDocked = false;
    return;
  }

  commandLayout.classList.add("is-searching");
  searchCard.classList.add("is-inline-search");
  searchIsDocked = true;
  requestAnimationFrame(() => {
    alignSearchToResultsHeading();
    scrollToResultsHeading();
  });
}

function renderStats() {
  const stats = [
    { label: "Top branches", value: data.branches.length },
    { label: "Departments", value: data.departments.length - 1 },
    { label: "Shared systems", value: 7 },
    { label: "Cross-functional flows", value: data.flows.length },
  ];

  statStrip.innerHTML = stats
    .map(
      (stat) => `
        <div class="stat-card">
          <dt>${escapeHtml(stat.label)}</dt>
          <dd>${escapeHtml(stat.value)}</dd>
        </div>
      `,
    )
    .join("");
}

function renderSignalChain() {
  const tiers = [
    "Cultural Turbine",
    "Mission and Vision Support",
    "Pillars",
    "Standard Work",
    "Execution and Improvement",
  ];

  signalChain.innerHTML = tiers.map((tier) => `<li>${escapeHtml(tier)}</li>`).join("");
}

function renderFlightPath() {
  flightGrid.innerHTML = data.flightPath
    .map(
      (card) => `
        <article class="flight-card">
          <span class="flight-tier">Tier ${escapeHtml(card.tier)}</span>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.summary)}</p>
          <ul>${card.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function renderBranches() {
  branchButtons.innerHTML = data.branches
    .map(
      (branch) => `
        <button
          class="branch-button ${branch.id === activeBranch ? "is-active" : ""}"
          data-branch="${escapeHtml(branch.id)}"
          type="button"
        >
          ${escapeHtml(branch.label)}
        </button>
      `,
    )
    .join("");

  const branch = data.branches.find((item) => item.id === activeBranch) ?? data.branches[0];
  branchKicker.textContent = branch.kicker;
  branchTitle.textContent = branch.label;
  branchSummary.textContent = branch.summary;
  branchGrid.innerHTML = branch.cards
    .map(
      (card) => `
        <article class="branch-card">
          <span class="branch-meta">${escapeHtml(card.meta)}</span>
          <h4>${escapeHtml(card.title)}</h4>
          <p>${escapeHtml(card.description)}</p>
          <ul>${card.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");

  branchButtons.querySelectorAll("[data-branch]").forEach((button) => {
    button.addEventListener("click", () => {
      activeBranch = button.dataset.branch;
      renderBranches();
    });
  });
}

function renderAuthorities() {
  authorityCards.innerHTML = data.authorities
    .map(
      (card) => `
        <article class="authority-card">
          <span class="authority-tag">${escapeHtml(card.tag)}</span>
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.description)}</p>
          <ul>${card.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function renderFlows() {
  flowButtons.innerHTML = data.flows
    .map(
      (flow) => `
        <button
          class="flow-button ${flow.id === activeFlow ? "is-active" : ""}"
          type="button"
          data-flow="${escapeHtml(flow.id)}"
        >
          ${escapeHtml(flow.title)}
        </button>
      `,
    )
    .join("");

  const flow = data.flows.find((item) => item.id === activeFlow) ?? data.flows[0];
  flowKicker.textContent = flow.kicker;
  flowTitle.textContent = flow.title;
  flowSummary.textContent = flow.summary;
  flowSteps.innerHTML = flow.steps
    .map(
      (step, index) => `
        <article class="flow-step">
          <span class="step-index">Step ${index + 1}</span>
          <h3>${escapeHtml(step)}</h3>
        </article>
      `,
    )
    .join("");

  flowButtons.querySelectorAll("[data-flow]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFlow = button.dataset.flow;
      renderFlows();
    });
  });
}

function renderDepartments() {
  departmentFilters.innerHTML = data.departments
    .map(
      (dept) => `
        <button
          class="chip ${dept.id === activeDepartment ? "is-active" : ""}"
          type="button"
          data-department="${escapeHtml(dept.id)}"
        >
          ${escapeHtml(dept.label)}
        </button>
      `,
    )
    .join("");

  const visibleDepartments = getVisibleDepartments();
  if (isPilotScenario()) {
    departmentGrid.innerHTML = visibleDepartments
      .map((dept) => {
        const blueprint = getPilotDepartmentBlueprint(dept.id);
        const templateLanes = blueprint?.templateLanes ?? dept.standards ?? [];
        const systems = blueprint?.hub?.systems ?? [];
        const flows = blueprint?.hub?.flows ?? [];

        return `
          <article class="department-card">
            <div>
              <span class="department-tag">${escapeHtml(dept.label)}</span>
              <h3>${escapeHtml(dept.label)}</h3>
              <p>${escapeHtml(dept.summary)}</p>
            </div>
            <div class="department-template-block">
              <p class="command-kicker">Pilot blueprint lanes</p>
              <ul class="department-template-list">
                ${templateLanes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </div>
            <div class="department-detail-meta">
              <span class="branch-meta">Systems · ${escapeHtml(systems.join(", ") || "Planned systems")}</span>
              <span class="branch-meta">Flows · ${escapeHtml(flows.join(", ") || "Planned flow links")}</span>
            </div>
          </article>
        `;
      })
      .join("");

    renderPilotDepartmentDetail();
  } else {
    ensureActiveDepartmentDoc();

    departmentGrid.innerHTML = visibleDepartments
      .map((dept) => {
        const workItems = getDepartmentWorkItems(dept.id);
        return `
          <article class="department-card">
            <div>
              <span class="department-tag">${escapeHtml(dept.label)}</span>
              <h3>${escapeHtml(dept.label)}</h3>
              <p>${escapeHtml(dept.summary)}</p>
            </div>
            <div class="department-work-list">
              ${workItems
                .map(
                  (item) => `
                    <button
                      class="department-work-button ${item.id === activeDepartmentDocId ? "is-active" : ""}"
                      type="button"
                      data-department-doc="${escapeHtml(item.id)}"
                    >
                      <strong>${escapeHtml(item.title)}</strong>
                      <span>${escapeHtml(item.type)} · Rev ${escapeHtml(item.revision)} · ${escapeHtml(
                        item.status,
                      )}</span>
                    </button>
                  `,
                )
                .join("")}
            </div>
          </article>
        `;
      })
      .join("");

    renderDepartmentDetail(getDepartmentWorkItem(activeDepartmentDocId));
  }

  departmentFilters.querySelectorAll("[data-department]").forEach((button) => {
    button.addEventListener("click", () => {
      activeDepartment = button.dataset.department;
      renderDepartments();
    });
  });

  if (isPilotScenario()) {
    return;
  }

  departmentGrid.querySelectorAll("[data-department-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      activeDepartmentDocId = button.dataset.departmentDoc;
      renderDepartments();
      requestAnimationFrame(scrollDepartmentWorkbenchIntoView);
    });
  });
}

function renderPilotDepartmentDetail() {
  if (activeDepartment === "all") {
    departmentDetailPanel.innerHTML = `
      <div class="department-detail-head">
        <div>
          <p class="command-kicker">Pilot Blueprint</p>
          <h3>Template-first department scaffolding</h3>
          <p>Pilot View keeps the department lane intentionally skeletal. Use the filter chips above to inspect one department blueprint at a time, or switch to Demo Mode to open richer fictional standards and linked artifacts.</p>
        </div>
      </div>
      <div class="department-detail-grid">
        <article class="detail-card">
          <p class="command-kicker">What stays visible</p>
          <h4>Only the starter framework</h4>
          <ul>
            <li>Planned standard-work lanes by department</li>
            <li>Connected systems and flow ownership</li>
            <li>Training and checklist expectations as templates</li>
          </ul>
        </article>
        <article class="detail-card">
          <p class="command-kicker">What stays hidden</p>
          <h4>No simulated work library in pilot</h4>
          <ul>
            <li>No fictional clickable standards</li>
            <li>No populated sign-off examples</li>
            <li>No mature revision-history storytelling until Demo Mode</li>
          </ul>
        </article>
      </div>
    `;
    return;
  }

  const blueprint = getPilotDepartmentBlueprint(activeDepartment);

  if (!blueprint) {
    departmentDetailPanel.innerHTML = `
      <div class="department-detail-head">
        <div>
          <p class="command-kicker">Pilot Blueprint</p>
          <h3>Select a department filter</h3>
          <p>Choose a department above to inspect its template lanes, systems, flow links, and training skeleton.</p>
        </div>
      </div>
    `;
    return;
  }

  departmentDetailPanel.innerHTML = `
    <div class="department-detail-head">
      <div>
        <div class="department-detail-meta">
          <span class="department-tag">${escapeHtml(blueprint.department.label)}</span>
          <span class="branch-meta">Pilot blueprint</span>
          <span class="branch-meta">Template only</span>
        </div>
        <h3>${escapeHtml(blueprint.department.label)} pilot scaffold</h3>
        <p>${escapeHtml(blueprint.hub.summary)}</p>
      </div>
      <div class="department-detail-status">
        <span class="status-pill is-warning">Skeleton only</span>
        <span class="branch-meta">Owner lane · ${escapeHtml(blueprint.hub.owner)}</span>
      </div>
    </div>
    <div class="department-detail-meta">
      <span class="branch-meta">Systems · ${escapeHtml(blueprint.hub.systems.join(", "))}</span>
      <span class="branch-meta">Flows · ${escapeHtml(blueprint.hub.flows.join(", "))}</span>
      <span class="branch-meta">Training · required on release</span>
      <span class="branch-meta">Artifacts · template-level only</span>
    </div>
    <div class="department-detail-grid">
      <article class="detail-card">
        <p class="command-kicker">Planned Standard Lanes</p>
        <h4>Template bullets for future controlled content</h4>
        <ul>${blueprint.templateLanes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="detail-card">
        <p class="command-kicker">Checklist and Form Skeleton</p>
        <h4>Reusable support artifacts expected in this lane</h4>
        <ul>${blueprint.checklistLanes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="detail-card">
        <p class="command-kicker">Training Contract</p>
        <h4>How acknowledgement should attach once work is released</h4>
        <ul>${blueprint.trainingLanes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="detail-card">
        <p class="command-kicker">Next Step</p>
        <h4>Open Demo Mode for live-looking examples</h4>
        <ul>
          <li>Demo Mode is where fictional standards, checklists, revisions, and sign-off patterns are demonstrated.</li>
          <li>Pilot View stays limited to structure, ownership, and template-level planning.</li>
          <li>This separation keeps the default experience simple and honest.</li>
        </ul>
      </article>
    </div>
  `;
}

function renderDepartmentDetail(item) {
  if (!item) {
    departmentDetailPanel.innerHTML = `
      <div class="department-detail-head">
        <div>
          <p class="command-kicker">Department Workbench</p>
          <h3>Select a standard, checklist, or training path</h3>
          <p>Choose any department work item to see training attachments, related checklists, and where that artifact is used.</p>
        </div>
      </div>
    `;
    return;
  }

  const trainingRecords = getTrainingRecordsForWorkItem(item);
  const relatedDocs = (item.related ?? []).map((id) => getDepartmentWorkItem(id)).filter(Boolean);
  const linkedChecklists = relatedDocs.filter((doc) =>
    ["Checklist", "Training Path"].includes(doc.type),
  );
  const linkedStandards = relatedDocs.filter(
    (doc) => !["Checklist", "Training Path"].includes(doc.type),
  );
  const backlinks = getBacklinksForWorkItem(item.id);
  const statusClass = getStatusClass(item.status);
  const documentSections = buildDepartmentDocumentSections(
    item,
    trainingRecords,
    relatedDocs,
    backlinks,
  );

  const renderLinkedDocs = (docs, emptyMessage) =>
    docs.length > 0
      ? `
          <div class="detail-link-list">
            ${docs
              .map(
                (doc) => `
                  <button
                    class="detail-link-button ${doc.id === activeDepartmentDocId ? "is-active" : ""}"
                    type="button"
                    data-linked-doc="${escapeHtml(doc.id)}"
                  >
                    <strong>${escapeHtml(doc.title)}</strong>
                    <span>${escapeHtml(getTeamLabel(doc.department))} · ${escapeHtml(doc.type)} · Rev ${escapeHtml(doc.revision)}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
        `
      : `<p class="detail-card-empty">${escapeHtml(emptyMessage)}</p>`;

  departmentDetailPanel.innerHTML = `
    <div class="department-detail-head">
      <div>
        <div class="department-detail-meta">
          <span class="department-tag">${escapeHtml(getTeamLabel(item.department))}</span>
          <span class="branch-meta">${escapeHtml(item.type)}</span>
          <span class="branch-meta">Rev ${escapeHtml(item.revision)}</span>
        </div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.summary)}</p>
      </div>
      <div class="department-detail-status">
        <span class="status-pill ${statusClass}">${escapeHtml(item.status)}</span>
        <span class="branch-meta">Owner · ${escapeHtml(item.owner)}</span>
      </div>
    </div>
    <div class="department-detail-meta">
      <span class="branch-meta">Systems · ${escapeHtml(item.systems.join(", "))}</span>
      <span class="branch-meta">Flows · ${escapeHtml(item.flows.join(", "))}</span>
      <span class="branch-meta">${escapeHtml(String(trainingRecords.length))} training attachment${trainingRecords.length === 1 ? "" : "s"}</span>
      <span class="branch-meta">${escapeHtml(String(backlinks.length))} backlink${backlinks.length === 1 ? "" : "s"}</span>
    </div>
    <div class="department-detail-grid">
      <article class="detail-card is-document-preview">
        <p class="command-kicker">Rendered Work</p>
        <h4>Live content preview for this body of work</h4>
        <div class="document-preview-body">
          ${documentSections
            .map(
              (section) => `
                <section class="document-preview-section">
                  <h5>${escapeHtml(section.title)}</h5>
                  ${(section.paragraphs ?? [])
                    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
                    .join("")}
                  ${
                    section.bullets && section.bullets.length > 0
                      ? `<ul>${section.bullets
                          .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
                          .join("")}</ul>`
                      : ""
                  }
                </section>
              `,
            )
            .join("")}
        </div>
      </article>
      <article class="detail-card">
        <p class="command-kicker">Attached Training</p>
        <h4>Training records tied to this work</h4>
        ${
          trainingRecords.length > 0
            ? `
              <div class="detail-training-list">
                ${trainingRecords
                  .map((record) => {
                    const trainingStatusClass = record.acknowledged
                      ? "is-ok"
                      : record.trigger.toLowerCase().includes("revision")
                        ? "is-warning"
                        : "is-alert";

                    return `
                      <article class="detail-training-item">
                        <div class="detail-training-head">
                          <div>
                            <span class="branch-meta">${escapeHtml(getTeamLabel(record.team))}</span>
                            <h4>${escapeHtml(record.label)}</h4>
                          </div>
                          <span class="status-pill ${trainingStatusClass}">${escapeHtml(
                            record.acknowledged ? "Acknowledged" : "Retraining open",
                          )}</span>
                        </div>
                        <p>${escapeHtml(record.audience)} · Trigger: ${escapeHtml(record.trigger)}</p>
                        <ul>
                          <li>Due: ${escapeHtml(record.due)}</li>
                          <li>Revision: ${escapeHtml(record.revision)}</li>
                          <li>${
                            record.acknowledged
                              ? `Signed on ${escapeHtml(record.signedAt)}`
                              : "Awaiting current-revision acknowledgement"
                          }</li>
                        </ul>
                      </article>
                    `;
                  })
                  .join("")}
              </div>
            `
            : '<p class="detail-card-empty">No training record is currently attached to this work item in the active scenario.</p>'
        }
      </article>
      <article class="detail-card">
        <p class="command-kicker">Linked Checklists</p>
        <h4>Execution aids and training paths attached here</h4>
        ${renderLinkedDocs(
          linkedChecklists,
          "No linked checklist or training-path artifact is attached to this item yet.",
        )}
      </article>
      <article class="detail-card">
        <p class="command-kicker">Linked Standards</p>
        <h4>Related standards, specs, and upstream references</h4>
        ${renderLinkedDocs(
          linkedStandards,
          "No linked standard or spec is attached to this item yet.",
        )}
      </article>
      <article class="detail-card">
        <p class="command-kicker">Where Used</p>
        <h4>Backlinks and operating context</h4>
        ${
          backlinks.length > 0
            ? renderLinkedDocs(
                backlinks,
                "No reverse links found.",
              )
            : '<p class="detail-card-empty">No other department work item currently points back to this artifact.</p>'
        }
        <div class="detail-context-list">
          <p class="detail-card-empty">Systems: ${escapeHtml(item.systems.join(", "))}</p>
          <p class="detail-card-empty">Flows: ${escapeHtml(item.flows.join(", "))}</p>
        </div>
      </article>
    </div>
  `;

  departmentDetailPanel.querySelectorAll("[data-linked-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = getDepartmentWorkItem(button.dataset.linkedDoc);
      if (!target) {
        return;
      }

      activeDepartmentDocId = target.id;
      if (activeDepartment !== "all" && activeDepartment !== target.department) {
        activeDepartment = target.department;
      }
      renderDepartments();
      requestAnimationFrame(scrollDepartmentWorkbenchIntoView);
    });
  });
}

function renderTemplates() {
  templateGrid.innerHTML = data.templates
    .map(
      (template) => `
        <article class="template-card">
          <div class="template-meta-row">
            <span class="branch-meta">${escapeHtml(template.kind)}</span>
            <span class="branch-meta">.md download</span>
          </div>
          <h3>${escapeHtml(template.title)}</h3>
          <p>${escapeHtml(template.description)}</p>
          <a
            class="button button-outline"
            href="./downloads/markdown-templates/${escapeHtml(template.filename)}"
            download="${escapeHtml(template.filename)}"
          >
            Download ${escapeHtml(template.filename)}
          </a>
        </article>
      `,
    )
    .join("");
}

function renderScenarioToggle() {
  const markup = Object.entries(scenarioData)
    .map(
      ([id, scenario]) => `
        <button
          class="chip ${id === activeScenario ? "is-active" : ""}"
          type="button"
          data-scenario="${escapeHtml(id)}"
        >
          ${escapeHtml(scenario.label)}
        </button>
      `,
    )
    .join("");

  [scenarioToggleTop, scenarioToggle].filter(Boolean).forEach((container) => {
    container.innerHTML = markup;
    container.querySelectorAll("[data-scenario]").forEach((button) => {
      button.addEventListener("click", () => {
        activeScenario = button.dataset.scenario;
        activeTrainingTeam = "all";
        uploadFile.value = "";
        latestUploadReport = null;
        renderScenarioAwareSections();
      });
    });
  });
}

function getTrainingStats(records = getScenario().trainingRecords) {
  const total = records.length;
  const signed = records.filter((record) => record.acknowledged).length;
  const open = total - signed;
  const revisionDriven = records.filter((record) =>
    record.trigger.toLowerCase().includes("revision"),
  ).length;
  const percent = total === 0 ? 0 : Math.round((signed / total) * 100);

  return { total, signed, open, revisionDriven, percent };
}

function renderOrgChart() {
  const scenario = getScenario();

  if (isPilotScenario()) {
    orgRoot.innerHTML = `
      <article class="org-root-card">
        <span class="org-kicker">Pilot authority</span>
        <h3>${escapeHtml(scenario.orgChart.leader.name)}</h3>
        <p>${escapeHtml(scenario.orgChart.leader.role)}</p>
        <p>${escapeHtml(scenario.orgChart.leader.scope)}</p>
        <div class="status-pill is-warning">Pilot skeleton only</div>
      </article>
    `;

    orgGrid.innerHTML = scenario.orgChart.branches
      .map(
        (branch) => `
          <article class="org-node">
            <div>
              <span class="branch-meta">${escapeHtml(branch.label)}</span>
              <h3>${escapeHtml(branch.lead)}</h3>
              <p>${escapeHtml(branch.crew)}</p>
            </div>
            <div class="org-node-status">
              <span class="status-pill is-warning">Template lane</span>
              <span class="org-inline-note">Demo Mode shows populated sign-off states</span>
            </div>
            <dl class="org-facts">
              <div class="org-fact">
                <dt>Crew</dt>
                <dd>${escapeHtml(branch.crewCount)}</dd>
              </div>
              <div class="org-fact">
                <dt>Lane</dt>
                <dd>${escapeHtml(getTeamLabel(branch.id))}</dd>
              </div>
              <div class="org-fact">
                <dt>Training</dt>
                <dd>Required on release</dd>
              </div>
              <div class="org-fact">
                <dt>Sign-off</dt>
                <dd>Template only</dd>
              </div>
            </dl>
            <ul>${branch.trainingFocus
              .map((item) => `<li>${escapeHtml(item)}</li>`)
              .join("")}</ul>
          </article>
        `,
      )
      .join("");
    return;
  }

  orgRoot.innerHTML = `
    <article class="org-root-card">
      <span class="org-kicker">Top authority</span>
      <h3>${escapeHtml(scenario.orgChart.leader.name)}</h3>
      <p>${escapeHtml(scenario.orgChart.leader.role)}</p>
      <p>${escapeHtml(scenario.orgChart.leader.scope)}</p>
      <div class="status-pill is-warning">${escapeHtml(scenario.orgChart.leader.coverage)}</div>
    </article>
  `;

  orgGrid.innerHTML = scenario.orgChart.branches
    .map((branch) => {
      const records = scenario.trainingRecords.filter((record) => record.team === branch.id);
      const signed = records.filter((record) => record.acknowledged).length;
      const open = records.length - signed;
      const percent = records.length === 0 ? 0 : Math.round((signed / records.length) * 100);
      const statusClass = open === 0 ? "is-ok" : percent >= 50 ? "is-warning" : "is-alert";

      return `
        <article class="org-node">
          <div>
            <span class="branch-meta">${escapeHtml(branch.label)}</span>
            <h3>${escapeHtml(branch.lead)}</h3>
            <p>${escapeHtml(branch.crew)}</p>
          </div>
          <div class="org-node-status">
            <span class="status-pill ${statusClass}">${escapeHtml(percent)}% acknowledged</span>
            <span class="org-inline-note">${escapeHtml(String(open))} open sign-off${open === 1 ? "" : "s"}</span>
          </div>
          <dl class="org-facts">
            <div class="org-fact">
              <dt>Crew</dt>
              <dd>${escapeHtml(branch.crewCount)}</dd>
            </div>
            <div class="org-fact">
              <dt>Lane</dt>
              <dd>${escapeHtml(getTeamLabel(branch.id))}</dd>
            </div>
            <div class="org-fact">
              <dt>Signed</dt>
              <dd>${escapeHtml(String(signed))}</dd>
            </div>
            <div class="org-fact">
              <dt>Open</dt>
              <dd>${escapeHtml(String(open))}</dd>
            </div>
          </dl>
          <ul>${branch.trainingFocus
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("")}</ul>
        </article>
      `;
    })
    .join("");
}

function renderTrainingSummary() {
  const scenario = getScenario();

  if (isPilotScenario()) {
    const summaryCards = [
      {
        label: "Training model",
        value: "Template",
        note: "Pilot shows the required structure without populated crew acknowledgements.",
      },
      {
        label: "Required rule",
        value: "100%",
        note: "Every released standard work item must carry an attached training record.",
      },
      {
        label: "Sign-off shape",
        value: "2",
        note: "Use individual or group acknowledgement depending on the work.",
      },
      {
        label: "Retraining triggers",
        value: "3",
        note: "Revision change, knowledge drift, and lack of understanding reopen training.",
      },
    ];

    trainingSummaryGrid.innerHTML = summaryCards
      .map(
        (card) => `
          <article class="training-summary-card">
            <span class="branch-meta">${escapeHtml(card.label)}</span>
            <strong>${escapeHtml(card.value)}</strong>
            <p>${escapeHtml(card.note)}</p>
          </article>
        `,
      )
      .join("");

    trainingProgressList.innerHTML = `
      <article class="progress-card">
        <div class="progress-card-head">
          <div>
            <span class="branch-meta">Pilot readiness shell</span>
            <h3>Department progress bars appear here once live records exist</h3>
          </div>
          <strong>Template</strong>
        </div>
        <p>Pilot View keeps the dashboard framework visible without simulating crew completion percentages.</p>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: 28%"></div>
        </div>
        <div class="progress-card-footer">
          <span>Lead-owned review</span>
          <span>Revision-aware</span>
          <span>Training attached on release</span>
        </div>
      </article>
    `;

    retrainingList.innerHTML = `
      <article class="retraining-card">
        <div class="progress-card-head">
          <span class="branch-meta">Pilot placeholder</span>
          <span class="severity-pill is-warning">Template trigger</span>
        </div>
        <h3>Retraining queue appears here after live records are attached</h3>
        <p>Use this lane for revision-driven retraining, knowledge drift, and understanding gaps.</p>
        <ul>
          <li>New revision release</li>
          <li>Knowledge drift or missed understanding</li>
          <li>Incident, defect, or audit follow-up</li>
        </ul>
      </article>
    `;
    return;
  }

  const stats = getTrainingStats();
  const staleCount = scenario.trainingRecords.filter(
    (record) =>
      !record.acknowledged &&
      !record.trigger.toLowerCase().includes("revision") &&
      !record.trigger.toLowerCase().includes("initial rollout"),
  ).length;

  const summaryCards = [
    {
      label: "Crew acknowledged",
      value: `${stats.percent}%`,
      note: `${stats.signed} of ${stats.total} sign-offs closed`,
    },
    {
      label: "Retraining open",
      value: String(stats.open),
      note: "Open items still waiting on acknowledgement",
    },
    {
      label: "Revision-driven",
      value: String(stats.revisionDriven),
      note: "Items triggered by new released revisions",
    },
    {
      label: "Knowledge drift",
      value: String(staleCount),
      note: "Open follow-up caused by drift or understanding gaps",
    },
  ];

  trainingSummaryGrid.innerHTML = summaryCards
    .map(
      (card) => `
        <article class="training-summary-card">
          <span class="branch-meta">${escapeHtml(card.label)}</span>
          <strong>${escapeHtml(card.value)}</strong>
          <p>${escapeHtml(card.note)}</p>
        </article>
      `,
    )
    .join("");

  trainingProgressList.innerHTML = scenario.orgChart.branches
    .map((branch) => {
      const records = scenario.trainingRecords.filter((record) => record.team === branch.id);
      const signed = records.filter((record) => record.acknowledged).length;
      const percent = records.length === 0 ? 0 : Math.round((signed / records.length) * 100);
      return `
        <article class="progress-card">
          <div class="progress-card-head">
            <div>
              <span class="branch-meta">${escapeHtml(branch.label)}</span>
              <h3>${escapeHtml(branch.lead)}</h3>
            </div>
            <strong>${escapeHtml(percent)}%</strong>
          </div>
          <p>${escapeHtml(branch.crew)} complete on current assigned acknowledgements.</p>
          <div class="progress-track" aria-hidden="true">
            <div class="progress-fill" style="width: ${percent}%"></div>
          </div>
          <div class="progress-card-footer">
            <span>${escapeHtml(String(signed))} signed</span>
            <span>${escapeHtml(String(records.length - signed))} open</span>
            <span>${escapeHtml(branch.crewCount)}</span>
          </div>
        </article>
      `;
    })
    .join("");

  const openItems = scenario.trainingRecords.filter((record) => !record.acknowledged).slice(0, 4);
  retrainingList.innerHTML = openItems
    .map(
      (record) => `
        <article class="retraining-card">
          <div class="progress-card-head">
            <span class="branch-meta">${escapeHtml(getTeamLabel(record.team))}</span>
            <span class="severity-pill ${
              record.trigger.toLowerCase().includes("revision") ? "is-warning" : "is-alert"
            }">${escapeHtml(record.trigger)}</span>
          </div>
          <h3>${escapeHtml(record.label)}</h3>
          <p>${escapeHtml(record.standard)} · Rev ${escapeHtml(record.revision)}</p>
          <ul>
            <li>Due: ${escapeHtml(record.due)}</li>
            <li>Audience: ${escapeHtml(record.audience)}</li>
            <li>Retraining remains open until acknowledgement is captured.</li>
          </ul>
        </article>
      `,
    )
    .join("");
}

function renderTrainingSignoffs() {
  const scenario = getScenario();

  if (isPilotScenario()) {
    trainingFilters.innerHTML =
      '<span class="branch-meta">Pilot skeleton only · switch to Demo Mode for populated sign-off examples.</span>';

    signoffGrid.innerHTML = `
      <article class="signoff-card">
        <div class="signoff-card-head">
          <div>
            <span class="branch-meta">Group acknowledgement template</span>
            <h3>Crew sign-off row</h3>
          </div>
          <span class="status-pill is-warning">Template</span>
        </div>
        <p>Use a crew-level acknowledgement when a released standard applies to a whole team or cell.</p>
        <ul>
          <li>Reference the released document title and revision.</li>
          <li>Show the trigger that opened acknowledgement.</li>
          <li>Keep the row open until the assigned crew confirms understanding.</li>
        </ul>
      </article>
      <article class="signoff-card">
        <div class="signoff-card-head">
          <div>
            <span class="branch-meta">Individual acknowledgement template</span>
            <h3>Role-owner sign-off row</h3>
          </div>
          <span class="status-pill is-warning">Template</span>
        </div>
        <p>Use an individual acknowledgement when release authority, inspection authority, or role recertification matters.</p>
        <ul>
          <li>Capture the responsible role or named owner.</li>
          <li>Track due timing and revision linkage.</li>
          <li>Reopen retraining on revision change, drift, or misunderstanding.</li>
        </ul>
      </article>
    `;
    return;
  }

  const filterOptions = [
    { id: "all", label: "All Teams" },
    ...scenario.orgChart.branches.map((item) => ({
      id: item.id,
      label: item.label,
    })),
  ];

  trainingFilters.innerHTML = filterOptions
    .map(
      (option) => `
        <button
          class="chip ${option.id === activeTrainingTeam ? "is-active" : ""}"
          type="button"
          data-training-filter="${escapeHtml(option.id)}"
        >
          ${escapeHtml(option.label)}
        </button>
      `,
    )
    .join("");

  const visibleRecords =
    activeTrainingTeam === "all"
      ? scenario.trainingRecords
      : scenario.trainingRecords.filter((record) => record.team === activeTrainingTeam);

  signoffGrid.innerHTML = visibleRecords
    .map((record) => {
      const statusClass = record.acknowledged
        ? "is-ok"
        : record.trigger.toLowerCase().includes("revision")
          ? "is-warning"
          : "is-alert";
      const statusText = record.acknowledged ? "Acknowledged" : "Retraining open";

      return `
        <article class="signoff-card">
          <div class="signoff-card-head">
            <div>
              <span class="branch-meta">${escapeHtml(getTeamLabel(record.team))}</span>
              <h3>${escapeHtml(record.label)}</h3>
            </div>
            <span class="status-pill ${statusClass}">${escapeHtml(statusText)}</span>
          </div>
          <p>${escapeHtml(record.standard)} · Rev ${escapeHtml(record.revision)}</p>
          <div class="signoff-meta-row">
            <span>${escapeHtml(record.audience)}</span>
            <span>Trigger: ${escapeHtml(record.trigger)}</span>
            <span>Due: ${escapeHtml(record.due)}</span>
          </div>
          <label class="signoff-check">
            <input
              type="checkbox"
              data-training-record="${escapeHtml(record.id)}"
              ${record.acknowledged ? "checked" : ""}
            />
            Checkbox acknowledgement acts as the concept-view signature.
          </label>
          <p>${
            record.acknowledged
              ? `Signed on ${escapeHtml(record.signedAt)}.`
              : "Open until the assigned person or group confirms the current revision."
          }</p>
        </article>
      `;
    })
    .join("");

  trainingFilters.querySelectorAll("[data-training-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeTrainingTeam = button.dataset.trainingFilter;
      renderTrainingSignoffs();
    });
  });

  signoffGrid.querySelectorAll("[data-training-record]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const record = scenario.trainingRecords.find((item) => item.id === checkbox.dataset.trainingRecord);
      if (!record) {
        return;
      }

      record.acknowledged = checkbox.checked;
      record.signedAt = checkbox.checked ? new Date().toISOString().slice(0, 10) : "";
      renderTrainingSummary();
      renderTrainingSignoffs();
      renderDepartmentDetail(getDepartmentWorkItem(activeDepartmentDocId));
    });
  });
}

function renderDocumentSnapshot() {
  const scenario = getScenario();

  documentGrid.innerHTML = scenario.documentSets
    .map((document) => {
      const statusClass =
        document.status === "active"
          ? "is-ok"
          : document.status === "under review"
            ? "is-warning"
            : document.status === "retired"
              ? "is-alert"
              : "is-warning";

      return `
        <article class="document-card">
          <div class="document-card-head">
            <div>
              <span class="branch-meta">${escapeHtml(document.type)}</span>
              <h3>${escapeHtml(document.title)}</h3>
            </div>
            <span class="status-pill ${statusClass}">${escapeHtml(document.status)}</span>
          </div>
          <p>${escapeHtml(document.note)}</p>
          <div class="document-card-meta">
            <span class="branch-meta">Lane · ${escapeHtml(document.lane)}</span>
            <span class="branch-meta">Rev ${escapeHtml(document.revision)}</span>
            <span class="branch-meta">${escapeHtml(document.training)} training</span>
          </div>
          <ul>
            <li>Owner: ${escapeHtml(document.owner)}</li>
            <li>Acceptance: ${escapeHtml(document.acceptance)}</li>
            <li>Supersedes: ${escapeHtml(document.supersedes)}</li>
          </ul>
        </article>
      `;
    })
    .join("");
}

function renderScenarioAwareSections() {
  renderScenarioToggle();
  renderOrgChart();
  renderTrainingSummary();
  renderTrainingSignoffs();
  renderDocumentSnapshot();
  renderDepartments();
  renderUploaderOptions();
  renderUploadReport(null);
  searchIndex = buildSearchIndex();
  if (searchInput.value.trim()) {
    renderSearch();
  }
}

function normalizeList(value) {
  if (Array.isArray(value)) {
    return value.filter(Boolean).map((item) => String(item).trim());
  }

  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }

  return [];
}

function getScalar(fields, key) {
  const value = fields[key];
  if (Array.isArray(value)) {
    return value[0] ?? "";
  }
  return typeof value === "string" ? value.trim() : "";
}

function isPlaceholderValue(value) {
  if (!value) {
    return true;
  }

  const normalized = String(value).trim().toLowerCase();
  return (
    normalized.includes("<") ||
    normalized.includes("yyyy-mm-dd") ||
    normalized === "title" ||
    normalized.startsWith("add ") ||
    normalized.startsWith("list ") ||
    normalized.startsWith("state ") ||
    normalized.startsWith("describe ")
  );
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    return {
      hasFrontmatter: false,
      fields: {},
      body: raw,
      errors: ["The file is missing opening and closing `---` frontmatter fences."],
    };
  }

  const lines = match[1].split("\n");
  const fields = {};
  let currentKey = null;

  lines.forEach((line) => {
    if (!line.trim()) {
      return;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (keyMatch) {
      const key = keyMatch[1];
      const rawValue = keyMatch[2].trim();
      if (rawValue) {
        fields[key] = rawValue;
        currentKey = null;
      } else {
        fields[key] = [];
        currentKey = key;
      }
      return;
    }

    const listMatch = line.match(/^\s*-\s*(.+)$/);
    if (listMatch && currentKey) {
      fields[currentKey].push(listMatch[1].trim());
    }
  });

  return {
    hasFrontmatter: true,
    fields,
    body: raw.slice(match[0].length),
    errors: [],
  };
}

function parseSections(body) {
  return [...body.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1].trim());
}

function parseTitle(body) {
  const match = body.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function buildIssue(severity, title, detail, fix) {
  return { severity, title, detail, fix };
}

function inferPlacement(fields, pageType, workType) {
  const department = getScalar(fields, "department");
  const operatingLayer = getScalar(fields, "operating_layer");
  const authoritativeSystem = getScalar(fields, "authoritative_system");
  const appliesTo = normalizeList(fields.applies_to_departments);

  if (pageType === "Vision and Mission" || pageType === "Cultural Logic") {
    return {
      branch: "Cultural Turbine",
      lane: pageType,
      shelf: "Top cultural branch",
      reason: "Navigation-only cultural page.",
    };
  }

  if (pageType === "Cross-Functional Flow") {
    return {
      branch: "Cross-Functional Flows",
      lane: getScalar(fields, "related_flow") || "Flow route",
      shelf: "Flow overview",
      reason: "Flow pages route work without duplicating execution detail.",
    };
  }

  if (workType === "operating-standard" || operatingLayer === "management-system") {
    return {
      branch: "Management System",
      lane: department || "Operations",
      shelf: "Operating Standards",
      reason: "Company-wide rule set or management-system page.",
    };
  }

  if (workType === "department-hub") {
    return {
      branch: "Departments",
      lane: department || appliesTo[0] || "Department",
      shelf: "Hub",
      reason: "Department home page.",
    };
  }

  if (workType === "controlled-engineering-spec") {
    return {
      branch: "Departments",
      lane: "Engineering",
      shelf: "Controlled Engineering Specs",
      reason: "Technical controlled requirement owned by Engineering.",
    };
  }

  if (operatingLayer === "shared-system") {
    return {
      branch: "Shared Systems",
      lane: authoritativeSystem || "Shared system",
      shelf: pageType || workType || "Standard",
      reason: "Tool-specific operating page.",
    };
  }

  if (operatingLayer === "product-interface") {
    return {
      branch: "Management System",
      lane: "Product Data Control",
      shelf: "Product Home interface",
      reason: "Page governs how Standard Work touches Product Home or another sibling system.",
    };
  }

  return {
    branch: "Departments",
    lane: department || appliesTo[0] || "Department",
    shelf: pageType || workType || "Standard",
    reason: "Department-owned operating page.",
  };
}

function validateUpload(text, fileName, uploader) {
  const issues = [];
  const parsed = parseFrontmatter(text);
  const baseName = fileName.replace(/\.(md|markdown)$/i, "");

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.(md|markdown)$/i.test(fileName)) {
    issues.push(
      buildIssue(
        "error",
        "Filename does not follow lowercase kebab-case",
        `Current filename: ${fileName}`,
        "Rename the file to lowercase kebab-case and keep it aligned with `document_id`.",
      ),
    );
  }

  if (!uploader?.authorized) {
    issues.push(
      buildIssue(
        "error",
        "Selected uploader is not authorized",
        uploader
          ? `${uploader.label} is currently marked read-only for governed uploads.`
          : "No uploader selected.",
        "Use an authorized owner or delegate before uploading the file.",
      ),
    );
  }

  parsed.errors.forEach((message) => {
    issues.push(buildIssue("error", "Frontmatter missing", message, "Add YAML frontmatter fenced by `---` at the top of the file."));
  });

  const fields = parsed.fields;
  const pageType = getScalar(fields, "page_type");
  const workType = getScalar(fields, "work_type");
  const title = parseTitle(parsed.body);
  const sections = parseSections(parsed.body);
  const isNavigationOnly = uploadContract.navigationOnlyPageTypes.includes(pageType);
  const requiredFieldSet = isNavigationOnly
    ? uploadContract.navigationRequiredFields
    : [...uploadContract.requiredFields, ...uploadContract.uploadControlFields];
  requiredFieldSet.forEach((field) => {
    const value = fields[field];
    const filled = Array.isArray(value) ? value.length > 0 : String(value || "").trim().length > 0;
    if (!filled) {
      issues.push(
        buildIssue(
          "error",
          `Missing frontmatter field: ${field}`,
          `The upload contract requires \`${field}\`.`,
          `Add \`${field}:\` to the YAML frontmatter and fill it with a real value.`,
        ),
      );
    }
  });

  Object.entries({
    page_type: pageType,
    work_type: workType,
    operating_layer: getScalar(fields, "operating_layer"),
    status: getScalar(fields, "status"),
    review_cadence: getScalar(fields, "review_cadence"),
    authoritative_system: getScalar(fields, "authoritative_system"),
    training_requirement: getScalar(fields, "training_requirement"),
  }).forEach(([key, value]) => {
    if (value && !uploadContract.allowed[key].includes(value)) {
      issues.push(
        buildIssue(
          "error",
          `Invalid ${key} value`,
          `\`${value}\` is not in the allowed ${key} set.`,
          `Change \`${key}\` to one of: ${uploadContract.allowed[key].join(", ")}.`,
        ),
      );
    }
  });

  if (!isNavigationOnly && getScalar(fields, "training_requirement") === "none") {
    issues.push(
      buildIssue(
        "error",
        "training_requirement cannot be none for standard work",
        "This concept model requires every standard work upload to carry a training attachment path.",
        "Change `training_requirement` to `targeted`, `role-wide`, or `company-wide` and attach the corresponding training record in the live system.",
      ),
    );
  }

  if (pageType && !title) {
    issues.push(
      buildIssue(
        "error",
        "Missing page title",
        "The body does not contain a `# Title` heading after frontmatter.",
        "Add a single H1 heading immediately after the frontmatter.",
      ),
    );
  }

  if (title && isPlaceholderValue(title)) {
    issues.push(
      buildIssue(
        "error",
        "Page title is still a placeholder",
        `Current title: ${title}`,
        "Replace the H1 with the real standard name before upload.",
      ),
    );
  }

  const placeholderFields = [
    "department",
    "owner",
    "backup_owner",
    "document_id",
    "upload_authority",
    "effective_date",
  ];
  placeholderFields.forEach((field) => {
    const value = getScalar(fields, field);
    if (value && isPlaceholderValue(value)) {
      issues.push(
        buildIssue(
          "error",
          `Field still contains placeholder content: ${field}`,
          `Current value: ${value}`,
          `Replace \`${field}\` with a real production value before upload.`,
        ),
      );
    }
  });

  ["pillars", "principles", "related_flow", "systems", "applies_to_departments"].forEach((field) => {
    const values = normalizeList(fields[field]);
    if (values.some((value) => isPlaceholderValue(value))) {
      issues.push(
        buildIssue(
          "error",
          `Field still contains placeholder content: ${field}`,
          `Current values: ${values.join(", ")}`,
          `Replace placeholder items in \`${field}\` with real values.`,
        ),
      );
    }
  });

  ["last_reviewed", "effective_date"].forEach((field) => {
    const value = getScalar(fields, field);
    if (value && !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      issues.push(
        buildIssue(
          "error",
          `Invalid date format in ${field}`,
          `Current value: ${value}`,
          `Use ISO format YYYY-MM-DD for \`${field}\`.`,
        ),
      );
    }
  });

  const documentId = getScalar(fields, "document_id");
  if (documentId && baseName && documentId !== baseName) {
    issues.push(
      buildIssue(
        "error",
        "Filename does not match document_id",
        `document_id is \`${documentId}\`, but the filename is \`${baseName}\`.`,
        "Make the filename and `document_id` identical so the upload route stays stable.",
      ),
    );
  }

  const uploadAuthority = getScalar(fields, "upload_authority");
  if (uploader?.authorized && uploadAuthority && uploadAuthority !== uploader.label) {
    issues.push(
      buildIssue(
        "error",
        "upload_authority does not match the selected uploader",
        `Frontmatter says \`${uploadAuthority}\`, but the selected uploader is \`${uploader.label}\`.`,
        "Switch to the right authorized uploader or update `upload_authority` to match the planned uploader.",
      ),
    );
  }

  const revision = getScalar(fields, "revision");
  const supersedes = getScalar(fields, "supersedes").toLowerCase();
  if (revision && revision !== "A" && (!supersedes || supersedes === "none")) {
    issues.push(
      buildIssue(
        "error",
        "Revision is not initial but supersedes is empty",
        `Revision \`${revision}\` should identify the live file it replaces.`,
        "Fill `supersedes` with the prior document identifier and secure current-owner approval before release.",
      ),
    );
  }

  if (revision === "A" && supersedes && supersedes !== "none") {
    issues.push(
      buildIssue(
        "warning",
        "Initial revision still points at a superseded file",
        `Revision A usually starts with \`supersedes: none\`.`,
        "If this truly replaces a legacy page, keep the supersede link and confirm owner approval; otherwise change it to `none`.",
      ),
    );
  }

  const requiredSections = isNavigationOnly
    ? uploadContract.navigationRequiredSections
    : [
        ...uploadContract.requiredSections,
        ...(uploadContract.additionalSectionsByWorkType[workType] ?? []),
      ];

  requiredSections.forEach((section) => {
    if (!sections.includes(section)) {
      issues.push(
        buildIssue(
          "error",
          `Missing section: ${section}`,
          `The body does not include \`## ${section}\`.`,
          `Add \`## ${section}\` to the markdown body using the governed template order.`,
        ),
      );
    }
  });

  if (
    getScalar(fields, "operating_layer") === "department" &&
    !normalizeList(fields.applies_to_departments).includes(getScalar(fields, "department"))
  ) {
    issues.push(
      buildIssue(
        "warning",
        "applies_to_departments does not include the owning department",
        "Department-owned uploads should normally include the owning department in the affected list.",
        "Add the owning department to `applies_to_departments` unless there is a strong reason not to.",
      ),
    );
  }

  if (workType === "controlled-engineering-spec" && getScalar(fields, "department") !== "Engineering") {
    issues.push(
      buildIssue(
        "error",
        "Controlled engineering spec is not owned by Engineering",
        "Controlled engineering specs should stay Engineering-owned even when Manufacturing or QC consume them.",
        "Set `department: Engineering` and use `applies_to_departments` for the downstream teams.",
      ),
    );
  }

  const placement = inferPlacement(fields, pageType, workType);
  const errorCount = issues.filter((issue) => issue.severity === "error").length;
  const warningCount = issues.filter((issue) => issue.severity === "warning").length;
  const status = errorCount > 0 ? "blocked" : warningCount > 0 ? "review" : "ready";

  return {
    fileName,
    fields,
    title,
    placement,
    issues,
    errorCount,
    warningCount,
    status,
    uploader,
  };
}

function renderUploadRules() {
  uploadRuleList.innerHTML = data.uploadRules
    .map(
      (rule) => `
        <article class="upload-rule">
          <span class="branch-meta">${escapeHtml(rule.title)}</span>
          <p>${escapeHtml(rule.body)}</p>
        </article>
      `,
    )
    .join("");
}

function renderUploaderOptions() {
  const scenario = getScenario();

  uploadActor.innerHTML = scenario.uploaders
    .map(
      (uploader) => `
        <option value="${escapeHtml(uploader.id)}">
          ${escapeHtml(uploader.label)}${uploader.authorized ? "" : " (read-only)"}
        </option>
      `,
    )
    .join("");
}

function getSelectedUploader() {
  const scenario = getScenario();
  return scenario.uploaders.find((item) => item.id === uploadActor.value) ?? scenario.uploaders[0];
}

function renderUploadReport(report) {
  if (!report) {
    uploadStatusTitle.textContent = "No file loaded yet";
    uploadStatusCopy.textContent =
      "Select an uploader and a markdown file to see whether the upload is ready, where it belongs, and which mismatches must be fixed.";
    uploadStatusStrip.innerHTML = `
      <article class="upload-status-card">
        <span class="branch-meta">Readiness</span>
        <strong>Pending</strong>
        <p>No file has been validated yet.</p>
      </article>
      <article class="upload-status-card">
        <span class="branch-meta">Errors</span>
        <strong>0</strong>
        <p>Validation starts after a file is selected.</p>
      </article>
      <article class="upload-status-card">
        <span class="branch-meta">Warnings</span>
        <strong>0</strong>
        <p>Advisory checks appear after parsing.</p>
      </article>
    `;
    uploadPlacementCard.innerHTML = `
      <span class="branch-meta">Placement</span>
      <h3>Waiting for file input</h3>
      <p>No placement route yet.</p>
    `;
    uploadIssuesList.innerHTML =
      "<li>Choose a markdown file to run the governed upload checks.</li>";
    uploadFixesList.innerHTML =
      "<li>Start from the upload-ready template, then fill every frontmatter field with real values.</li>";
    uploadDropCopy.textContent =
      "The validator will check filename convention, frontmatter fields, required sections, upload-control fields, owner authority, supersede handling, and the branch where the file belongs in the web view.";
    return;
  }

  const readinessLabel =
    report.status === "ready" ? "Ready" : report.status === "review" ? "Review needed" : "Blocked";
  const readinessClass =
    report.status === "ready"
      ? "is-ok"
      : report.status === "review"
        ? "is-warning"
        : "is-alert";

  uploadStatusTitle.textContent = `${readinessLabel}: ${report.fileName}`;
  uploadStatusCopy.textContent =
    report.status === "ready"
      ? "The file passes the current concept-gate checks and has a clear placement route."
      : report.status === "review"
        ? "The file is structurally close, but Dudex Core surfaced warnings that should be resolved before release."
        : "The file cannot move to upload yet because one or more blocking mismatches were found.";

  uploadStatusStrip.innerHTML = `
    <article class="upload-status-card">
      <span class="branch-meta">Readiness</span>
      <strong>${escapeHtml(readinessLabel)}</strong>
      <p><span class="status-pill ${readinessClass}">${escapeHtml(report.uploader.label)}</span></p>
    </article>
    <article class="upload-status-card">
      <span class="branch-meta">Errors</span>
      <strong>${escapeHtml(report.errorCount)}</strong>
      <p>Blocking mismatches before upload.</p>
    </article>
    <article class="upload-status-card">
      <span class="branch-meta">Warnings</span>
      <strong>${escapeHtml(report.warningCount)}</strong>
      <p>Advisory items still worth cleanup.</p>
    </article>
  `;

  uploadPlacementCard.innerHTML = `
    <span class="branch-meta">Placement</span>
    <h3>${escapeHtml(report.placement.branch)} -> ${escapeHtml(report.placement.lane)}</h3>
    <p>${escapeHtml(report.placement.reason)}</p>
    <div class="placement-grid">
      <span>Shelf: ${escapeHtml(report.placement.shelf)}</span>
      <span>document_id: ${escapeHtml(getScalar(report.fields, "document_id") || "missing")}</span>
      <span>revision: ${escapeHtml(getScalar(report.fields, "revision") || "missing")}</span>
      <span>training: ${escapeHtml(getScalar(report.fields, "training_requirement") || "missing")}</span>
    </div>
  `;

  uploadIssuesList.innerHTML =
    report.issues.length > 0
      ? report.issues
          .map(
            (issue) => `
              <li>
                <strong>${escapeHtml(issue.title)}</strong><br />
                ${escapeHtml(issue.detail)}
              </li>
            `,
          )
          .join("")
      : "<li>No contract mismatches found. This file is clean for the current concept gate.</li>";

  const fixes = report.issues.map((issue) => issue.fix);
  uploadFixesList.innerHTML =
    fixes.length > 0
      ? fixes
          .map(
            (fix) => `
              <li>${escapeHtml(fix)}</li>
            `,
          )
          .join("")
      : "<li>No remediation needed. Preserve the same structure when publishing to the live system.</li>";

  uploadDropCopy.textContent = `Loaded ${report.fileName}. Placement route: ${report.placement.branch} -> ${report.placement.lane} -> ${report.placement.shelf}.`;
}

function handleUploadValidation() {
  const file = uploadFile.files?.[0];
  if (!file) {
    latestUploadReport = null;
    renderUploadReport(null);
    return;
  }

  const uploader = getSelectedUploader();
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    latestUploadReport = validateUpload(String(reader.result || ""), file.name, uploader);
    renderUploadReport(latestUploadReport);
  });
  reader.readAsText(file);
}

function buildSearchIndex() {
  const scenario = getScenario();
  const departmentWorkIndex = getDepartmentWorkIndexForScenario(activeScenario);
  const branchItems = data.branches.flatMap((branch) =>
    branch.cards.map((card) => ({
      label: card.title,
      section: branch.label,
      description: card.description,
      bullets: card.bullets,
    })),
  );

  const departmentItems = isPilotScenario()
    ? data.departments
        .filter((item) => item.id !== "all")
        .map((department) => {
          const blueprint = getPilotDepartmentBlueprint(department.id);
          return {
            label: `${department.label} Pilot Blueprint`,
            section: "Departments · Pilot skeleton",
            description: department.summary,
            bullets: [
              ...(blueprint?.templateLanes ?? []).slice(0, 3),
              `Systems: ${(blueprint?.hub?.systems ?? []).join(", ")}`,
              `Flows: ${(blueprint?.hub?.flows ?? []).join(", ")}`,
            ],
          };
        })
    : departmentWorkIndex.map((item) => ({
        label: item.title,
        section: `${getTeamLabel(item.department)} · ${item.type}`,
        description: item.summary,
        bullets: [
          `Revision ${item.revision}`,
          item.status,
          `Owner: ${item.owner}`,
          `Systems: ${item.systems.join(", ")}`,
          `Flows: ${item.flows.join(", ")}`,
        ],
      }));

  const flowItems = data.flows.map((flow) => ({
    label: flow.title,
    section: "Cross-Functional Flows",
    description: flow.summary,
    bullets: flow.steps,
  }));

  const templateItems = data.templates.map((template) => ({
    label: template.title,
    section: "Template Hangar",
    description: template.description,
    bullets: [template.filename, template.kind],
  }));

  const trainingItems = isPilotScenario()
    ? [
        {
          label: "Training Attachment Rule",
          section: "Command Structure · Pilot skeleton",
          description:
            "Every released standard work item will require an attached training record, but pilot keeps that lane template-only.",
          bullets: [
            "Attach training on release",
            "Use individual or group acknowledgement",
            "Reopen on revision change or knowledge drift",
          ],
        },
      ]
    : scenario.trainingRecords.map((record) => ({
        label: record.standard,
        section: `Command Structure · ${getTeamLabel(record.team)}`,
        description: `${record.label} · ${record.audience}`,
        bullets: [record.trigger, `Revision ${record.revision}`, `Due ${record.due}`],
      }));

  const documentItems = scenario.documentSets.map((document) => ({
    label: document.title,
    section: `Document Snapshot · ${document.lane}`,
    description: `${document.type} · Rev ${document.revision} · ${document.status}`,
    bullets: [document.owner, document.acceptance, document.supersedes],
  }));

  return [
    ...branchItems,
    ...departmentItems,
    ...flowItems,
    ...templateItems,
    ...trainingItems,
    ...documentItems,
  ];
}

let searchIndex = [];

function renderSearch() {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    searchResults.hidden = true;
    branchGrid.hidden = false;
    searchGrid.innerHTML = "";
    searchSummary.textContent = "";
    if (searchIsDocked) {
      dockSearch(false);
    }
    return;
  }

  const matches = searchIndex.filter((item) => {
    const haystack = [item.label, item.section, item.description, ...item.bullets]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  });

  branchGrid.hidden = true;
  searchResults.hidden = false;
  if (!searchIsDocked) {
    dockSearch(true);
  }
  searchSummary.textContent = `${matches.length} match${matches.length === 1 ? "" : "es"} for "${searchInput.value.trim()}".`;
  searchGrid.innerHTML =
    matches.length > 0
      ? matches
          .map(
            (item) => `
              <article class="branch-card">
                <span class="branch-meta">${escapeHtml(item.section)}</span>
                <h4>${escapeHtml(item.label)}</h4>
                <p>${escapeHtml(item.description)}</p>
                <ul>${item.bullets
                  .slice(0, 4)
                  .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
                  .join("")}</ul>
              </article>
            `,
          )
          .join("")
      : `
          <article class="branch-card">
            <span class="branch-meta">No match</span>
            <h4>No standards found</h4>
            <p>Try terms like Odoo, Fusion, Brain, VCMP, BOM, standups, training, or revision.</p>
            <ul>
              <li>Search checks branches, flows, departments, templates, and command-structure records.</li>
              <li>Matches are literal and based on the current concept-page dataset.</li>
            </ul>
          </article>
        `;
}

function initialize() {
  renderStats();
  renderSignalChain();
  renderFlightPath();
  renderBranches();
  renderAuthorities();
  renderFlows();
  renderTemplates();
  renderScenarioAwareSections();
  renderUploadRules();

  searchIndex = buildSearchIndex();

  searchInput.addEventListener("input", renderSearch);
  searchInput.addEventListener("search", renderSearch);
  window.addEventListener("resize", () => {
    if (searchIsDocked) {
      requestAnimationFrame(alignSearchToResultsHeading);
    }
  });

  uploadActor.addEventListener("change", handleUploadValidation);
  uploadFile.addEventListener("change", handleUploadValidation);
}

initialize();
