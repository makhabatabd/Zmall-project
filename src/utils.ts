import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const getStorageData = (keyName: string, defaultValue: object) => {
  if (typeof window !== 'undefined') {
    const savedItem = localStorage.getItem(keyName)
    console.log(savedItem,'dddd');
    
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || defaultValue;
  }
};

export const useLocalStorage = (keyName: string, initialValue: object) => {
  const [value, setValue] = useState(() => {
    return getStorageData(keyName, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [keyName, value]);
 
return [value, setValue];
}


 const useRouterPath = () => {
  const router = useRouter()
  const route = router.asPath

  return route
}

 const toPascalCase = (string: string) => {
  return string.replace(/\w+/g, function (w){    
    return w[0].toUpperCase() + w.slice(1).toLowerCase()
  })
}

export const useBreadcrumbPath = () => {
  const route = useRouterPath()
  const removeQuestionMark = route.replace(/\?/g, '/')
  const removeEquals = removeQuestionMark.replace(/\=/g,'/')
  const pathToPascalCase = toPascalCase(removeEquals)

  
  return pathToPascalCase.slice(1, pathToPascalCase.length).split('/')
}

