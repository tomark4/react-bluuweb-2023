import { getStrapiUrl } from "./api-helpers";
import qs from "qs";

export const fetchApi = async (
  path: string,
  urlParamsObjects: Object,
  options?: Object
) => {
  try {
    const mergedOptions = {
      next: { revalidate: 0 },
      ...options,
      headers: { "Content-Type": "application/json" },
    };

    const queryString = qs.stringify(urlParamsObjects, {
      encodeValuesOnly: true,
    });

    const resp = await fetch(
      `${getStrapiUrl(path)}${queryString ? `?${queryString}` : ""}`,
      mergedOptions
    );
    const { data, meta } = await resp.json();
    return {
      data,
      pagination: meta.pagination,
    };
  } catch (e) {
    throw new Error("Error fetching API");
  }
};
