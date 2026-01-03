# 問題機能仕様書

## 概要

各章に復習問題を設定できる選択問題機能。問題はJSON形式で定義し、章ページの下部に「復習問題」ボタンとして表示される。

## JSONフォーマット仕様

### Quiz（問題セット）

```typescript
interface Quiz {
  id: string;           // 問題セットの一意識別子（例: "quiz-ai-literacy"）
  chapterId: string;    // 対応する章のID（curriculum.tsのDocItem.idと対応）
  title: string;        // 問題セットのタイトル
  description?: string; // 説明文（省略可）
  questions: Question[]; // 問題の配列
}
```

### Question（問題）

```typescript
interface Question {
  id: string;           // 問題ID（例: "q1", "q2"）
  type: "single" | "multiple"; // 単一選択 or 複数選択
  question: string;     // 問題文
  options: Option[];    // 選択肢の配列
  explanation?: string; // 解説（回答後に表示、省略可）
}
```

### Option（選択肢）

```typescript
interface Option {
  id: string;        // 選択肢ID（例: "a", "b", "c", "d"）
  text: string;      // 選択肢のテキスト
  isCorrect: boolean; // 正解かどうか
}
```

## サンプルJSON

```json
{
  "id": "quiz-ai-literacy",
  "chapterId": "ai-literacy",
  "title": "AIリテラシー入門 復習問題",
  "description": "AIの基本概念に関する理解度を確認しましょう。",
  "questions": [
    {
      "id": "q1",
      "type": "single",
      "question": "AIの正式名称として正しいものはどれですか？",
      "options": [
        { "id": "a", "text": "Automatic Intelligence", "isCorrect": false },
        { "id": "b", "text": "Artificial Intelligence", "isCorrect": true },
        { "id": "c", "text": "Advanced Intelligence", "isCorrect": false },
        { "id": "d", "text": "Applied Intelligence", "isCorrect": false }
      ],
      "explanation": "AIはArtificial Intelligence（人工知能）の略称です。"
    },
    {
      "id": "q2",
      "type": "multiple",
      "question": "AIの主な応用分野として適切なものを全て選んでください。",
      "options": [
        { "id": "a", "text": "画像認識", "isCorrect": true },
        { "id": "b", "text": "自然言語処理", "isCorrect": true },
        { "id": "c", "text": "音声認識", "isCorrect": true },
        { "id": "d", "text": "推薦システム", "isCorrect": true }
      ],
      "explanation": "AIは画像認識、自然言語処理、音声認識、推薦システムなど幅広い分野で活用されています。"
    }
  ]
}
```

## ファイル構成

```
src/
├── data/
│   ├── quiz.types.ts   # 型定義
│   └── quizzes.ts      # 問題データ & ヘルパー関数
├── components/
│   ├── QuizPlayer.tsx  # 問題エミュレーター本体
│   ├── QuizPlayer.css
│   ├── QuizModal.tsx   # モーダル表示用
│   └── QuizModal.css
└── pages/
    ├── DocPage.tsx     # 章ページ（問題ボタン追加済み）
    └── DocPage.css
```

## 問題の追加方法

1. `src/data/quizzes.ts` を開く
2. `quizzes` 配列に新しい `Quiz` オブジェクトを追加

```typescript
// 例：新しい章の問題を追加
{
  id: 'quiz-your-chapter',
  chapterId: 'your-chapter-id', // curriculum.tsのDocItem.idと一致させる
  title: 'あなたの章 復習問題',
  description: '説明文',
  questions: [
    {
      id: 'q1',
      type: 'single',
      question: '問題文',
      options: [
        { id: 'a', text: '選択肢A', isCorrect: false },
        { id: 'b', text: '選択肢B', isCorrect: true },
        { id: 'c', text: '選択肢C', isCorrect: false },
        { id: 'd', text: '選択肢D', isCorrect: false },
      ],
      explanation: '解説テキスト',
    },
    // 追加の問題...
  ],
}
```

## 対応済み章一覧

### 第1段階：入門
| chapterId | 章タイトル | 問題数 |
|-----------|-----------|--------|
| ai-literacy | AIリテラシー入門 | 3問 |
| generative-ai | 生成AIの仕組み | 3問 |
| ai-ethics | AI倫理と安全性 | 3問 |
| prompt-basics | プロンプト基礎 | 3問 |
| ai-practice | AI活用演習 | 3問 |

### 第2段階：応用
| chapterId | 章タイトル | 問題数 |
|-----------|-----------|--------|
| cot | Chain-of-Thought手法 | 3問 |
| info-organization | 情報整理と論理的表現 | 3問 |
| project-management | プロジェクト管理とAI | 3問 |
| automation | 業務自動化ツール | 3問 |
| business-problem | ビジネス課題解決 | 3問 |

### 第3段階：発展
| chapterId | 章タイトル | 問題数 |
|-----------|-----------|--------|
| paic | P-A-I-Cサイクル | 3問 |
| pbl | PBLプロジェクト設計 | 3問 |
| portfolio | ポートフォリオ作成 | 3問 |
| ethics-week | AI倫理週間 | 3問 |
| self-coaching | セルフコーチング | 3問 |

## 機能説明

### 問題タイプ

- **single**: 単一選択（1つだけ選択可能）
- **multiple**: 複数選択（複数選択可能）

### UI機能

1. **章ページ下部**: 問題がある章には「復習問題」セクションが表示
2. **問題プレイヤー**: モーダルで問題を1問ずつ表示
3. **回答フィードバック**: 正解/不正解をビジュアルで表示
4. **解説表示**: 回答後に解説を表示
5. **結果画面**: 全問終了後にスコアを表示
6. **リトライ機能**: 「もう一度挑戦」ボタン

### 合格・不合格システム

- **合格ライン**: 80%以上
- **合格時**: 「次の章へ進む」ボタンが表示され、次の章に遷移可能
- **不合格時**: 「もう一度挑戦」ボタンで再チャレンジ

### MDファイルからの移行

- MDファイル内の「## 確認クイズ」セクションは削除済み
- 全ての問題は `src/data/quizzes.ts` で一元管理
