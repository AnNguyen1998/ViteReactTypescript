import axios from "axios";
import { useCallback } from "react";

const apiRoot = axios.create({
  baseURL: "/api",
});

type ScheduleTableOptions = { name: string; id: number };
type TableUserOptions = { id: number; name: string; table_id: number };
type TableStatusOptions = {
  id: number;
  label: string;
  des: string | null;
  table_id: number;
};
type TableTaskOptions = {
  id: number;
  label: string;
  des: string | null;
  userID: number;
  statusID: number;
}

const useTasks = () => {
  const hello = useCallback(() => {
    return apiRoot
      .get<{ data: null; msg: string }>("/")
      .then(({ data }) => data);
  }, []);

  // tables
  const getTables = useCallback(() => {
    return apiRoot
      .get<{ data: Array<ScheduleTableOptions> }>("/table")
      .then(({ data }) => data);
  }, []);

  const createTable = useCallback((props: { name: string }) => {
    return apiRoot
      .post<{ data: Array<ScheduleTableOptions> }>("/table", props)
      .then(({ data }) => data);
  }, []);

  const delTable = useCallback((params: { id: number }) => {
    return apiRoot
      .delete<{ data: Array<ScheduleTableOptions> }>("/table", { params })
      .then(({ data }) => data);
  }, []);

  // Table users
  const getTableUsers = useCallback((params: { tableID: number }) => {
    return apiRoot
      .get<{ data: Array<TableUserOptions> }>("/table/user", { params })
      .then(({ data }) => data);
  }, []);

  const createTableUser = useCallback(
    (props: { tableID: number; name: string }) => {
      return apiRoot
        .post<{ data: Array<TableUserOptions> }>("/table/user", props)
        .then(({ data }) => data);
    },
    []
  );

  const delTableUser = useCallback((params: { id: number }) => {
    return apiRoot
      .delete<{ data: Array<TableUserOptions> }>("/table/user", { params })
      .then(({ data }) => data);
  }, []);

  // Table status
  const getTableStatus = useCallback((params: { tableID: number }) => {
    return apiRoot
      .get<{ data: Array<TableStatusOptions> }>("/table/status", { params })
      .then(({ data }) => data);
  }, []);

  const createTableStatus = useCallback(
    (props: {
      label: string;
      des?: string;
      tableID: number;
    }) => {
      return apiRoot
        .post<{ data: Array<TableStatusOptions> }>("/table/status", props)
        .then(({ data }) => data);
    },
    []
  );

  const delTableStatus = useCallback((params: { id: number }) => {
    return apiRoot
      .delete<{ data: Array<TableStatusOptions> }>("/table/status", { params })
      .then(({ data }) => data);
  }, []);


   // Table tasks
   const getTableTask = useCallback((params: { tableID: number }) => {
    return apiRoot
      .get<{ data: Array<TableTaskOptions> }>("/table/task", { params })
      .then(({ data }) => data);
  }, []);

  const createTableTask = useCallback(
    (props: {
      userID: number;
      statusID: number;
      label: string;
    }) => {
      return apiRoot
        .post<{ data: Array<TableTaskOptions> }>("/table/task", props)
        .then(({ data }) => data);
    },
    []
  );

  const delTableTask = useCallback((params: { id: number }) => {
    return apiRoot
      .delete<{ data: Array<TableTaskOptions> }>("/table/task", { params })
      .then(({ data }) => data);
  }, []);

  const updateTableTask = useCallback((props: {
    id: number,
    userID?: number;
    statusID?: number;
    label?: string;
  }) => {
    return apiRoot
      .put<{ data: Array<TableTaskOptions> }>("/table/task", props)
      .then(({ data }) => data);
  }, []);

  return {
    hello,
    getTables,
    createTable,
    delTable,
    getTableUsers,
    createTableUser,
    delTableUser,
    getTableStatus,
    createTableStatus,
    delTableStatus,
    getTableTask,
    createTableTask,
    delTableTask,
    updateTableTask
  };
};

export default useTasks;
export type { ScheduleTableOptions, TableUserOptions, TableStatusOptions, TableTaskOptions };
