import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinkAPIResponse, DrinksAPIResponse } from "../utils/recipes-schema";
import {SearchFilterSchema} from "../utils/recipes-schema"


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearchFilters = z.infer<typeof SearchFilterSchema>

export type Drinks = z.infer<typeof DrinksAPIResponse>

export type Drink = z.infer<typeof DrinkAPIResponse>