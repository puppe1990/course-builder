[中文版本 →](../../../zh/projects/project-01-baseline-vs-minimal-harness/)

> محاضرات مرتبطة: [المحاضرة 01. النماذج القوية لا تعني تنفيذًا موثوقًا](./../../lectures/lecture-01-why-capable-agents-still-fail/index.md) · [المحاضرة 02. ما معنى harness فعليًا](./../../lectures/lecture-02-what-a-harness-actually-is/index.md)
> ملفات القوالب: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/ar/resources/templates/)

# المشروع 01. Prompt فقط مقابل القواعد أولًا: ما حجم الفرق؟

## ما الذي ستفعله

ابنِ هيكلًا بسيطًا لتطبيق معرفة باستخدام Electron: نافذة فيها قائمة مستندات على اليسار، ولوحة Q&A على اليمين، ومجلد بيانات محلي. المهمة نفسها ليست معقدة. المعقد هو كيف تجعل الوكيل يكملها.

ستنفذها مرتين. المرة الأولى: prompt فقط، دون تحضير. المرة الثانية: مع وضع `AGENTS.md` و `init.sh` و `feature_list.json` مسبقًا في المستودع. ثم قارن.

جوهر هذا المشروع ليس كتابة الكود، بل قياس الفرق بين "قضاء 15 دقيقة في تحضير القواعد أولًا" و"ترك الوكيل يعمل مباشرة".

## الأدوات

- Claude Code أو Codex (اختر واحدًا واستخدمه في التشغيلين)
- Git (إدارة الفروع والمقارنة)
- Node.js + Electron (حزمة المشروع)
- مؤقت (لتسجيل مدة كل تشغيل)

## آلية harness

Harness بسيط: `AGENTS.md` + `init.sh` + `feature_list.json`
