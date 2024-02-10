class _FilterCacheService {
  constructor() {
    this.key = "kanbanFilter";
  }

  getFilters() {
    const data = localStorage.getItem(this.key);
    if (!data) {
      return "";
    }
    return JSON.parse(data);
  }

  setFilters(filters) {
    localStorage.setItem(this.key, JSON.stringify(filters));
  }
}

const FilterCacheService = new _FilterCacheService();
export default FilterCacheService;
