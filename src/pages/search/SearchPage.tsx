import { QuizWrapper, TagList } from '@/components';
import SearchBar from '@/components/common/SearchBar';
import TopBar from '@/components/common/TopBar';
import { dummyQuizzes } from '@/data/dummyQuiz';
import Container from '@/components/layout/Container';
import { useState } from 'react';
import QuizSkeleton from './QuizSkeleton';
import DropDown from '@/components/common/DropDown';
import { BaseQuizAPI } from '@/types';

const SearchPage = () => {
  const tags = ['React', 'JavaScript', 'TypeScript', 'Next.js', 'CSS', 'HTML'];
  const [, setSelectedTags] = useState<string[]>([]);
  const [keyword, setKeyword] = useState('');
  const [filteredQuizzes, setFilteredQuizzes] = useState<BaseQuizAPI[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState<string>('전체 문제');
  const [sort, setSort] = useState<string>('인기순');

  const handleTagClick = (selectedTags: string[]) => {
    setSelectedTags(selectedTags);
    console.log('Selected Tags:', selectedTags);
    // TODO: 검색 필터 로직
  };

  const handleSearch = async () => {
    setLoading(true);
    const isUnansweredOnly = filterType === '안 푼 문제';

    const endpoint = isUnansweredOnly
      ? `/api/quiz/search/unanswered?keyword=${keyword}&page=0&size=10&sort=${
          sort === '인기순' ? 'TRENDING' : 'NEW'
        }`
      : `/api/quiz/search?keyword=${keyword}&page=0&size=10&sort=${
          sort === '인기순' ? 'TRENDING' : 'NEW'
        }`;

    console.log(endpoint);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    // const response = await fetch(endpoint);
    // const data = await response.json();
    // setFilteredQuizzes(data);

    // 임시 더미데이터로 검색 기능
    const filtered = dummyQuizzes.filter((quiz) =>
      quiz.content.toLowerCase().includes(keyword.toLowerCase()),
    );
    setFilteredQuizzes(filtered);

    setLoading(false);
  };

  return (
    <>
      <TopBar />
      <Container>
        <SearchBar
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onSearch={handleSearch}
        />
        <div className="flex items-center mb-4 gap-1">
          <div>
            <DropDown
              items={['전체 문제', '안 푼 문제']}
              selectedItem={filterType}
              setItem={setFilterType}
              placeholder="전체 문제"
            />
          </div>
          <div>
            <DropDown
              items={['인기순', '최신순']}
              selectedItem={sort}
              setItem={setSort}
              placeholder="인기순"
            />
          </div>
        </div>
        <TagList tags={tags} onTagClick={handleTagClick} />
        {!filteredQuizzes.length && !loading ? (
          <div className="text-center text-gray-500 mt-16">
            원하는 검색어와 필터로 퀴즈를 검색해보세요.
          </div>
        ) : loading ? (
          Array(6)
            .fill(null)
            .map((_, idx) => <QuizSkeleton key={idx} />)
        ) : (
          filteredQuizzes.map((quiz) => (
            <div key={quiz.id} className="mb-4">
              <QuizWrapper quiz={quiz} />
            </div>
          ))
        )}
      </Container>
    </>
  );
};

export default SearchPage;
