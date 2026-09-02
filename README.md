# Mini ERP + CRM Operations Portal

A centralized web portal designed for wholesale and distribution companies to streamline customer relationship management (CRM), catalog/inventory tracking, and sales challan workflows. 

The system implements strict transactional business logic to ensure that inventory levels are validated and maintained in real time, preventing negative stock levels while preserving historic product snapshots on sales records.

---

## Tech Stack

* **Frontend:** Angular (TypeScript, RxJS, Angular Router, Reactive Forms)
* **Backend:** Spring Boot (Java, Spring Security, Spring Data JPA)
* **Database:** PostgreSQL / MySQL
* **Authentication:** JWT (JSON Web Tokens) with Role-Based Access Control (RBAC)
* **Build Tools:** Maven / Gradle & Angular CLI

---

## Core Features

* **Role-Based Access Control (RBAC):** Dedicated permissions across 4 distinct operational roles: `Admin`, `Sales`, `Warehouse`, and `Accounts`[cite: 1].
* **Customer CRM:** Lead capture, customer classification (Retail, Wholesale, Distributor), contact details, and follow-up logging[cite: 1].
* **Inventory & Stock Management:** SKU tracking, warehouse location, minimum stock threshold alerts, and automated `IN`/`OUT` stock movement logs[cite: 1].
* **Sales Challan Processing:**
  * Draft or confirm sales challans[cite: 1].
  * Point-in-time product snapshot preservation (name, SKU, unit price) to safeguard against future catalog adjustments[cite: 1].
  * Atomic stock reduction on challan confirmation with strict validation against negative inventory[cite: 1].
* **Auditing & Reporting:** Comprehensive movement logs tracking timestamp, user, quantity change, and transactional reason[cite: 1].

---

## System Architecture & Workflow
