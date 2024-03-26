import { useEffect, useState } from 'react';
import api from '../axiosInterceptor';

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

  // toggleLoader
  // reverseValue
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

export const useDBOperations = <T,>(endPoint: string) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const {
    loading,
    data,
    handleDataChange,
    toggleLoader,
    document,
    handleDocumentDataChange,
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

  const fetchDataPaginated = async (page: number = 1) => {
    try {
      toggleLoader();
      const response = await api.get<T[]>(`/${endPoint}?page=${page}`);
      handleDataChange(response.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    } finally {
      toggleLoader();
    }
  };

  const nextPage = async () => {
    try {
      toggleLoader();
      const response = await api.get<T[]>(`/${endPoint}?page=${pageNumber}`);
      setPageNumber((prev) => prev + 1);
      handleDataChange(response.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    } finally {
      toggleLoader();
    }
  };

  const prevPage = async () => {
    try {
      toggleLoader();
      const response = await api.get<T[]>(`/${endPoint}?page=${pageNumber}`);
      if (pageNumber !== 1) setPageNumber((prev) => prev - 1);
      handleDataChange(response.data);
    } catch (error) {
      console.error('Error while fetching data:', error);
      throw error;
    } finally {
      toggleLoader();
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

  return {
    document,
    loading,
    data,
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
