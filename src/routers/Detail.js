import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();

  useEffect(() => {
    //async await
    const fetchData = async () => {
      let response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      let json = await response.json();

      console.log(json);
    }

    fetchData();
  }, []);

  return (
    <h1>Detail</h1>
  );
}

export default Detail;