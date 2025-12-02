Last updated: 2025-12-03

# 開発状況生成プロンプト（開発者向け）

## 生成するもの：
- 現在openされているissuesを3行で要約する
- 次の一手の候補を3つlistする
- 次の一手の候補3つそれぞれについて、極力小さく分解して、その最初の小さな一歩を書く

## 生成しないもの：
- 「今日のissue目標」などuserに提案するもの
  - ハルシネーションの温床なので生成しない
- ハルシネーションしそうなものは生成しない（例、無価値なtaskや新issueを勝手に妄想してそれをuserに提案する等）
- プロジェクト構造情報（来訪者向け情報のため、別ファイルで管理）

## 「Agent実行プロンプト」生成ガイドライン：
「Agent実行プロンプト」作成時は以下の要素を必ず含めてください：

### 必須要素
1. **対象ファイル**: 分析/編集する具体的なファイルパス
2. **実行内容**: 具体的な分析や変更内容（「分析してください」ではなく「XXXファイルのYYY機能を分析し、ZZZの観点でmarkdown形式で出力してください」）
3. **確認事項**: 変更前に確認すべき依存関係や制約
4. **期待する出力**: markdown形式での結果や、具体的なファイル変更

### Agent実行プロンプト例

**良い例（上記「必須要素」4項目を含む具体的なプロンプト形式）**:
```
対象ファイル: `.github/workflows/translate-readme.yml`と`.github/workflows/call-translate-readme.yml`

実行内容: 対象ファイルについて、外部プロジェクトから利用する際に必要な設定項目を洗い出し、以下の観点から分析してください：
1) 必須入力パラメータ（target-branch等）
2) 必須シークレット（GEMINI_API_KEY）
3) ファイル配置の前提条件（README.ja.mdの存在）
4) 外部プロジェクトでの利用時に必要な追加設定

確認事項: 作業前に既存のworkflowファイルとの依存関係、および他のREADME関連ファイルとの整合性を確認してください。

期待する出力: 外部プロジェクトがこの`call-translate-readme.yml`を導入する際の手順書をmarkdown形式で生成してください。具体的には：必須パラメータの設定方法、シークレットの登録手順、前提条件の確認項目を含めてください。
```

**避けるべき例**:
- callgraphについて調べてください
- ワークフローを分析してください
- issue-noteの処理フローを確認してください

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Development Status

