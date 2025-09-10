<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
<a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
<a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
<a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>

# Clinic-Man

A comprehensive **Clinic Management System** designed for private clinics, built with NestJS and Node.js. This system enables efficient management of staff, schedules, medical services, inventory, suppliers, billing, and reporting.

---

## Features

### Management

- **Doctors / Nurses / Patients:** Manage personal profiles, medical records, and appointment history.
- **Slots / Tables / Service Rooms:** Manage clinic resources and optimize scheduling.
- **Services / Tests:** Manage medical services and laboratory tests, including pricing and workflow.
- **Medicines / Medical Supplies:** Track inventory, stock levels, and usage.
- **Suppliers:** Manage supplier information and track purchase history.

### Functionalities

- **Weekly schedule registration for doctors/nurses:** Staff can register or adjust their weekly working schedule.
- **Official scheduling for doctors/nurses:** Admin can confirm and publish official schedules.
- **Online appointment booking:** Patients can book appointments online.
- **Walk-in reception (with or without prior booking):** Manage direct patient intake at the clinic.
- **Doctor consultation and test assignment:** Doctors can assign lab tests during consultations.
- **Lab staff enter test results:** Lab results entry and management.
- **Doctor gives diagnosis and prescription:** Issue final diagnosis and prescription after tests.
- **Patient bill payment:** Manage payments for examination and services.
- **Medicine purchase at counter:** Patients can buy prescribed medicines at the clinic.
- **Salary calculation for doctors/nurses by week/month:** Automatically calculate payroll based on schedules and services rendered.
- **Inventory management (medicine/supplies) from suppliers:** Staff can add new stock from suppliers.

### Reports & Statistics

- **Customer revenue statistics:** Analyze revenue by patient.
- **Service/Test/Medicine revenue statistics:** Track revenue by service, test, and medicine.
- **Supplier statistics by supply volume:** Analyze supplier contributions and inventory intake.
- **Revenue statistics by month/quarter/year:** Financial reporting for different time periods.

---

## Technology Stack

- **NestJS** (Node.js framework)
- (Add other technologies used: e.g., TypeScript, PostgreSQL, React, etc.)

---

## Project Setup

```bash
$ npm install
```

## Compile and Run

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run Tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

For deployment instructions, see the [NestJS deployment docs](https://docs.nestjs.com/deployment).

To deploy on AWS using the official platform [Mau](https://mau.nestjs.com):

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

---

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [NestJS Discord channel](https://discord.gg/G7Qnnhy)
- [NestJS official courses](https://courses.nestjs.com/)
- [NestJS Mau for AWS deployment](https://mau.nestjs.com)
- [NestJS Devtools](https://devtools.nestjs.com)
- [NestJS Enterprise support](https://enterprise.nestjs.com)
- [NestJS Jobs board](https://jobs.nestjs.com)
- Follow [NestJS on X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs)

---

## Support

NestJS is MIT-licensed and supported by sponsors and backers. [Learn more here](https://docs.nestjs.com/support).

---

## Stay in Touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

---

## License

NestJS is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

---
