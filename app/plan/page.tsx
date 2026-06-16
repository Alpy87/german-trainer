'use client';

import React from 'react';
import Link from 'next/link';

const PHASES = [
  {
    phase: 1,
    title: 'Foundation',
    duration: 'Week 1–2',
    emoji: '🌱',
    description: 'Build your base. Learn essential words, basic greetings, and how German sentences work.',
    steps: [
      {
        mode: 'vocabulary',
        modeEmoji: '🎧',
        action: 'Start with Vocabulary Builder',
        detail: 'Choose the "Greetings & Basics" theme first, then "Numbers" and "Family". Learn 5 words per session. Pay attention to der/die/das!',
      },
      {
        mode: 'grammar',
        modeEmoji: '📖',
        action: 'Begin Grammar Coach',
        detail: 'Learn pronouns (ich, du, er/sie/es) and the verbs "sein" (to be) and "haben" (to have). These are essential.',
      },
      {
        mode: 'conversation',
        modeEmoji: '🗣️',
        action: 'Try a simple conversation',
        detail: 'Introduce yourself, say your name, ask simple questions. Don\'t worry about mistakes — the AI will gently correct you.',
      },
    ],
    goals: [
      'Know 25+ basic words with their articles',
      'Conjugate sein & haben',
      'Introduce yourself in German',
      'Count from 1-10',
    ],
  },
  {
    phase: 2,
    title: 'Building Blocks',
    duration: 'Week 3–4',
    emoji: '🧱',
    description: 'Start forming sentences. Learn regular verbs, food vocabulary, and practice ordering at a café.',
    steps: [
      {
        mode: 'vocabulary',
        modeEmoji: '🎧',
        action: 'Expand your word bank',
        detail: 'Learn "Food & Drinks" and "Colors" themes. The spaced repetition quizzes will keep your old words fresh.',
      },
      {
        mode: 'grammar',
        modeEmoji: '📖',
        action: 'Learn basic sentence structure',
        detail: 'Study regular verb conjugation and the V2 rule (verb is always the 2nd idea in a sentence).',
      },
      {
        mode: 'scenarios',
        modeEmoji: '🌍',
        action: 'Practice at the Café',
        detail: 'Try the café scenario — order coffee and cake. The AI will play the waiter and help you practice.',
      },
    ],
    goals: [
      'Know 50+ words',
      'Form simple sentences with correct V2 word order',
      'Conjugate regular verbs (machen, gehen, trinken)',
      'Order food and drinks in German',
    ],
  },
  {
    phase: 3,
    title: 'Real Conversations',
    duration: 'Week 5–6',
    emoji: '💬',
    description: 'Put it all together. Have longer conversations, try more scenarios, and start writing.',
    steps: [
      {
        mode: 'conversation',
        modeEmoji: '🗣️',
        action: 'Have real conversations',
        detail: 'Talk about your day, your hobbies, your family. Try to use new vocabulary naturally. The AI will keep the conversation going.',
      },
      {
        mode: 'grammar',
        modeEmoji: '📖',
        action: 'Learn "Sie" vs "du"',
        detail: 'Learn the difference between formal and informal German. Also practice basic negation with "nicht" and "kein".',
      },
      {
        mode: 'scenarios',
        modeEmoji: '🌍',
        action: 'Try new scenarios',
        detail: 'Practice taking a taxi ride, meeting a neighbor, or making a phone call. Each scenario builds practical skills.',
      },
      {
        mode: 'writing',
        modeEmoji: '✍️',
        action: 'Start writing practice',
        detail: 'Write short text messages and simple emails. The Writing Tutor will score and improve your writing.',
      },
    ],
    goals: [
      'Know 80+ words',
      'Hold a 5-minute conversation',
      'Write a short message in German',
      'Know when to use formal "Sie"',
    ],
  },
  {
    phase: 4,
    title: 'Growing Confidence',
    duration: 'Week 7–8',
    emoji: '🚀',
    description: 'Refine your skills. Focus on natural flow, expand vocabulary, and tackle all scenarios.',
    steps: [
      {
        mode: 'vocabulary',
        modeEmoji: '🎧',
        action: 'Master stubborn words',
        detail: 'The Vocabulary Builder tracks words you struggle with. Focus on these "stubborn words" — the mini-stories will help them stick.',
      },
      {
        mode: 'conversation',
        modeEmoji: '🗣️',
        action: 'Speak more naturally',
        detail: 'Try longer conversations. Pay attention to the corrections — aim for fewer mistakes each session.',
      },
      {
        mode: 'writing',
        modeEmoji: '✍️',
        action: 'Write journal entries',
        detail: 'Write about your day in German. Practice proper noun capitalization and sentence structure.',
      },
      {
        mode: 'scenarios',
        modeEmoji: '🌍',
        action: 'Complete all scenarios',
        detail: 'Try every scenario available. Review the performance feedback and practice the suggested phrases.',
      },
    ],
    goals: [
      'Know 100+ words with articles',
      'Score 3+/5 on all writing axes',
      'Complete all scenarios successfully',
      'Feel confident in basic German!',
    ],
  },
];