## 現在のIssues
[以下の形式で3行でオープン中のissuesを要約。issue番号を必ず書く]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 次の一手候補
1. [候補1のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```

2. [候補2のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```

3. [候補3のタイトル。issue番号を必ず書く]
   - 最初の小さな一歩: [具体的で実行可能な最初のアクション]
   - Agent実行プロンプト:
     ```
     対象ファイル: [分析/編集する具体的なファイルパス]

     実行内容: [具体的な分析や変更内容を記述]

     確認事項: [変更前に確認すべき依存関係や制約]

     期待する出力: [markdown形式での結果や、具体的なファイル変更の説明]
     ```
```


# 開発状況情報
- 以下の開発状況情報を参考にしてください。
- Issue番号を記載する際は、必ず [Issue #番号](../issue-notes/番号.md) の形式でMarkdownリンクとして記載してください。

## プロジェクトのファイル一覧
- .github/actions-tmp/.github/workflows/call-callgraph.yml
- .github/actions-tmp/.github/workflows/call-daily-project-summary.yml
- .github/actions-tmp/.github/workflows/call-issue-note.yml
- .github/actions-tmp/.github/workflows/call-translate-readme.yml
- .github/actions-tmp/.github/workflows/callgraph.yml
- .github/actions-tmp/.github/workflows/check-recent-human-commit.yml
- .github/actions-tmp/.github/workflows/daily-project-summary.yml
- .github/actions-tmp/.github/workflows/issue-note.yml
- .github/actions-tmp/.github/workflows/translate-readme.yml
- .github/actions-tmp/.github_automation/callgraph/codeql-queries/callgraph.ql
- .github/actions-tmp/.github_automation/callgraph/codeql-queries/codeql-pack.lock.yml
- .github/actions-tmp/.github_automation/callgraph/codeql-queries/qlpack.yml
- .github/actions-tmp/.github_automation/callgraph/config/example.json
- .github/actions-tmp/.github_automation/callgraph/docs/callgraph.md
- .github/actions-tmp/.github_automation/callgraph/presets/callgraph.js
- .github/actions-tmp/.github_automation/callgraph/presets/style.css
- .github/actions-tmp/.github_automation/callgraph/scripts/analyze-codeql.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/callgraph-utils.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/check-codeql-exists.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/check-node-version.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/common-utils.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/copy-commit-results.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/extract-sarif-info.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/find-process-results.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/generate-html-graph.cjs
- .github/actions-tmp/.github_automation/callgraph/scripts/generateHTML.cjs
- .github/actions-tmp/.github_automation/check_recent_human_commit/scripts/check-recent-human-commit.cjs
- .github/actions-tmp/.github_automation/project_summary/docs/daily-summary-setup.md
- .github/actions-tmp/.github_automation/project_summary/prompts/development-status-prompt.md
- .github/actions-tmp/.github_automation/project_summary/prompts/project-overview-prompt.md
- .github/actions-tmp/.github_automation/project_summary/scripts/ProjectSummaryCoordinator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/development/DevelopmentStatusGenerator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/development/GitUtils.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/development/IssueTracker.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/generate-project-summary.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/CodeAnalyzer.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectAnalysisOrchestrator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectDataCollector.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectDataFormatter.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/overview/ProjectOverviewGenerator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/shared/BaseGenerator.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/shared/FileSystemUtils.cjs
- .github/actions-tmp/.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs
- .github/actions-tmp/.github_automation/translate/docs/TRANSLATION_SETUP.md
- .github/actions-tmp/.github_automation/translate/scripts/translate-readme.cjs
- .github/actions-tmp/.gitignore
- .github/actions-tmp/.vscode/settings.json
- .github/actions-tmp/LICENSE
- .github/actions-tmp/README.ja.md
- .github/actions-tmp/README.md
- .github/actions-tmp/_config.yml
- .github/actions-tmp/generated-docs/callgraph.html
- .github/actions-tmp/generated-docs/callgraph.js
- .github/actions-tmp/generated-docs/development-status-generated-prompt.md
- .github/actions-tmp/generated-docs/development-status.md
- .github/actions-tmp/generated-docs/project-overview-generated-prompt.md
- .github/actions-tmp/generated-docs/project-overview.md
- .github/actions-tmp/generated-docs/style.css
- .github/actions-tmp/googled947dc864c270e07.html
- .github/actions-tmp/issue-notes/10.md
- .github/actions-tmp/issue-notes/11.md
- .github/actions-tmp/issue-notes/12.md
- .github/actions-tmp/issue-notes/13.md
- .github/actions-tmp/issue-notes/14.md
- .github/actions-tmp/issue-notes/15.md
- .github/actions-tmp/issue-notes/16.md
- .github/actions-tmp/issue-notes/17.md
- .github/actions-tmp/issue-notes/18.md
- .github/actions-tmp/issue-notes/19.md
- .github/actions-tmp/issue-notes/2.md
- .github/actions-tmp/issue-notes/20.md
- .github/actions-tmp/issue-notes/21.md
- .github/actions-tmp/issue-notes/22.md
- .github/actions-tmp/issue-notes/23.md
- .github/actions-tmp/issue-notes/24.md
- .github/actions-tmp/issue-notes/25.md
- .github/actions-tmp/issue-notes/26.md
- .github/actions-tmp/issue-notes/27.md
- .github/actions-tmp/issue-notes/28.md
- .github/actions-tmp/issue-notes/29.md
- .github/actions-tmp/issue-notes/3.md
- .github/actions-tmp/issue-notes/30.md
- .github/actions-tmp/issue-notes/4.md
- .github/actions-tmp/issue-notes/7.md
- .github/actions-tmp/issue-notes/8.md
- .github/actions-tmp/issue-notes/9.md
- .github/actions-tmp/package-lock.json
- .github/actions-tmp/package.json
- .github/actions-tmp/src/main.js
- .github/workflows/call-daily-project-summary.yml
- .github/workflows/call-issue-note.yml
- .github/workflows/call-translate-readme.yml
- .github/workflows/issue-note.yml
- .gitignore
- LICENSE
- README.ja.md
- README.md
- _config.yml
- dist/chord2mml.js
- dist/index.html
- generated-docs/project-overview-generated-prompt.md
- googled947dc864c270e07.html
- issue-notes/2.md
- issue-notes/4.md
- jest.config.js
- package-lock.json
- package.json
- peggyjs/chord2mml_chord2ast.pegjs
- src/chord2mml.ts
- src/chord2mml_ast2ast.ts
- src/chord2mml_ast2notes.ts
- src/chord2mml_chord2ast.cjs
- src/chord2mml_notes2mml.ts
- test/chord2mml.test.ts
- tsconfig.json
- webpack.config.js

## 現在のオープンIssues
## [Issue #4](../issue-notes/4.md): Google検索にindexlさせる用のJekyll処理（GitHub Pages）が落ちる
[issue-notes/4.md](https://github.com/cat2151/chord2mml/blob/main/issue-notes/4.md)

...
ラベル: 
--- issue-notes/4.md の内容 ---

```markdown
# issue Google検索にindexlさせる用のJekyll処理（GitHub Pages）が落ちる #4
[issues #4](https://github.com/cat2151/chord2mml/issues/4)

# 分析
## 原因
- gemini用prompt mdがpeggyjsを含むため
## 対策
- 参照ファイルは、code blockで囲みつつさらに、その内部を `{% raw %}` 〜 `{% endraw %}` で囲む
## 状況
- https://github.com/cat2151/github-actions/blob/main/.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs
- にて修正したつもり
- test結果待ち

```

## [Issue #3](../issue-notes/3.md): obsidian-plugin-mmlabcに取り込まれるようにするため、easychord2mmlのプリプロセッサをchord2mmlに取り込む必要がある

ラベル: 
--- issue-notes/3.md の内容 ---

```markdown

```

## [Issue #2](../issue-notes/2.md): LLMが生成したコード進行をある程度認識できるようにする
[issue-notes/2.md](https://github.com/cat2151/chord2mml/blob/main/issue-notes/2.md)...
ラベル: 
--- issue-notes/2.md の内容 ---

```markdown
# issue LLMが生成したコード進行をある程度認識できるようにする #2
[issues #2](https://github.com/cat2151/chord2mml/issues/2)

# これまでの課題
- 例
  - ii-vi
    - マイナーコードの小文字表記
    - ハイフン区切り

# 対策案
- いろいろ課題がありそう
  - 対策、レアケースでuser期待どおりに動作しないものをtest caseとして可視化し、割り切る想定
- プリプロセッサ
 - 一度トランスパイルする
 - errorになった場合、以下を行う
   - 全体を「-」を「・」に置き換えてトランスパイルする
     - エラーがなくなったらそれを利用する
   - 全体を「vii」を「VIIm」、「vi」を「VIm」、「v」を...と、変換順に注意して、VII～Iを変換する
     - エラーがなくなったらそれを利用する
- プロンプト「上記を実現するためにブレインストーミングしてみてください」

# LLM生成結果をみた
- NG、NG内容は、全体の再設計レベルの漠然とした回答であること
- プロンプト「上記を実装するとして、実装方法をブレインストーミングしてみてください。上記のトランスパイルとは、chord2mml_chord2ast.pegjsにデータをわたすことを意味します。つまり、chord2mml_chord2ast.pegjsとその下流の処理は維持します。このproject内のソースでは実現できず、project外のeasychord2mmlの変更が必要かもしれません。それも踏まえて検討してください」

# LLM生成結果をみた
- NG、NG内容は、userの記述の受け売りにとどまる上に、意味のない脱線が含まれた回答であること
- ここでプロンプトエンジニアリングしても埒が明かない、時間のムダだと判断する
- このprojectだけでは、LLMに与える素材としては不足と判断する
- easychord2mmlを見る

# みた
- easychord2mml側でできた
- こっちはクローズする

↑あとでやる

```

## ドキュメントで言及されているファイルの内容
### .github/actions-tmp/.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs
```cjs
{% raw %}
const fs = require('fs');
const path = require('path');

/**
 * projectのfile一覧取得など担当するユーティリティクラス
 */
class ProjectFileUtils {
  constructor(projectRoot) {
    if (!projectRoot) {
      throw new Error('projectRoot is required');
    }
    this.projectRoot = projectRoot;
  }


  /**
   * projectのファイル一覧を生成
   * @param {Array} issues - Issues情報
   * @param {Object} recentChanges - 最近の変更情報
   * @param {string} prompt - プロンプト内容
   * @returns {Promise<string>} 生成された開発状況
   */
  getProjectFiles(dir = this.projectRoot) {
    // 再帰的にファイル一覧を取得し、Markdownリスト形式で返す
    const results = [];
    const excludeDirs = ['.git', 'node_modules'];
    function walk(currentDir, base = '') {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
          continue;
        }
        const relPath = path.join(base, entry.name).replace(/\\/g, '/');
        if (entry.isDirectory()) {
          walk(path.join(currentDir, entry.name), relPath + '/');
        } else {
          results.push(relPath);
        }
      }
    }
    walk(dir);
    // Markdownリスト形式で返す
    return results.length === 0 ? '（ファイルなし）' : results.map(f => `- ${f}`).join('\n');
  }

  /**
   * 指定filenameにマッチする全ファイル内容をmarkdown形式で返す
   * @param {string} filename - 対象のファイル名
   * @returns {string} markdown文字列
   */
  getFileContentsMarkdown(filename) {
  const map = this.getFilenameToPathsMap();
    if (!map[filename] || map[filename].length === 0) {
      return `（該当ファイルなし）`;
    }
    return map[filename].map(relPath => {
      let content = '';
      try {
        content = fs.readFileSync(path.join(this.projectRoot, relPath), 'utf8');
      } catch (e) {
        content = `（ファイル読み込み失敗: ${e.message}）`;
      }
      const ext = relPath.split('.').pop();
      return [
        `### ${relPath}`,
        '```' + ext, // for chord2mml : https://github.com/cat2151/chord2mml/issues/4
        '{% raw %}',
        content,
        '{% endraw %}',
        '```'
      ].join('\n');
    }).join('\n\n');
  }

  /**
   * prompt内で言及されているファイル名の内容をmarkdown文字列群として返す
   * @param {string} prompt - プロンプト全文
   * @returns {string} markdown文字列群
   */
  getMentionedFileContentsInPrompt(prompt) {
    const map = this.getFilenameToPathsMap();
    const mentionedFiles = Object.keys(map).filter(filename => prompt.includes(filename));
    if (mentionedFiles.length === 0) {
      return '';
    }
    // 各ファイル名について内容取得
    return mentionedFiles.map(filename => this.getFileContentsMarkdown(filename)).join('\n\n');
  }

  /**
   * プロジェクト全体のファイル名→相対パス配列のmapを返す
   * @returns {Object} { [filename]: [relativePath, ...] }
   */
  getFilenameToPathsMap(dir = this.projectRoot) {
  const map = {};
  const excludeDirs = ['.git', 'node_modules'];
    function walk(currentDir, base = '') {
      const entries = fs.readdirSync(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && excludeDirs.includes(entry.name)) {
          continue;
        }
        const relPath = path.join(base, entry.name).replace(/\\/g, '/');
        if (entry.isDirectory()) {
          walk(path.join(currentDir, entry.name), relPath + '/');
        } else {
          const basename = entry.name;
          if (!map[basename]) {
            map[basename] = [];
          }
          map[basename].push(relPath);
        }
      }
    }
    walk(dir);
    return map;
  }
}

module.exports = ProjectFileUtils;


