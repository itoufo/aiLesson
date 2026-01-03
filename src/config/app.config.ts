/**
 * アプリケーション設定
 */
export const AppConfig = {
  // アプリケーション基本情報
  app: {
    name: 'Knowledge Framework',
    version: '1.0.0',
    description: 'Markdown駆動の高速ナレッジ共有システム',
  },

  // パス設定
  paths: {
    docs: '/docs',           // Markdownドキュメントのパス
    quizzes: '/quizzes',     // クイズJSONファイルのパス
    images: '/docs/images',  // 画像ファイルのパス
  },

  // クイズ設定
  quiz: {
    passThreshold: 80,       // 合格ライン（%）
    enableCache: true,       // クイズのキャッシュを有効化
    showExplanation: true,   // 解説を表示
  },

  // 進捗管理設定
  progress: {
    storageKey: 'ai-school-progress',
    statsKey: 'ai-school-stats',
    autoSave: true,
  },

  // ノート設定
  notes: {
    storageKey: 'ai-school-notes',
    bookmarksKey: 'ai-school-bookmarks',
    maxNoteLength: 5000,     // ノートの最大文字数
  },

  // UI設定
  ui: {
    sidebarWidth: 280,       // サイドバーの幅（px）
    enableAnimations: true,  // アニメーションを有効化
    theme: 'light',         // テーマ（light/dark）
  },
};