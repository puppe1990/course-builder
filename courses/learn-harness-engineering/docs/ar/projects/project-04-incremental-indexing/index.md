[中文版本 →](../../../zh/projects/project-04-incremental-indexing/)

> محاضرات مرتبطة: [المحاضرة 07. ارسم حدود مهمة واضحة للوكلاء](./../../lectures/lecture-07-why-agents-overreach-and-under-finish/index.md) · [المحاضرة 08. استخدم قوائم الميزات لتقييد ما يفعله الوكيل](./../../lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md)
> ملفات القوالب: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/ar/resources/templates/)

# المشروع 04. استخدم feedback في runtime لتصحيح سلوك الوكيل

## ما الذي ستفعله

أضف قابلية ملاحظة runtime، مثل سجلات التشغيل، وسجلات الاستيراد/الفهرسة، وحالات الأخطاء، بالإضافة إلى قيود معمارية لمنع اختراق الحدود بين الطبقات. ازرع خطأ runtime ليصلحه الوكيل.

ستنفذه مرتين: الأولى دون سجلات أو قيود، والثانية بالأدوات والقواعد المناسبة.

## الأدوات

- Claude Code أو Codex
- Git
- Node.js + Electron

## آلية harness

Feedback في runtime + تحكم في النطاق + فهرسة تدريجية
