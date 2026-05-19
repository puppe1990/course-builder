[中文版本 →](../../../zh/projects/project-03-multi-session-continuity/)

> 関連講義: [講義 05. セッションをまたいでコンテキストを保つ](./../../lectures/lecture-05-why-long-running-tasks-lose-continuity/index.md) · [講義 06. すべてのエージェントセッション前に初期化する](./../../lectures/lecture-06-why-initialization-needs-its-own-phase/index.md)
> テンプレートファイル: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/ja/resources/templates/)

# プロジェクト 03. セッション再起動後もエージェントが作業を続けられるようにする

## やること

エージェントにスコープ制御と検証ゲートを追加します。ドキュメント分割、メタデータ抽出、インデックス進捗表示、引用付き Q&A フローを実装します。`feature_list.json` で機能状態を追跡し、一度に 1 機能だけ進め、検証証拠なしに `pass` とマークしないようにします。

同じ作業を 2 回実行します。1 回目は制約なし。2 回目は厳格なルールを適用します。

## ツール

- Claude Code または Codex
- Git
- Node.js + Electron

## Harness メカニズム

進捗ログ + セッション引き継ぎ + 複数セッション継続性