{% endraw %}
```

### .github/actions-tmp/issue-notes/2.md
```md
{% raw %}
# issue GitHub Actions「関数コールグラフhtmlビジュアライズ生成」を共通ワークフロー化する #2
[issues #2](https://github.com/cat2151/github-actions/issues/2)


# prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
このymlファイルを、以下の2つのファイルに分割してください。
1. 共通ワークフロー       cat2151/github-actions/.github/workflows/callgraph_enhanced.yml
2. 呼び出し元ワークフロー cat2151/github-actions/.github/workflows/call-callgraph_enhanced.yml
まずplanしてください
```

# 結果
- indent
    - linter？がindentのエラーを出しているがyml内容は見た感じOK
    - テキストエディタとagentの相性問題と判断する
    - 別のテキストエディタでsaveしなおし、テキストエディタをreload
    - indentのエラーは解消した
- LLMレビュー
    - agent以外の複数のLLMにレビューさせる
    - prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
以下の2つのファイルをレビューしてください。最優先で、エラーが発生するかどうかだけレビューしてください。エラー以外の改善事項のチェックをするかわりに、エラー発生有無チェックに最大限注力してください。

--- 共通ワークフロー

# GitHub Actions Reusable Workflow for Call Graph Generation
name: Generate Call Graph

# TODO Windowsネイティブでのtestをしていた名残が残っているので、今後整理していく。今はWSL act でtestしており、Windowsネイティブ環境依存問題が解決した
#  ChatGPTにレビューさせるとそこそこ有用そうな提案が得られたので、今後それをやる予定
#  agentに自己チェックさせる手も、セカンドオピニオンとして選択肢に入れておく

on:
  workflow_call:

jobs:
  check-commits:
    runs-on: ubuntu-latest
    outputs:
      should-run: ${{ steps.check.outputs.should-run }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 50 # 過去のコミットを取得

      - name: Check for user commits in last 24 hours
        id: check
        run: |
          node .github/scripts/callgraph_enhanced/check-commits.cjs

  generate-callgraph:
    needs: check-commits
    if: needs.check-commits.outputs.should-run == 'true'
    runs-on: ubuntu-latest
    permissions:
      contents: write
      security-events: write
      actions: read

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set Git identity
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"

      - name: Remove old CodeQL packages cache
        run: rm -rf ~/.codeql/packages

      - name: Check Node.js version
        run: |
          node .github/scripts/callgraph_enhanced/check-node-version.cjs

      - name: Install CodeQL CLI
        run: |
          wget https://github.com/github/codeql-cli-binaries/releases/download/v2.22.1/codeql-linux64.zip
          unzip codeql-linux64.zip
          sudo mv codeql /opt/codeql
          echo "/opt/codeql" >> $GITHUB_PATH

      - name: Install CodeQL query packs
        run: |
          /opt/codeql/codeql pack install .github/codeql-queries

      - name: Check CodeQL exists
        run: |
          node .github/scripts/callgraph_enhanced/check-codeql-exists.cjs

      - name: Verify CodeQL Configuration
        run: |
          node .github/scripts/callgraph_enhanced/analyze-codeql.cjs verify-config

      - name: Remove existing CodeQL DB (if any)
        run: |
          rm -rf codeql-db

      - name: Perform CodeQL Analysis
        run: |
          node .github/scripts/callgraph_enhanced/analyze-codeql.cjs analyze

      - name: Check CodeQL Analysis Results
        run: |
          node .github/scripts/callgraph_enhanced/analyze-codeql.cjs check-results

      - name: Debug CodeQL execution
        run: |
          node .github/scripts/callgraph_enhanced/analyze-codeql.cjs debug

      - name: Wait for CodeQL results
        run: |
          node -e "setTimeout(()=>{}, 10000)"

      - name: Find and process CodeQL results
        run: |
          node .github/scripts/callgraph_enhanced/find-process-results.cjs

      - name: Generate HTML graph
        run: |
          node .github/scripts/callgraph_enhanced/generate-html-graph.cjs

      - name: Copy files to generated-docs and commit results
        run: |
          node .github/scripts/callgraph_enhanced/copy-commit-results.cjs

--- 呼び出し元
# 呼び出し元ワークフロー: call-callgraph_enhanced.yml
name: Call Call Graph Enhanced

on:
  schedule:
    # 毎日午前5時(JST) = UTC 20:00前日
    - cron: '0 20 * * *'
  workflow_dispatch:

jobs:
  call-callgraph-enhanced:
    # uses: cat2151/github-actions/.github/workflows/callgraph_enhanced.yml
    uses: ./.github/workflows/callgraph_enhanced.yml # ローカルでのテスト用
```

# レビュー結果OKと判断する
- レビュー結果を人力でレビューした形になった

# test
- #4 同様にローカル WSL + act でtestする
- エラー。userのtest設計ミス。
  - scriptの挙動 : src/ がある前提
  - 今回の共通ワークフローのリポジトリ : src/ がない
  - 今回testで実現したいこと
    - 仮のソースでよいので、関数コールグラフを生成させる
  - 対策
    - src/ にダミーを配置する
- test green
  - ただしcommit pushはしてないので、html内容が0件NG、といったケースの検知はできない
  - もしそうなったら別issueとしよう

# test green

# commit用に、yml 呼び出し元 uses をlocal用から本番用に書き換える

# closeとする
- もしhtml内容が0件NG、などになったら、別issueとするつもり

{% endraw %}
```

### issue-notes/2.md
```md
{% raw %}
# issue LLMが生成したコード進行をある程度認識できるようにする #2
[issues #2](https://github.com/cat2151/chord2mml/issues/2)

# これまでの課題
- 例
  - ii-vi
    - マイナーコードの小文字表記
    - ハイフン区切り

# 対策案
- いろいろ課題がありそう
  - 対策、レアケースでuser期待どおりに動作しないものをtest caseとして可視化し、割り切る想定
- プリプロセッサ
 - 一度トランスパイルする
 - errorになった場合、以下を行う
   - 全体を「-」を「・」に置き換えてトランスパイルする
     - エラーがなくなったらそれを利用する
   - 全体を「vii」を「VIIm」、「vi」を「VIm」、「v」を...と、変換順に注意して、VII～Iを変換する
     - エラーがなくなったらそれを利用する
- プロンプト「上記を実現するためにブレインストーミングしてみてください」

# LLM生成結果をみた
- NG、NG内容は、全体の再設計レベルの漠然とした回答であること
- プロンプト「上記を実装するとして、実装方法をブレインストーミングしてみてください。上記のトランスパイルとは、chord2mml_chord2ast.pegjsにデータをわたすことを意味します。つまり、chord2mml_chord2ast.pegjsとその下流の処理は維持します。このproject内のソースでは実現できず、project外のeasychord2mmlの変更が必要かもしれません。それも踏まえて検討してください」

# LLM生成結果をみた
- NG、NG内容は、userの記述の受け売りにとどまる上に、意味のない脱線が含まれた回答であること
- ここでプロンプトエンジニアリングしても埒が明かない、時間のムダだと判断する
- このprojectだけでは、LLMに与える素材としては不足と判断する
- easychord2mmlを見る

# みた
- easychord2mml側でできた
- こっちはクローズする

↑あとでやる

{% endraw %}
```

### .github/actions-tmp/issue-notes/3.md
```md
{% raw %}
# issue GitHub Actions「issue note生成」を共通ワークフロー化する #3
[issues #3](https://github.com/cat2151/github-actions/issues/3)

- 前提
  - userは、translateのworkflowを共通ワークフロー化し、動くようにしたので、共通ワークフロー化の知識がある
  - よって、今回は、promptでplanさせ、そのplanをuserがレビューし、planの改善を指示できるので、ハルシネーションのリスクを下げることができる

- prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
このymlはまだ共通ワークフロー化されず、
呼び出し元からコピーされたままの状態です。
このymlファイル名のまま、
中身を共通ワークフロー化してください。
呼び出し元ymlは別途書きますので気にしないでください。
まずplanしてください
```

- plan 生成結果
```
共通ワークフロー化のためのplanは以下の通りです。

1. 目的
現在の issue-note.yml を「共通ワークフロー」として再設計し、他リポジトリや他ワークフローから workflow_call で呼び出せるようにする。
2. 主な変更点
on: トリガーを workflow_call に変更（直接イベントで起動しない）。
必要な入力（inputs）やシークレット（secrets）を workflow_call セクションで定義。
github.event.issue などのイベント依存部分を、inputs経由で受け取る形に修正。
既存の処理（issueノート生成、コミット、issue body更新）はそのまま活かすが、パラメータ化する。
3. 具体的な修正内容
on: issues: → on: workflow_call: に変更。
inputs で必要な値（例: issue_title, issue_number, issue_body, issue_url など）を受け取る。
スクリプト内の ${{ github.event.issue.xxx }} を ${{ inputs.xxx }} に置換。
github-script ステップも同様にinputsを参照。
必要に応じて secrets も workflow_call で受け取れるようにする。
4. ファイル名・配置
ファイル名はそのまま issue-note.yml。
配置場所は workflows でOK（共通ワークフローとしてもこの場所で良い）。
5. 呼び出し元への影響
呼び出し元ワークフローで uses: <repo>/.github/workflows/issue-note.yml@main のように参照し、inputsを渡す形になる。
このplanで進めます。次に、実際の共通ワークフロー化のためのyml修正案を作成しますか？
```

- userがplanレビューし、OKを出した
- agentに生成結果ymlをレビューさせた、OKとなった
  - userはこのレビューは認知負荷が高いのでskipとする（単純な細かい間違い探し作業になるので、それはagentに任せた）
-  エラー。呼び出し元ymlのエラーがあり修正。共通ワークフローのエラー指摘があり、共通ワークフロー側の修正が必要となった
```
原因の分析：

呼び出し元（tonejs-mml-to-jsonのissue-note.yml）は、reusable workflow（cat2151/github-actions/.github/workflows/issue-note.yml@main）をusesで呼び出し、inputsをwithで渡しています。
共通ワークフロー（reusable workflow）は inputs を workflow_call で受け取り、各ステップで ${{ inputs.xxx }} で参照しています。
しかし、エラーが発生したのは actions/github-script@v7 の script 内です。
エラーの本質的な原因：

actions/github-script の script: で ${{ inputs.issue_number }} のような式を直接 JavaScript テンプレートリテラル内で使っていますが、これはサポートされていません。
script: の中は JavaScript であり、YAMLの ${{ ... }} は展開されません（または意図通りに展開されません）。
そのため、inputs 変数は script 内の JavaScript で未定義となり、ReferenceError になります。
正しい書き方：

actions/github-script の script: でワークフローの inputs を使いたい場合は、with: で input を environment 変数や script の引数として渡し、JavaScript で process.env から取得するか、github-script の input 機能を使う必要があります。
例（修正版）：

このように、inputs の値を env で渡し、script 内では process.env で参照してください。

まとめ：

actions/github-script の script 内で ${{ inputs.xxx }} を直接使うと ReferenceError になる
env: で値を渡し、process.env で参照するのが正しい
修正が必要です。修正版のワークフローが必要な場合はお知らせください。
```

- test green
- closeとする

{% endraw %}
```

### .github/actions-tmp/issue-notes/4.md
```md
{% raw %}
# issue GitHub Actions「project概要生成」を共通ワークフロー化する #4
[issues #4](https://github.com/cat2151/github-actions/issues/4)

# prompt
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
このymlファイルを、以下の2つのファイルに分割してください。
1. 共通ワークフロー       cat2151/github-actions/.github/workflows/daily-project-summary.yml
2. 呼び出し元ワークフロー cat2151/github-actions/.github/workflows/call-daily-project-summary.yml
まずplanしてください
```

# 結果、あちこちハルシネーションのあるymlが生成された
- agentの挙動があからさまにハルシネーション
    - インデントが修正できない、「失敗した」という
    - 構文誤りを認識できない
- 人力で修正した

# このagentによるセルフレビューが信頼できないため、別のLLMによるセカンドオピニオンを試す
```
あなたはGitHub Actionsと共通ワークフローのスペシャリストです。
以下の2つのファイルをレビューしてください。最優先で、エラーが発生するかどうかだけレビューてください。エラー以外の改善事項のチェックをするかわりに、エラー発生有無チェックに最大限注力してください。

--- 呼び出し元

name: Call Daily Project Summary

on:
  schedule:
    # 日本時間 07:00 (UTC 22:00 前日)
    - cron: '0 22 * * *'
  workflow_dispatch:

jobs:
  call-daily-project-summary:
    uses: cat2151/github-actions/.github/workflows/daily-project-summary.yml
    secrets:
      GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}

--- 共通ワークフロー
name: Daily Project Summary
on:
  workflow_call:

jobs:
  generate-summary:
    runs-on: ubuntu-latest

    permissions:
      contents: write
      issues: read
      pull-requests: read

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          fetch-depth: 0  # 履歴を取得するため

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          # 一時的なディレクトリで依存関係をインストール
          mkdir -p /tmp/summary-deps
          cd /tmp/summary-deps
          npm init -y
          npm install @google/generative-ai @octokit/rest
          # generated-docsディレクトリを作成
          mkdir -p $GITHUB_WORKSPACE/generated-docs

      - name: Generate project summary
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPOSITORY: ${{ github.repository }}
          NODE_PATH: /tmp/summary-deps/node_modules
        run: |
          node .github/scripts/generate-project-summary.cjs

      - name: Check for generated summaries
        id: check_summaries
        run: |
          if [ -f "generated-docs/project-overview.md" ] && [ -f "generated-docs/development-status.md" ]; then
            echo "summaries_generated=true" >> $GITHUB_OUTPUT
          else
            echo "summaries_generated=false" >> $GITHUB_OUTPUT
          fi

      - name: Commit and push summaries
        if: steps.check_summaries.outputs.summaries_generated == 'true'
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          # package.jsonの変更のみリセット（generated-docsは保持）
          git restore package.json 2>/dev/null || true
          # サマリーファイルのみを追加
          git add generated-docs/project-overview.md
          git add generated-docs/development-status.md
          git commit -m "Update project summaries (overview & development status)"
          git push

      - name: Summary generation result
        run: |
          if [ "${{ steps.check_summaries.outputs.summaries_generated }}" == "true" ]; then
            echo "✅ Project summaries updated successfully"
            echo "📊 Generated: project-overview.md & development-status.md"
          else
            echo "ℹ️ No summaries generated (likely no user commits in the last 24 hours)"
          fi
```

# 上記promptで、2つのLLMにレビューさせ、合格した

# 細部を、先行する2つのymlを参照に手直しした

# ローカルtestをしてからcommitできるとよい。方法を検討する
- ローカルtestのメリット
    - 素早く修正のサイクルをまわせる
    - ムダにgit historyを汚さない
        - これまでの事例：「実装したつもり」「エラー。修正したつもり」「エラー。修正したつもり」...（以降エラー多数）
- 方法
    - ※検討、WSL + act を環境構築済みである。test可能であると判断する
    - 呼び出し元のURLをコメントアウトし、相対パス記述にする
    - ※備考、テスト成功すると結果がcommit pushされる。それでよしとする
- 結果
    - OK
    - secretsを簡略化できるか試した、できなかった、現状のsecrets記述が今わかっている範囲でベストと判断する
    - OK

# test green

# commit用に、yml 呼び出し元 uses をlocal用から本番用に書き換える

# closeとする

{% endraw %}
```

### issue-notes/4.md
```md
{% raw %}
# issue Google検索にindexlさせる用のJekyll処理（GitHub Pages）が落ちる #4
[issues #4](https://github.com/cat2151/chord2mml/issues/4)

# 分析
## 原因
- gemini用prompt mdがpeggyjsを含むため
## 対策
- 参照ファイルは、code blockで囲みつつさらに、その内部を `{% raw %}` 〜 `{% endraw %}` で囲む
## 状況
- https://github.com/cat2151/github-actions/blob/main/.github_automation/project_summary/scripts/shared/ProjectFileUtils.cjs
- にて修正したつもり
- test結果待ち

{% endraw %}
```

### peggyjs/chord2mml_chord2ast.pegjs
```pegjs
{% raw %}
{{
    function getOffsetIonian(degree) {
        return getOffsetsByScale("ionian")[getDegreeIndex(degree)];
    }

    function getOffsetsByScale(scale) {
        switch (scale) {
        case "ionian":     return [0,2,4,5,7,9,11];
        case "dorian":     return [0,2,3,5,7,9,10];
        case "phrygian":   return [0,1,3,5,7,8,10];
        case "lydian":     return [0,2,4,6,7,9,11];
        case "mixolydian": return [0,2,4,5,7,9,10];
        case "aeolian":    return [0,2,3,5,7,8,10];
        case "locrian":    return [0,1,3,5,6,8,10];
        default: throw new Error(`ERROR : getOffsetsByScale`);
        }
    }

    function getDegreeIndex(degree) {
        switch (degree) {
        case 'I':   return 0;
        case 'II':  return 1;
        case 'III': return 2;
        case 'IV':  return 3;
        case 'V':   return 4;
        case 'VI':  return 5;
        case 'VII': return 6;
        //
        case '1':   return 0;
        case '2':   return 1;
        case '3':   return 2;
        case '4':   return 3;
        case '5':   return 4;
        case '6':   return 5;
        case '7':   return 6;
        default: throw new Error(`ERROR : getDegreeIndex`);
        }
    }

    function getRootCdefgabOffset(root, sharp, flat) {
        let offset;
        switch (root) {
        case 'C': offset =  0; break;
        case 'D': offset =  2; break;
        case 'E': offset =  4; break;
        case 'F': offset =  5; break;
        case 'G': offset =  7; break;
        case 'A': offset =  9; break;
        case 'B': offset = 11; break;
        default: throw new Error(`ERROR : getRootCdefgabOffset`);
        }
        offset += sharp.length - flat.length;
        return offset;
    }
}}
{
    let gKey = 0; // 0～11
    let gScale = "ionian";
}
CHORDS=event:EVENT* _ { return event; }
EVENT=INLINE_ABC
    / INLINE_MML
    / BAR_SLASH
    / MIDI_PROGRAM_CHANGE
    / TEMPO
    / OCTAVE_UP_UPPER / OCTAVE_DOWN_UPPER
    / OCTAVE_UP_LOWER / OCTAVE_DOWN_LOWER
    / OCTAVE_UP       / OCTAVE_DOWN
    / SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE
    / SLASH_CHORD_MODE_POLYCHORD
    / SLASH_CHORD_MODE_INVERSION
    / INVERSION_MODE_ROOT_INV
    / INVERSION_MODE_1ST_INV
    / INVERSION_MODE_2ND_INV
    / INVERSION_MODE_3RD_INV
    / OPEN_HARMONY_MODE_DROP2AND4
    / OPEN_HARMONY_MODE_DROP4
    / OPEN_HARMONY_MODE_DROP2
    / OPEN_HARMONY_MODE_CLOSE
    / BASS_PLAY_MODE_NO_BASS
    / BASS_PLAY_MODE_ROOT
    / BAR
    / SCALE / KEY
    / SLASH_CHORD
    / ON_CHORD
    / CHORD
CHORD=_ root:ROOT quality:CHORD_QUALITY inversion:INVERSION octaveOffset:OCTAVE_OFFSET CHORD_SEPARATOR {
    return { event: "chord", root, quality, inversion, octaveOffset }; }
SLASH_CHORD=_   upperRoot:ROOT  upperQuality:CHORD_QUALITY  upperInversion:INVERSION upperOctaveOffset:OCTAVE_OFFSET "/"
                lowerRoot:ROOT? lowerQuality:CHORD_QUALITY? lowerInversion:INVERSION lowerOctaveOffset:OCTAVE_OFFSET CHORD_SEPARATOR {
    lowerRoot ??= upperRoot;
    lowerQuality ??= upperQuality;
    return { event: "slash chord", upperRoot, upperQuality, upperInversion, upperOctaveOffset, lowerRoot, lowerQuality, lowerInversion, lowerOctaveOffset }; }
ON_CHORD=_  upperRoot:ROOT  upperQuality:CHORD_QUALITY  upperInversion:INVERSION upperOctaveOffset:OCTAVE_OFFSET ("on" / "over")
            lowerRoot:ROOT? lowerQuality:CHORD_QUALITY? lowerInversion:INVERSION lowerOctaveOffset:OCTAVE_OFFSET CHORD_SEPARATOR {
    lowerRoot ??= upperRoot;
    lowerQuality ??= upperQuality;
    return { event: "chord over bass note", upperRoot, upperQuality, upperInversion, upperOctaveOffset, lowerRoot, lowerQuality, lowerInversion, lowerOctaveOffset }; } // このオンコード表記は日本固有である。見かけるので対象とした。なおover表記を海外で見かけたのでそれも対象にした。
SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE=_ "chord over bass note"i [\,\.]? { return { event: "change slash chord mode to chord over bass note" }; }
SLASH_CHORD_MODE_INVERSION=_ ("slash chord inversion"i) [\,\.]? { return { event: "change slash chord mode to inversion" }; } // "slash chord"の文言を追加したのは、inversionだけだと意図がわからないことがあるので。当初はわかったが現在は仕様が複雑になったため。
SLASH_CHORD_MODE_POLYCHORD=_ ("upper structure triad"i / "upper structure"i / "UST"i / "US"i / "polychord"i / "poly"i) [\,\.]? {
    return { event: "change slash chord mode to polychord" }; }
INLINE_MML= "/*" mml:([^*/] / INLINE_MML_SUB / "/")+ "*/" { return { event: "inline mml", mml: mml.join("") }; }
INLINE_MML_SUB = "*" [^/] { return text(); }
INLINE_ABC= "/*/*" abc:([^*/] / INLINE_MML_SUB / "/")+ "*/*/" { return { event: "inline mml", mml: "/*" + abc.join("") + "*/" }; }
INVERSION_MODE_ROOT_INV=_ "root inv"i [\,\.]? _ { return { event: "change inversion mode to root inv" }; }
INVERSION_MODE_1ST_INV=_ "1st inv"i [\,\.]? _ { return { event: "change inversion mode to 1st inv" }; }
INVERSION_MODE_2ND_INV=_ "2nd inv"i [\,\.]? _ { return { event: "change inversion mode to 2nd inv" }; }
INVERSION_MODE_3RD_INV=_ "3rd inv"i [\,\.]? _ { return { event: "change inversion mode to 3rd inv" }; } // 4和音用
OPEN_HARMONY_MODE_CLOSE=_ ("close harmony"i / "close"i) [\,\.]? _ { return { event: "change open harmony mode to close" }; } // close harmonyは、wikipedia英語版より。open harmonyに寄せた。
OPEN_HARMONY_MODE_DROP2=_ ("drop2"i / "drop-2"i / "open triad"i) [\,\.]? _ { return { event: "change open harmony mode to drop2" }; } // open harmonyは、wikipedia英語版より。open voicingにしないのは、wikipedia英語版でそれが使われていないため。
OPEN_HARMONY_MODE_DROP4=_ ("drop4"i / "drop-4"i) [\,\.]? _ { return { event: "change open harmony mode to drop4" }; } // ハイフンありは、wikipedia英語版より。ハイフン有無どちらもありうるとのこと。
OPEN_HARMONY_MODE_DROP2AND4=_ ("drop2and4"i / "drop-2-and-4"i) [\,\.]? _ { return { event: "change open harmony mode to drop2and4" }; }
BASS_PLAY_MODE_NO_BASS=_ ("no bass"i) [\,\.]? _ { return { event: "change bass play mode to no bass" }; }
BASS_PLAY_MODE_ROOT=_ ("bass is root"i / "bass plays root"i / "bass play root"i) [\,\.]? _ { return { event: "change bass play mode to root" }; }
TEMPO=_ ("BPM"i / "TEMPO"i) _ bpm:[0-9]+ [\,\.]? _ { return { event: "inline mml", mml: "t" + bpm.join("") }; }
BAR=_ "|" _ { return { event: "bar" }; }
BAR_SLASH=_ "/ " _ { return { event: "bar slash" }; }
KEY=_ "key"i [ \=:]? k:KEY_EVENT [\,\.]? _ { return k; }
KEY_EVENT=root:[A-G] sharp:SHARP* flat:FLAT* m:("minor"i / "m")? {
    gKey = getRootCdefgabOffset(root, sharp, flat);
    return { event: "key", root, sharpLength: sharp.length, flatLength: flat.length, offset: gKey }; }

SCALE=_ s:("ionian"i / "dorian"i / "phrygian"i / "lydian"i / "mixolydian"i / "aeolian"i / "locrian"i) [\,\.]? _ { gScale = s.toLowerCase(); return { event: "scale", offsets: getOffsetsByScale(gScale) }; }

OCTAVE_UP=_ ("octave"i [ \-] "up"i) [\,\.]? _ { return { event: "octave up" }; }
OCTAVE_UP_UPPER=_ ("octave"i [ \-] "up"i) "/" [\,\.]? _ { return { event: "octave up upper" }; }
OCTAVE_UP_LOWER=_ "/" ("octave"i [ \-] "up"i) [\,\.]? _ { return { event: "octave up lower" }; }

OCTAVE_DOWN=_ ("octave"i [ \-] "down"i) [\,\.]? _ { return { event: "octave down" }; }
OCTAVE_DOWN_UPPER=_ ("octave"i [ \-] "down"i) "/" [\,\.]? _ { return { event: "octave down upper" }; }
OCTAVE_DOWN_LOWER=_ "/" ("octave"i [ \-] "down"i) [\,\.]? _ { return { event: "octave down lower" }; }

ROOT=ROOT_CDEFGAB
    /ROOT_DEGREE

ROOT_CDEFGAB=root:[A-G] sharp:SHARP* flat:FLAT* { return getRootCdefgabOffset(root, sharp, flat); }

ROOT_DEGREE=sharp:SHARP* flat:FLAT* degree:("VII" / "III" / "VI"/ "IV" / "II" / "V" / "I" / [1-7]) { // 文字数の多い順に並べるのは、そうしないとVIをV Iと認識するので防止用
    // 課題。 getOffsetIonian() と関連関数がやや大規模。当ライブラリの方針的に、AST生成側の分担としては大規模すぎる感触。
    //  対策、このまま進んで様子見する。
    //   根拠、ここでやる理由は、ROOT部分に影響範囲を閉じるため。ここ以外でやると、chord, chord over bass note, などそれぞれのdegree版を作ることになり影響範囲が広いため。
	let offset = getOffsetIonian(degree);
    offset += sharp.length - flat.length + gKey;
    return offset; }

SHARP=[#＃♯] { return "#"; }
FLAT=[b♭] { return "b"; }

CHORD_QUALITY=quality:((QUARTAL_HARMONY / MAJ9 / MIN7 / MAJ7 / MAJ_LONG / MIN_LONG / SEVENTH_SUS4 / SEVENTH_SUS2 / SUS4 / SUS2 / DIM_TRIAD / AUG / THIRTEENTH / ELEVENTH // 2文字以上系
    / NINTH / SEVENTH / SIXTH / MIN_SHORT // 1文字系
    / MAJ_SHORT ) // 0文字系
    (OMIT_N / ADD_N / FLATTED_FIFTH / AUGMENTED_FIFTH)* ) {
    return quality.join(""); }
MAJ_LONG="maj"i { return "maj"; } // LONGとSHORTに分けたのは、文字数の多いものから順に並べ、意図通りにマッチさせる用
MAJ_SHORT=("M" / "") { return "maj"; }
MAJ7=("maj7"i / "M7" / "△") { return "maj7"; }
MAJ9=("maj"i / "M" / "△") "("? "9" ")"? { return "maj7,add9"; } // ast2notes側をシンプルにすることを優先し、ひとまずこれで様子見する
MIN_LONG="min"i { return "min"; }
MIN_SHORT=("m" / "-") { return "min"; }
MIN7=("min7"i / "m7" / "-7") { return "min7"; }
SIXTH="6" { return "6"; }
SEVENTH="7" { return "7"; }
NINTH="9" { return "9"; }
ELEVENTH="11" { return "11"; }
THIRTEENTH="13" { return "13"; }
SUS2="sus2" { return "sus2"; }
SUS4="sus4" { return "sus4"; }
SEVENTH_SUS2="7sus2" { return "7sus2"; }
SEVENTH_SUS4="7sus4" { return "7sus4"; }
DIM_TRIAD="dim" { return "dim triad"; }
AUG="aug" { return "aug"; }
QUARTAL_HARMONY="4." n:[2-9]+ { return text(); } // 四度堆積
FLATTED_FIFTH=("(b5)" / "(-5)") { return ",flatted fifth"; }
AUGMENTED_FIFTH=("(+5)" / "(#5)") { return ",augmented fifth"; }
OMIT_N="("? ("omit" / "o") n:[135] ")"? { return ",omit" + n; }
ADD_N="("? "add" n:[0-9]+ ")"? { return ",add" + n.join(""); }
//今後の仕様検討のため残しておく：
//  CHORD_QUALITY=[A-Za-z0-9△\-]* { return text(); }
//      NGだった。NG事例は「ConC」。「onC」をqualityとして認識してしまうため。
//      ここで必要なのは「onCにはmatchしない」ことである。
//      そこで必要なのは「qualityとして成立するもののみmatchする。それ以外にはmatchしない」ことである。

INVERSION=("^" [0-3])? {
    switch (text()) {
        case "": return null; // inversion modeのままとする用
        case "^0": return "root inv"; // inversion modeで1st～3rdが指定されていたときに、それを打ち消してroot invにする用
        case "^1": return "1st inv";
        case "^2": return "2nd inv";
        case "^3": return "3rd inv";
        default: throw new Error(`ERROR : INVERSION`);
    }
}

OCTAVE_OFFSET=up:"'"* down:","* { return up.length - down.length; } // ABC Notation のoctave offsetと類似の記法とする

_ "whitespace"= WHITE_SPACE*
WHITE_SPACE=[ \t\n\r]
HYPHEN= (" - " / _ [→・] _) // コードのつなぎで書かれることがあり、それを扱える用。ハイフンは前後space必須。でないと C-C が、Cmin Cmaj なのか、Cmaj - Cmaj なのか区別がつかない。
CHORD_SEPARATOR=(HYPHEN / WHITE_SPACE / !.) // !. は end of input

MIDI_PROGRAM_CHANGE= PC000 / PC001 / PC002 / PC003 / PC004 / PC005 / PC006 / PC007 / PC008 / PC009
                /    PC010 / PC011 / PC012 / PC013 / PC014 / PC015 / PC016 / PC017 / PC018 / PC019
                /    PC020 / PC021 / PC022 / PC023 / PC024 / PC025 / PC026 / PC027 / PC028 / PC029
                /    PC030 / PC031 / PC032 / PC033 / PC034 / PC035 / PC036 / PC037 / PC038 / PC039
                /    PC040 / PC041 / PC042 / PC043 / PC044 / PC045 / PC046 / PC047 / PC048 / PC049
                /    PC050 / PC051 / PC052 / PC053 / PC054 / PC055 / PC056 / PC057 / PC058 / PC059
                /    PC060 / PC061 / PC062 / PC063 / PC064 / PC065 / PC066 / PC067 / PC068 / PC069
                /    PC070 / PC071 / PC072 / PC073 / PC074 / PC075 / PC076 / PC077 / PC078 / PC079
                /    PC080 / PC081 / PC082 / PC083 / PC084 / PC085 / PC086 / PC087 / PC088 / PC089
                /    PC090 / PC091 / PC092 / PC093 / PC094 / PC095 / PC096 / PC097 / PC098 / PC099
                /    PC100 / PC101 / PC102 / PC103 / PC104 / PC105 / PC106 / PC107 / PC108 / PC109
                /    PC110 / PC111 / PC112 / PC113 / PC114 / PC115 / PC116 / PC117 / PC118 / PC119
                /    PC120 / PC121 / PC122 / PC123 / PC124 / PC125 / PC126 / PC127

PC000=_ ("Piano"i _ "1" / "Acoustic Grand Piano"i / "Grand Piano"i / "Pf") [\,\.]? _ { return { event: "inline mml", mml: "@000" }; }
PC001=_ ("Piano"i _ "2" / "Bright Acoustic Piano"i)                        [\,\.]? _ { return { event: "inline mml", mml: "@001" }; }
PC002=_ ("Piano"i _ "3" / "Electric Grand Piano"i)                         [\,\.]? _ { return { event: "inline mml", mml: "@002" }; }
PC003=_ ("Honky-tonk"i / "Honky-tonk Piano"i)                         [\,\.]? _ { return { event: "inline mml", mml: "@003" }; }
PC004=_ ("E.Piano"i _ "1" / "Electric Piano 1"i / "Rhodes"i / "Wurlitzer"i)              [\,\.]? _ { return { event: "inline mml", mml: "@004" }; }
PC005=_ ("E.Piano"i _ "2" / "Electric Piano 2"i / "FM piano"i)                           [\,\.]? _ { return { event: "inline mml", mml: "@005" }; }
PC006=_ ("Harpsichord"i)                                              [\,\.]? _ { return { event: "inline mml", mml: "@006" }; }
PC007=_ ("Clav."i / "Clavinet"i)                                                 [\,\.]? _ { return { event: "inline mml", mml: "@007" }; }
PC008=_ ("Celesta"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@008" }; }
PC009=_ ("Glockenspl"i / "Glockenspiel"i)                                             [\,\.]? _ { return { event: "inline mml", mml: "@009" }; }
PC010=_ ("Music Box"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@010" }; }
PC011=_ ("Vibraphone"i)                                               [\,\.]? _ { return { event: "inline mml", mml: "@011" }; }
PC012=_ ("Marimba"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@012" }; }
PC013=_ ("Xylophone"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@013" }; }
PC014=_ ("Tubularbell"i / "Tubular Bells"i)                                            [\,\.]? _ { return { event: "inline mml", mml: "@014" }; }
PC015=_ ("Santur"i / "Dulcimer"i)                                                 [\,\.]? _ { return { event: "inline mml", mml: "@015" }; }
PC016=_ ("Organ"i _ "1" / "Drawbar Organ"i)                                            [\,\.]? _ { return { event: "inline mml", mml: "@016" }; }
PC017=_ ("Organ"i _ "2" / "Percussive Organ"i)                                         [\,\.]? _ { return { event: "inline mml", mml: "@017" }; }
PC018=_ ("Organ"i _ "3" / "Rock Organ"i)                                               [\,\.]? _ { return { event: "inline mml", mml: "@018" }; }
PC019=_ ("Church Org"i _ [1-3] / "Church Organ"i)                                             [\,\.]? _ { return { event: "inline mml", mml: "@019" }; }
PC020=_ ("Reed Organ"i)                                               [\,\.]? _ { return { event: "inline mml", mml: "@020" }; }
PC021=_ ("Accordion"i _ [Fl] / "Accordion"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@021" }; }
PC022=_ ("Harmonica"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@022" }; }
PC023=_ ("Bandoneon"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@023" }; }
PC024=_ ("Nylon Gt."i / "Acoustic Guitar (nylon)"i)                                  [\,\.]? _ { return { event: "inline mml", mml: "@024" }; }
PC025=_ ("Steel Gt."i / "Acoustic Guitar (steel)"i)                                  [\,\.]? _ { return { event: "inline mml", mml: "@025" }; }
PC026=_ ("Jazz Gt."i / "Electric Guitar (jazz)"i)                                   [\,\.]? _ { return { event: "inline mml", mml: "@026" }; }
PC027=_ ("Clean Gt."i / "Electric Guitar (clean)"i)                                  [\,\.]? _ { return { event: "inline mml", mml: "@027" }; }
PC028=_ ("Muted Gt."i / "Electric Guitar (muted)"i)                                  [\,\.]? _ { return { event: "inline mml", mml: "@028" }; }
PC029=_ ("Overdrive"i _ "Gt"i / "Electric Guitar (overdrive)"i)                              [\,\.]? _ { return { event: "inline mml", mml: "@029" }; }
PC030=_ (("Dist."i / "Distortion"i) ("Gt."i / "Gt"i) / "Electric Guitar (distortion)"i) [\,\.]? _ { return { event: "inline mml", mml: "@030" }; }
PC031=_ ("Gt.Harmonix"i / "Gt.Harmonics"i / "Electric Guitar (harmonics)"i) [\,\.]? _ { return { event: "inline mml", mml: "@031" }; }

PC032=_ ("Acoustic Bass"i)                                            [\,\.]? _ { return { event: "inline mml", mml: "@032" }; }
PC033=_ ("Electric Bass (finger)"i)                                   [\,\.]? _ { return { event: "inline mml", mml: "@033" }; }
PC034=_ ("Electric Bass (picked)"i)                                   [\,\.]? _ { return { event: "inline mml", mml: "@034" }; }
PC035=_ ("Electric Bass (fretless)"i)                                 [\,\.]? _ { return { event: "inline mml", mml: "@035" }; }
PC036=_ ("Slap Bass 1"i)                                              [\,\.]? _ { return { event: "inline mml", mml: "@036" }; }
PC037=_ ("Slap Bass 2"i)                                              [\,\.]? _ { return { event: "inline mml", mml: "@037" }; }
PC038=_ ("Synth Bass 1"i)                                             [\,\.]? _ { return { event: "inline mml", mml: "@038" }; }
PC039=_ ("Synth Bass 2"i)                                             [\,\.]? _ { return { event: "inline mml", mml: "@039" }; }
PC040=_ ("Violin"i)                                                   [\,\.]? _ { return { event: "inline mml", mml: "@040" }; }
PC041=_ ("Viola"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@041" }; }
PC042=_ ("Cello"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@042" }; }
PC043=_ ("Contrabass"i)                                               [\,\.]? _ { return { event: "inline mml", mml: "@043" }; }
PC044=_ ("Tremolo Strings"i)                                          [\,\.]? _ { return { event: "inline mml", mml: "@044" }; }
PC045=_ ("Pizzicato Strings"i)                                        [\,\.]? _ { return { event: "inline mml", mml: "@045" }; }
PC046=_ ("Orchestral Harp"i)                                          [\,\.]? _ { return { event: "inline mml", mml: "@046" }; }
PC047=_ ("Timpani"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@047" }; }
PC048=_ ("Strings"i _ "Ensemble"i _ "1" / "Strings"i _ "1" / "Str."i _ "1") [\,\.]? _ { return { event: "inline mml", mml: "@48" }; }
PC049=_ ("Strings"i _ "Ensemble"i _ "2" / "Strings"i _ "2" / "Str."i _ "2") [\,\.]? _ { return { event: "inline mml", mml: "@49" }; }
PC050=_ ("Synth Strings 1"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@050" }; }
PC051=_ ("Synth Strings 2"i)                                                [\,\.]? _ { return { event: "inline mml", mml: "@051" }; }
PC052=_ ("Voice Aahs"i / "Choir Aahs"i / "Choir"i / "Chor."i)               [\,\.]? _ { return { event: "inline mml", mml: "@52" }; }
PC053=_ ("Voice Oohs"i)                                                     [\,\.]? _ { return { event: "inline mml", mml: "@053" }; }
PC054=_ ("Synth Voice"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@054" }; }
PC055=_ ("Orchestra Hit"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@055" }; }
PC056=_ ("Trumpet"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@056" }; }
PC057=_ ("Trombone"i)                                                       [\,\.]? _ { return { event: "inline mml", mml: "@057" }; }
PC058=_ ("Tuba"i)                                                           [\,\.]? _ { return { event: "inline mml", mml: "@058" }; }
PC059=_ ("Muted Trumpet"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@059" }; }
PC060=_ ("French Horn"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@060" }; }
PC061=_ ("Brass Section"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@061" }; }
PC062=_ ("Synth Brass 1"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@062" }; }
PC063=_ ("Synth Brass 2"i)                                                  [\,\.]? _ { return { event: "inline mml", mml: "@063" }; }
PC064=_ ("Soprano Sax"i)                                                    [\,\.]? _ { return { event: "inline mml", mml: "@064" }; }
PC065=_ ("Alto Sax"i)                                                       [\,\.]? _ { return { event: "inline mml", mml: "@065" }; }
PC066=_ ("Tenor Sax"i)                                                      [\,\.]? _ { return { event: "inline mml", mml: "@066" }; }
PC067=_ ("Baritone Sax"i)                                                   [\,\.]? _ { return { event: "inline mml", mml: "@067" }; }
PC068=_ ("Oboe"i)                                                           [\,\.]? _ { return { event: "inline mml", mml: "@068" }; }
PC069=_ ("English Horn"i)                                                   [\,\.]? _ { return { event: "inline mml", mml: "@069" }; }
PC070=_ ("Bassoon"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@070" }; }
PC071=_ ("Clarinet"i)                                                       [\,\.]? _ { return { event: "inline mml", mml: "@071" }; }
PC072=_ ("Piccolo"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@072" }; }
PC073=_ ("Flute"i)                                                          [\,\.]? _ { return { event: "inline mml", mml: "@073" }; }
PC074=_ ("Recorder"i)                                                       [\,\.]? _ { return { event: "inline mml", mml: "@074" }; }
PC075=_ ("Pan Flute"i)                                                      [\,\.]? _ { return { event: "inline mml", mml: "@075" }; }
PC076=_ ("Blown bottle"i)                                                   [\,\.]? _ { return { event: "inline mml", mml: "@076" }; }
PC077=_ ("Shakuhachi"i)                                                     [\,\.]? _ { return { event: "inline mml", mml: "@077" }; }
PC078=_ ("Whistle"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@078" }; }
PC079=_ ("Ocarina"i)                                                        [\,\.]? _ { return { event: "inline mml", mml: "@079" }; }

PC080=_ ("Lead"i _ "1" / "Square"i)         [\,\.]? _ { return { event: "inline mml", mml: "@080" }; }
PC081=_ ("Lead"i _ "2" / "Sawtooth"i)       [\,\.]? _ { return { event: "inline mml", mml: "@081" }; }
PC082=_ ("Lead"i _ "3" / "Calliope"i)       [\,\.]? _ { return { event: "inline mml", mml: "@082" }; }
PC083=_ ("Lead"i _ "4" / "Chiff"i)          [\,\.]? _ { return { event: "inline mml", mml: "@083" }; }
PC084=_ ("Lead"i _ "5" / "Charang"i)        [\,\.]? _ { return { event: "inline mml", mml: "@084" }; }
PC085=_ ("Lead"i _ "6" / "Voice"i)          [\,\.]? _ { return { event: "inline mml", mml: "@085" }; }
PC086=_ ("Lead"i _ "7" / "Fifths"i)         [\,\.]? _ { return { event: "inline mml", mml: "@086" }; }
PC087=_ ("Lead"i _ "8" / "Bass and lead"i)  [\,\.]? _ { return { event: "inline mml", mml: "@087" }; }

PC088=_ ("Pad"i  _ "1" / "New age"i)        [\,\.]? _ { return { event: "inline mml", mml: "@088" }; }
PC089=_ ("Pad"i  _ "2" / "Warm"i)           [\,\.]? _ { return { event: "inline mml", mml: "@089" }; }
PC090=_ ("Pad"i  _ "3" / "Polysynth"i)      [\,\.]? _ { return { event: "inline mml", mml: "@090" }; }
PC091=_ ("Pad"i  _ "4" / "Choir"i)          [\,\.]? _ { return { event: "inline mml", mml: "@091" }; }
PC092=_ ("Pad"i  _ "5" / "Bowed glass"i)    [\,\.]? _ { return { event: "inline mml", mml: "@092" }; }
PC093=_ ("Pad"i  _ "6" / "Metallic"i)       [\,\.]? _ { return { event: "inline mml", mml: "@093" }; }
PC094=_ ("Pad"i  _ "7" / "Halo"i)           [\,\.]? _ { return { event: "inline mml", mml: "@094" }; }
PC095=_ ("Pad"i  _ "8" / "Sweep"i)          [\,\.]? _ { return { event: "inline mml", mml: "@095" }; }

PC096=_ ("FX"i   _ "1" / "Rain"i)           [\,\.]? _ { return { event: "inline mml", mml: "@096" }; }
PC097=_ ("FX"i   _ "2" / "Soundtrack"i)     [\,\.]? _ { return { event: "inline mml", mml: "@097" }; }
PC098=_ ("FX"i   _ "3" / "Crystal"i)        [\,\.]? _ { return { event: "inline mml", mml: "@098" }; }
PC099=_ ("FX"i   _ "4" / "Atmosphere"i)     [\,\.]? _ { return { event: "inline mml", mml: "@099" }; }
PC100=_ ("FX"i   _ "5" / "Brightness"i)     [\,\.]? _ { return { event: "inline mml", mml: "@100" }; }
PC101=_ ("FX"i   _ "6" / "Goblins"i)        [\,\.]? _ { return { event: "inline mml", mml: "@101" }; }
PC102=_ ("FX"i   _ "7" / "Echoes"i)         [\,\.]? _ { return { event: "inline mml", mml: "@102" }; }
PC103=_ ("FX"i   _ "8" / "Sci-fi"i)         [\,\.]? _ { return { event: "inline mml", mml: "@103" }; }

PC104=_ ("Sitar"i)                          [\,\.]? _ { return { event: "inline mml", mml: "@104" }; }
PC105=_ ("Banjo"i)                          [\,\.]? _ { return { event: "inline mml", mml: "@105" }; }
PC106=_ ("Shamisen"i)                       [\,\.]? _ { return { event: "inline mml", mml: "@106" }; }
PC107=_ ("Koto"i)                           [\,\.]? _ { return { event: "inline mml", mml: "@107" }; }
PC108=_ ("Kalimba"i)                        [\,\.]? _ { return { event: "inline mml", mml: "@108" }; }
PC109=_ ("Bag pipe"i)                       [\,\.]? _ { return { event: "inline mml", mml: "@109" }; }
PC110=_ ("Fiddle"i)                         [\,\.]? _ { return { event: "inline mml", mml: "@110" }; }
PC111=_ ("Shanai"i)                         [\,\.]? _ { return { event: "inline mml", mml: "@111" }; }
PC112=_ ("Tinkle Bell"i)                    [\,\.]? _ { return { event: "inline mml", mml: "@112" }; }
PC113=_ ("Agogo"i)                          [\,\.]? _ { return { event: "inline mml", mml: "@113" }; }
PC114=_ ("Steel Drums"i)                    [\,\.]? _ { return { event: "inline mml", mml: "@114" }; }
PC115=_ ("Woodblock"i)                      [\,\.]? _ { return { event: "inline mml", mml: "@115" }; }
PC116=_ ("Taiko"i)                          [\,\.]? _ { return { event: "inline mml", mml: "@116" }; }
PC117=_ ("Melodic Tom"i)                    [\,\.]? _ { return { event: "inline mml", mml: "@117" }; }
PC118=_ ("Synth Drum"i)                     [\,\.]? _ { return { event: "inline mml", mml: "@118" }; }
PC119=_ ("Reverse Cymbal"i)                 [\,\.]? _ { return { event: "inline mml", mml: "@119" }; }
PC120=_ ("Guitar Fret Noise"i)              [\,\.]? _ { return { event: "inline mml", mml: "@120" }; }
PC121=_ ("Breath Noise"i)                   [\,\.]? _ { return { event: "inline mml", mml: "@121" }; }
PC122=_ ("Seashore"i)                       [\,\.]? _ { return { event: "inline mml", mml: "@122" }; }
PC123=_ ("Bird Tweet"i)                     [\,\.]? _ { return { event: "inline mml", mml: "@123" }; }
PC124=_ ("Telephone Ring"i)                 [\,\.]? _ { return { event: "inline mml", mml: "@124" }; }
PC125=_ ("Helicopter"i)                     [\,\.]? _ { return { event: "inline mml", mml: "@125" }; }
PC126=_ ("Applause"i)                       [\,\.]? _ { return { event: "inline mml", mml: "@126" }; }
PC127=_ ("Gunshot"i)                        [\,\.]? _ { return { event: "inline mml", mml: "@127" }; }

{% endraw %}
```

## 最近の変更（過去7日間）
### コミット履歴:
d435a4c #4
fdaaa5b Add current situation section to issue notes #4
d027b4c Fix typo in issue notes for issue #4
5688d67 #4 Enhance issue notes with analysis and solutions
a855829 Add issue note for #4
26906ab Update project summaries (overview & development status) [auto]
7697ed1 Google検索にindexさせる用
b414132 Google検索にindexさせる用

### 変更されたファイル:
_config.yml
generated-docs/development-status-generated-prompt.md
generated-docs/development-status.md
generated-docs/project-overview-generated-prompt.md
generated-docs/project-overview.md
issue-notes/4.md


---
Generated at: 2025-12-03 07:08:17 JST
