[中文版本 →](../../../zh/projects/project-01-baseline-vs-minimal-harness/)

> 関連講義: [講義 01. 強いモデルは信頼できる実行を意味しない](./../../lectures/lecture-01-why-capable-agents-still-fail/index.md) · [講義 02. harness とは何か](./../../lectures/lecture-02-what-a-harness-actually-is/index.md)
> テンプレートファイル: [templates/](https://github.com/walkinglabs/learn-harness-engineering/blob/main/docs/ja/resources/templates/)

# プロジェクト 01. プロンプトのみ vs ルール優先: どれほど差が出るか

## やること

最小限の Electron ナレッジベースアプリの外枠を作ります。左にドキュメント一覧、右に Q&A パネル、ローカルデータディレクトリを持つウィンドウです。タスク自体は複雑ではありません。複雑なのは、エージェントにどう完了させるかです。

同じ作業を 2 回実行します。1 回目は準備なしでプロンプトだけ。2 回目は `AGENTS.md`、`init.sh`、`feature_list.json` をあらかじめリポジトリに置いてから実行します。その後、結果を比較します。

このプロジェクトの核心はコードを書くことではありません。「最初に 15 分かけてルールを用意する」ことと「そのままエージェントに任せる」ことの差がどれほど大きいかを測ることです。

## ツール

- Claude Code または Codex（どちらかを選び、両方の実行で同じものを使う）
- Git（ブランチ管理と比較）
- Node.js + Electron（プロジェクトのスタック）
- タイマー（各実行時間を記録）

## Harness メカニズム

最小 harness: `AGENTS.md` + `init.sh` + `feature_list.json`
