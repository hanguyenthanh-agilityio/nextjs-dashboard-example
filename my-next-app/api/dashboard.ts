const BASE_URL = "https://67f7327342d6c71cca645169.mockapi.io";

export const getDashboard = async () => {
  try {
    const res = await fetch(`${BASE_URL}/dashboard`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch dashboard:", error);
    return [];
  }
};
