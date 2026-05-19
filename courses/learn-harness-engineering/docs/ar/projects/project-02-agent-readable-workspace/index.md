[中文版本 →](../../../zh/projects/project-02-agent-readable-workspace/)

> محاضرات مرتبطة: [المحاضرة 03. اجعل المستودع مصدر الحقيقة الوحيد](./../../lectures/lecture-03-why-the-repository-must-become-the-system-of-record/index.md) · [المحاضرة 04. قسّم التعليمات عبر ملفات](./../../lectures/lecture-04-why-one-giant-instruction-file-fails/index.md)
> ملفات القوالب: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/ar/resources/templates/)

# المشروع 02. اجعل المشروع قابلًا للقراءة واستأنف من حيث توقفت

## ما الذي ستفعله

أضف "قابلية القراءة" إلى المستودع حتى يستطيع وكيل جديد فهم بنية المشروع بسرعة، ومعرفة التقدم الحالي، واستئناف العمل. تحديدًا: نفذ استيراد المستندات، وعرض تفاصيل المستند، والحفظ المحلي، عبر جلستين.

ستنفذه مرتين: الأولى دون مساعدة، والثانية مع وضع `ARCHITECTURE.md` و `PRODUCT.md` و `session-handoff.md` مسبقًا في المستودع.

## الأدوات

- Claude Code أو Codex
- Git
- Node.js + Electron

## آلية harness

Workspace قابل للقراءة من الوكيل + ملفات حالة دائمة
