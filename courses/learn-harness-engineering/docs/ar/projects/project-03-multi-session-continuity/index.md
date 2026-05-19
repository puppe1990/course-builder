[中文版本 →](../../../zh/projects/project-03-multi-session-continuity/)

> محاضرات مرتبطة: [المحاضرة 05. حافظ على السياق حيًا عبر الجلسات](./../../lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md) · [المحاضرة 06. هيئ قبل كل جلسة وكيل](./../../lectures/lecture-06-why-initialization-needs-its-own-phase/index.md)
> ملفات القوالب: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/ar/resources/templates/)

# المشروع 03. أبقِ الوكيل يعمل بعد إعادة تشغيل الجلسات

## ما الذي ستفعله

أضف تحكمًا في النطاق وبوابات تحقق إلى الوكيل. نفذ تقسيم المستندات، واستخراج metadata، وعرض تقدم الفهرسة، وتدفق Q&A قائم على الاستشهادات. استخدم `feature_list.json` لتتبع حالة الميزات: ميزة واحدة كل مرة، ولا تضع `pass` دون دليل تحقق.

ستنفذه مرتين: الأولى دون قيود، والثانية مع تطبيق صارم.

## الأدوات

- Claude Code أو Codex
- Git
- Node.js + Electron

## آلية harness

سجل تقدم + handoff الجلسة + استمرارية متعددة الجلسات
