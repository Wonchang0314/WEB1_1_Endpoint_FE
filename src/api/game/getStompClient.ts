import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import { getStorageItem } from '@/utils/storage';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const SOCKET_URL = `${BACKEND_URL}/ws`;

let stompClient: Client | null = null;

export const getStompClient = () => {
  if (!stompClient) {
    const token = getStorageItem('accessToken');

    stompClient = new Client({
      webSocketFactory: () => new SockJS(SOCKET_URL),
      connectHeaders: {
        Authorization: `Bearer ${token}`,
      },
      //debug: (str) => console.log(`STOMP: ${str}`), // 디버그 메시지
      onConnect: () => {
        console.log('STOMP 연결 성공');
      },
      onDisconnect: () => {
        console.log('STOMP 연결 종료');
      },
      onStompError: (frame) => {
        console.error('STOMP 오류:', frame);
      },
    });
  }
  return stompClient;
};
