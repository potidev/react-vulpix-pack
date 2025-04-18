import { useEffect, useState } from "react"
import { TableLimitStorage } from "@potidev/utils-vulpix-pack";

export type UseTableLimitStorageParams = {
  tableId?: string;
  notFoundValue?: number;
  requestOnUseEffect?: boolean;
}

export const useTableLimitStorage = ({ tableId, notFoundValue, requestOnUseEffect = false }: UseTableLimitStorageParams) => {
  const [storageLimit, setStorageLimit] = useState<number>();

  useEffect(() => {
    if(requestOnUseEffect === true) {
      requestStorageLimit();
    }
  }, [])

  const requestStorageLimit = () => {
    try {
      const limit = TableLimitStorage.read(tableId);
      setStorageLimit(limit === undefined ? notFoundValue : limit);
    } catch(error) {
      console.log(error);
      return notFoundValue;
    }
  }
  
  return { storageLimit, requestStorageLimit };
}