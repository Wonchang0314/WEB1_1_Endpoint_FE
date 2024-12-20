import axiosInstance from '@/api/axiosInstance';
import { useMutation } from '@tanstack/react-query';

async function deleteQuiz(id: number): Promise<void> {
  const response = await axiosInstance.delete(`/quiz/${id}`);
  return response.data;
}

function useDeleteQuiz(options?: {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  onSettled?: (data: any, error: any) => void;
}) {
  return useMutation({
    mutationKey: ['deleteQuiz'],
    mutationFn: deleteQuiz,
    ...options,
  });
}

export default useDeleteQuiz;
