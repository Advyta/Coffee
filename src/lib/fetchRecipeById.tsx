import axios from "axios";
import { Coffee } from "@/lib/types";

export const fetchRecipeById = async (id: string): Promise<Coffee | null> => {
  try {
    console.log("Fetching recipe with ID:", id);
    const response = await axios.get(`http://127.0.0.1:3000/api/coffeeData?id=${id}`);

    console.log("API Response:", response.data);
    if (response.data && response.data.data.length > 0) {
      return response.data.data[0];
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch recipe by ID:", error);
    return null;
  }
};
