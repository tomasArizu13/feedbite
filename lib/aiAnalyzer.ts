import { mockReviews } from "./mock-reviews";

type Sentiment = "positivo" | "negativo" | "neutral";

export type ReviewAnalysis = {
  user: string;
  rating: number;
  comment: string;
  sentiment: Sentiment;
  keywords: string[];
};

export function analyzeReviews(): ReviewAnalysis[] {
  return mockReviews.map((review) => {
    const lower = review.comment.toLowerCase();

    let sentiment: Sentiment = "neutral";
    if (review.rating >= 4 || lower.includes("excelente") || lower.includes("increíble")) {
      sentiment = "positivo";
    } else if (review.rating <= 2 || lower.includes("mala") || lower.includes("esperamos") || lower.includes("frío")) {
      sentiment = "negativo";
    }

    const keywords: string[] = [];
    if (lower.includes("hamburguesa")) keywords.push("hamburguesa");
    if (lower.includes("atención")) keywords.push("atención");
    if (lower.includes("precio")) keywords.push("precio");
    if (lower.includes("música")) keywords.push("música");
    if (lower.includes("lugar")) keywords.push("ambiente");

    return {
      ...review,
      sentiment,
      keywords,
    };
  });
}
