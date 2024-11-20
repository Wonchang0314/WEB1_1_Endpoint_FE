import { Quiz } from '@/types';

export const dummyQuiz: Quiz[] = [
  {
    id: 1,
    type: 'OX',
    author: 'React Expert',
    authorAvatar: 'avatarUrl',
    question: 'React의 Virtual DOM은 실제 DOM보다 항상 빠릅니까?',
    correctAnswer: 'X',
    explanation: 'Virtual DOM이 항상 빠른 것은 아닙니다.',
    likes: 120,
    comments: [
      { id: 1, author: 'User1', authorAvatar: 'commentAvatarUrl1', content: '쉬워요' },
      { id: 2, author: 'User2', authorAvatar: 'commentAvatarUrl2', content: '배워갑니다.' },
    ],
  },
  {
    id: 2,
    type: 'ABTest',
    author: 'UI Designer',
    authorAvatar: 'avatarUrl2',
    question: '어떤 버튼 디자인이 더 좋으신가요?',
    options: ['Flat Design', 'Material Design'],
    correctAnswer: null,
    explanation: '',
    likes: 80,
    comments: [],
  },
  {
    id: 3,
    type: 'MultipleChoice',
    author: 'Quiz Master',
    authorAvatar: 'avatarUrl3',
    question: 'JavaScript에서 가장 널리 사용되는 ES6 기능은 무엇입니까?',
    options: ['Arrow Functions', 'Classes', 'Modules', 'Template Literals'],
    correctAnswer: 'Arrow Functions',
    explanation: 'Arrow Functions는 간결하고 강력합니다.',
    likes: 95,
    comments: [
      {
        id: 1,
        author: 'User1',
        authorAvatar: 'commentAvatarUrl3',
        content: '어려워요.',
      },
    ],
  },
  {
    id: 4,
    type: 'OX',
    author: 'Web Dev',
    authorAvatar: 'avatarUrl4',
    question: 'CSS는 프로그래밍 언어입니까?',
    correctAnswer: 'X',
    explanation: 'CSS는 스타일링 언어로, 프로그래밍 언어로 간주되지 않습니다.',
    likes: 50,
    comments: [
      { id: 1, author: 'User3', authorAvatar: 'commentAvatarUrl4', content: '이건 쉬웠어요.' },
    ],
  },
  {
    id: 5,
    type: 'ABTest',
    author: 'Frontend Developer',
    authorAvatar: 'avatarUrl5',
    question: '모바일 네비게이션에서 더 나은 UI는 무엇인가요?',
    options: ['Bottom Navigation', 'Sidebar Navigation'],
    correctAnswer: null,
    explanation: '',
    likes: 110,
    comments: [
      {
        id: 1,
        author: 'User4',
        authorAvatar: 'commentAvatarUrl5',
        content: 'Bottom Navigation이 더 편리합니다.',
      },
    ],
  },
  {
    id: 6,
    type: 'MultipleChoice',
    author: 'JS Enthusiast',
    authorAvatar: 'avatarUrl6',
    question: '다음 중 비동기 처리를 위해 가장 널리 사용되는 JavaScript 기능은 무엇입니까?',
    options: ['Callbacks', 'Promises', 'Async/Await', 'Generators'],
    correctAnswer: 'Async/Await',
    explanation: 'Async/Await는 최신 JavaScript에서 비동기 처리를 간단하고 읽기 쉽게 만듭니다.',
    likes: 150,
    comments: [
      {
        id: 1,
        author: 'User5',
        authorAvatar: 'commentAvatarUrl6',
        content: '유용한 정보 감사합니다.',
      },
    ],
  },
];