import { createSerializer, parseAsInteger, parseAsString } from "nuqs";

export const searchParams = {
  page: parseAsInteger.withDefault(1),
  limit: parseAsInteger.withDefault(10),
  q: parseAsString,
  severity: parseAsString,
  categories: parseAsString,
};

export const serialize = createSerializer(searchParams);
