[English version →](../../../en/projects/project-02-agent-readable-workspace/)

> Tegishli maʼruzalar: [3-maʼruza. Repozitoriyni yagona haqiqat manbaiga aylantiring](./../../lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md) · [4-maʼruza. Yoʻriqnomalarni fayllar boʻylab ajrating](./../../lectures/lecture-04-why-one-giant-instruction-file-fails/index.md)
> Andoza fayllari: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/en/resources/templates/)

# Loyiha 02. Loyihani oʻqishga qulay qiling va toʻxtagan joyidan davom ettiring

## Nima qilasiz

Yangi agent loyiha tuzilishini tez tushunib olishi, joriy jarayon (progress) qayerdaligini bilishi va ishni davom ettirishi uchun repoga “oʻqish qulayligi”ni (readability) qoʻshing. Aniqroq qilib aytganda: ikkita sessiya davomida hujjat import qilish, hujjat detallarini koʻrish va lokal saqlashni (local persistence) amalga oshiring.

Siz buni ikki marta bajarasiz: birinchisi hech qanday yordamsiz, ikkinchisi repoda oldindan joylashtirilgan `ARCHITECTURE.md`, `PRODUCT.md` va `session-handoff.md` fayllari bilan.

## Vositalar

- Claude Code yoki Codex
- Git
- Node.js + Electron

## Harness mexanizmi

Agent oʻqiy oladigan ish maydoni (Agent-readable workspace) + doimiy holat fayllari (persistent state files)
