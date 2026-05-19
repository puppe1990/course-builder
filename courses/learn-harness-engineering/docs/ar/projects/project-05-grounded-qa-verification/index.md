[中文版本 →](../../../zh/projects/project-05-grounded-qa-verification/)

> محاضرات مرتبطة: [المحاضرة 09. امنع الوكلاء من إعلان النجاح مبكرًا](./../../lectures/lecture-09-why-agents-declare-victory-too-early/index.md) · [المحاضرة 10. التشغيل الكامل للـ pipeline فقط يُعد تحققًا حقيقيًا](./../../lectures/lecture-10-why-end-to-end-testing-changes-results/index.md)
> ملفات القوالب: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/ar/resources/templates/)

# المشروع 05. اجعل الوكيل يتحقق من عمله

## ما الذي ستفعله

نفذ فصل الأدوار: generator ينفذ، و evaluator يراجع، وربما planner. شغّل ثلاث مرات لقياس أثر كل دور مضاف.

اختر ترقية جوهرية لميزة، مثل محادثة متعددة الأدوار، أو إعادة تصميم لوحة الاستشهادات، أو فلترة المستندات، وحافظ عليها ثابتة في كل التشغيلات.

## الأدوات

- Claude Code أو Codex
- Git
- Node.js + Electron

## آلية harness

تحقق ذاتي + Q&A مستند إلى أدلة + إكمال مبني على الدليل
