import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '@/stores/useGameStore';
import useCreateGame, { CreateGameResponse } from '@/api/game/useCreateGame';
import TopBar from '@/components/common/TopBar';
import DropDown from '@/components/common/DropDown';
import NumberStepper from '@eolluga/eolluga-ui/Input/NumberStepper';
import Container from '@/components/layout/Container';
import FlexBox from '@/components/layout/FlexBox';
import Label from '@/components/common/Label';
import Card from '@/components/common/Card';
import { Button as ShadcnButton } from '@/shadcn/ui/button';
import { Topic } from '@/types/GameTypes';
import { useStompStore } from '@/api/game/useStompStore';

const topics: Topic[] = [
  '알고리즘',
  '프로그래밍 언어',
  '네트워크',
  '운영체제',
  '웹 개발',
  '모바일 개발',
  '데브옵스/인프라',
  '데이터베이스',
  '소프트웨어 공학',
];

type Difficulty = '하' | '중' | '상';
const difficulties: Difficulty[] = ['하', '중', '상'];

export default function CreateGame() {
  const navigate = useNavigate();
  const { mutate: createGame } = useCreateGame();
  const { updateInviteCode, updatePlayers, updateSubject, updateLevel } = useGameStore();
  const { connect, subscribeToGame } = useStompStore();

  const [topic, setTopic] = useState<Topic | string>('');
  const [difficulty, setDifficulty] = useState<Difficulty | string>('');
  const [quizCount, setQuizCount] = useState(5);

  const [isTopicSelected, setIsTopicSelected] = useState(false);
  const [isDifficultySelected, setIsDifficultySelected] = useState(false);

  const handleCount = (count: React.SetStateAction<number>) => {
    const newCount = typeof count === 'number' ? count : Number(count);
    if (newCount >= 5 && newCount <= 20) {
      setQuizCount(newCount);
    }
  };

  const createRoom = async () => {
    if (!topic) {
      setIsTopicSelected(true);
    }
    if (!difficulty) {
      setIsDifficultySelected(true);
    }
    if (topic && difficulty) {
      createGame(
        {
          subject: topic,
          level: difficulty,
          quizCount: quizCount,
        },
        {
          onSuccess: (res: CreateGameResponse) => {
            connect(); // 소캣 연결
            subscribeToGame(res.result.id); // 게임관련 메시지 구독
            updatePlayers(res.result.players);
            updateSubject(res.result.subject);
            updateLevel(res.result.level);
            updateInviteCode(res.result.inviteCode);
            navigate('/game/waiting');
          },
        },
      );
    }
  };

  return (
    <FlexBox direction="col">
      <TopBar leftIcon="left" leftText="게임 방 생성" onClickLeft={() => navigate('/game')} />
      <Container>
        <Card>
          <div className="pb-8">
            <Label content="퀴즈 주제" htmlFor="room-name" />
            <DropDown
              items={topics}
              selectedItem={topic}
              setItem={setTopic}
              placeholder="퀴즈 주제를 입력하세요"
              alert="주제를 입력해주세요"
              required={isTopicSelected && topic === ''}
            />
          </div>
          <div className="pb-8">
            <Label content="난이도" htmlFor="difficulty" />
            <DropDown
              items={difficulties}
              selectedItem={difficulty}
              setItem={setDifficulty}
              placeholder="난이도를 선택하세요"
              alert="난이도를 입력해주세요"
              required={isDifficultySelected && difficulty === ''}
            />
          </div>
          <div>
            <Label content="문제 갯수" htmlFor="quiz-count" />
            <NumberStepper
              count={quizCount}
              setCount={(count) => handleCount(count)}
              width={'long'}
              size={'M'}
              description="최소 5문제부터 최대 20문제까지 가능합니다"
            />
          </div>
        </Card>

        <ShadcnButton className="w-full h-14 text-lg" size="lg" onClick={() => createRoom()}>
          방 생성하기
        </ShadcnButton>
      </Container>
    </FlexBox>
  );
}
