const BASE_URL = "https://67f887c42466325443eceaa9.mockapi.io";

export const getPlanningData = async (
  query: string,
  page: number,
  limit = 4
) => {
  try {
    const params = new URLSearchParams();
    if (query) params.append("search", query);
    params.append("page", String(page));
    params.append("limit", String(limit));

    const res = await fetch(`${BASE_URL}/planning?${params.toString()}`, {
      cache: "no-store",
    });

    const totalCount = Number(res.headers.get("X-Total-Count")) || 0;
    const data = await res.json();

    return {
      data,
      totalCount,
    };
  } catch (err) {
    console.error("Error fetching planning data", err);
    return {
      data: [],
      totalCount: 0,
    };
  }
};
