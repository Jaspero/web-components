export default interface SearchService {
  search: (str: string) => Promise<Array<{ label?: string; value: string; selected?: boolean; disabled?: boolean }>>;
  loadMore: (str: string) => Promise<Array<{ label?: string; value: string; selected?: boolean; disabled?: boolean }>>;
  getSingle: (str: string) => Promise<{ label?: string; value: string; selected?: boolean; disabled?: boolean }>;
}
