import { API_URL } from '../utils/constants';

export async function getReviews() {
  try {
    const res = await fetch(`${API_URL}reviews`);
    if (!res.ok) throw Error('couldnt fetch customer reviews, please refresh.');

    const data = await res.json();
    return data;
  } catch {
    throw Error('couldnt fetch customer reviews, please refresh.');
  }
}

export async function createReview(newReview) {
  const res = await fetch(`${API_URL}reviews`, {
    method: 'POST',
    body: JSON.stringify(newReview),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  return data;
}
