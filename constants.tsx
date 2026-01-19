
import { Category, SubCategory, Product } from './types';

export const MAIN_CATEGORIES: Category[] = [
  {
    id: 'cat-gamepasses',
    name: '🎮 GAMEPASSES',
    description: 'Frutas Permanentes e Upgrades de Jogo.',
    icon: '🎮',
    themeColor: '#0ea5e9'
  },
  {
    id: 'cat-accounts',
    name: '👤 CONTAS',
    description: 'Contas Max Level, Com Frutas e Especiais.',
    icon: '👤',
    themeColor: '#ef4444'
  },
  {
    id: 'cat-fruits-evo',
    name: '🧬 FRUTAS & EVOLUÇÕES',
    description: 'Random e Raças V4.',
    icon: '🧬',
    themeColor: '#a855f7'
  }
];

export const SUB_CATEGORIES: SubCategory[] = [
  { id: 'sub-perms', parentId: 'cat-gamepasses', name: '🍏 FRUTAS PERMANENTES', icon: '🍏', description: 'Ice, Light, Buddha, Portal e mais.' },
  { id: 'sub-gamepasses', parentId: 'cat-gamepasses', name: '🎟️ GAMEPASSES DO JOGO', icon: '🎟️', description: 'Dark Blade, 2x Money, Mastery e Slots.' },
  { id: 'sub-acc-max', parentId: 'cat-accounts', name: '🏆 CONTAS MAX LEVEL', icon: '🏆', description: 'Contas nível máximo prontas para jogar.' },
  { id: 'sub-acc-inv', parentId: 'cat-accounts', name: '📦 CONTAS COM FRUTAS NO INV', icon: '📦', description: 'Contas com frutas míticas guardadas.' },
  { id: 'sub-acc-spec', parentId: 'cat-accounts', name: '✨ CONTAS ESPECIAIS', icon: '✨', description: 'God Human, Sanguine, CDK e Combos.' },
  { id: 'sub-frt-rnd', parentId: 'cat-fruits-evo', name: '🎲 MÍTICA RANDOM', icon: '🎲', description: 'Pacotes de Frutas Míticas Aleatórias.' },
  { id: 'sub-races-v4', parentId: 'cat-fruits-evo', name: '🔱 RAÇAS V4', icon: '🔱', description: 'Evoluções V4 Normal e Sanguine.' }
];

export const PRODUCTS: Product[] = [
  { id: 'PRM-ICE', name: '🧊 ICE PERM', price: 'R$ 36,25', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-LGT', name: '💡 LIGHT PERM', price: 'R$ 53,65', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-MAG', name: '🌋 MAGMA PERM', price: 'R$ 60,90', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-QKE', name: '🌎 QUAKE PERM', price: 'R$ 71,05', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-BUD', name: '🧘 BUDDHA PERM', price: 'R$ 78,30', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-PRT', name: '🌀 PORTAL PERM', price: 'R$ 94,25', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-RUM', name: '🥊 RUMBLE PERM', price: 'R$ 100,05', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-PAI', name: '💢 PAIN PERM', price: 'R$ 104,40', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-GRV', name: '🧲 GRAVITY PERM', price: 'R$ 110,20', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-DGH', name: '🍞 DOUGH PERM', price: 'R$ 113,10', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-GAS', name: '⛽ GAS PERM', price: 'R$ 117,45', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-TIG', name: '🐅 TIGER PERM', price: 'R$ 143,55', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-YET', name: '❄️ YETI PERM', price: 'R$ 143,55', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-KIT', name: '📦 KIT PERM', price: 'R$ 188,50', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'PRM-DRG', name: '🐉 DRAGON PERM', price: 'R$ 239,25', categoryId: 'cat-gamepasses', subCategoryId: 'sub-perms' },
  { id: 'GP-DRK', name: '⚔️ DARK BLADE', price: 'R$ 59,00', categoryId: 'cat-gamepasses', subCategoryId: 'sub-gamepasses' },
  { id: 'GP-MST', name: '⚡ 2x MASTERY', price: 'R$ 22,50', categoryId: 'cat-gamepasses', subCategoryId: 'sub-gamepasses' },
  { id: 'GP-MON', name: '💰 2x MONEY', price: 'R$ 22,50', categoryId: 'cat-gamepasses', subCategoryId: 'sub-gamepasses' },
  { id: 'GP-SLT', name: '🎒 +1 SLOT', price: 'R$ 19,90', categoryId: 'cat-gamepasses', subCategoryId: 'sub-gamepasses' },
  { id: 'GP-FST', name: '🚤 BARCO RÁPIDO', price: 'R$ 18,90', categoryId: 'cat-gamepasses', subCategoryId: 'sub-gamepasses' },
  { id: 'GP-DRP', name: '🎁 2x DROP', price: 'R$ 18,90', categoryId: 'cat-gamepasses', subCategoryId: 'sub-gamepasses' },
  { id: 'MAX-GSG', name: '🎸 GOD + SG', price: 'R$ 4,50', categoryId: 'cat-accounts', subCategoryId: 'sub-acc-max' },
  { id: 'MAX-GMX', name: '🥇 GOD + MAX', price: 'R$ 2,25', categoryId: 'cat-accounts', subCategoryId: 'sub-acc-max' },
  { id: 'MAX-MLE', name: '👊 MAX + MELEE', price: 'R$ 2,00', categoryId: 'cat-accounts', subCategoryId: 'sub-acc-max' },
  { id: 'ACC-FULL', name: '🔴 GOD + CDK + SANGUINE + V4 FULL', price: 'R$ 36,00', categoryId: 'cat-accounts', subCategoryId: 'sub-acc-spec' },
  { id: 'ACC-SNG', name: '🔴 GOD + SANGUINE', price: 'R$ 14,50', categoryId: 'cat-accounts', subCategoryId: 'sub-acc-spec' },
  { id: 'INV-1M', name: '📦 1 MÍTICA INV', price: 'R$ 3,75', categoryId: 'cat-fruits-evo', subCategoryId: 'sub-frt-rnd' },
  { id: 'INV-2M', name: '📦 2 MÍTICAS INV', price: 'R$ 7,50', categoryId: 'cat-fruits-evo', subCategoryId: 'sub-frt-rnd' },
  { id: 'INV-3M', name: '📦 3 MÍTICAS INV', price: 'R$ 9,00', categoryId: 'cat-fruits-evo', subCategoryId: 'sub-frt-rnd' },
  { id: 'V4-NORM', name: '🔱 V4 NORMAL', price: 'R$ 13,00', categoryId: 'cat-fruits-evo', subCategoryId: 'sub-races-v4' },
  { id: 'V4-SANG', name: '🔱 V4 SANGUINE', price: 'R$ 27,00', categoryId: 'cat-fruits-evo', subCategoryId: 'sub-races-v4' }
];
