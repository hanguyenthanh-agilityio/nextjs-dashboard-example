const BASE_URL = "https://67f887c42466325443eceaa9.mockapi.io";

export const getPlanningData = async (query: string, page: number) => {
  try {
    const res = await fetch(`${BASE_URL}/planning`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (err) {
    console.error("Error fetching planning data", err);
    return [];
  }
};
