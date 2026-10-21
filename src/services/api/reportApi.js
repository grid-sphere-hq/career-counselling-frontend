
import { apiClient } from './apiClient';

export const reportApi = {
  // Fetch the logged-in user's latest report
  getMyReport: async () => {
    const response = await apiClient.get('/api/v1/reports/me');
    return response;
  },

  // Generate a report for a user
  generateReport: async (userId) => {
    const response = await apiClient.post('/api/v1/reports/generate', {
      user_id: userId,
    });
    return response;
  },
};

export const assessmentApi = {
  // Fetch questions for a specific module
  getQuestions: async (module) => {
    return await apiClient.get(
      `/api/v1/psychometrics/${module}/questions?limit=15`
    );
  },

  // Submit the 1–5 scores
  submitScore: async (module, userId, answers) => {
    return await apiClient.post(
      `/api/v1/psychometrics/${module}/score`,
      {
        user_id: userId,
        answers,
      }
    );
  },
};
