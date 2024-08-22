import { FilterProp, SortProp } from '@/lib/types';
import { ColumnFiltersState, SortingState } from '@tanstack/react-table';
import { useEffect, useState } from 'react';

const api = {
  get: async <T>(url: string) => ({ data: {} as T }),
  post: async <T>(url: string, data: string) => ({ data: {} as T }),
  put: async <T>(url: string, data: any) => ({ data: {} as T }),
  delete: async <T>(url: string) => ({ data: {} as T }),
  patch: async <T>(url: string, data: string) => ({ data: {} as T }),
  options: async <T>(url: string) => ({ data: {} as T }),
};

interface ResourcesState<T> {
  loading: boolean;
  data: T[];
  document: T | undefined;
  handleDataChange: (data: T[]) => void;
  handleDocumentDataChange: (data: T) => void;
  toggleLoader: () => void;
}

const useResources = <T extends unknown[]>(): ResourcesState<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);
  const [document, setDocument] = useState<T | undefined>(undefined);

  const handleDataChange = (data: T[]) => {
    setData(data);
  };

  const handleDocumentDataChange = (data: T) => {
    setDocument(data);
  };

  const toggleLoader = () => {
    setLoading((prev) => !prev);
  };

  return {
    loading,
    data,
    document,
    handleDocumentDataChange,
    handleDataChange,
    toggleLoader,
  };
};

export const useDBOperations = <T>(endPoint: string) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(2);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const {
    loading,
    data,
    handleDataChange,
    toggleLoader,
    document,
    handleDocumentDataChange,
    // @ts-ignore
  } = useResources<T>();

  const fetchAll = async () => {
    try {
      toggleLoader();
      const response = await api.get<T[]>(`/${endPoint}`);
      handleDataChange(response.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    } finally {
      toggleLoader();
    }
  };

  const fetchDataPaginated = async (pageNumber: number, rowsPerPage: number) => {
    try {
      toggleLoader();
      const response = await api.get<T[]>(`/${endPoint}?page=${pageNumber}&pageSize=${rowsPerPage}`);
      handleDataChange(response.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    } finally {
      toggleLoader();
    }
  };

  const rowsPerPageChange = async (rowsPerPage: number) => {
    setRowsPerPage(rowsPerPage);
    fetchDataPaginated(pageNumber, rowsPerPage);
  };

  const nextPage = async () => {
    try {
      if (pageNumber !== totalPages) {
        const nextPageNumber = pageNumber + 1;
        setPageNumber(nextPageNumber);
        console.log('pageNumber', nextPageNumber);
        await fetchDataPaginated(nextPageNumber, rowsPerPage);
      }
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    }
  };

  const prevPage = async () => {
    try {
      if (pageNumber !== 1) {
        const prevPageNumber = pageNumber - 1;
        setPageNumber(prevPageNumber);
        await fetchDataPaginated(prevPageNumber, rowsPerPage);
      }
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    }
  };

  const create = async (data: T) => {
    try {
      await api.post<T>(`/${endPoint}`, JSON.stringify(data));
      fetchAll();
    } catch (error) {
      console.error(`Error while creating ${endPoint}:`, error);
      throw error;
    }
  };

  const update = async (id: string, updatedData: Partial<T>) => {
    try {
      await api.put<T>(`/${endPoint}/${id}`, updatedData);
      fetchAll();
    } catch (error) {
      console.error('Error while updating data:', error);
      throw error;
    }
  };

  const deleteData = async (id: string) => {
    try {
      await api.delete<T>(`/${endPoint}/${id}`);
      fetchAll();
    } catch (error) {
      console.error('Error while deleting data:', error);
      throw error;
    }
  };

  const getById = async (id: string) => {
    try {
      const res = await api.get<T>(`/${endPoint}/:/${id}`);
      handleDocumentDataChange(res.data);
    } catch (error) {
      console.error(`Error while fetching ${endPoint} by ID (${id}):`, error);
      throw error;
    }
  };

  const appendFilterParams = async (paramsArray: FilterProp[]) => {
    try {
      const queryString = paramsArray
        .map((param) => {
          const paramName = encodeURIComponent(param.id);
          const values = Array.isArray(param.value)
            ? param.value.map((val) => encodeURIComponent(val)).join(',')
            : encodeURIComponent(param.value);
          return `${paramName}=${values}`;
        })
        .join('&');

      toggleLoader();
      const response = await api.get<T[]>(`/${endPoint}?${queryString}`);
      handleDataChange(response.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    } finally {
      toggleLoader();
    }
  };

  const appendSortParams = async (paramsArray: SortProp[]) => {
    try {
      const queryString = paramsArray
        .map((param) => {
          const paramName = encodeURIComponent(param.id);
          const values = encodeURIComponent(param.desc ? 'DESC' : 'ASC');
          return `${paramName}=${values}`;
        })
        .join('&');

      toggleLoader();
      const response = await api.get<T[]>(`/${endPoint}?${queryString}`);
      handleDataChange(response.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    } finally {
      toggleLoader();
    }
  };

  useEffect(() => {
    appendFilterParams(columnFilters as unknown as FilterProp[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnFilters]);

  useEffect(() => {
    console.log('sorting', appendSortParams(sorting));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sorting]);

  return {
    document,
    columnFilters,
    loading,
    data,
    sorting,
    pageNumber,
    totalPages,
    setSorting,
    rowsPerPageChange,
    setColumnFilters,
    nextPage,
    prevPage,
    fetchAll,
    fetchDataPaginated,
    create,
    update,
    deleteData,
    getById,
  };
};
