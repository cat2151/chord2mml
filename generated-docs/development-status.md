Last updated: 2025-12-02

# Development Status

## 現在のIssues
- [Issue #3](../issue-notes/3.md): `obsidian-plugin-mmlabc` への組み込みを見据え、`easychord2mml` のプリプロセッサ機能を `chord2mml` へ統合することが主要な開発タスクです。
- [Issue #2](../issue-notes/2.md): LLMが生成したコード進行の認識に関する対応は `easychord2mml` 側で完了したため、現在このIssueのクローズ作業が保留されています。
- これらの対応により、多様なコード表記をMMLへ変換する際の柔軟性とロバスト性が向上することが期待されます。

## 次の一手候補
1. [Issue #2](../issue-notes/2.md) のクローズ処理
   - 最初の小さな一歩: `issue-notes/2.md` ファイルを更新し、Issueがクローズされた旨を明記した上で、GitHubのIssueをクローズする。
   - Agent実行プロンプト:
     ```
     対象ファイル: `issue-notes/2.md`

     実行内容: `issue-notes/2.md` の内容を更新し、Issueがクローズ済みであることを明確に記述してください。具体的には、ファイルの最後に「このIssueはeasychord2mml側で解決済みのため、クローズしました。」という文言を追加してください。

     確認事項: 既存の内容を損なわないこと。GitHubの実際のIssueがクローズされているか、またはクローズする準備が整っているかを確認すること（このAgentはファイル更新のみを行う）。

     期待する出力: 更新された `issue-notes/2.md` の内容をmarkdown形式で出力してください。
     ```

2. [Issue #3](../issue-notes/3.md) `easychord2mml` プリプロセッサ統合のための初期調査
   - 最初の小さな一歩: `chord2mml` の `peggyjs/chord2mml_chord2ast.pegjs` と、`easychord2mml` のプリプロセッサが提供すると想定される柔軟な入力（例: 小文字表記のマイナーコード 'ii-vi'、ハイフン区切り）とのギャップを特定する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `peggyjs/chord2mml_chord2ast.pegjs`

     実行内容: `chord2mml` プロジェクトの `peggyjs/chord2mml_chord2ast.pegjs` を詳細に分析し、現状で認識できるコード進行の表記（大文字I-VII、C-Gなど）と、LLMが生成しがちな柔軟な入力（例: 小文字表記のマイナーコード 'ii-vi'、ハイフン区切り、余分なスペースなど）とのギャップを特定してください。特に、現在のパーサーが対応していない記法を洗い出してください。

     確認事項: `peggyjs/chord2mml_chord2ast.pegjs` の文法ルール (`ROOT_DEGREE`, `CHORD_SEPARATOR` など) を正確に理解し、既存のコードを変更せずに、どの部分に拡張が必要かを特定する。Issue #2で言及された`easychord2mml`の対応内容も考慮に入れてください。

     期待する出力: `chord2mml_chord2ast.pegjs` が現在処理できないが、統合時に処理が必要となる入力形式のリストと、それぞれの記法をサポートするために `chord2mml_chord2ast.pegjs` で必要となる可能性のある修正点（例: 新しいルール追加、既存ルールの変更）に関する初期分析をmarkdown形式で出力してください。
     ```

3. `chord2mml_chord2ast.pegjs` のLLMコード認識能力向上に向けた具体的ステップの特定
   - 最初の小さな一歩: `peggyjs/chord2mml_chord2ast.pegjs` を分析し、LLMが生成しがちなコード進行パターン（小文字表記、ハイフン区切りなど）が現在のパーサーでどのように扱われるかを具体的な例を挙げて文書化する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `peggyjs/chord2mml_chord2ast.pegjs`

     実行内容: `peggyjs/chord2mml_chord2ast.pegjs` のパーシングルールを深く分析し、LLMが生成しがちな以下のパターンのコード進行が現在のパーサーでどのように扱われるかを評価してください。
       - 小文字表記のマイナーコード (例: "ii" "vi")
       - ハイフン区切り (例: "C-G-Am-F")
       - 全体的に自由な書式 (例: 余分なスペース、句読点など)
     現在のパーサーでこれらのパターンがエラーとなる場合、具体的なエラー箇所と、それを修正するために必要となる文法ルールの追加・変更のアイデアをブレインストーミングしてください。

     確認事項: `ROOT_DEGREE` ルールや `CHORD_SEPARATOR` ルールが、これらのパターンにどのように影響するかを特に注意して確認してください。また、`easychord2mml` のプリプロセッサがどのようにこれらのパターンを正規化しているか、というIssue #2 の過去の記述も参考にしてください。

     期待する出力:
       1. 現在の `chord2mml_chord2ast.pegjs` が認識できないLLM生成パターンの具体的なコード例。
       2. それぞれのパターンについて、現在のパーサーがどのルールで失敗するか。
       3. 各パターンをサポートするための `peggyjs/chord2mml_chord2ast.pegjs` の文法ルールに対する変更アイデア（例: 新しい `ROOT_DEGREE` のバリアント、`CHORD_SEPARATOR` の拡張、プリプロセッサ層の追加など）。これをmarkdown形式でリストアップしてください。

---
Generated at: 2025-12-02 07:08:07 JST
