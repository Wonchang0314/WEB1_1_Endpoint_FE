# 🧑‍💻 숏폼 CS 퀴즈 플랫폼 서비스 (프로그래머스 데브코스 최종 프로젝트)

</div>

<div align=center>

![TEAM 4 END - POINT](https://github.com/user-attachments/assets/0262f3d9-ab9e-44ec-8a86-5c7dd703a66f)

</div>

## 📌 프로젝트 소개  
**Quizy**는 프로그래머스 데브코스 1회차에서 **우수상**을 받은 프로젝트로,  
취업 준비생과 저연차 개발자들이 보다 **편리하고 일상적으로 CS 지식**을 학습할 수 있도록 개발된 숏폼 CS 퀴즈 플랫폼 서비스입니다.  
주요 기능은 다음과 같습니다:

- **퀴즈 피드**: 모바일 뷰에 적합한 **스와이프** 형식으로 간편하게 퀴즈를 풀고, 댓글을 통해 사용자 간 토론을 진행할 수 있습니다.
- **퀴즈 검색**: 키워드와 인기 태그를 활용해 원하는 퀴즈를 쉽게 검색할 수 있습니다.
- **멀티 퀴즈 게임**: 관심 있는 CS 카테고리의 퀴즈 게임을 실시간으로 지인 및 다른 사용자들과 진행할 수 있습니다.
- **마이페이지**: 프로필 조회 및 수정, 그리고 퀴즈 생성 및 편집이 가능합니다.

---

## 🚀 배포 및 리소스 
- **배포 링크**: [Quizy](https://quizy-fe.vercel.app/)  
  (현재 비용 문제로 서버가 잠시 내려가 있습니다)
  
- **팀 프로젝트 Notion**: [Notion](https://snapdragon-canary-315.notion.site/Team04-EndPoint-1584af60efb7809e99fedaa490f2cbc9?pvs=4) 

- **프로젝트 소개 영상**: [Youtube](https://www.youtube.com/watch?v=K8iRQxYGXew)

- **GitHub**: [Repository](https://github.com/prgrms-web-devcourse-final-project/WEB1_1_Endpoint_FE)

---

## 🛠 기술 스택  
| 분류        | 기술  |
|------------|--------------------------|
| **개발 언어**  | TypeScript |
| **프레임워크** | React |
| **라이브러리** | shadcn/ui, Sock.js, Stomp.js, EventSource Polyfill |
| **스타일링** | Tailwind CSS |
| **상태관리** | React-Query, Zustand |
| **배포 및 인프라** | Vercel |
| **버전 관리** | Git, GitHub, GitHub Action |

---

## ✨ 주요 기능  
- 📲 **퀴즈 피드**: 간편한 스와이프 형식의 퀴즈 풀기  
- 🔍 **퀴즈 검색**: 키워드와 인기 태그로 퀴즈 검색  
- 🎮 **멀티 퀴즈 게임**: 실시간으로 퀴즈 게임을 즐기기  
- 📝 **마이페이지**: 퀴즈 생성, 프로필 수정 및 관리  

---

## 👨‍💻 팀 구성 및 역할  
| 역할 | 인원 | 담당 업무 |
|------|------|-------------------------|
| **백엔드 개발자** | 4명 | 서버 및 API 개발 |
| **프론트엔드 개발자** | 4명 | 클라이언트 개발 및 UI 구현 |
| **기획 및 작업 관리** | 1명 | 프로젝트 기획, 팀 관리, 스프린트 설정 |

**담당 업무**
  - **사설 게임 페이지 개발**: Spring Gateway의 토큰 처리 방식에 맞춰 **Sock + Stomp.js**로 인증 기반 서비스를 구현  
  - **랜덤 매칭 페이지 개발**: **Server-Sent Events**로 랜덤 퀴즈 매칭을 구현하고, **EventSource Polyfill**로 헤더 설정 문제 해결  
  - **인증 로직 + 개발환경 셋업**: 인증 관련 API 연동 및 **axiosInstance**로 통일된 요청 구조와 자동 인증/토큰 재발급 처리로 작업 효율성 개선  
  - **레이아웃 컴포넌트 개발**: 인증여부에 따라 라우터를 관리하는 **ProtectedLayout** 개발

---

## 🛠 문제 해결 경험  
### ✅ SEO 최적화  
- 사용자 수가 중요한 서비스인 만큼 **초기 유입**을 위해 SEO 최적화를 진행했습니다.  
- 이를 위해 `robots.txt`와 `sitemap.xml` 파일을 생성하고, 제공하는 **Vercel 서버리스 함수**를 구현했습니다.  
- 또한, **React-helmet**을 사용하여 페이지마다 동적으로 **메타태그**를 삽입하여 페이지별로 메타 설명을 제공하고자 했습니다.  
- **결과**: Lighthouse 성능 점수를 **80점 → 100점**으로 개선할 수 있었습니다.


---

## 🔍 회고  
### 🌟 좋았던 점  
- **웹소캣 (Sock + Stomp.js)**을 활용해 처음으로 실시간 서비스를 구현하며,  
  **백엔드**와 비즈니스 로직에 대해 더 많이 소통할 수 있었던 점이 유익했습니다.

### 😢 아쉬웠던 점  
- **팀장**으로서 프로젝트를 진행하며 **기획과 개발 인원 관리**가 **개발보다 더 어려운 점**을 느꼈습니다.  
