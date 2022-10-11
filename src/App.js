import logo from './logo.svg';
import './App.css';
import { useFetch } from './useFetch';
import Follower from './Follower';
import { useEffect, useState } from 'react';

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  const handlePage = (index) => {
    setPage(index);
  };
  const nextPage = () => {
    setPage((pre) => {
      if (data.length <= pre + 1) return 0;
      return pre + 1;
    });
  };
  const prevPage = () => {
    setPage((pre) => {
      if (pre === 0) return data.length - 1;
      return pre - 1;
    });
  };
  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {/* {data.map((item)=> return <FOll )} */}
          {followers.map((item) => {
            return <Follower key={item.id} {...item} />;
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPage}>
              Prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  key={index}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button onClick={nextPage} className='next-btn'>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
