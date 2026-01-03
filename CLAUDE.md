# Claude Code Configuration
**AI School Knowledge Framework - Claude Code専用ガイド**

## 📋 プロジェクト概要
このプロジェクトは、Markdown駆動の高速ナレッジ共有システムです。
React + Vite + TypeScriptで構築され、静的コンテンツとして配信可能です。

## 🎯 主要機能
- Markdownファイルベースのコンテンツ管理
- 段階的学習カリキュラム
- インタラクティブなクイズシステム
- 自動ナビゲーション生成

## 🛠 開発環境コマンド

### 基本コマンド
```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# リント実行
npm run lint
```

## 📁 プロジェクト構造

```
.
├── docs/                    # Markdownコンテンツ
│   ├── 00_カリキュラム概要.md
│   ├── 01_入門/            # 第1段階
│   ├── 02_応用/            # 第2段階
│   ├── 03_発展/            # 第3段階
│   ├── assessment/         # 評価基準
│   └── worksheets/         # 演習問題
├── src/
│   ├── components/         # UIコンポーネント
│   │   ├── Layout.tsx      # メインレイアウト
│   │   ├── Sidebar.tsx     # サイドバーナビゲーション
│   │   ├── MarkdownViewer.tsx # MD表示コンポーネント
│   │   ├── QuizModal.tsx   # クイズモーダル
│   │   └── QuizPlayer.tsx  # クイズプレイヤー
│   ├── data/
│   │   ├── curriculum.ts   # カリキュラム定義
│   │   └── quizData.ts     # クイズデータ
│   ├── pages/
│   │   ├── HomePage.tsx    # ホームページ
│   │   └── DocPage.tsx     # ドキュメントページ
│   └── App.tsx             # ルーティング設定
└── public/                 # 静的アセット
```

## 🔑 重要ファイル

### カリキュラム定義 (`src/data/curriculum.ts`)
- すべてのドキュメントのメタデータを管理
- セクション構造とナビゲーション順序を定義
- 新しいコンテンツ追加時はここを編集

### クイズデータ (`src/data/quizData.ts`)
- 各章に対応するクイズ問題を定義
- docId でドキュメントと紐付け

## 📝 新しいコンテンツの追加方法

### 1. Markdownファイルの作成
```bash
# 新しいMarkdownファイルを適切なフォルダに作成
docs/01_入門/06_新しいトピック.md
```

### 2. カリキュラムへの登録
```typescript
// src/data/curriculum.ts に追加
{
  id: 'new-topic',
  title: '6. 新しいトピック',
  path: '/docs/01_入門/06_新しいトピック.md'
}
```

### 3. クイズの追加（オプション）
```typescript
// src/data/quizData.ts に追加
{
  docId: 'new-topic',
  questions: [
    {
      question: '質問文',
      options: ['選択肢A', '選択肢B', '選択肢C', '選択肢D'],
      correctAnswer: 0
    }
  ]
}
```

## 🎨 スタイルカスタマイズ

### カラーテーマ変更
`src/index.css` の CSS変数を編集:
```css
:root {
  --primary-color: #2563eb;  /* メインカラー */
  --sidebar-bg: #1e293b;      /* サイドバー背景 */
  --content-bg: #ffffff;      /* コンテンツ背景 */
}
```

### レイアウト調整
- サイドバー幅: `src/components/Layout.css`
- コンテンツ幅: `src/components/MarkdownViewer.css`

## 🚀 デプロイ準備

### ビルド実行
```bash
npm run build
```

### 生成物
- `dist/` フォルダに静的ファイルが生成
- そのまま静的ホスティングサービスにデプロイ可能

## ⚡ パフォーマンス最適化

### 推奨事項
1. Markdownファイルは2MB以下に保つ
2. 画像は適切に圧縮（WebP推奨）
3. 大きなコンテンツは分割を検討

## 🔍 トラブルシューティング

### よくある問題と解決方法

#### Markdownが表示されない
- `public/docs/` 内にファイルが存在するか確認
- パスが正しいか確認（先頭の `/` を忘れずに）

#### ナビゲーションが更新されない
- `src/data/curriculum.ts` を保存したか確認
- 開発サーバーを再起動してみる

#### ビルドエラー
- TypeScriptの型エラーがないか確認
- 依存関係をクリーンインストール:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

## 📚 技術スタック詳細

- **React**: 19.2.0
- **TypeScript**: 5.9.3
- **Vite**: 7.2.4
- **React Router**: 7.11.0
- **React Markdown**: 10.1.0
- **remark-gfm**: 4.0.1

## 💡 Claude Code での作業のコツ

### 効率的な編集
1. 複数のMarkdownファイルを一括編集する場合は、`curriculum.ts` を先に更新
2. スタイル変更は開発サーバーでリアルタイム確認
3. クイズ追加時は、まずドキュメントIDの一致を確認

### 推奨ワークフロー
1. `npm run dev` で開発サーバー起動
2. 変更をリアルタイムで確認しながら編集
3. `npm run build` でビルド確認
4. `npm run preview` で本番環境相当の動作確認

## 📊 データ永続化とスキーマ管理

### LocalStorageスキーマ
**重要**: データ構造を変更する際は必ず以下のドキュメントを更新すること

- **スキーマ定義書**: `docs/LOCALSTORAGE_SCHEMA.md`
  - すべてのLocalStorageキーと構造を定義
  - 将来の拡張計画も記載
  - マイグレーション戦略を含む

### 現在のデータ構造の概要
- `ai-school-progress`: クイズ合格ベースの進捗管理
- `ai-school-stats`: 学習統計（時間、連続日数など）
- `ai-school-notes`: ユーザーのメモとハイライト
- `ai-school-bookmarks`: ブックマークと関連メモ

## 🔄 更新履歴
- 復習クイズシステム実装
- HAIIAロゴ追加
- カリキュラム構造の最適化
- 進捗管理システム実装（クイズ合格ベース）
- ノート・ブックマーク機能追加
- LocalStorageスキーマ設計書作成

## 📞 サポート
問題が発生した場合は、以下を確認してください：
1. このドキュメントのトラブルシューティング
2. `FRAMEWORK_GUIDE.md` の詳細ガイド
3. package.json のスクリプト定義