Last updated: 2025-11-12

# Development Status

## 現在のIssues
- [Issue #3](../issue-notes/3.md): obsidian-plugin-mmlabc向けにeasychord2mmlのプリプロセッサ機能をchord2mmlへ統合する必要がある。
- [Issue #2](../issue-notes/2.md): LLMが生成したコード進行を認識させる機能はeasychord2mml側で対応済みのため、本Issueはクローズ予定である。
- 現在は、主要機能の統合と安定化に注力し、今後の機能拡張に備えている段階である。

## 次の一手候補
1. [Issue #3](../issue-notes/3.md) easychord2mmlのプリプロセッサ機能の調査と `chord2mml` への統合検討
   - 最初の小さな一歩: `issue-notes/2.md` に書かれている `ii-vi` やハイフン区切りなどの具体例を元に、`chord2mml` の `peggyjs/chord2mml_chord2ast.pegjs` が現在どのようにパースを失敗するかを詳細に分析し、考えられるプリプロセッサのパターンを検討する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `peggyjs/chord2mml_chord2ast.pegjs`, `src/chord2mml_chord2ast.cjs`, `src/chord2mml.ts`

     実行内容: `issue-notes/2.md` で言及されている「ii-vi」（小文字マイナーコード）や「C - G」（ハイフン区切り）のようなLLMが生成しうるコード進行表記が、現在の `chord2mml_chord2ast.pegjs` パーサーでどのように処理されるか（または失敗するか）を分析してください。特に、これらの表記をパース可能にするための前処理（プリプロセッサ）の必要性、およびその処理を `chord2mml_chord2ast.pegjs` の前に挟むべきか、あるいは `peggyjs` 内でルールを拡張すべきかについて、実現可能性と影響範囲の観点から検討し、初期のアーキテクチャ案をmarkdown形式で提案してください。

     確認事項: 既存の正常なコード進行パース処理に影響を与えないこと。また、`easychord2mml` のプリプロセッサがどのような機能を持つか不明なため、汎用的な前処理の方向性を検討すること。

     期待する出力:
     - LLM生成コード進行表記の具体的な失敗例（もしあれば）
     - 前処理ロジックの複数の実装案（例: 外部スクリプト、`chord2mml_chord2ast.pegjs` のルール拡張）
     - 各実装案のメリット・デメリットと、本プロジェクトへの適合性に関する考察
     - 最終的な統合アーキテクチャの初期案をmarkdown形式で出力してください。
     ```

2. [Issue #3](../issue-notes/3.md) `ROOT_DEGREE` ルールへの小文字ローマ数字対応
   - 最初の小さな一歩: `peggyjs/chord2mml_chord2ast.pegjs` の `ROOT_DEGREE` ルールに、`"i"`, `"ii"`, `"iii"`, `"iv"`, `"v"`, `"vi"`, `"vii"` のパターンを追加し、`getDegreeIndex` 関数も同様に小文字を処理できるように修正する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `peggyjs/chord2mml_chord2ast.pegjs`

     実行内容: `peggyjs/chord2mml_chord2ast.pegjs` ファイル内の `ROOT_DEGREE` ルールとそれに関連する `getDegreeIndex` 関数を修正し、小文字のローマ数字（`i`, `ii`, `iii`, `iv`, `v`, `vi`, `vii`）をルートとして正しくパースできるように拡張してください。
     具体的には:
     1. `ROOT_DEGREE` ルールに小文字のローマ数字パターンを追加。
     2. `getDegreeIndex` 関数が小文字のローマ数字に対応するようにロジックを更新。小文字のローマ数字はマイナーコードとして扱われるべきですが、ここでは度数インデックスの取得のみに焦点を当ててください。マイナーかメジャーかの判断は後続の処理に任せます。

     確認事項: 既存の大文字ローマ数字 (`I`, `II` など) やアラビア数字 (`1`, `2` など) のパース機能が損なわれないこと。`getOffsetIonian` 関数に変更は加えないこと。

     期待する出力: 修正された `peggyjs/chord2mml_chord2ast.pegjs` ファイルの内容全体をmarkdown形式のコードブロックで出力してください。
     ```

3. [Issue #3](../issue-notes/3.md) `CHORD_SEPARATOR` ルールへの「-」ハイフン区切り対応
   - 最初の小さな一歩: `peggyjs/chord2mml_chord2ast.pegjs` の `CHORD_SEPARATOR` ルールに、ハイフン区切り（` - ` のようなスペースを伴うハイフン）を認識するパターンを追加する。
   - Agent実行プロンプト:
     ```
     対象ファイル: `peggyjs/chord2mml_chord2ast.pegjs`

     実行内容: `peggyjs/chord2mml_chord2ast.pegjs` ファイル内の `CHORD_SEPARATOR` ルールを修正し、コード進行の区切りとして「 - 」（スペースに囲まれたハイフン）を認識できるように拡張してください。これにより、`C - G - Am` のような記述が正しくパースされるようにします。

     確認事項: 既存のスペース区切りやエンドオブインプットの認識が損なわれないこと。また、ハイフンがコードクオリティの一部として誤って認識されないよう、厳密なパターンマッチングを維持すること。

     期待する出力: 修正された `peggyjs/chord2mml_chord2ast.pegjs` ファイルの内容全体をmarkdown形式のコードブロックで出力してください。

---
Generated at: 2025-11-12 07:09:11 JST
