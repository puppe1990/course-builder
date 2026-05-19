[中文版本 →](../../../zh/projects/project-05-grounded-qa-verification/)

> 関連講義: [講義 09. エージェントの早すぎる完了宣言を止める](./../../lectures/lecture-09-why-agents-declare-victory-too-early/index.md) · [講義 10. フルパイプライン実行だけが本当の検証である](./../../lectures/lecture-10-why-end-to-end-testing-changes-results/index.md)
> テンプレートファイル: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/ja/resources/templates/)

# プロジェクト 05. エージェントに自分の作業を検証させる

## やること

役割分離を実装します。実装する generator、レビューする evaluator、必要に応じて planner を用意します。役割を追加するたびに効果を測るため、3 回実行します。

複数ターン会話、引用パネルの再設計、ドキュメントフィルタリングなど、実質的な機能改善を 1 つ選び、すべての実行で同じ対象を使います。

## ツール

- Claude Code または Codex
- Git
- Node.js + Electron

## Harness メカニズム

自己検証 + 根拠付き Q&A + 証拠に基づく完了判定
