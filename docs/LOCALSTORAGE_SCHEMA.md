# LocalStorage スキーマ設計書
**AI School Knowledge Framework - データ永続化仕様**

## 📊 概要
本システムでは、ユーザーの学習データをブラウザのLocalStorageに保存し、永続化を実現しています。
以下、各機能で使用するLocalStorageのキーとデータ構造を定義します。

## 🗄️ LocalStorage キー一覧

| キー名 | 用途 | データ型 | 実装状況 |
|--------|------|----------|----------|
| `ai-school-progress` | 学習進捗データ | Object | ✅ 実装済 |
| `ai-school-stats` | 学習統計データ | Object | ✅ 実装済 |
| `ai-school-notes` | ノートデータ | Object | ✅ 実装済 |
| `ai-school-bookmarks` | ブックマークデータ | Object | ✅ 実装済 |

## 📝 詳細スキーマ定義

### 1. 学習進捗データ (`ai-school-progress`)
```typescript
{
  [chapterId: string]: {
    chapterId: string;           // 章ID
    completed: boolean;          // 完了フラグ（クイズ合格で true）
    completedAt?: string;        // 完了日時 (ISO 8601)
    timeSpent: number;          // 学習時間（秒）
    lastVisited?: string;       // 最終アクセス日時 (ISO 8601)
    quizPassed: boolean;        // クイズ合格フラグ
    quizScore?: number;         // クイズスコア（0-100）
    quizAttempts?: number;      // クイズ挑戦回数
  }
}
```

### 2. 学習統計データ (`ai-school-stats`)
```typescript
{
  totalChapters: number;        // 総章数
  completedChapters: number;    // 完了章数（クイズ合格ベース）
  totalTimeSpent: number;       // 総学習時間（秒）
  currentStreak: number;        // 現在の連続学習日数
  longestStreak: number;        // 最長連続学習日数
  lastActivityDate?: string;    // 最終活動日 (ISO 8601)
}
```

### 3. ノートデータ (`ai-school-notes`)
```typescript
{
  [noteId: string]: {
    id: string;                 // ノートID (UUID形式)
    chapterId: string;          // 章ID
    content: string;            // ノート内容
    createdAt: string;          // 作成日時 (ISO 8601)
    updatedAt: string;          // 更新日時 (ISO 8601)
    tags: string[];             // タグリスト
    highlight?: {               // ハイライト情報（オプション）
      text: string;             // ハイライトされたテキスト
      position: number;         // テキスト内の位置
    };
  }
}
```

### 4. ブックマークデータ (`ai-school-bookmarks`)
```typescript
{
  [bookmarkId: string]: {
    id: string;                 // ブックマークID (UUID形式)
    chapterId: string;          // 章ID
    title: string;              // 章タイトル
    createdAt: string;          // 作成日時 (ISO 8601)
    scrollPosition?: number;    // スクロール位置（ピクセル）
    note?: string;              // メモ（オプション）
  }
}
```