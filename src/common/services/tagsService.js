import ApiService from "./apiService";

export const TagsService = {
  get() {
    return ApiService.get("tags");
  }
};
