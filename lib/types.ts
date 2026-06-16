export type TrainingMode = 
  | 'conversation'
  | 'grammar'
  | 'vocabulary'
  | 'scenarios'
  | 'writing';

export interface ModeConfig {
  id: TrainingMode;
  title: string;
  emoji: string;
  description: string;
  shortDescription: string;
  accentColor: string;
  welcomeMessage: string;
}

export const MODES: Record<TrainingMode, ModeConfig> = {
  conversation: {
    id: 'conversation',
    title: 'Conversation Partner',
    emoji: '🗣️',
    description: 'Practice speaking German in immersive conversations. Get corrections, learn vocabulary in context, and build confidence.',
    shortDescription: 'Immersive German conversations with real-time corrections',
    accentColor: 'var(--accent-gold)',
    welcomeMessage: 'Hallo! 👋 I\'m your German conversation partner. I\'ll speak to you in German using simple vocabulary. After each response, I\'ll correct any mistakes, provide the corrected version, and ask you a follow-up question. **Lass uns anfangen!** (Let\'s begin!) Wie heißt du? (**What is your name?**)',
  },
  grammar: {
    id: 'grammar',
    title: 'Grammar Coach',
    emoji: '📖',
    description: 'Master German grammar step by step. Learn rules, practice with exercises, and get detailed explanations.',
    shortDescription: 'Structured grammar lessons with interactive exercises',
    accentColor: 'var(--accent-blue)',
    welcomeMessage: 'Welcome to German Grammar Coach! 📖\n\nI\'ll teach you grammar one topic at a time with clear explanations and exercises. We\'ll start with the absolute basics.\n\n**Let\'s begin with Topic 1: Personal Pronouns (Personalpronomen)**\n\nReady? Just say "Let\'s go!" and I\'ll present the first lesson.',
  },
  vocabulary: {
    id: 'vocabulary',
    title: 'Vocabulary Builder',
    emoji: '🎧',
    description: 'Build your German word bank with spaced repetition. Learn 5 words per session with context and quizzes.',
    shortDescription: 'Spaced repetition vocabulary training with quizzes',
    accentColor: 'var(--accent-teal)',
    welcomeMessage: 'Welcome to Vocabulary Builder! 🎧\n\nEach session, I\'ll teach you **5 new words** (including their articles!) with pronunciation, examples, and quizzes. I use spaced repetition to help you remember.\n\nChoose a theme to start, or I\'ll suggest one:\n\n1. 🏠 **Zuhause** — Home & Family\n2. 🍽️ **Essen & Trinken** — Food & Drinks\n3. 👋 **Begrüßungen** — Greetings & Basics\n4. 🔢 **Zahlen** — Numbers & Counting\n5. 🎨 **Farben** — Colors\n\nWhich theme would you like?',
  },
  scenarios: {
    id: 'scenarios',
    title: 'Scenario Simulator',
    emoji: '🌍',
    description: 'Practice real-life German situations through roleplay. Order at a café, take a taxi, and more!',
    shortDescription: 'Real-life roleplay scenarios with performance reviews',
    accentColor: 'var(--accent-coral)',
    welcomeMessage: 'Welcome to the Real-World Scenario Simulator! 🌍\n\nI\'ll set up realistic German situations and play all the characters. You\'ll practice practical communication!\n\nChoose a scenario to practice:\n\n1. ☕ **Café** — Order coffee and cake\n2. 🚕 **Taxi** — Give directions to a driver\n3. 🥖 **Bäckerei** — Buy fresh bread at a bakery\n4. 👋 **Nachbarn treffen** — Introduce yourself to a neighbor\n5. 📱 **Telefonanruf** — Simple phone conversation\n\nWhich scenario would you like to try?',
  },
  writing: {
    id: 'writing',
    title: 'Writing Tutor',
    emoji: '✍️',
    description: 'Improve your German writing with detailed feedback on grammar, vocabulary, flow, and style.',
    shortDescription: 'Writing practice with 4-axis scoring and native rewrites',
    accentColor: 'var(--accent-purple)',
    welcomeMessage: 'Welcome to the German Writing Tutor! ✍️\n\nI\'ll review your German writing on 4 axes:\n- 📝 **Grammar & Articles** (1-5)\n- 📚 **Vocabulary Range** (1-5)\n- 🌊 **Natural Flow** (1-5)\n- 🎨 **Style/Register (Sie vs du)** (1-5)\n\nLet\'s start with your first writing exercise! Here\'s your prompt:\n\n**Write a short message (2-3 sentences) introducing yourself in German.**\n\nExample starter: "Hallo! Ich heiße..."',
  },
};
