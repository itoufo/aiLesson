export interface DocItem {
  id: string;
  title: string;
  path: string;
}

export interface Section {
  id: string;
  title: string;
  items: DocItem[];
}

export const curriculum: Section[] = [
  {
    id: 'overview',
    title: 'カリキュラム概要',
    items: [
      { id: 'curriculum-overview', title: 'カリキュラム概要', path: '/docs/00_カリキュラム概要.md' },
    ],
  },
  {
    id: 'stage1',
    title: '第1段階：入門',
    items: [
      { id: 'ai-literacy', title: '1. AIリテラシー入門', path: '/docs/01_入門/01_AIリテラシー入門.md' },
      { id: 'generative-ai', title: '2. 生成AIの仕組み', path: '/docs/01_入門/02_生成AIの仕組み.md' },
      { id: 'ai-ethics', title: '3. AI倫理と安全性', path: '/docs/01_入門/03_AI倫理と安全性.md' },
      { id: 'prompt-basics', title: '4. プロンプト基礎', path: '/docs/01_入門/04_プロンプト基礎.md' },
      { id: 'ai-practice', title: '5. AI活用演習', path: '/docs/01_入門/05_AI活用演習.md' },
    ],
  },
  {
    id: 'stage2',
    title: '第2段階：応用',
    items: [
      { id: 'cot', title: '1. Chain-of-Thought手法', path: '/docs/02_応用/01_Chain-of-Thought手法.md' },
      { id: 'info-organization', title: '2. 情報整理と論理的表現', path: '/docs/02_応用/02_情報整理と論理的表現.md' },
      { id: 'project-management', title: '3. プロジェクト管理とAI', path: '/docs/02_応用/03_プロジェクト管理とAI.md' },
      { id: 'automation', title: '4. 業務自動化ツール', path: '/docs/02_応用/04_業務自動化ツール.md' },
      { id: 'business-problem', title: '5. ビジネス課題解決', path: '/docs/02_応用/05_ビジネス課題解決.md' },
    ],
  },
  {
    id: 'stage3',
    title: '第3段階：発展',
    items: [
      { id: 'paic', title: '1. P-A-I-Cサイクル', path: '/docs/03_発展/01_P-A-I-Cサイクル.md' },
      { id: 'pbl', title: '2. PBLプロジェクト設計', path: '/docs/03_発展/02_PBLプロジェクト設計.md' },
      { id: 'portfolio', title: '3. ポートフォリオ作成', path: '/docs/03_発展/03_ポートフォリオ作成.md' },
      { id: 'ethics-week', title: '4. AI倫理週間', path: '/docs/03_発展/04_AI倫理週間.md' },
      { id: 'self-coaching', title: '5. セルフコーチング', path: '/docs/03_発展/05_セルフコーチング.md' },
    ],
  },
  {
    id: 'assessment',
    title: '評価・演習',
    items: [
      { id: 'evaluation', title: '評価基準', path: '/docs/assessment/評価基準.md' },
      { id: 'worksheets', title: '演習問題集', path: '/docs/worksheets/演習問題集.md' },
    ],
  },
];

export const getDocByPath = (path: string): DocItem | undefined => {
  for (const section of curriculum) {
    const item = section.items.find((item) => item.path === path);
    if (item) return item;
  }
  return undefined;
};

export const getDocById = (id: string): DocItem | undefined => {
  for (const section of curriculum) {
    const item = section.items.find((item) => item.id === id);
    if (item) return item;
  }
  return undefined;
};
