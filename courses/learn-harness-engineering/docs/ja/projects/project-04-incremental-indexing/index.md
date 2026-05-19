[中文版本 →](../../../zh/projects/project-04-incremental-indexing/)

> 関連講義: [講義 07. エージェントのタスク境界を明確に引く](./../../lectures/lecture-07-why-agents-overreach-and-under-finish/index.md) · [講義 08. 機能リストでエージェントの作業を制約する](./../../lectures/lecture-08-why-feature-lists-are-harness-primitives/index.md)
> テンプレートファイル: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/ja/resources/templates/)

# プロジェクト 04. ランタイムフィードバックでエージェントの挙動を修正する

## やること

起動ログ、インポート/インデックスログ、エラー状態などのランタイム観測性と、レイヤー越境を防ぐアーキテクチャ制約を追加します。さらに、エージェントに修正させるランタイムバグを仕込みます。

同じ作業を 2 回実行します。1 回目はログや制約なし。2 回目は適切なツールとルールを使います。

## ツール

- Claude Code または Codex
- Git
- Node.js + Electron

## Harness メカニズム

ランタイムフィードバック + スコープ制御 + 増分インデックス
