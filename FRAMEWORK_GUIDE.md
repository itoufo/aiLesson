# AI School Knowledge Framework
**シンプルで高速なナレッジ共有システム**

## 🎯 フレームワークの特徴
- **Markdown駆動**: すべてのコンテンツをMarkdownで管理
- **自動ルーティング**: ファイルパスベースの動的ルート生成
- **高速配信**: Vite + React によるビルド済み静的配信
- **段階的学習**: 構造化されたカリキュラムデータ管理
- **インタラクティブ**: クイズシステムによる理解度確認

## 📁 推奨ディレクトリ構造

```
project/
├── docs/                    # ナレッジコンテンツ
│   ├── 00_概要/            # 概要・導入
│   ├── 01_基礎/            # 基礎コンテンツ
│   ├── 02_応用/            # 応用コンテンツ
│   ├── 03_発展/            # 発展コンテンツ
│   └── assets/             # 画像・リソース
├── src/
│   ├── components/         # UIコンポーネント
│   │   ├── Layout.tsx      # レイアウト管理
│   │   ├── Sidebar.tsx     # ナビゲーション
│   │   └── MarkdownViewer.tsx # コンテンツ表示
│   ├── data/
│   │   ├── curriculum.ts   # カリキュラム定義
│   │   └── quizData.ts     # クイズデータ
│   └── pages/              # ページコンポーネント
└── public/                 # 静的アセット
```

## 🔧 コア技術スタック

### 必須
- **React 19.x**: UIフレームワーク
- **TypeScript**: 型安全性
- **Vite**: 高速ビルドツール
- **React Router**: ルーティング
- **React Markdown**: Markdown解析
- **remark-gfm**: GFM拡張サポート

### package.json テンプレート
```json
{
  "name": "knowledge-framework",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-markdown": "^10.1.0",
    "react-router-dom": "^7.11.0",
    "remark-gfm": "^4.0.1"
  },
  "devDependencies": {
    "@types/react": "^19.2.5",
    "@vitejs/plugin-react": "^5.1.1",
    "typescript": "~5.9.3",
    "vite": "^7.2.4"
  }
}
```

## 📝 カリキュラム定義フォーマット

```typescript
// src/data/curriculum.ts
export interface DocItem {
  id: string;        // 一意識別子
  title: string;     // 表示タイトル
  path: string;      // MDファイルパス
}

export interface Section {
  id: string;        // セクションID
  title: string;     // セクションタイトル
  items: DocItem[];  // ドキュメントリスト
}

export const curriculum: Section[] = [
  {
    id: 'intro',
    title: '導入',
    items: [
      { id: 'overview', title: '概要', path: '/docs/00_導入/概要.md' }
    ]
  }
  // 他のセクション...
];
```

## 🎨 UIコンポーネント

### MarkdownViewer
動的にMarkdownファイルを読み込み表示
```typescript
interface MarkdownViewerProps {
  filePath: string;   // MDファイルパス
  title?: string;     // オプショナルタイトル
}
```

### Sidebar
カリキュラム構造に基づく自動ナビゲーション生成
- アクティブ状態の自動追跡
- 折りたたみ可能なセクション
- プログレス表示（オプション）

### QuizModal
理解度確認用のインタラクティブクイズ
- JSONベースの問題定義
- 即座のフィードバック
- 進捗トラッキング

## 🚀 セットアップ手順

### 1. プロジェクト初期化
```bash
npm create vite@latest my-knowledge-base -- --template react-ts
cd my-knowledge-base
npm install react-router-dom react-markdown remark-gfm
```

### 2. 基本構造の配置
1. `docs/` ディレクトリにMarkdownファイルを配置
2. `src/data/curriculum.ts` でカリキュラムを定義
3. コンポーネントをコピー・カスタマイズ

### 3. ビルド・デプロイ
```bash
npm run build
# dist/ フォルダが生成される
```

## 📖 コンテンツ作成ガイドライン

### Markdownファイル構造
```markdown
# タイトル

## 学習目標
- 目標1
- 目標2

## 内容
詳細な説明...

### サブセクション
内容...

## まとめ
- ポイント1
- ポイント2
```

### 命名規則
- ファイル名: `XX_カテゴリ名.md` (番号付き)
- フォルダ名: `XX_ステージ名/`
- アセット: `assets/images/topic-name.png`

## 🔄 カスタマイズポイント

### テーマカラー変更
```css
/* src/index.css */
:root {
  --primary-color: #2563eb;
  --sidebar-bg: #1e293b;
  --content-bg: #ffffff;
}
```

### レイアウト調整
- `Layout.tsx`: 全体レイアウト
- `Sidebar.tsx`: サイドバー幅・位置
- `MarkdownViewer.css`: コンテンツスタイル

### 機能拡張例
- 検索機能の追加
- ブックマーク機能
- 進捗保存（LocalStorage）
- PDFエクスポート
- 多言語対応

## 💡 ベストプラクティス

### パフォーマンス
- Markdownファイルは2MB以下に
- 画像は適切に圧縮
- 遅延読み込みの活用

### アクセシビリティ
- 適切な見出し構造
- altテキストの提供
- キーボードナビゲーション対応

### メンテナンス
- カリキュラムデータの一元管理
- コンポーネントの単一責任原則
- 型定義の厳密化

## 🛠 トラブルシューティング

### よくある問題
1. **Markdownが表示されない**
   - パスの確認
   - publicフォルダ内の配置確認
   - ビルド後のdistフォルダ構造確認

2. **ルーティングが動作しない**
   - BrowserRouterの設定確認
   - ベースパスの設定

3. **スタイルが適用されない**
   - CSSインポート確認
   - クラス名の競合チェック

## 📚 参考リソース
- [Vite公式ドキュメント](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)