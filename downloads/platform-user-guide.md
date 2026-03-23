# Vape-Jet Standard Work Platform User Guide

Use this platform to find the current standard, confirm which system owns the live record, track training acknowledgement, and prepare clean markdown uploads.

## 1. Start with the right branch

- Use `Cultural Turbine` when the question is about mission, vision support, pillars, or the operating logic of the system.
- Use `Departments` when the question is about role ownership, recurring procedures, training paths, or department-level execution.
- Use `Shared Systems` when the question is mainly about how to use a platform such as Fusion, Odoo, Jira, Brain, HubSpot, Slack, or Zoom.
- Use `Cross-Functional Flows` when the question is about handoffs between teams.
- Use `Management System` when the question is a company-wide rule such as the quality statement, onboarding, change control, floor management, AI governance, or product data control.
- Use `Governance` when the question is about metadata, templates, review cadence, upload rules, or revision control.

## 2. Use search correctly

- Search by standard name, system name, ticket family, department, or key term.
- Treat search as a finder, not as the final authority.
- After finding a likely page, confirm the source of truth in the `Source of Truth` section or in the page's `Authoritative References`.

## 3. Confirm the authoritative system

- `Fusion` owns released CAD, drawings, vendor specs, and part-number definition.
- `Odoo` owns executable item masters, BOMs, orders, inventory, and workstation records.
- `Jira` owns customer-facing and internal work traceability such as `VJSD`, `VJN`, `VCMP`, machine tickets, and feature requests.
- `Brain` owns telemetry, diagnostics context, and controlled remote machine access state.
- `Product Home` owns released build packets, assembly manuals, and product-facing published documentation.
- `Standard Work Repo + Confluence` owns the governed operating method and page structure.

## 4. Use Command Structure

Use `Command Structure` to connect standards to people, authority, and acknowledgement.

- The command structure shows which lead or owner is accountable for training follow-through.
- The progress bars show acknowledgement completeness by team.
- The sign-off cards show whether a current revision has been acknowledged.
- Retraining remains open until the required crew or individual acknowledgement is complete.

### Retraining triggers

- new revision release
- lack of understanding
- knowledge drift
- incident, defect, or audit signal

## 5. Use the Onboarding Lane

Use `Onboarding Lane` when the question is about the QMS quality statement, general company onboarding, or role-specific readiness for a new employee.

- The quality statement explains what the QMS is trying to protect.
- Company onboarding sets the shared foundation every employee should complete first.
- Department and job-type tracks show the role-specific ramp and sign-off gates.
- Progress indicators show whether the ramp is still in structure mode or actively moving toward certification.

## 6. Use the Department Workbench

Use `Departments` to inspect blueprint bullets in `Pilot View` or open clickable standards, checklists, training paths, and linked artifacts in `Demo Mode`.

- Pilot View keeps this lane template-only so the platform stays easy to read at first pass.
- Demo Mode turns the department lane into a clickable workbench with linked artifacts.
- Every standard work item is expected to carry an attached training record in the active scenario.
- Linked checklists and forms can be opened from the workbench.
- Checklists, training paths, and related artifacts show backlinks to the standards that use them.

## 7. Start in Pilot View, then switch to Demo Mode when needed

`Pilot View` is now the default opening mode.

- Pilot View is intentionally skeletal and shows template-like bullets instead of real or fictional standards.
- Department work in Pilot View stays at the blueprint level: planned standard lanes, systems, flows, checklist expectations, and training rules.
- Pilot View does not show simulated work items, simulated revision histories, or populated crew sign-off examples.
- Use Pilot View when the goal is to understand the operating shape, ownership lanes, and template structure before looking at a richer example library.

## 8. Use Demo Mode when presenting the platform

Use `Demo Mode` when you want a mature live-looking system with fictional personnel, deeper revision history, and varied sign-off states.

- The scenario toggle is available near the top of the page for quick switching.
- Demo Mode uses fictional GI Joe-inspired names.
- Demo Mode is where clickable fictional standards, richer controlled document sets, and linked training/sign-off examples appear.
- Demo Mode is best for leadership walkthroughs, training on future-state behavior, and platform demos that should not use live personnel names.

## 9. Use the Upload Gate

Use `Upload Gate` before publishing new or revised markdown.

### The gate checks

- uploader authority
- filename convention
- required frontmatter fields
- required sections
- revision and effective-date fields
- training-impact decision
- supersede handling
- recommended placement in the web structure

### Clean upload rules

- Keep the filename in lowercase kebab-case.
- Keep the filename aligned with `document_id`.
- Start from the correct markdown template.
- Fill all required metadata with real values.
- Include revision-control and training-impact fields.
- If the file replaces a current live file, fill `supersedes` and confirm owner authority.
- Resolve all blocking validation errors before upload.

## 10. Daily use by role

### Crew members

- Find the current standard.
- Follow the authoritative reference.
- Complete assigned acknowledgement or retraining.
- Escalate unclear or outdated instructions.

### Team leads

- Monitor team acknowledgement completion.
- Confirm understanding, not just checkbox completion.
- Trigger retraining when drift or confusion appears.
- Escalate change candidates into improvement or change control.

### Standard owners

- Keep pages current and reviewed on cadence.
- Maintain revision control and supersede handling.
- Ensure downstream training impact is defined.
- Keep links to authoritative systems current.

### Authorized uploaders

- Upload only within delegated authority.
- Use approved templates only.
- Pass the upload gate cleanly.
- Do not obsolete live files without the current owner's approval path.

## 11. When to escalate

Escalate when:

- the current standard is unclear or contradictory
- the authoritative system is not obvious
- retraining is open because of understanding gaps
- a revision affects downstream teams or systems
- a file cannot pass the upload gate cleanly

## 12. Minimum good behavior

- Do not duplicate the truth across pages.
- Do not bypass revision control.
- Do not upload outside authority.
- Do not mark training complete if understanding is still weak.
- Do link to the authoritative record when the truth lives elsewhere.
