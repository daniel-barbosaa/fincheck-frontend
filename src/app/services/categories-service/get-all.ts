import type { CategoriesType } from "../../types/categorie";
import { api } from "../api";

type CategoriesResponse = Array<CategoriesType>;

export async function getAll() {
  const { data } = await api.get<CategoriesResponse>("/categories");
  return data;
}
