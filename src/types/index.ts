import { z } from "zod";
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema";
import {SearchFilterSchema} from "../utils/recipes-schema"


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearchFilters = z.infer<typeof SearchFilterSchema>