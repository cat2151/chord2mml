Last updated: 2025-11-11

# Development Status

## 現在のIssues
- [Issue #3](../issue-notes/3.md) は、`obsidian-plugin-mmlabc` で利用できるよう、`easychord2mml` のプリプロセッサ機能を `chord2mml` に統合することを目指しています。
- [Issue #2](../issue-notes/2.md) の「LLMが生成したコード進行を認識する」課題は `easychord2mml` 側で解決済みと判断されており、本プロジェクトではクローズする予定です。
- 現在の開発は、`chord2mml` の機能拡張と外部連携の強化に焦点を当てつつ、既存Issueの適切な処理を進める段階にあります。

## 次の一手候補
1. [Issue #3](../issue-notes/3.md) easychord2mmlのプリプロセッサ機能をchord2mmlに統合
   - 最初の小さな一歩: `easychord2mml` プロジェクトのプリプロセッサに関連するコードを特定し、その入力と出力、主要な変換ロジックを把握する。特に、`chord2mml` に取り込む際に影響を受ける `peggyjs/chord2mml_chord2ast.pegjs` との連携方法を検討する。
   - Agent実行プロンプト:
     ```
     対象ファイル: easychord2mmlの関連ファイル（外部プロジェクトのため、まずは概念的に特定）、`peggyjs/chord2mml_chord2ast.pegjs`

     実行内容: `easychord2mml` のプリプロセッサ機能がどのように入力（コード進行テキスト）を処理し、どのような形式で `chord2mml` のパーサーに渡すかを分析してください。具体的には、正規表現や変換ルール、そしてそのロジックを `peggyjs/chord2mml_chord2ast.pegjs` の既存の構造にどのように統合できるかを調査し、その統合戦略を提案してください。

     確認事項: `easychord2mml` のプリプロセッサ機能が `chord2mml` の既存のパースロジック（特に `ROOT_DEGREE` や `CHORD_QUALITY`）と競合しないか、また、`chord2mml_ast2ast.ts` や `chord2mml_notes2mml.ts` などの下流処理に不必要な変更を要求しないかを確認してください。

     期待する出力: `easychord2mml` のプリプロセッサの概要、`chord2mml` への統合戦略（`peggyjs/chord2mml_chord2ast.pegjs` の変更案を含む）、およびその統合によるメリット・デメリットをMarkdown形式で出力してください。
     ```

2. [Issue #2](../issue-notes/2.md) のクローズ処理
   - 最初の小さな一歩: `issue-notes/2.md` の内容を確認し、「easychord2mml側でできた - こっちはクローズする ↑あとでやる」という記述をGitHubのIssueコメントとして追記し、その後Issueをクローズする。
   - Agent実行プロンプト:
     ```
     対象ファイル: `issue-notes/2.md`

     実行内容: `issue-notes/2.md` の内容を読み込み、Issueがすでに `easychord2mml` 側で対応済みであるという記述を確認してください。その上で、GitHub上でこのIssueをクローズするために必要な手順（Issueコメントの追記とクローズ）をMarkdown形式で記述してください。

     確認事項: `easychord2mml` 側の対応が本プロジェクトに与える影響がないこと、および今後の開発でこのIssueの再開が必要ないことを確認してください。

     期待する出力: [Issue #2](../issue-notes/2.md) のクローズに関する推奨される手順をMarkdown形式で出力してください。具体的には、GitHubのIssueコメントに追記すべき内容と、Issueをクローズする際の理由を含めてください。
     ```

3. [Issue #2](../issue-notes/2.md) の課題（小文字表記/ハイフン区切り）に対する`peggyjs/chord2mml_chord2ast.pegjs`の改善
   - 最初の小さな一歩: `peggyjs/chord2mml_chord2ast.pegjs` ファイル内で、小文字表記の度数（`ii`, `vi`など）とスペースなしのハイフン区切り（`ii-vi`）を認識できるようにする変更箇所の特定と、簡単なテストケースの検討。
   - Agent実行プロンプト:
     ```
     対象ファイル: `peggyjs/chord2mml_chord2ast.pegjs`

     実行内容: `peggyjs/chord2mml_chord2ast.pegjs` を分析し、小文字表記の度数（例: `ii`, `vi`）とスペースなしのハイフン区切り（例: `ii-vi`）をパースできるようにするための変更案を提案してください。具体的には、`ROOT_DEGREE` ルールを拡張して小文字の度数も認識させること、および `CHORD_SEPARATOR` ルールを修正してスペースなしのハイフンも適切に処理できるようにする変更内容を記述してください。

     確認事項: 既存のパースロジック（特に大文字度数やスペース付きハイフン）の互換性を損なわないこと、および新たなパースロジックが誤ったコード進行を生成しないことを確認してください。

     期待する出力: `peggyjs/chord2mml_chord2ast.pegjs` の変更差分をMarkdown形式のコードブロックで出力し、変更の意図と、対応する新しいテストケースの例を説明してください。
     ```

---
Generated at: 2025-11-11 09:26:43 JST
