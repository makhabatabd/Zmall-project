// import axios from "axios"

export async function fetchData() {
  const response = await fetch(
    'http://188.225.83.42:8001/api/v1/advertisement/list/',
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

export const BASE_URL = 'http://188.225.83.42:8001/api/v1/';