const DAILY_ROUTINE = [
  { time: '5 min', activity: 'Vocabulary Review', emoji: '🎧', description: 'Quick quiz on previous words' },
  { time: '10 min', activity: 'New Lesson', emoji: '📖', description: 'Grammar topic or new vocabulary' },
  { time: '10 min', activity: 'Practice', emoji: '🗣️', description: 'Conversation or scenario roleplay' },
  { time: '5 min', activity: 'Write', emoji: '✍️', description: 'Short writing exercise (every other day)' },
];

export default function PlanPage() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-left">
          <Link href="/" className="header-back" aria-label="Back to home">
            ←
          </Link>
          <div className="header-title-group">
            <span className="header-emoji">📋</span>
            <h1 className="header-title">Learning Plan</h1>
          </div>
        </div>
      </header>

      <div className="plan-container">
        {/* Intro */}
        <section className="plan-intro animate-fade-in">
          <h2 className="plan-intro-title">
            Your path to conversational German
          </h2>
          <p className="plan-intro-text">
            This 8-week plan takes you from zero to basic conversational German.
            Each phase builds on the last. Follow the recommended order, but feel
            free to revisit any mode anytime.
          </p>
        </section>

        {/* Daily Routine */}
        <section className="plan-section animate-slide-up">
          <h2 className="plan-section-title">
            <span className="plan-section-emoji">⏰</span>
            Suggested Daily Routine (30 min)
          </h2>
          <div className="daily-routine">
            {DAILY_ROUTINE.map((item, i) => (
              <div key={i} className="routine-item">
                <div className="routine-time">{item.time}</div>
                <div className="routine-content">
                  <div className="routine-activity">
                    <span className="routine-emoji">{item.emoji}</span>
                    {item.activity}
                  </div>
                  <p className="routine-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Phases */}
        {PHASES.map((phase, phaseIndex) => (
          <section
            key={phase.phase}
            className="plan-phase animate-slide-up"
            style={{ animationDelay: `${phaseIndex * 0.1}s` }}
          >
            <div className="phase-header">
              <div className="phase-badge">Phase {phase.phase}</div>
              <div className="phase-meta">
                <span className="phase-emoji">{phase.emoji}</span>
                <div>
                  <h2 className="phase-title">{phase.title}</h2>
                  <span className="phase-duration">{phase.duration}</span>
                </div>
              </div>
              <p className="phase-description">{phase.description}</p>
            </div>

            <div className="phase-steps">
              {phase.steps.map((step, stepIndex) => (
                <Link
                  key={stepIndex}
                  href={`/modes/${step.mode}`}
                  className="phase-step"
                >
                  <div className="step-number">{stepIndex + 1}</div>
                  <div className="step-content">
                    <div className="step-action">
                      <span className="step-mode-emoji">{step.modeEmoji}</span>
                      {step.action}
                    </div>
                    <p className="step-detail">{step.detail}</p>
                  </div>
                  <div className="step-arrow">→</div>
                </Link>
              ))}
            </div>

            <div className="phase-goals">
              <h3 className="phase-goals-title">🎯 Phase Goals</h3>
              <ul className="phase-goals-list">
                {phase.goals.map((goal, i) => (
                  <li key={i} className="phase-goal">{goal}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        {/* Tips */}
        <section className="plan-tips animate-slide-up">
          <h2 className="plan-section-title">
            <span className="plan-section-emoji">💡</span>
            Tips for Success
          </h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-emoji">🔄</div>
              <h3>Be Consistent</h3>
              <p>15 minutes daily beats 2 hours once a week. Build a habit.</p>
            </div>
            <div className="tip-card">
              <div className="tip-emoji">🤗</div>
              <h3>Embrace Mistakes</h3>
              <p>Every correction is a lesson. The AI is patient — take risks!</p>
            </div>
            <div className="tip-card">
              <div className="tip-emoji">🗣️</div>
              <h3>Speak Out Loud</h3>
              <p>Read the German text aloud. Pronunciation matters early on.</p>
            </div>
            <div className="tip-card">
              <div className="tip-emoji">📝</div>
              <h3>Keep Notes</h3>
              <p>Write down new words (with their articles!) and phrases. Review them before each session.</p>
            </div>
          </div>
        </section>

        <div className="plan-cta animate-fade-in">
          <Link href="/modes/vocabulary" className="btn btn-primary btn-lg">
            🎧 Start Phase 1 → Vocabulary Builder
          </Link>
        </div>
      </div>
    </div>
  );
}
