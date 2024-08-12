export type FilterProp = { id: string; value: string | string[] };
export type SortProp = { id: string; desc: boolean };

export type Filter = {
  name: string;
  options: {
    value: string;
    label: string;
  }[];
};
